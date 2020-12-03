//Dependencies
const express = require ("express"); // bruger node express 
const cors = require ("cors"); // bruger cors til at køre på en webbrowser
const bodyParser = require ("body-parser");
const fs = require("fs");
const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//Routes 
const userRoutes = require("./Routes/usersRoutes.js");
const matchRoutes = require("./Routes/matchRoutes");
const likeRoutes = require ("./Routes/likeRoutes");
const dislikeRoutes = require ("./Routes/dislikeRoutes");

app.get('/', (req, res) => {
    res.send('We are live');
  });

//endpoints
app.use ("/User/register", userRoutes);
app.use ("/Match", matchRoutes);
//app.use ("/Like", likeRoutes);
//app.use ("/Dislike", dislikeRoutes);


//CRUD Api-endpoints for users, interests and match


const PORT = process.env.PORT || 3000 //Porten er på 5000 

app.listen(PORT, () => console.log(`Server is running http://localhost:${PORT}`));
