const express = require('express');
const app = express();
const port = 3000;
const db = require('./database/db')
db()
app.listen(port, ()=>{
    console.log(`server is running at ${port} `);
})

// login via google
// put their supbase crendentilas
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
//DpXSA3CN2kw1Hc5W
//mongodb+srv://pratiksingh212001:DpXSA3CN2kw1Hc5W@cluster0.7owzguo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0