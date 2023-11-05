const jwt = require('jsonwebtoken')

function authorizationPass(req, res, next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token ==null) return res.status(401).json({error:"No token found. You need to login"});
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, user)=>{
        if(error) return res.status(403).json({error:error.message});
        req.user = user;
        next();
    })
}

module.exports = authorizationPass