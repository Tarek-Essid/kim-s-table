// require
const express = require("express");
const {register, login, getAllUsers} = require("../controllers/user");
const {
  registerValidation,
  validation,
  loginValidation,
} = require("../middleware/validator");
const {isAuth, isAuthAdmin} = require("../middleware/isAuth");

// create route
const router = express.Router();

// Routes
//register
router.post("/register", registerValidation(), validation, register);

//logIn
router.post("/login", loginValidation(), validation, login);

// current User
router.get("/current", isAuth, isAuthAdmin, (req, res) => {
  res.send(req.user);
});

// exports
module.exports = router;
