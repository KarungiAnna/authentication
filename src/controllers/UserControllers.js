import User from '../models/User'
import bcrypt from "bcryptjs";
require("dotenv").config();

//register  user
const createUser = async(req, res) => {
    const userData = req.body;
    const user = new User(userData);
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({message: 'Your account has been created successfully', user, token});
};
//login a user
const loginUser = async(req, res) => {
   const { email, password } = req.body;
   const user = await User.findOne({ email });
   if(!user){
       return res.status(400).send({ error: "Invalid login credentials."});
   }
  //check password
   const isPasswordMatch = await bcrypt.compare(password, user.password);
   if(!isPasswordMatch){
    return res.status(400).send({ error: "Invalid login credentials."});   
   }
   const token = await user.generateAuthToken();
   res.status(201).send({ message: "Logged in successfully", user, token });
};

//Get Homepage
const homePage = async (req, res) => {
  res.status(200).send('Home page');
}
//Get signup
const signupPage = async (req, res) => {
  res.status(200).send('Signup page');
}
//Get login
const loginPage = async (req, res) => {
  res.status(200).send('Login page');
}

// Get Student profile
const studentProfile = async (req, res) => {
  const user = await req.user;
  res.status(200).send({message: "Student Profile", user});
}
//Get Dashboard
const adminDashboard = async (req, res) => {
  const user = await req.user;
 if(user.role !== "admin" && user.role !== "superadmin") {
    return res.status(401).send('Unauthorized')
  }
  return res.status(200).send({message: "Dashboard", user});
}
//Fetch all users
const fetchAllUsers = async (req, res) => {
  const users = await User.find({});
  const user = await req.user;
  if(user.role !== "admin" && user.role !== "superadmin") {
     return res.status(401).send('Unauthorized')
   }
   return res.status(200).send(users);  
}
//logout 

export { homePage, signupPage, createUser, loginPage, loginUser, studentProfile, adminDashboard, fetchAllUsers}