const {Router}=require("express");
const {AuthMiddleware,ParseInMiddleware,CacheMiddleware} =require("../middlewares")
const {CACHE_TIME} = require("../helpers")

module.exports=function({UserController}){
    const router=Router();
  //  router.get("/",[AuthMiddleware,ParseInMiddleware,CacheMiddleware(CACHE_TIME.ONE_HOUR)],UserController.getAll)
    router.get("/",[ParseInMiddleware],UserController.getAll)
    router.get("/:userId",UserController.get)
    router.patch("/:userId",UserController.update)
    router.delete("/:userId",UserController.delete)

    return router
}