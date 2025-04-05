class SubsystemA {
    operationA(): string {
      return 'SubsystemA: Ready!';
    }
  }
  
  class SubsystemB {
    operationB(): string {
      return 'SubsystemB: Working!';
    }
  }
  
  export class Template {
    private subsystemA = new SubsystemA();
    private subsystemB = new SubsystemB();
  
    public operation(): string {
      const resultA = this.subsystemA.operationA();
      const resultB = this.subsystemB.operationB();
      return `${resultA} ${resultB}`;
    }
  }
  