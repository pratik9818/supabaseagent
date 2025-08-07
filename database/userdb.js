const {Pool} = require('pg');
const pool = new Pool({
    user:'pratik',
    host:'supabase',
    database:'postgress',
    password:'34edf',
    port:5432,
    max:2,
})

module.exports = pool;