import { Router } from 'express';

import { newUserRequestValidator } from '../validations/UserValidator.js';

import { userController } from '../controllers/UserController.js';

const userRouter = Router();

userRouter.get('/', userController.getUsers);
userRouter.post('/', newUserRequestValidator, userController.createUser);

export { userRouter };
