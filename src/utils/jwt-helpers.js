const jwt = require('jsonwebtoken')

function jwtTokens ({user_id,user_firstname,user_lastname,user_email}) {
    const user = {user_id,user_firstname,user_lastname,user_email}
    const accessToken = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{expiresIn:'24h'});
    return accessToken
}

module.exports = jwtTokens;