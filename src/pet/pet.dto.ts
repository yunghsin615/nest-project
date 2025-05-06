import {
  IsBoolean,
  IsDate,
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
  Matches,
  Min,
} from 'class-validator';

export class CreatePetRequest {
  @IsNotEmpty({ message: '此欄位必填' })
  @IsString({ message: '必須是字串' })
  name: string;

  @IsString({ message: '必須是字串' })
  breed: string;

  @IsNotEmpty({ message: '此欄位必填' })
  @Matches(/^[MF]$/, { message: '必須是 M 或 F' })
  gender: 'M' | 'F';

  @IsString({ message: '必須是字串' })
  color: string;

  @Matches(/^(Small|Medium|Large)$/, {
    message: '必須是 Small、Medium 或 Large',
  })
  size: 'Small' | 'Medium' | 'Large';

  @IsInt({ message: '必須是數值' })
  @IsPositive({ message: '必須是大於0的數值' })
  height: string;

  @IsInt({ message: '必須是數值' })
  @IsPositive({ message: '必須是大於0的數值' })
  weight: string;

  @IsString({ message: '必須是字串' })
  temperament: string;

  @IsBoolean({ message: '必須為是或否' })
  vaccinated: boolean;

  @IsDate({ message: '必須為日期' })
  birth_date: Date;

  @IsDate({ message: '必須為日期' })
  adopted_date: Date;

  @IsInt({ message: '必須是數值' })
  owner_id: number;
}
