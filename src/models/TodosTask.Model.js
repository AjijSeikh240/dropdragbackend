import mongoose from "mongoose";

const TodosTaskSchema= new mongoose.Schema({
    id:String,
    columnId:String,
    content:String
})


const TotosTask= mongoose.model("TodosTask", TodosTaskSchema)

export default TotosTask;