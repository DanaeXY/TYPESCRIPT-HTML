import { IIcono } from "../Interfaces/Icono.js";

class EtiquetaImg{
    //protected etiquetaImg;
    protected arrayEtiquetas : string[] = [];// ten que estar inicializado
    protected enlacesIconos: IIcono;
    protected etiquetasCreadas: HTMLImageElement[] = [];// pídeme tipo void
    constructor(enlaces:IIcono){
        //this.etiquetaImg = document.createElement("img");
        this.enlacesIconos = enlaces;
    }

    public introducirAtributoSrc(){
        //this.etiquetaImg.setAttribute("src",enlace)
        this.sacamosSrc()
        console.log(this.arrayEtiquetas)
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

    public creamosEtiquetas():void{
        this.sacamosSrc();
        for(let src of this.arrayEtiquetas){
            //console.log("src ",src)
            let etiqueta = document.createElement("img")
            etiqueta.setAttribute("src",src);//.setAttribute devolve tipo 'void'
            this.etiquetasCreadas.push(etiqueta)
        }
        
    }
    private sacamosSrc():void{
        
        for(let variable in this.enlacesIconos){
            //console.log(`sacamosSrc ${variable} ${this.enlacesIconos[variable as keyof Icono]}`)
            this.arrayEtiquetas.push(this.enlacesIconos[variable as keyof IIcono])
        }
        
        
    }
    get EtiquetasImg():HTMLImageElement[]{
        this.creamosEtiquetas()
        return this.etiquetasCreadas
    }
    get NumEtiquetasImg(){
        return this.arrayEtiquetas.length
    } 
}

export{EtiquetaImg}