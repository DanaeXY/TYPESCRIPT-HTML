import { Comunicacion } from "../Xenericos/Clases/Comunicacion.js";

export class DatosInvoices {
    
    private async peticionClientes(endpoint: string ){
       let datos = await Comunicacion.getDatosServerTest(endpoint);
       return datos
    }
    public async pintarDatosClientes(endpoint:string){
        let datosClientes = await this.peticionClientes(endpoint)
        console.log("datosClientes ",datosClientes)
    }
}