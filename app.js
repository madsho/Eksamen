const express = require ("express"); // bruger node express 
const cors = require ("cors"); // bruger cors til at køre på en webbrowser
const bodyParser = require ("body-parser");
const fs = require("fs");
const app = express();


app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


const match = require ("./Routes/Match");
const userRoutes = require("./Routes/Users.js")(app, fs);


app.get('/', (req, res) => {
    res.send('WE live BOIIIIIZ');
  });


const appRouter = (app,fs)=> {
  userRoutes(app, fs);
};

//CRUD Api-endpoints for users, interests and match



const PORT = process.env.PORT || 5000 //Porten er på 3000 

app.listen(PORT, () => console.log(`Server is running http://localhost:${PORT}`));
