import mongoose from "mongoose";

mongoose.connect(process.env.DATABASE_URL, {
  useCreateIndex: true,
  useFindAndModify: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//default connection
var db = mongoose.connection;

//connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));