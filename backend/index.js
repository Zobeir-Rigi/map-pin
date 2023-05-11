const express = require("express");
const mongoose = require("mongoose");
/*connecting database */
const dotenv = require("dotenv");

dotenv.config();
mongoose.connect(process.env.MONGO_URL, 
  //useUnifiedTopology:true,
  {useNewUrlParser: true})
.then(()=>console.log("MongoDb connected"));
/********************************************** */
const app = express();
app.use(express.json()) // to use somethins as a post method we have to parse the body

const pinRoute = require("./routes/pins")//to use it use middleware app.use

app.use("/api/pins", pinRoute);//its gona run post method in the pins.js and api/pins is an optional route

app.listen(8800, () =>{
   console.log("server is listenig to port 8080")
});
