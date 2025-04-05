import { Template } from '../src/index';

describe('Test monorepo', () => {
  it('Monorepo test raiz', () => {
    const template = new Template();
    const result = template.operation();
    expect(result).toBe('SubsystemA: Ready! SubsystemB: Working!');
  });
});
