//const {createContainer,asClass,asValue,asFunction} = require("awilix");
const awilix = require ( "awilix" )   
const { createContainer,asValue , asFunction , asClass } =  awilix 

//config
const config = require('../config');
const app =require('.')

//services
const {HomeService,UserService,IdeaService,CommentService}=require('../services')


//controllers
const {HomeController}=require('../controllers')

//routes
const {HomeRoutes}=require('../routes/index.routes')
const Routes=require('../routes');

//models
const {User,Comment,Idea} = require('../models')

//repository
const {UserRepository,IdeaRepository,CommentRepository} = require('../repositories')

const container=createContainer();


container
    .register({
        app:asClass(app).singleton(),
        router:asFunction(Routes).singleton(),
        config:asValue(config)
    })
    .register({
        HomeService:asClass(HomeService).singleton(),
        UserService:asClass(UserService).singleton(),
        IdeaService:asClass(IdeaService).singleton(),
        CommentService:asClass(CommentService).singleton()

    }).register({
        HomeController:asClass(HomeController.bind(HomeController)).singleton()
    }).register({
        HomeRoutes:asFunction(HomeRoutes).singleton()
    }).register({
        User:asValue(User),
        Idea:asValue(Idea),
        Comment:asValue(Comment)
    }).register({
        UserRepository: asClass(UserRepository),
        IdeaRepository: asClass(IdeaRepository),
        CommentRepository: asClass(CommentRepository)
    })

module.exports=container;