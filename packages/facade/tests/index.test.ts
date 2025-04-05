import { Facade } from '../src/index';

describe('Facade Pattern', () => {
  it('should coordinate subsystems and return expected result', () => {
    const facade = new Facade();
    const result = facade.operation();
    expect(result).toBe('SubsystemA: Ready! SubsystemB: Working!');
  });
});
