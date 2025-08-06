const { MongoClient } = require('mongodb')
const url = 'mongodb+srv://pratiksingh212001:DpXSA3CN2kw1Hc5W@cluster0.7owzguo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
// const client = new MongoClient(url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })

// const init = async()=>{
//     try {
//         await client.connect();
//         const db = client.db('Project 0')
//         console.log('connected');
        
//         return db
//     } catch (error) {
//         console.log(error);
        
//     }
// }
// module.exports = init
