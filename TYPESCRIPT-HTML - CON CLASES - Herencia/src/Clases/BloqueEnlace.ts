class BloqueEnlace{
     public referencia: HTMLElement;

     constructor(etiqueta: string){
          this.referencia = document.createElement(etiqueta)
     }
     
     introduzcoTexto(texto: string) : void{
          this.referencia.innerHTML = texto;
     };
}








export {BloqueEnlace}


