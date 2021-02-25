import express from "express";
import userRoutes from "./routes/userRoutes";
import cors from "cors";
//import auth from "./middleware/auth";
require("dotenv").config();
require('./database');


const app = express();
app.use(express.json()); //parse JSON body from HTTP request
app.use(cors());
app.use(userRoutes);  //import and use routes


app.get("/", (req, res) => {
    res.status(200).send({ message: "API is live!" });
  });
  app.set('views', __dirname + '/views'); 
  app.set('view engine', 'html');
 app.get('/login', (req, res) => res.render('login'));
  
  export default app;