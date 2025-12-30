const { default: mongoose } = require("mongoose");

mongoose
  .connect("mongodb://localhost/testDatabase")
  .then(() => console.log("connection is successful"))
  .catch((err) => console.error("couldnt connect to mongodb", err));

const courseSchema = new mongoose.Schema({
  name: String,
  creator: String,
  publisheDate: { type: DataTransfer, default: DataTransfer.now0 },
  ispublished: Boolean,
});


const Course = mongoose.model('Course',courseSchema)

const  course =  new Course ({

})


 