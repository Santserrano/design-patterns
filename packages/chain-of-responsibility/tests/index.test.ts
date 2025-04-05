import { Chain } from '../src/index';

describe('Test monorepo', () => {
  it('Monorepo test raiz', () => {
    const chain = new Chain();
    const result = chain.operation();
    expect(result).toBe('SubsystemA: Ready! SubsystemB: Working!');
  });
});
