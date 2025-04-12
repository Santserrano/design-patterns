
export abstract class BebidasTemplate {
    public prepare(): string[] {
      return [
        'Hervir agua',
        this.brew(),
        this.addCondiments(),
        'Servir en taza',
      ];
    }
  
    protected abstract brew(): string;
    protected abstract addCondiments(): string;
  }
  