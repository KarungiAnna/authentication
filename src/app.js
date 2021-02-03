import express from "express";
import userRoutes from "./routes/userRoutes";
import cors from "cors";
require("dotenv").config();
require('./database');

const app = express();
app.use(express.json()); //parse JSON body from HTTP request
app.use(cors());
app.use(userRoutes);  //import and use routes
//Import Routes
//const userRoutes = require('./routes/userRoutes');
 
// Route Middlewares
//app.use('/', userRoutes);

app.get("/", (req, res) => {
    res.status(200).send({ message: "API is live!" });
  });
  
  export default app;