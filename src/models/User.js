import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
       required: true
    },
    role:{
        type: String,
       
        enum: ["student", "admin", "superadmin"]
    },
    password: {
        type: String,
        required: true
    }
},
    {timestamps : true}
    );
userSchema.pre('save', async function(next) {
    const user = this;
    if(user.isModified('password')){
     user.password = await bcrypt.hash(user.password, 8)
    }
    next();
});
userSchema.methods.generateAuthToken = async function(){
    const user = this;
    const token = jwt.sign({ id: user._id, role: user.role, email: user.email }, process.env.JWT_KEY );
    return token;
};

const User = mongoose.model('User', userSchema);
export default User;