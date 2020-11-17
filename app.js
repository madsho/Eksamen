const express = require ("express"); // bruger node express 
const cors = require ("cors"); // bruger cors til at køre på en webbrowser
const bodyParser = require ("body-parser");
const fs = require("fs");

const app = express(); 

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const users = require ("./Routes/Users.js")(app, fs);
const interests = require ("./Routes/Interests");
const match = require ("./Routes/Match")

app.get('/',(req, res) =>{
    res.send("We are live boizz")
});


//CRUD Api-endpoints for users, interests and match



const PORT = process.env.PORT || 3000 //Porten er på 3000 

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
