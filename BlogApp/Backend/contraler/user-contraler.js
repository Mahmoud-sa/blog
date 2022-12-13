import User from "../model/User";
import bcryptjs  from "bcryptjs";


export const login = async (req,res,next) =>
{
    const {email,password} = req.body;
         let existed_user;
    try {
        existed_user = await User.findOne({email});
    } catch (error) {
        console.log(error)
    }
        
    
    if(!existed_user)
    { return res.status(404).json({message:"you are already user"})}

    const ispasswordcorrect = bcrypt.compareSync(password, existed_user.password );
        if(!ispasswordcorrect)
        {
            return res.status(400).json({message:"Inccorect password or email"})
        } 
        return res.status(200).json({message:" welcome home page "});}; 


export  const signup = async (req,res,next)=>
{

    const {name,email,password} = req.body;
         
    let existed_user;

    try {

        console.log("check if i have  a user")

        existed_user = await User.findOne({email})
        
    } catch (error) {
        console.log("this is an erro ----____||>>" + error)
        
    };
 

    if(existed_user)
    { return res.status(404).json({message:"you are already user"})}

    

    const hashpassword = bcryptjs.hashSync(password);

    
    const user =new User({
    name,
    email,
    password:hashpassword
});

    try {
        user.save();
        console.log("save new user"); 

    } catch (error) 
    {
        console.log(error);    
    }
      
          return res.status(200).json({user});
};


export  const getAllusers = async (req,res,next)=>
{
    let users ;

    try {

        console.log("iam searching for users")
        users = await User.find();
        
    } catch (error) {
        console.log(error);    
    }
    if(!users)
    {  
          return res.status(404).json({message:"No user found "})};

          return res.status(200).json({users});
};


