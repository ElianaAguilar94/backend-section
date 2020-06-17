const {Router}=require("express");
const {ParseInMiddleware} =require("../middlewares")

module.exports=function({IdeaController}){
    const router=Router();

    router.get("",ParseInMiddleware,IdeaController.getAll)
    router.get("/:ideaId",IdeaController.get)
    router.get("/:userId/all",IdeaController.getUserIdea)
    router.post("",IdeaController.create)
    router.patch("/:ideaId",IdeaController.update)
    router.delete("/:ideaId",IdeaController.delete)
    router.post("/:ideaId/upvote",IdeaController.upvoteIdea)
    router.post("/:ideaId/downvote",IdeaController.downvoteIdea)

    return router
}