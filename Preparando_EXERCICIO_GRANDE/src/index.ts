import { DatosInvoices } from "./Clases/DatosPaxinasInvoices.js";
import { NavegacionMenuPrincipal } from "./Clases/MenuPrincipalPC.js";
import { EtiquetaBoton } from "./Etiquetas/EtiquetaButton.js";
import { IBoton } from "./Interfaces/IBoton.js";
import { IIcono } from "./Interfaces/Icono.js";
import { IEtiquetaA } from "./Interfaces/IEtiquetaA.js";
import { IWrapperDiv } from "./Interfaces/IWrapperDiv.js";
import { Comunicacion } from "./Xenericos/Clases/Comunicacion.js";

// Utilizo a clase NavegacionMenuPrincipal
// para crear o menú
// INSTANCIO A CLASE DE NAVEGACIÓN DO MENÚ PRINCIPAL

let iconos : IIcono = {
    home:"./imaxes/Home.svg",
    grupo:"./imaxes/Persoas.svg",
    etiqueta:"./imaxes/Shape.svg"
}
let etiquetasA: IEtiquetaA = {
    numEtiquetasImg : 3,
    estilos : ['selector-a','selector-a','selector-a'],
    direccions : ['#','#','#'],
    textos : ['isto é un enlace 1','isto é un enlace 2','isto é un enlace 3']
}
let estiloDiv: IWrapperDiv = {
    estilo: "test-selector-div"
}
let navegar = new NavegacionMenuPrincipal(iconos,etiquetasA,estiloDiv);

navegar.pintarEnPantalla("#")


//#### 
let unBoton : IBoton = {
    etiquetaButton: document.createElement("button"),
    estilo:"boton",
    texto:"Traer Datos do Servidor"
}
let instanciaBoton = new EtiquetaBoton(unBoton);
//instanciaBoton.eventoClick();
let instanciaComunicacion = new Comunicacion<EtiquetaBoton>(instanciaBoton);

//instanciaComunicacion.getDatosServer()        

//let datosDoServer = instanciaComunicacion.getDatosServerTest("/enviarDatos")
//console.log("datos do servidor? ",datosDoServer)

let instanciaDatosInvoices = new DatosInvoices();
instanciaDatosInvoices.pintarDatosClientes("/enviarDatos")













