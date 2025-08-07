const { MongoClient } = require('mongodb')
const url = '';
const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const init = async()=>{
    try {
        await client.connect();
        const db = client.db('Project 0')
        console.log('connected');
        
        return db
    } catch (error) {
        console.log(error);
        
    }
}
module.exports = init
