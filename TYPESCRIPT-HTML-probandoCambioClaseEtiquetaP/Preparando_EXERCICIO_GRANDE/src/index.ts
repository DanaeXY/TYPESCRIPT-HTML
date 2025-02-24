import { NavegacionMenuPrincipal } from "./Clases/MenuPrincipalPC";


let a = document.createElement("a");
let div = document.createElement("div");
let img = document.createElement("img");
let navegar = new NavegacionMenuPrincipal(a,img,div);

navegar.crearAtributos("#")
navegar.establecerEstilo("selector-a");
navegar.introducirTextoNasEtiquetas("este é o enlace")
navegar.pintarEnPantalla()

/*
let instanciaEtiquetaA = new EtiquetaA(document.createElement("a"))

instanciaEtiquetaA.introducirAtributoHref("#")

console.log(instanciaEtiquetaA.valorRefEtiquetaA)
*/
/* import { EtiquetaP } from "./Clases/EtiquetaP";
import { PintarElemento } from "./Clases/PintarElemento";

let unTexto = "por fín é VENRES!!!";

// Creo a instancia a clase EtiquetaP
let instanciaEtiquetaP = new EtiquetaP();

// 1º Creo a referencia,neste caso a P
let etiquetaPCreada = instanciaEtiquetaP.creoReferencia();

// 2º Introduzco o texto 
instanciaEtiquetaP.introduzcoTexto(unTexto);

// 3º Creo a instancia a clase de Pintar no HTML
let pintoNoHTML = new PintarElemento(document.body)

// 4º Pinto no HTML
pintoNoHTML.pintarOFinal(instanciaEtiquetaP.devolverReferencia()) */



