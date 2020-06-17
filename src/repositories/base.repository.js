class BaseRepository{
    constructor(model){
        this.model=model
    }
    async get(id){
        return await this.model.findById(id);
    }
    async getAll(papeSize=5,pageNum=1){
        const skips = papeSize * (pageNum - 1);
        return await this.model.find().skip(skips).limit(papeSize)
    }
    async create(entity){
        return await this.model.create(entity);
    }
    async update(id,entity){
        return await this.model.findByIdAndUpDate(id,entity,{new:true})
    }
    async delete(id){
        await this.model.findByIdAndDelete(id);
        return true;
    }
}

module.exports = BaseRepository;