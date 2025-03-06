import { EtiquetaBoton } from "../../Etiquetas/EtiquetaButton.js";
import { ITestDatasServer } from "../../Interfaces/ITestDatasServer.js";

/**
 * Extender o Xenérico a Clase EtiquetaBoton 
 * fai que 'this.boton.etiquetaBoton me devolva
 * o botón creado
 */
export class Comunicacion<T extends EtiquetaBoton>{
    boton:T;
    private datos:string = '';
    constructor(boton:T){
        this.boton = boton; // this.boton é a instancia a clase EtiquetaBoton
    }

    async getDatosServer(){
        // Este método relaciona a clase EtiquetaBoton
        // utilizando o 'get' de etiquetaBoton 
        // que devolve o botón creado dende 'index.ts'
        this.boton.etiquetaBoton.addEventListener("click", async ()=>{
            console.log("estou en getDatosServer")
            let datos = await fetch("/enviarDatos");
            let datosJson = await datos.json()
            console.log("datosJson ",datosJson)
            
        })
        
    }


    async getDatosServerTestProba(endpoint: string){
        
        this.boton.etiquetaBoton.addEventListener("click", async (): Promise<ITestDatasServer> =>{
            let valores = (await fetch(endpoint)).json();
            let resultado = await valores;
            console.log("resultado ", resultado)
            this.datos = resultado
            return resultado
        })
        return this.datos
    }

   static async getDatosServerTest(endpoint: string): Promise<ITestDatasServer>{
            let valores = (await fetch(endpoint)).json();
            let resultado = await valores;
            return resultado
    }
    get devolverDatos(){
        return this.datos
    }

}