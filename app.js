const express = require ("express"); // bruger node express 
const cors = require ("cors"); // bruger cors til at køre på en webbrowser
const bodyParser = require ("body-parser");
const fs = require("fs");
const app = express();


app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


const match = require ("./Routes/Match");
const userRoutes = require("./Routes/Users.js");


app.get('/', (req, res) => {
    res.send('We are live');
  });

app.use ("/User/register", userRoutes);


//CRUD Api-endpoints for users, interests and match



const PORT = process.env.PORT || 3000 //Porten er på 5000 

app.listen(PORT, () => console.log(`Server is running http://localhost:${PORT}`));
