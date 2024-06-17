const { check, validationResult } = require('express-validator');

const validateSignup = [
    check('first_name').optional().notEmpty().withMessage('First name cannot be empty if provided'),
    check('last_name').optional().notEmpty().withMessage('Last name cannot be empty if provided'),
    check('email').isEmail().withMessage('Invalid email address'),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = { validateSignup };