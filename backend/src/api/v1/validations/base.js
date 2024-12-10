import { STATUS_BAD_REQUEST } from '../helpers/index.js';
import { validationResult } from 'express-validator';

export default function validate(req, res, next) {
    // Express validator doesn't like this since we are using express v5 with async support :(
    const errors = validationResult(req);
    if (!errors.length === 1 && errors[0].status) {
        return res.status(errors[0].status).send(errors[0].message);
    }

    if (!errors.isEmpty()) {
        const status = errors.reduce((a, b) => Math.max(a.status, b.status), STATUS_BAD_REQUEST);
        return res.status(status).send(errors);
    }

    return next(req);
}