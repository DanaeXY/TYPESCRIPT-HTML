const express = require("express");
const path = require("path");
const app = express();


// Accedo o arquivo estático
app.use(express.static(path.join(__dirname, "public")));

//START SERVER
app.listen(3000, function () {
 console.log("Server running");
});