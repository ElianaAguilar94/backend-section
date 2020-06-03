let _ideaService=null;

class IdeaController{
    constructor({IdeaService}){
        _ideaService=IdeaService
    }

    async get(req,res){
        const {ideaId} =req.params;
        const user = await _ideaService.get(ideaId);
        return res.send(user)
    }

    async getAll(req,res){
        const ideas = await _ideaService.getAll();
        return res.send(ideas)
    }

    async create(req,res){
        const {body} =req;
        const createdIdea = await _ideaService.create(body)
        return res.status(201).send(createdIdea)
    }

    async update(req,res){
        const {body} =req;
        const {ideaId} = req.params;
        const updateUser = await _ideaService.update(ideaId,body)
        return res.send(updateUser);
    }

    async delete(req,res){
        const {ideaId} = req.params;
        const deletedUser = await _ideaService.delete(ideaId)
        return res.send(deletedUser)
    }

    async getUserIdea(req,res){
        const {userId} = req.params;
        const ideas = await _ideaService.getUserIdea(userId)
        return res.send(ideas)
    }

    async upvoteIdea(req,res){
        const {ideaId} = req.params;
        const idea = await _ideaService.upvotesIdea(ideaId)
        return res.send(idea)
    }

    async downvoteIdea(req,res){
        const {ideaId} = req.params;
        const idea = await _ideaService.downvoteIdea(ideaId)
        return res.send(idea)
    }
}

module.exports=IdeaController;