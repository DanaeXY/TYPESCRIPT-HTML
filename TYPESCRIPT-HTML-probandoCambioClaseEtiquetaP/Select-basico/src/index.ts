let refBody: HTMLBodyElement = document.body as HTMLBodyElement;

if(refBody !== null){

    let elementoSelect : HTMLSelectElement | null = document.querySelector("#pet-select");
    elementoSelect?.addEventListener("change",() : void =>{
        
        (elementoSelect?.value === "dog") ? console.log("é un can ", elementoSelect?.value) : console.log("non é un can",elementoSelect?.value)
    })
}else{
    console.log("document.body is null");
}



