//crate conneciton to user db
//give user query to modal to generae sql or give acces to tool
//modal excuate sql 
const pool = require('../database/userdb')
const {CohereClientV2} = require('cohere-ai')
const queryTool = require('../tool/queryPostgres')
class Agent{
    constructor(){
        this.userdb = pool.connect();
        this.aimodal = new CohereClientV2({
            token:'OFdL2T9rZeenNeQkVItIoowM66YY429w0NISqIaf'
        })
    }
    userDbConnection = async ()=>{

    }

    queryExcuation = async (query)=>{
        const response = await cohereAi.chat({
    model: 'command-a-03-2025',
    messages: [
      {
        role: 'system',
        content: `you are the agent who can create sql query and excuate in postgress database based on query`
      },
      {
        role: 'user',
        content: query
      }
    ],
    tools: [queryTool],
    // temperature: 0.8
  })
  console.log(response.message);

  return response.message.content[0].text;

    }
}