import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Pet } from 'typeorm-model/Pet';
import { CreatePetRequest } from './pet.dto';

@Injectable()
export class PetService {
  constructor(
    private readonly dataSource: DataSource,
    @InjectRepository(Pet)
    private readonly petRepository: Repository<Pet>,
  ) {}

  async getAllPet() {
    return this.dataSource.query('SELECT * FROM pet');
  }

  async queryWithSQL(
    condition: any,
  ): Promise<{ data: Partial<Pet>[]; total: number }> {
    const sql = `
    SELECT id, name, breed, gender, vaccinated, adoptedDate, 
    COUNT(*) OVER() AS total 
    FROM pet
    WHERE ${condition}
    ORDER BY adoptedDate DESC, id ASC
    `;

    const result = await this.petRepository.query(sql);

    return {
      data: result,
      total: result.length > 0 ? result[0].total : 0,
    };
  }

  async queryWithQB(
    condition: any,
  ): Promise<{ data: Partial<Pet>[]; total: number }> {
    const [data, total] = await this.petRepository
      .createQueryBuilder('pet')
      .select([
        'pet.id',
        'pet.name',
        'pet.breed',
        'pet.gender',
        'pet.vaccinated',
        'pet.adoptedDate',
      ])
      .where(condition)
      .orderBy('pet.adoptedDate', 'DESC')
      .addOrderBy('pet.id', 'ASC')
      .getManyAndCount();

    return { data, total };
  }

  async querWithFind(
    condition: any,
  ): Promise<{ data: Partial<Pet>[]; total: number }> {
    const [data, total] = await Promise.all([
      this.petRepository.find({
        select: ['id', 'name', 'breed', 'gender', 'vaccinated', 'adoptedDate'],
        where: condition,
        order: { adoptedDate: 'DESC', id: 'ASC' },
      }),
      this.petRepository.count({ where: condition }),
    ]);

    return { data, total };
  }

  async find(): Promise<Pet[] | null> {
    const res = await this.petRepository.find();

    return res;
  }

  async queryById(id: number) {
    const res = await this.petRepository.findOne({ where: { id: id } });
    return res;
  }

  async create(data: CreatePetRequest): Promise<Pet> {
    const newPet = this.petRepository.create(data);
    return await this.petRepository.save(newPet);
  }

  async update(id: number, data: Partial<Pet>): Promise<Pet | null> {
    await this.petRepository.update(id, data);
    return this.queryById(id);
  }

  async remove(id: number): Promise<Pet | null> {
    await this.petRepository.delete(id);
    return this.queryById(id);
  }
}
