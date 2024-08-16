import jwt from "jsonwebtoken";

export const verifyToken=(req,res,next)=>{
    const token=req.cookies.token;
    if(!token) return res.status(401).json({success:false,msg:"Access denied.No token provided"});
    try {
        const decoded=jwt.verify(token,process.env.SECRET_KEY);
        if(!decoded){
            return res.status(401).json({success:false,msg:"Invalid token"});
        }
        req.userId=decoded.userId;
        next();
    }
    catch(err){
        return res.status(500).json({success:false,msg:"Error verifying token"});
        
    }
}