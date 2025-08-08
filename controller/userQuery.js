class UserQuery {
    constructor(service){
        this.service = service
    }

    requestProcessing = async (req , res)=>{
        const {searchvalue} = req.query
        console.log(searchvalue);
        
        const result = await this.service.queryExecution(searchvalue)
        console.log(result);
        
        res.json({
            message:'excuation successfull'
        })
    }
}
module.exports = UserQuery