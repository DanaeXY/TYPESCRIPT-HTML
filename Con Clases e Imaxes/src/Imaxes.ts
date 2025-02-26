export class Imaxes {
    #imaxes; // obligado a poñela para podela utilizar
    constructor(imaxes:any) {
      this.#imaxes = imaxes;
    }
  
    funcionCrearRef() {
      let etiqueta = [];
      let tamanhoArrayDireccionImaxes = Object.values(this.#imaxes).length;
  
      for (let contador = 0; contador < tamanhoArrayDireccionImaxes; contador++) {
        let refImg = document.createElement("img");
        etiqueta.push(refImg);
      }
      return this.#funcionCrearAtributoSrc(etiqueta);
    }
  
    #funcionCrearAtributoSrc(direccionImaxen:any) {
      for (let contador = 0; contador < direccionImaxen.length; contador++) {
        direccionImaxen[contador].setAttribute(
          "src",
          Object.values(this.#imaxes)[contador]
        );
      }
      return direccionImaxen;
    }
  }
  