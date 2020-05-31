const mongoose = require("mongoose");
const {Shema} = mongoose;

const CommentSchema = new Shema({
    comment:{type:String,require:true},
    description:{type:String},
    author:{
        type:Shema.Types.ObjectId,
        ref:"user",
        required:true,
        autopopulate:true
    },
})

CommentSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("comment",CommentSchema)