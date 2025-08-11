import { ValidateFromEntity } from 'src/base/validation/validate-from-entity.decorators';
import { Pet } from 'typeorm-model/Pet';

export class CreatePetRequest {
  @ValidateFromEntity(Pet)
  name: string;

  @ValidateFromEntity(Pet)
  breed: string;

  @ValidateFromEntity(Pet)
  gender: 'M' | 'F';

  @ValidateFromEntity(Pet)
  color: string;

  @ValidateFromEntity(Pet)
  size: 'Small' | 'Medium' | 'Large';

  @ValidateFromEntity(Pet)
  height: string;

  @ValidateFromEntity(Pet)
  weight: string;

  @ValidateFromEntity(Pet)
  temperament: string;

  @ValidateFromEntity(Pet)
  vaccinated: boolean;

  @ValidateFromEntity(Pet)
  birth_date: Date;

  @ValidateFromEntity(Pet)
  adopted_date: Date;

  @ValidateFromEntity(Pet)
  owner_id: number;
}
