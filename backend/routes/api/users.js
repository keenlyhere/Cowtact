const express = require("express");

const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { User } = require("../../db/models");

const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const router = express.Router();

// validateSignup middleware
// checks if req.body.email exists and if it is an email
       // if req.body.password is not empty and a min length of 6
// if any one of those fail, return error response
const validateSignup = [
    check("email")
        .exists({ checkFalsy: true })
        .withMessage("Email is required.")
        .bail()
        .isEmail()
        .withMessage("Please provide a valid email."),
    check("password")
        .exists({ checkFalsy: true })
        .withMessage("Password is required.")
        .bail()
        .isLength({ min: 6 })
        .withMessage("Password must be 6 characters or more."),
    check("firstName", "First Name is required")
        .exists({ checkFalsy: true }),
    check("lastName", "Last Name is required")
        .exists({ checkFalsy: true }),
    check("birthday")
        .notEmpty()
        .withMessage("Please enter your birthday"),
    handleValidationErrors
];

// POST /api/users to sign up
router.post("/", validateSignup, async (req, res, next) => {
    const { email, password, firstName, lastName, username, googleId } = req.body;

    const existingEmail = await User.findOne({
        where: {
            email: email
        }
    })

    const existingUsername = await User.findOne({
        where: {
            username: username
        }
    })

    const err = {};
    err.status = 403;
    err.statusCode = 403;
    err.message = "User already exists"
    err.errors = [];

    if (existingEmail) {
        err.errors.push("Email already in use. Please choose a different email or login with your existing account.");

        return next(err);
    }

    if (existingUsername) {
        err.errors.push("Username already taken. Please choose a different username or log in with your existing account.");

        return next(err);
    }

    const user = await User.signup({
        email,
        password,
        firstName,
        lastName,
        username,
        googleId
    });

    await sendWelcomeEmail(newUser.email);

    await setTokenCookie(res, user);

    return res.json(user);
});

module.exports = router;
