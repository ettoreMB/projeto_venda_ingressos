import { Entity } from 'src/@core/commom/domain/entity';
import Uuid from 'src/@core/commom/domain/value-objects/uuid.vo';

export class EventSectionId extends Uuid {}

export type EventSectionCreateCommnad = {
  name: string;
  description?: string | null;
  total_spots: number;
  price: number;
};

export class EventSectionConstructorProps {
  id?: EventSectionId | string;
  name: string;
  description: string | null;
  is_published: boolean;
  total_spots: number;
  total_spots_reserved: number;
  price: number;
}

export class EventSection extends Entity {
  id: EventSectionId;
  name: string;
  description: string | null;
  is_published: boolean;
  total_spots: number;
  total_spots_reserved: number;
  price: number;

  constructor(props: EventSectionConstructorProps) {
    super();
    this.id =
      typeof props.id === 'string'
        ? new EventSectionId(props.id)
        : (props.id ?? new EventSectionId());
    this.name = props.name;
    this.description = props.description ?? null;
    this.is_published = props.is_published;
    this.total_spots = props.total_spots;
    this.total_spots_reserved = props.total_spots_reserved;
    this.price = props.price;
  }

  static create(command: EventSectionCreateCommnad) {
    const section = new EventSection({
      ...command,
      description: command.description ?? null,
      is_published: false,
      total_spots_reserved: 0,
    });

    section.initSpots();

    return section;
  }

  private initSpots() {
    for (let i = 0; i < this.total_spots; i++) {
      // this._spots.add(new Spot({ section_id: this.id }));
    }
  }

  changeName(name: string) {
    this.name = name;
  }

  changedescription(description: string) {
    this.description = description;
  }

  changePrice(price: number) {
    this.price = price;
  }

  toJSON() {
    throw new Error('Method not implemented.');
  }
}
