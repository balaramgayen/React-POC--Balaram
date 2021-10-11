const router = require("express").Router();

const User = require("../models/User");

// add user

router.post("/adduser", async (req, res) => {
  const newUser = new User(req.body);

  try {
    const saveUser = await newUser.save();

    res.status(200).json(saveUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get all user data
router.get("/getuser", async (req, res) => {
  try {
    const allUser = await User.find();
    res.status(200).json(allUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get single user data
router.get("/getuser/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update user
// router.put("updateuser/:id", async (req, res) => {});
module.exports = router;
