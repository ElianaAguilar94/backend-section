const mongoose = require("mongoose");
const {Shema } = mongoose;

const IdeaSchema = new Shema({
    idea:{type:String,require:true},
    description:{type:String},
    upvotes:[{type:Boolean}],
    downvotes:[{type:Boolean}],
    author:{
        type:Shema.Types.ObjectId,
        ref:"user",
        required:true,
        autopopulate:true
    },
    comments:[
        {
            type:Shema.Types.ObjectId,
            ref:"comment",
            required:true,
            autopopulate:true
        }
    ]
})

IdeaSchema.plugin(require("mongoose-autopopulate"));

module.exports= mongoose.model("idea",IdeaSchema);