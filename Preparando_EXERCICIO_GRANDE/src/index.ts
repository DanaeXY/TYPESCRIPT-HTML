import { NavegacionMenuPrincipal } from "./Clases/MenuPrincipalPC.js";
import { IIcono } from "./Interfaces/Icono.js";
import { IEtiquetaA } from "./Interfaces/IEtiquetaA.js";
import { IWrapperDiv } from "./Interfaces/IWrapperDiv.js";

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













