const jwt= require("jsonwebtoken");

const verifyToken = (req,res,next)=>{
    try{
        const token =req.header("Authorization");

        if(!token){
            return res.status(401).json({
                message:"Access Denied. No token found."
            })
        }

        const decoded=jwt.verify(token,process.env.JWT_SECRET);

        console.log("payload",decoded);

        req.user=decoded;

        next()

    }catch(error){
        console.log(error.message);

        return res.status(401).json({
            message:"Invalid token or Expried."
        })
    }
}


module.exports=verifyToken;