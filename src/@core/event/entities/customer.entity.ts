import { AggregateRoot } from 'src/@core/commom/domain/aggregate-root';
import Cpf from 'src/@core/commom/domain/value-objects/cnpj.vo';
import { Name } from 'src/@core/commom/domain/value-objects/name.vo';

type CustomerConstrucorProps = {
  id?: string;
  cpf: Cpf;
  name: string;
};

export class Customer extends AggregateRoot {
  id: string;
  cpf: Cpf;
  name: string;

  constructor(props: CustomerConstrucorProps) {
    super();
    this.id = props.id;
    this.cpf = props.cpf;
    this.name = props.name;
  }

  toJSON() {
    return {
      id: this.id,
      cpf: this.cpf,
      name: this.name,
    };
  }

  static create(command: { name: Name; cpf: string }): Customer {
    return new Customer({
      cpf: new Cpf(command.cpf),
      name: command.name.value,
    });
  }
}
