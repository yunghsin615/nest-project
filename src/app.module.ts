import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'typeorm.config';
import { PetModule } from './pet/pet.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), PetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
