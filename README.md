# 🧠 Proyecto: Patrones de Diseño en TypeScript

Este proyecto tiene como objetivo implementar ejemplos de **patrones de diseño** en TypeScript con fines educativos, organizados en un **monorepo** utilizando [Turborepo](https://turbo.build/repo), y tests con [Jest](https://jestjs.io/).

---

## 📁 Estructura del Proyecto

```
design-patterns/
├─ packages/
│  ├─ facade/               # Patrón Facade
│  ├─ adapter/              # Patrón Adapter
│  ├─ interpreter/          # Patrón Interpreter
│  ├─ template-method/      # Patrón Template Method
│  └─ chain-responsibility/ # Patrón Chain of Responsibility
├─ turbo.json
├─ package.json
└─ tsconfig.json
```

Cada paquete en `packages/` contiene:

- Implementación del patrón
- Tests unitarios con Jest
- Su propio `package.json`

---

## ⚙️ Instalación y configuración

```bash
git clone https://github.com/Santserrano/design-patterns.git
cd design-patterns
npm install
```

---

## 🧪 Correr todos los tests

Desde la raíz:

```bash
npm run test
```

También podés correr los tests de un paquete específico, por ejemplo:

```bash
cd packages/facade
npm test
```

---

## 👥 Flujo de trabajo colaborativo

### 🔀 1. Trabajamos en una rama por patrón

Cada uno trabaja en su propio patrón, en una rama separada.
Ejemplo para trabajar en la rama del patrón "adapter".

```bash
git checkout feature/adapter #Para cambiar a la rama
```

### 💻 2. Implementar y testear localmente

- Escribir el código del patrón
- Agregar al menos 1 test con Jest
- Confirmar que los tests pasen (`npm test` dentro del paquete)

### 💬 3. Subir la rama y abrir un Pull Request

```bash
git push origin feature/facade
```

Desde GitHub, crear un **Pull Request hacia `main`**.

### 🔍 4. Revisiones de código

Se revisa la PR y verifica con GitHub Actions.

### 🔄 5. Merge a `main`

Una vez aprobado, se puede hacer el **merge** a la rama `main`.

---

## 🧩 Créditos

- 💡 Proyecto realizado para la cátedra de Ingeniería de Software II
- 👨‍💻 Integrantes: G Enzo, Jeuel E Linder, Juan, Santiago.

---

## 🗂️ Desarrollo

| Patrón                  | Responsable   |
|-------------------------|---------------|
| Facade                  | Jeuel         |
| Adapter                 | Enzo          |
| Interpreter             | Gualtieri     |
| Template Method         | Serrano       |
| Chain of Responsibility | ---------     |
