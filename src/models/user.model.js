const mongoose= require("mongoose");
const {Shema}=mongoose;
const {compareSync,hashSync,genSaltSync}=require("bcryptjs");

const UserShema = new Shema({
    name: {type:String,require:true},
    username:{type:String,require:true},
    password:{type:String,require:true}
})

UserShema.methods.toJSON=function(){
    let user = this.toObject();
    delete user.password;
    return user;
}

UserShema.methods.comparePassword =function(password){
    return compareSync(password,this.password);
}

UserShema.pre('save',async function(next){
    const user = this;
    if (!user.isModified("password")){return next()}

    const salt=genSaltSync(10);
    const hashedPassword = hashSync(user.password,salt);
    user.password=hashedPassword;
    next();
})

module.exports =mongoose.model("user",UserShema)