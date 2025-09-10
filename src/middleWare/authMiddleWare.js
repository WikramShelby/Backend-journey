import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async(req,res,next) => {
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        // extract token from header
        try{
            token = req.headers.authorization.split(" ")[1];

            //verify token
            const decoded = jwt.verify(token,"supersecretkey");//same key as in login

            //attach user to request
            req.user = await User.findById(decoded.id).select("-password");
            next();
        } catch (error) {
            console.error(error);
            res.status(401).json({message:"not authorized token failed"});
        }
    }

    if(!token){
        res.status(401).json({message:"not authorized no token"});
    }
};

export default protect;