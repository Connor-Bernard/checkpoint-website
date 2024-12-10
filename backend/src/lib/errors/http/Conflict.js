import Base from './Base.js';
import { STATUS_CONFLICT } from '../../../api/v1/helpers/index.js';

export class ConflictError extends Base {
    constructor(message, stack = undefined) {
        super(message, STATUS_CONFLICT, stack);
        this.name = 'conflictError';
    }
}
