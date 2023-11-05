const client = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtTokens = require('../utils/jwt-helpers');




const getAllUserHandler = async (req, res) => {
    try {
        const user = await client.query(`Select * from users`);
        res.json(user.rows);
    } catch(error) {
        res.status(500).json({error: error.message})
    }
}

const registerHandler =  async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = await client.query(           
            `INSERT INTO users (user_firstname,user_lastname,user_email,user_password) VALUES ($1,$2,$3,$4) RETURNING *`,
            [req.body.firstname,req.body.lastname,req.body.email,hashedPassword]);       
        res.json({user: newUser.rows[0]})
    } catch(error){
        res.status(500).json({error:error.message})
    }
}

const loginHandler = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await client.query('SELECT * FROM users WHERE user_email = $1',[email])
        if(user.rows.length === 0 ) return res.status(401).json({error:"Email does not exist"});
        const validPassword = await bcrypt.compare(password,user.rows[0].user_password);
        if(!validPassword) return res.status(401).json({error: "Incorrect password"});
        let tokens = jwtTokens(user.rows[0])
        res.json(tokens)
    } catch(error){
        res.status(500).json({error:error.message})
    }
}


module.exports = {getAllUserHandler, registerHandler, loginHandler} ;

