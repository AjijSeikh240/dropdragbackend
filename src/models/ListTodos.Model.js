import mongoose from "mongoose";

  const ListTodosSchema= new mongoose.Schema({
    id:{
      type:String,
      required:[true, "Please provide your id"]
    },
    title:{
      type:String,
      required:[true, "Please provide your title of todos"]
    }
 })

  const TodoListSchema= mongoose.model("TodoList",ListTodosSchema)

  

export default TodoListSchema ;