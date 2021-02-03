import jwt from "jsonwebtoken";
import User from "../models/User";

const auth = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    const data = jwt.verify(token, process.env.JWT_KEY);
    const user = User.findOne({_id: data.id});
    if(!user) {
       return res.status(401).send({message: 'You are not authorized to access this resource.'})
    }
    req.user = user;
    next();
};
export default auth;