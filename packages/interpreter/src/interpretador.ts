// Interfaz base para todas las expresiones
export interface Expresion {
  interpretar(): number;
}

// Expresión terminal: representa un número
export class Numero implements Expresion {
  constructor(private valor: number) {}

  interpretar(): number {
    return this.valor;
  }
}

// Expresión no terminal: suma dos expresiones
export class Suma implements Expresion {
  constructor(private izquierda: Expresion, private derecha: Expresion) {}

  interpretar(): number {
    return this.izquierda.interpretar() + this.derecha.interpretar();
  }
}

// Expresión no terminal: resta dos expresiones
export class Resta implements Expresion {
  constructor(private izquierda: Expresion, private derecha: Expresion) {}

  interpretar(): number {
    return this.izquierda.interpretar() - this.derecha.interpretar();
  }
}
