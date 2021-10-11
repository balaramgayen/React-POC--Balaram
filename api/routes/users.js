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

// delete user data
router.delete("/:id", async (req, res) => {
  const user = User.findById(req.params.id);
  try {
    await user.deleteOne();

    res.status(200).json("user deleted successfully");
  } catch (err) {
    res.status(500).json("some error");
  }
});

//update a user
router.put("/updateuser/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json("user updated successfully");
  } catch (err) {
    res.status(500).json("error occurred");
  }
});

module.exports = router;
