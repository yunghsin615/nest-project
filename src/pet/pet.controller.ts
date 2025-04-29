import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { PetService } from './pet.service';
import { Pet } from 'typeorm-model/Pet';

@Controller('pet')
export class PetController {
  constructor(private readonly petService: PetService) {}

  @Get()
  getCurrentTime() {
    return this.petService.getAllPet();
  }

  @Post('list')
  findAllPet(): Promise<Pet[] | null> {
    return this.petService.find();
  }

  @Get(':id')
  findOnePet(@Param('id') id: number) {
    return this.petService.queryById(id);
  }

  @Post('create')
  createPet(@Body() data: Partial<Pet>) {
    return this.petService.create(data);
  }

  @Post('update')
  updatePet(@Body() data: Partial<Pet>) {
    if (!data.id) {
      throw new BadRequestException('id為必填');
    }
    return this.petService.update(data.id, data);
  }

  @Post('delete')
  deletePet(@Body() data: Partial<Pet>) {
    if (!data.id) {
      throw new BadRequestException('id為必填');
    }
    return this.petService.remove(data.id);
  }
}
