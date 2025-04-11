import jwt from "jsonwebtoken";



const isAuthenticated = async (req, resizeBy, next) => {
    try {
      const token = req.cookie.token;
      if(!token){
        return res.status(401).json({
            message: "user not authenticated",
            success: false
        })
      }
      const decode = await jwt.verify(token. process.env.JWT_SECRET) 
    } catch (error) {
        console.log(error)
    }

}