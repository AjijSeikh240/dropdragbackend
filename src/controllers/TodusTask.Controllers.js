
import TotosTask from "../models/TodosTask.Model.js";

  
  const TodusTaskCreate= async(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*")
    try {
        const data= req.body
        const {id,columnId,content}=data
        if(!id) return res.status(400).send("please provide id");
        if(!columnId) return res.status(400).send("please provide columnId");
        if(!content) return res.status(400).send("please provide content");

        const CreateTodos= await TotosTask.create(data)
        console.log(CreateTodos);
        res.status(201).send({status:true, data:CreateTodos})

 
        
    } catch (error) {
         res.status(500).send({status:false,error:error.message})
    }
  }

  export default TodusTaskCreate;


  export const getTask=async(req,res)=>{
    ("Access-Control-Allow-Origin", "*")
        try {
            const data= await TotosTask.find()
            res.status(200).send({status:true,data})
        } catch (error) {
          res.status(500).send({status:false,error})
        }
   }

 export const updateContent=async(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*")
   try {
       
        const data=req.body;
      
        const {id,content}=data;
     
        if(!id) res.status(400).send({status:false,msg:"please provide is"})
        console.log(id,content);
      if(content){
       const updatedata=await TotosTask.findOneAndUpdate({id:id},{$set:{content:content}},{new:true})
        
        console.log(updatedata);
        if(!updatedata) res.status(404).send({status:false,meg:"data in not present"})
        res.status(200).send({status:true,data:updatedata})
      }
    
     
   } catch (error) {
      res.status(500).send({status:false,mgs:error.message})
   }
 }



//   autoupdate 

export const autoUpdateContent=async(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*")
   try {

        const data=req.body;
      
        const {id,columnId}=data;
  
        if(!id) res.status(400).send({status:false,msg:"please provide is"})
        if(!columnId) res.status(400).send({status:false,msg:"please provide is"})
     
      // its is autoupdate
      
        const updatedata=await TotosTask.findOneAndUpdate({id:id},{$set:{columnId:columnId}},{new:true})
       
       console.log(updatedata);
       if(!updatedata) res.status(404).send({status:false,meg:"data in not present"})
       res.status(200).send({status:true,data:updatedata})
  
   } catch (error) {
      res.status(500).send({status:false,mgs:error.message})
   }
 }


 export const deleteElement=async(req,res)=>{
        try {
        
            const id=req.params.id
      
            if(!id) res.status(404).send({status:false,mgs:"id is not present"})
          const deletedEle= await TotosTask.findOneAndDelete({id:id},{new:true})
          res.status(200).send({status:true,data:deletedEle.id })
        } catch (error) {
           res.status(500).send({status:false, mgs:error})
        }
 }
