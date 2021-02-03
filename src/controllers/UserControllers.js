import User from '../models/User'
import bcrypt from "bcryptjs";
import { auth } from '../middleware/auth';
//register a new user
const createUser = async(req, res) => {
    const userData = req.body;
    const user = new User(userData);
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({message: 'Your account has been created successfully', user, token});
};
//login a new user
const loginUser = async(req, res) => {
   const { email, password } = req.body;
   const user = await User.findOne({ email });
   if(!user){
       return res.status(400).send({ error: "Invalid login credentials."});
   }
   //check the role
   /*if (user.role !== role) {
    return res.status(403).json({
    message: "Please make sure you are logging in from the right portal."});
  }*/
  //check password
   const isPasswordMatch = await bcrypt.compare(password, user.password);
   if(!isPasswordMatch){
    return res.status(400).send({ error: "Invalid login credentials."});   
   }
   const token = await user.generateAuthToken();
   res.status(201).send({ message: "Logged in successfully", user, token });
};

//Check Role Middleware
 
const checkRole = roles => (req, res, next) =>
  !roles.includes(req.user.role)
    ? res.status(401).send("Unauthorized")
    : next();

/*const validateEmail = async email => {
  let user = await User.findOne({ email });
  return user ? false : true;
};*/

const serializeUser = user => {
  return {
    name: user.name,
    email: user.email,
    _id: user._id,
    updatedAt: user.updatedAt,
    createdAt: user.createdAt
  };
};
//logout a logged user

export {auth, createUser, loginUser, serializeUser, checkRole}