/**
     * No constructor pasar a referencia 
     * e nos métodos os valores para os 
     * diferentes atributos
     */
class EtiquetaA{
    private etiquetaA;
    constructor(etiquetaA:HTMLElement){
        this.etiquetaA = etiquetaA;
    }
    public introducirAtributoHref(direccion:string){
        this.etiquetaA.setAttribute('href',direccion)
    }

    public introducirAtributoClass(estilo:string){
        this.etiquetaA.setAttribute('class',estilo)
    }

    public introducirTexto(textoEtiqueta:string){
        this.etiquetaA.innerHTML = textoEtiqueta;
    }

    public pintoEnHTML(){
        document.body.append(this.etiquetaA)
    }

    get valorRefEtiquetaA() {
        return this.etiquetaA
    }

}

export{EtiquetaA}
