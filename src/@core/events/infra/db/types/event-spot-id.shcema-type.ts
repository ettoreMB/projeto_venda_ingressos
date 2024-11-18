/* eslint-disable @typescript-eslint/no-unused-vars */
import { EntityProperty, Platform, Type } from '@mikro-orm/core';
import { EventSpotId } from 'src/@core/events/entities/event-spot';

export class EventSpotIdSchemaType extends Type<EventSpotId, string> {
  convertToDatabaseValue(
    valueObject: EventSpotId | undefined | null,
    platform: Platform,
  ): string {
    return valueObject instanceof EventSpotId
      ? valueObject.value
      : (valueObject as string);
  }

  //não funciona para relacionamentos
  convertToJSValue(value: string, platform: Platform): EventSpotId {
    return new EventSpotId(value);
  }

  getColumnType(prop: EntityProperty, platform: Platform) {
    return `varchar(36)`;
  }
}
