import Base from './Base.js';
import { STATUS_BAD_REQUEST } from '../../../api/v1/helpers/http_status_codes.js';

export class BadRequest extends Base {
    constructor(message, stack = undefined) {
        super(message, STATUS_BAD_REQUEST, stack);
        this.name = 'badRequest';
    }
}
