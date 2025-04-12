import { Te } from '../src/Te';

describe('Preparación del Té', () => {
  it('should follow correct steps', () => {
    const te = new Te();
    expect(te.prepare()).toEqual([
      'Hervir agua',
      'Remojar bolsita de té',
      'Agregar limón',
      'Servir en taza',
    ]);
  });
});
