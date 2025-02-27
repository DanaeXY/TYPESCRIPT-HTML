class EtiquetaImg {
    constructor(enlaces) {
        //protected etiquetaImg;
        this.arrayEtiquetas = []; // ten que estar inicializado
        this.etiquetasCreadas = []; // pídeme tipo void
        //this.etiquetaImg = document.createElement("img");
        this.enlacesIconos = enlaces;
    }
    introducirAtributoSrc() {
        //this.etiquetaImg.setAttribute("src",enlace)
        this.sacamosSrc();
        console.log(this.arrayEtiquetas);
    }
    /*  public introducirAtributoClass(estilo:string){
         this.etiquetaImg.setAttribute("class",estilo)
     }
     public introducirAtributoAlt(mensaxeAlt:string){
         this.etiquetaImg.setAttribute("alt",mensaxeAlt)
     }
     public pintoEnHTML(){
         document.body.append(this.etiquetaImg);
     } */
    creamosEtiquetas() {
        this.sacamosSrc();
        for (let src of this.arrayEtiquetas) {
            //console.log("src ",src)
            let etiqueta = document.createElement("img");
            etiqueta.setAttribute("src", src); //.setAttribute devolve tipo 'void'
            this.etiquetasCreadas.push(etiqueta);
        }
    }
    sacamosSrc() {
        for (let variable in this.enlacesIconos) {
            //console.log(`sacamosSrc ${variable} ${this.enlacesIconos[variable as keyof Icono]}`)
            this.arrayEtiquetas.push(this.enlacesIconos[variable]);
        }
    }
    get EtiquetasImg() {
        this.creamosEtiquetas();
        return this.etiquetasCreadas;
    }
    get NumEtiquetasImg() {
        return this.arrayEtiquetas.length;
    }
}
export { EtiquetaImg };
