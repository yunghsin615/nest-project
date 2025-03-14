import { Controller, Get } from '@nestjs/common';
import { PetService } from './pet.service';

@Controller('pet')
export class PetController {
  constructor(private readonly petService: PetService) {}

  @Get('list')
  getCurrentTime() {
    return this.petService.getAllPet();
  }
}
