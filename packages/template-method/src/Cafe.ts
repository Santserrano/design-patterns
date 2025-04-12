import { BebidasTemplate } from './BebidasTemplate';

export class Cafe extends BebidasTemplate {
  protected brew(): string {
    return 'Filtrar café molido';
  }

  protected addCondiments(): string {
    return 'Agregar azúcar y leche';
  }
}
