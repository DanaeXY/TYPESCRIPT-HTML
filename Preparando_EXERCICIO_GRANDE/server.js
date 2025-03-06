const express = require("express");
const path = require("path");
const app = express();


// Accedo o arquivo estático
app.use(express.static(path.join(__dirname, "public")));
//### GETTERS
app.get("/enviarDatos",(req,res)=>{
    //res.send("<h1>isto é un título</h1>");
    const datoEnviado = {
      valor1: 23,
      nome:"Juan",
      apelido:"Piñeiro"
    }
    res.send(datoEnviado)
  })

//### POST

//START SERVER
app.listen(5000, function () {
 console.log("Server running");
});