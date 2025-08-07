class UserQuery {
    constructor(service){
        this.service = service
    }

    async requestProcessing (req , res){
        const query = req.query
        const result = await service.queryExcuation(query)
        res.json({
            message:'excuation successfull'
        })
    }
}