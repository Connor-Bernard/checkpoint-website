import Base from './Base.js';
import { STATUS_NOT_FOUND } from '../../../api/v1/helpers/index.js';

export class NotFoundError extends Base {
    constructor(message, stack = undefined) {
        super(message, STATUS_NOT_FOUND, stack);
        this.name = 'notFoundError';
    }
}
