/**
 * CustomerBusinessLogic and DataAccess are concrete implementations, we can create objects using them
 * We cannot create objects of abstractions (Interfaces, Abstract Classes)
 * 
 * Even though we achieved Ioc by implementing a factory and outsourcing creation of the DataAccess object,
 * CustomerBusinessLogic was still dependent on concrete DataAccess, so they are still quite tightly coupled.
 * Here we are itroducing an abstraction in between them to loosen this dependency
 * 
 * As a result our high level module, CustomerBusinessLogic, no longer depends on a concrete 
 * class but depends on an abstraction (ICustomerDataAccess) and the abstraction does not depend 
 * on the detail (DataAccess), but the detail depend on the abstraction
 * 
 * It is now quite easy to switch out DataAccess with another class (SomeOtherDataAccessService) 
 * that implements ICustomerDataAccess, and we won't have to make changes in CustomerBusinessLogic
 */
import * as fs from 'fs';
import * as path from 'path';

export class CustomerBusinessLogic {
    constructor() {
    }

    public getCustomerName() {
        const dataAccess: ICustomerDataAccess = DataAccessFactory.getDataAccessObject();
        return dataAccess.getCustomerName();
    }
}

// The abstraction that we introduced is this interface
export interface ICustomerDataAccess {
    getCustomerName(): string;
}

export class DataAccessFactory {
    public static getDataAccessObject(): ICustomerDataAccess {
        if (process.env.USE_THE_OTHER_DATA_SERVICE === 'true') {
            return new SomeOtherDataAccessService();
        }
        return new CustomerDataAccess();
    }
}

export class CustomerDataAccess implements ICustomerDataAccess {
    constructor() {

    }
    public getCustomerName(): string {
        return "Narutooooooooooo";
    }
}

export class SomeOtherDataAccessService implements ICustomerDataAccess {
    public getCustomerName(): string {
        const dbOutput = fs.readFileSync(path.join(__dirname, '../customerDb'), { encoding: 'utf-8' });
        return dbOutput;
    }
}

console.log(new CustomerBusinessLogic().getCustomerName());