const express = require ("express"); // bruger node express 
const cors = require ("cors") // bruger cors til at køre på en webbrowser
const server = express() 
server.use(cors())


const PORT = process.env.PORT || 3000 //Porten er på 3000 