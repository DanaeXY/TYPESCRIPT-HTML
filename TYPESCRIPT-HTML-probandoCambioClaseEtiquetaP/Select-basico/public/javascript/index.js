"use strict";
let refBody = document.body;
if (refBody !== null) {
    let elementoSelect = document.querySelector("#pet-select");
    elementoSelect === null || elementoSelect === void 0 ? void 0 : elementoSelect.addEventListener("change", () => {
        ((elementoSelect === null || elementoSelect === void 0 ? void 0 : elementoSelect.value) === "dog") ? console.log("é un can ", elementoSelect === null || elementoSelect === void 0 ? void 0 : elementoSelect.value) : console.log("non é un can", elementoSelect === null || elementoSelect === void 0 ? void 0 : elementoSelect.value);
    });
}
else {
    console.log("document.body is null");
}
