import jwt from "jsonwebtoken";
import User from "../models/User.js"
import dotenv from "dotenv";

dotenv.config();

const middleware = async (req, res, next)=> {
    try {
        const token = req.headers.authorization.split(" ")[1]

        if(!token){
            return res.status(401).json({success: false, messgae: "Unauthorized"})
        }


        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(!decoded){
            return res.status(401).json({success: false, messgae: "Wrong Token"})
        }

        // const user = await User.findById({_id: decoded.id});
        const user = await User.findById(decoded.id);

        if(!user){
            return res.status(404).json({success: false, messgae: "No user find"})
        }

        const newUser = {name: user.name, id: user._id}
        req.user = newUser;
        next();
    } catch (error) {
        return res.status(500).json({success: false, messgae: "Please Login"})
    }
}

export default middleware;