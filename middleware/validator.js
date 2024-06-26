// Importation
const {check, validationResult} = require("express-validator");

// exports

// register
exports.registerValidation = () => [
  check("name", "name is required").not().isEmpty(),
  check("lastName", "lastName is required").not().isEmpty(),
  check("email", "Enter a valid email").isEmail(),
  check("password", "Enter a valid password").isLength({min: 6}),
];

// login
exports.loginValidation = () => [
  check("email", "Enter a valid email").isEmail(),
  check("password", "Enter a valid password").isLength({min: 6}),
];

// validation
exports.validation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()});
  }
  next();
};
