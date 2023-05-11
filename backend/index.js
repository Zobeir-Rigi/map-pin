const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json()) // to use somethins as a post method we have to parse the body
const pinRoute = require("./routes/pins")//to use it use middleware app.use
const userRoute = require("./routes/users")//to use it use middleware app.use

/*connecting database */
const dotenv = require("dotenv");

dotenv.config();
mongoose.connect(process.env.MONGO_URL, 
  //useUnifiedTopology:true,
  {useNewUrlParser: true})
.then(()=>console.log("MongoDb connected"));
/********************************************** */

app.use("/api/pins", pinRoute);//its gona run post method in the pins.js and api/pins is an optional route
app.use("/api/users", userRoute);

app.listen(8800, () =>{
   console.log("server is listenig to port 8080")
});
