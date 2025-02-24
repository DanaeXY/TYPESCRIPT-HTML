# Clase Xenérica:

```typescript
class Caja<T> {
  contenido: T;

  constructor(contenido: T) {
    this.contenido = contenido;
  }

  obtenerContenido(): T {
    return this.contenido;
  }
}

// Puedes usar la clase Caja con cualquier tipo de dato.
const cajaDeNumero = new Caja<number>(123);
console.log(cajaDeNumero.obtenerContenido()); // Salida: 123

const cajaDeTexto = new Caja<string>("Hola");
console.log(cajaDeTexto.obtenerContenido()); // Salida: Hola

// También puedes usar la clase Caja con clases personalizadas.
class Direccion {
  calle: string;
  ciudad: string;
  codigoPostal: string;

  constructor(calle: string, ciudad: string, codigoPostal: string) {
    this.calle = calle;
    this.ciudad = ciudad;
    this.codigoPostal = codigoPostal;
  }
}

const direccion = new Direccion("Calle Falsa 123", "Springfield", "12345");
const cajaDeDireccion = new Caja<Direccion>(direccion);
console.log(cajaDeDireccion.obtenerContenido());


```