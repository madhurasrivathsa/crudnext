import mongoose from "mongoose"
const topicSchema = new mongoose.Schema({//this is the table structure
    title:{
        type:String,
        required:[true,"Please provide the title"],
        
    },
    description:{
        type:String,
        required:[true,"Please Provide the description"],
    
    },
    
   
})
const Topic=mongoose.models.topics||mongoose.model("topics",topicSchema);
export default Topic;
