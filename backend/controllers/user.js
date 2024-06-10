const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// register
exports.register = async (req, res) => {
  try {
    const { name, lastName, email, password, phone } = req.body;
    const foundUser = await User.findOne({ email });
    if (foundUser) {
      return res
        .status(400)
        .send({ errors: [{ msg: 'this email already exists !' }] });
    }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    // newUser
    const newUser = new User({ ...req.body });
    newUser.password = hashedPassword;
    await newUser.save();
    // Token
    const token = jwt.sign(
      {
        id: newUser._id,
      },
      process.env.SECRET_KEY,
      {
        expiresIn: '1h',
      }
    );
    res.status(200).send({
      msg: 'registered successfully',
      user: newUser,
      token,
    });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: 'can not register !' }] });
  }
};

// login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const foundUser = await User.findOne({ email });
    if (!foundUser) {
      // errors
      return res.status(400).send({
        errors: [
          {
            msg: 'Email or Password are incorrect ,check your email or password!',
          },
        ],
      });
      // *
    }
    const checkPassword = await bcrypt.compare(password, foundUser.password);
    if (!checkPassword) {
      // errors
      return res.status(400).send({
        errors: [
          {
            msg: 'Email or Password are incorrect ,check your email or password!',
          },
        ],
      });
      // *
    }

    // Token
    const token = jwt.sign(
      {
        id: foundUser._id,
        isAdmin: foundUser.isAdmin,
      },
      process.env.SECRET_KEY,
      {
        expiresIn: '24h',
      }
    );
    res.status(200).send({
      msg: 'You are successfully logged in',
      user: foundUser,
      token,
    });
  } catch (error) {
    // errors
    return res.status(400).send({
      errors: [
        {
          msg: 'Email or Password are incorrect ,check your email or password!',
        },
      ],
    });
  }
  // *
};

exports.getusers = async (req, res) => {
  try {
    const listusers = await User.find();
    res.status(200).send({ msg: 'Users list', listusers });
  } catch (error) {
    res.status(400).send({ msg: 'cannot get all Users', error });
  }
};
