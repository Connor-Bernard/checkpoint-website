import express from 'express';

import { apiRouter } from './api/index.js';
import { PORT } from './config/env.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

apiRouter(app);

app.listen(PORT, () => {
    console.log(`Server started in port ${PORT}`);
});
