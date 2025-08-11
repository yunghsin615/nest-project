import {
  IsBoolean,
  IsDate,
  IsInt,
  IsOptional,
  IsNotEmpty,
  IsPositive,
  IsString,
  Matches,
} from 'class-validator';
import { ColumnOptions, getMetadataArgsStorage } from 'typeorm';

export function ValidateFromEntity(entity: Function, property?: string) {
  return function (target: any, key: string) {
    const columnName = property ?? key;
    const columns = getMetadataArgsStorage().columns.filter(
      (col) => col.target === entity && col.propertyName === columnName,
    );

    if (columns.length === 0) return;

    const options: ColumnOptions = columns[0].options;
    const decorators: PropertyDecorator[] = [];

    if (options.nullable) decorators.push(IsOptional());
    else decorators.push(IsNotEmpty());
    if (options.type === 'tinyint') decorators.push(IsBoolean());
    if (options.type === 'varchar') decorators.push(IsString());
    if (options.type === 'int' || options.type === 'decimal')
      decorators.push(IsInt());
    if (options.name === 'height' || options.name === 'weight')
      decorators.push(IsPositive());

    if (options.type === 'date') decorators.push(IsDate());
    if (options.type === 'enum') {
      // 要轉成正規式
      const columnEnum = enumToRegExp(options.enum);
      console.log('columnEnum', columnEnum);
      decorators.push(Matches(columnEnum));
    }

    Reflect.decorate(decorators, target, key);
  };

  function enumToRegExp(enumValue?: (string | number)[] | object): RegExp {
    let values: (string | number)[] = [];

    if (Array.isArray(enumValue)) {
      values = enumValue;
    } else if (typeof enumValue === 'object') {
      values = Object.values(enumValue);
    }

    // 將每個值轉成字串並 escape 特殊字元
    const escapedValues = values.map((v) =>
      String(v).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
    );

    // 產生 RegExp
    return new RegExp(`^(${escapedValues.join('|')})$`);
  }
}
