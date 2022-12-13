import mongoose from "mongoose";


const  Schema=mongoose.Schema;

const Userschema= new Schema(

    {name:{type:String , required:true},
    email:{type:String , required:true ,trim:true},
    password:{type:String , required:true , trim:true}

    }
);

export default mongoose.model("users",Userschema);

//user