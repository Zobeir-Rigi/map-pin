const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");

// User registration
router.post("/register", async (req, res) => {
  try {
    // Generate a secure password hash
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create a new user with the provided details
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    //save user and respond,Save the user to the database
    const user = await newUser.save();
    // Respond with the user's ID
    res.status(200).json(user._id);
  } catch (err) {
    // Handle any errors
    console.log(err);
    res.status(500).json(err);
  }
});

/*******************************  User login */
router.post("/login", async (req, res) => {
  try {
    // Find the user based on the provided username
    const user = await User.findOne({ username: req.body.username });

    // Check if the user exists
    if (!user) {
      res.status(400).json("Wrong username or password");
      return;
    }
    // !user && res.status(400).json("Wrong username or password");

    // Compare the provided password with the stored password hash
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    // Check if the password is correct
    if (!validPassword) {
      res.status(400).json("Wrong username or password");
      return;
    }
    // !validPassword && res.status(400).json("Wrong username or password");

    // Respond with the user's ID and username
    res.status(200).json({ _id: user._id, username: user.username });
  } catch (err) {
    // Handle any errors
    res.status(500).json(err);
  }
});

module.exports = router;
