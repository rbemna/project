const { body, validationResult } = require("express-validator");


exports.dataProductValidator = () =>[
    //validate product that it's not empthy
    // then sanitize it with trim and escape
    body("name", "Must be at least 2 letters")
      .isLength({ min: 2 })
      .trim()
      .escape(),
    body("description","Must be at least 10 letters")
      .isLength({ min: 10 })
      .trim()
      .escape(),
    body("category","This field is required")
      .isLength({ min: 2 })
      .trim()
      .escape(),
    body("price","Must be at least 1 number")
      .isLength({ min: 1 })
      .isNumeric()
      .isInt({ gt: 0 })
      .withMessage("must be more than 0")
      .trim()
      .escape(),
      body("productImage", "This field is required")
]
  
exports.validation = (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        res.status(400).send({ errors: error.array() });
    }
    next();
};