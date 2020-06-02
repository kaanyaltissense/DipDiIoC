import { inject, named } from 'inversify';

export interface ICustomerDataAccess {
    getCustomerName(): string;
}

export class CustomerBusinessLogic {

    constructor(
        @inject('DataService') @named('Generic') private customerDataAccess: ICustomerDataAccess
    ) { }

    public getCustomerName() {
        return this.customerDataAccess.getCustomerName();
    }
}