import  express from "express";
import mongoose from "mongoose";
import router from "./Routes/userRoutes";

const app = express();
app.use(express.json());
 


app.use("/api/blog",router);

mongoose.connect("mongodb+srv://root:root@cluster0.ghjtj1a.mongodb.net/blog")

console.log("database is connected")


app.listen(5000);

console.log("run on port 5000")

export default app;