const { validationResult } = require("express-validator");

const users = []

const signup = (req, res) => {
    const { first_name, last_name, email, password } = req.body;

    // Check if user already exists
    const userExists = users.find(user => user.email === email);
    if (userExists) {
        return res.status(400).json({ error: 'Email already registered' });
    }

    // Save user
    const newUser = { first_name, last_name, email, password };
    users.push(newUser);

    // Respond to client
    res.status(201).json({ message: 'User created successfully', user: newUser });
};

module.exports = { signup };