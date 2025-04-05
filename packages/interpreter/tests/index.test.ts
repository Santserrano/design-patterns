import { Interpreter } from '../src/index';

describe('Test monorepo', () => {
  it('Monorepo test raiz', () => {
    const interpreter = new Interpreter();
    const result = interpreter.operation();
    expect(result).toBe('SubsystemA: Ready! SubsystemB: Working!');
  });
});
