export function selecionDato(): void{
    let select :     HTMLSelectElement | null = document.querySelector("#lista");
    let parrafo:     HTMLParagraphElement | null = document.querySelector("#parrafo");
    console.log("carga a función")
    if(select){
        select.addEventListener("change",() : void =>{
            if(parrafo){
                let estiloLetras = parrafo.style;
                console.log("funcion seleccionDato ",select.value)
                switch(select.value){
                    case "peque": 
                        estiloLetras.fontSize = 'small';
                        break;
                    case "grande": 
                        estiloLetras.fontSize = 'large';
                        break;
                    case "moigrande": 
                        estiloLetras.fontSize = 'x-large';
                        break;
                    default: 
                        console.log("isto vai raro");
                }
            }else{
                console.log("select o parrafo no estan cargados");
            }
    })
    }else{
        console.log("select no esta cargado");
    }
    
}