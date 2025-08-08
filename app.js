const express = require('express');
const app = express();
const port = 3000;
const db = require('./database/db')
const route = require('./router/routes')
// db()
app.use('/api',route)
app.listen(port, ()=>{
    console.log(`server is running at ${port} `);
})

// login via google
// USER put their supbase crendentilas
// chat with agent
//           based on user input llm think 
//           give sql 
//           store message in mongodb
//           excuate slq in supabase'

//chat
        /**
         * user message
         * user message store in db
         * give message to modal with 5 messgae context
         * modal generate query
         * store in db 
         * query excute to db 
         */