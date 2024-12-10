import Base from './Base.js';
import { STATUS_INTERNAL_SERVICE_ERROR } from '../../../api/v1/helpers/index.js';

export const INTERNAL_SERVICE_ERROR_STATUS = 500;

export class InternalServiceError extends Base {
    constructor(message, stack = undefined) {
        super(message, STATUS_INTERNAL_SERVICE_ERROR, stack);
        this.name = 'internalServiceError';
    }
}
