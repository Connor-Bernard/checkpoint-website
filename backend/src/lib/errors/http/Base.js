import { STATUS_INTERNAL_SERVICE_ERROR } from '../../../api/v1/helpers/index.js';

export default class Base extends Error {
    /**
     * Base HTTP error class to be used for extension.
     *
     * @param {string} message - the error message
     * @param {number} [status=500] - the corresponding status code
     * @param {string} [stack=undefined] - the existing error / stack if there is one
     */
    constructor(message, status = STATUS_INTERNAL_SERVICE_ERROR, stack = undefined) {
        super('baseHttpError', message, stack);
        this.status = status;
    }
}
