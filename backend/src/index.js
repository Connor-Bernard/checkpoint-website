import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';

import { apiRouter } from './api/index.js';
import { PORT } from './config/env.js';

const app = express().use(
    helmet.contentSecurityPolicy({
        directives: {
            // eslint-disable-next-line quotes
            defaultSrc: ["'self'"],
        },
    }),
    cors(),
    rateLimit({
        windowMs: 15 * 60 * 1000,
        limit: 100,
        message: 'Too many requests from this IP, please try again in an hour!',
    }),
    express.json(),
    express.urlencoded({ extended: true }),
);

apiRouter(app);

app.listen(PORT, () => {
    console.log(`Server started in port ${PORT}`);
});
