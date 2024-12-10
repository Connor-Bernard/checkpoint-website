import { body, checkExact } from 'express-validator';

export const newUserRequestValidator = [
    body('name')
        .isAlphanumeric()
        .withMessage('Username must be alphanumeric')
        .escape(),
    body('email')
        .isEmail()
        .withMessage('Email is invalid'),
    body('password')
        .isStrongPassword()
        .withMessage('Password is not strong enough'),
    checkExact(),
];
