import { ValidateFromEntity } from 'src/base/validation/validate-from-entity.decorators';
import { Pet } from 'typeorm-model/Pet';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePetRequest {
  @ApiProperty({ example: '柴寶', description: 'pet name' })
  @ValidateFromEntity(Pet)
  name: string;

  @ApiProperty({ example: '柴犬', description: 'pet breed' })
  @ValidateFromEntity(Pet)
  breed: string;

  @ApiProperty({ example: 'M', description: 'male | female' })
  @ValidateFromEntity(Pet)
  gender: 'M' | 'F';

  @ApiProperty({ example: '棕色', description: 'pet color' })
  @ValidateFromEntity(Pet)
  color: string;

  @ApiProperty({ example: 'Medium', description: 'Small | Medium | Large' })
  @ValidateFromEntity(Pet)
  size: 'Small' | 'Medium' | 'Large';

  @ApiProperty({ example: '50', description: 'pet height(cm)' })
  @ValidateFromEntity(Pet)
  height: string;

  @ApiProperty({ example: '8', description: 'pet height(kg)' })
  @ValidateFromEntity(Pet)
  weight: string;

  @ApiProperty({ example: 'weird', description: 'pet temperament' })
  @ValidateFromEntity(Pet)
  temperament: string;

  @ApiProperty({ example: '1', description: 'is pet vaccinated' })
  @ValidateFromEntity(Pet)
  vaccinated: boolean;

  @ApiProperty({ example: '2021-03-23', description: "pet's birthday" })
  @ValidateFromEntity(Pet)
  birth_date: Date;

  @ApiProperty({ example: '2021-03-23', description: "pet's adoptedday" })
  @ValidateFromEntity(Pet)
  adopted_date: Date;

  @ApiProperty({ example: '0001', description: '' })
  @ValidateFromEntity(Pet)
  owner_id: number;
}
