import  express from 'express';
import {getAllusers ,signup } from"../contraler/user-contraler";


const router = express.Router();



router.get("/",getAllusers);

console.log("getAllusers work");

router.post("/signup",signup);

console.log("signup work");


// router.post("/login",login);




export default router;