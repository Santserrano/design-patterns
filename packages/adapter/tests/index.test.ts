import { Adapter } from '../src/index';

describe('Test monorepo', () => {
  it('Monorepo test raiz', () => {
    const adapter = new Adapter();
    const result = adapter.operation();
    expect(result).toBe('SubsystemA: Ready! SubsystemB: Working!');
  });
});
