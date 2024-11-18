/* eslint-disable @typescript-eslint/no-unused-vars */
import { EntityProperty, Platform, Type } from '@mikro-orm/core';
import Cpf from 'src/@core/commom/domain/value-objects/cnpj.vo';

export class CPFSchematype extends Type<Cpf, string> {
  convertToDatabaseValue(
    valueObject: Cpf | null | undefined,
    platform: Platform,
  ): string {
    return valueObject instanceof Cpf ? valueObject.value : '';
  }

  convertToJSValue(value: string, platform: Platform): Cpf {
    return new Cpf(value);
  }

  getColumnType(prop: EntityProperty, platform: Platform): string {
    return 'VARCHAR(11)';
  }
}
