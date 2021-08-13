
const { body, validationResult } = require("express-validator");
exports.orderValidator=()=>[
    body("orderItems","orderItems is required").notEmpty(),
    body("shippingAddress","shippingAddress is required").notEmpty(),
    body("status","status is required").notEmpty()
]

exports.validation = (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        res.status(400).send({ errors: error.array() });
    }
    next();
};