import { Module } from '@nestjs/common';
import { PetService } from './pet.service';
import { PetController } from './pet.controller';

@Module({
  imports: [],
  providers: [PetService],
  controllers: [PetController],
})
export class PetModule {}
