import { ICustomerDataAccess } from './CustomerBusinessLogic';
import { injectable } from 'inversify';

@injectable()
export class CustomerDataAccess implements ICustomerDataAccess {
    constructor() {

    }
    public getCustomerName(): string {
        return "Narutooooooooooo";
    }
}
