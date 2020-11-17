const express = require ("express"); // bruger node express 
const cors = require ("cors"); // bruger cors til at køre på en webbrowser
const bodyParser = require ("body-parser");
const fs = require("fs");

const app = express(); 

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const userRoutes = require ("./Routes/Users.js");
const interests = require ("./Routes/Interests");
const match = require ("./Routes/Match");
const routes = require("./Routes/Routes.js")(app, fs);


app.get('/',(req, res) =>{
    res.send("We are live boizz")
});

app.get ("/users", (req, res)=>{
    res.send (userRoutes)
})


//CRUD Api-endpoints for users, interests and match



const PORT = process.env.PORT || 3000 //Porten er på 3000 

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
