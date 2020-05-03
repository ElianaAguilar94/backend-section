let _homeService = null;

class HomeController{

    constructor({HomeService}){
        _homeService=HomeService
    }

    index(red,res){
        return res.send(_homeService.index());
    }
}

module.exports=HomeController;