import { AggregateRoot } from 'src/@core/commom/domain/aggregate-root';
import Uuid from 'src/@core/commom/domain/value-objects/uuid.vo';
import { Event } from './event.entity';

export class PartnerId extends Uuid {}

export type PartnerConstructorProps = {
  id?: PartnerId | string;
  name: string;
};

export type InitEventCommand = {
  name: string;
  description?: string | null;
  date: Date;
};

export class Partner extends AggregateRoot {
  id: PartnerId;
  name: string;

  constructor(props: PartnerConstructorProps) {
    super();
    this.id =
      typeof props.id === 'string'
        ? new PartnerId(props.id)
        : (props.id ?? new PartnerId());
    this.name = props.name;
  }

  static create(command: { name: string }) {
    return new Partner({ name: command.name });
  }

  changeName(name: string) {
    this.name = name;
  }

  initEvent(commnand: InitEventCommand) {
    return Event.creatae({ ...commnand, partner_id: this.id });
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
    };
  }
}
