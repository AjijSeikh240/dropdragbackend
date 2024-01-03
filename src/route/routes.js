import express from "express";
import TodosList from "../controllers/ListTodos.Controller.js";
import { GetTodoList,ToduListDelete } from "../controllers/ListTodos.Controller.js";
import cors from "cors";
 import TodusTaskCreate from "../controllers/TodusTask.Controllers.js";
 import { updateContent,getTask,autoUpdateContent,deleteElement } from "../controllers/TodusTask.Controllers.js";

 



const router=express.Router()

router.post("/todocreate",TodosList)
router.get("/gettodos",GetTodoList)
router.delete("/deletelist/:id",ToduListDelete)

//  Todus task
router.post("/todustask",TodusTaskCreate)
router.get("/gettask",getTask)
router.patch("/contentupdate",updateContent)
router.patch("/autocontentupdate",autoUpdateContent)
router.delete("/contentdelete/:id",deleteElement)





export default router;