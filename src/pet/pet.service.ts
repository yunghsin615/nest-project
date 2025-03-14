import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class PetService {
  constructor(private readonly dataSource: DataSource) {}

  async getAllPet() {
    return this.dataSource.query('SELECT * FROM pet');
  }
}
