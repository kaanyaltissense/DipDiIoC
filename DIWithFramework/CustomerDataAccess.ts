
import { injectable } from 'inversify';
import { ICustomerDataAccess } from './Interfaces';

@injectable()
export class CustomerDataAccess implements ICustomerDataAccess {
    constructor() {

    }
    public getCustomerName(): string {
        return "Narutooooooooooo";
    }
}
