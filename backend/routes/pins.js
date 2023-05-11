// it's gonna be the router so i call it router
const router = require("express").Router();
const Pin = require("../models/Pin");// calling my model

//create a pin
 /*it gona try to connect to database and add new pin so it's take time 
for example 2 seconds so if we do it without async res.status doesnot 
return anything and there is no savedPin and it still waiting so we need to use async
*/
router.post("/", async (req, res) => {
  const newPin = new Pin(req.body); // using our model
  // i wrote req.body because we send title, desc , rating ...everything inside the body
  try {
    const savedPin = await newPin.save();
    // if successful send 200
    res.status(200).json(savedPin);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all pins
router.get("/", async (req, res) => {
  try {
    const pins = await Pin.find();// i call the model and it gonna find all pins insid pin model
    res.status(200).json(pins);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
// because we need to import it in index.js
