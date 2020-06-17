const {Router}=require("express");
const {AuthMiddleware,ParseInMiddleware} =require("../middlewares")

module.exports=function({UserController}){
    const router=Router();

    router.get("/",[AuthMiddleware,ParseInMiddleware],UserController.getAll)
    router.get("/:userId",UserController.get)
    router.patch("/:userId",UserController.update)
    router.delete("/:userId",UserController.delete)

    return router
}