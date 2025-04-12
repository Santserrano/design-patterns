import { Cafe } from '../src/Cafe';

describe('Preparación del café', () => {
  it('should follow correct steps', () => {
    const cafe = new Cafe();
    expect(cafe.prepare()).toEqual([
      'Hervir agua',
      'Filtrar café molido',
      'Agregar azúcar y leche',
      'Servir en taza',
    ]);
  });
});
