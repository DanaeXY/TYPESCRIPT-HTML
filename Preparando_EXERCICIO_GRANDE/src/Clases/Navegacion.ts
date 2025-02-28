import { BloqueLinkNavegacion } from "../Interfaces/BloqueLinkNavegacion.js"


abstract class Navegacion implements BloqueLinkNavegacion{
    abstract crearEtiquetas():void;
    abstract pintarEnPantalla(direccion:string):void;
}


export{
    Navegacion
}