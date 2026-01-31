const mongoose=require("mongoose")
const URL="mongodb://localhost:27017/blogPr"


mongoose.connect(URL)
.then(()=>{console.log("Database Connected")})
.catch((e)=>{console.log("Database Not connected")})


module.exports=mongoose