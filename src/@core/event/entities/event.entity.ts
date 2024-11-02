import { AggregateRoot } from 'src/@core/commom/domain/aggregate-root';
import Uuid from 'src/@core/commom/domain/value-objects/uuid.vo';
import { EventSection } from './event-section';
import { PartnerId } from './partnert.entity';

export class EventId extends Uuid {}

export type CreateEventCommand = {
  name: string;
  description?: string | null;
  date: Date;
  partner_id: PartnerId;
};

export class EventConstructorProps {
  id?: EventId | string;
  name: string;
  description: string | null;
  date: Date;
  isPublished: boolean;
  total_spots: number;
  total_spots_reserved: number;
  partner_id: PartnerId | string;
  sections?: Set<EventSection>;
}
export class Event extends AggregateRoot {
  id: EventId;
  name: string;
  description: string;
  date: Date;
  isPublished: boolean;
  total_spots: number;
  total_spots_reserved: number;
  partner_id: PartnerId;
  sections: Set<EventSection>;
  // private _section: ICollection<EventSetion>;

  constructor(props: EventConstructorProps) {
    super();
    this.id =
      typeof props.id === 'string'
        ? new EventId(props.id)
        : (props.id ?? new EventId());
    this.name = props.name;
    this.description = props.description ?? null;
    this.date = props.date;
    this.isPublished = props.isPublished;
    this.total_spots = props.total_spots;
    this.total_spots_reserved = props.total_spots_reserved;
    this.partner_id =
      typeof props.partner_id === 'string'
        ? new PartnerId(props.partner_id)
        : props.partner_id;
    this.sections = props.sections ?? new Set<EventSection>();
    // this._sections = MyCollectionFactory.create<EventSection>(this);
  }

  static creatae(command: CreateEventCommand) {
    const event = new Event({
      ...command,
      description: command.description ?? null,
      isPublished: false,
      total_spots: 0,
      total_spots_reserved: 0,
    });

    return event;
  }

  changeName(name: string) {
    this.name = name;
  }

  changeDescription(description: string) {
    this.description = description;
  }

  changeDate(date: Date) {
    this.date = date;
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      date: this.date,
      isPublished: this.isPublished,
      total_spots: this.total_spots,
      total_spots_reserved: this.total_spots_reserved,
      partner_id: this.partner_id,
      // section: this._section,
    };
  }
}
