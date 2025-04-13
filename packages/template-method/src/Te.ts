import { BebidasTemplate } from './BebidasTemplate';

export class Te extends BebidasTemplate {
  protected brew(): string {
    return 'Remojar bolsita de té';
  }

  protected addCondiments(): string {
    return 'Agregar limón';
  }
}
