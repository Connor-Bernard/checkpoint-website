import { genSalt, hash } from 'bcrypt';

import { ConflictError } from '../../../lib/errors/http/Conflict.js';
import { STATUS_CREATED } from '../helpers/http_status_codes.js';
import { User } from '../models/index.js';
import { validationResult } from 'express-validator';
import { BadRequest } from '../../../lib/errors/http/BadRequest.js';

const SALT_LENGTH = 10;

export const userController = {
    /**
     * Get all users.
     *
     * @param {express.Request} _req
     * @param {express.Response} res
     */
    getUsers: async (_req, res) => {
        const users = await User.find();
        return res.send(users);
    },
    /**
     * Creates a new user.
     * @param {express.Request} req
     * @param {string} req.body.name- the new user's username.
     * @param {string} req.body.email - the new user's email.
     * @param {string} req.body.password - the new user's plaintext password.
     * @param {express.Response} res - user data.
     * @param {number} res.status - 201 on success.
     */
    createUser: async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw new BadRequest(errors);
        }

        if (await User.findOne({ username: req.body.name })) {
            throw new ConflictError('A user with that username already exists.');
        }
        const userInfo = req.body;
        userInfo.username = userInfo.name;
        delete userInfo.name;

        userInfo.passwordSalt = await genSalt(SALT_LENGTH);
        userInfo.passwordHash = await hash(userInfo.password, userInfo.passwordSalt);
        delete userInfo.password;

        const newUser = await User.create(req.body);
        return res.status(STATUS_CREATED).send(newUser);
    },
};
