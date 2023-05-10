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

app.listen(8080, () => console.log("server is listenig to port 8080"));
