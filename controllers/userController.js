const router = require('express').Router();

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');




exports.register = async (req, res) => {
    const isEmailExist = await User.findOne({
        email: req.body.email,
    });

    // throw error when email already registered
    if (isEmailExist)
        return res.status(400).json({
            error: 'Email already exists',
        });

    // hash the password
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
    });

    try {
        const savedUser = await user.save();
        res.json({
            error: null,
            data: {
                userId: savedUser,
            },
        });
    } catch (err) {
        res.status(400).json({
            err,
        });
    }
}


exports.login = async (req, res) => {
    const user = await User.findOne({
        email: req.body.email,
    });

    // throw error when email is wrong
    if (!user)
        return res.status(400).json({
            error: 'Email is wrong',
        });

    // check for password
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword)
        return res.status(400).json({
            error: 'Password is wrong',
        });

    // create token
    const signToken = (id, role) =>
        jwt.sign({ id, role }, process.env.JWT_SECRET);
    const token = signToken(user._id, user.role);
    res.send({
        status: 200,
        token,
        userInformation: user,
    });

}


