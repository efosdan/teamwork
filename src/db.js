const {Client} = require('pg');

const client = new Client({
    user: "efosdan",
    password: "Destiny4007!",
    database:"teamworkdb",
    host: "localhost",
    port: 5432
    
})

module.exports = client