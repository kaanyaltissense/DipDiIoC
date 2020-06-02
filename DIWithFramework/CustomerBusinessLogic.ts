import { inject, named, injectable } from 'inversify';
import { ICustomerDataAccess, ICustomerBusinessLogic } from './Interfaces';

@injectable()
export class CustomerBusinessLogic implements ICustomerBusinessLogic {

    constructor(
        @inject('DataService') @named('Customer') private customerDataAccess: ICustomerDataAccess
    ) { }

    public getCustomerName() {
        return this.customerDataAccess.getCustomerName();
    }
}
