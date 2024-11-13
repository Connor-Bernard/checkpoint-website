import express from 'express';

/**
 * Generic Error Handler
 *
 * @param {Error} err
 * @param {express.Request} _req
 * @param {express.Response} res
 * @param {express.NextFunction} _next
 * @returns {express.Response}
 */
export default async function genericErrorHandler(err, _req, res, _next) {
    console.error(err);

    const message = 'Internal Server Error';
    if (!err.status) {
        return res.status(500).json({
            error: { message },
        });
    }

    return res.status(err.status).json({
        error: {
            message: err.message || message,
        },
    });
}
