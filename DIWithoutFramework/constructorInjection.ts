
/**
 * Here 'CustomerService' refers to the service in n-tier architecture
 * This is going to be our 'injector'
 * As can be seen, the injector class provides the dependency, aka ICustomerDataAccess implementation, in the constructor of the
 * client class (CustomerBusinessLogic)
 */
import * as fs from 'fs';
import * as path from 'path';
export class CustomerService {
    private customerBusinessLogic: CustomerBusinessLogic;

    constructor() {
        if (process.env.USE_THE_OTHER_DATA_SERVICE === 'true') {
            this.customerBusinessLogic = new CustomerBusinessLogic(new SomeOtherDataAccessService());
        } else {
            this.customerBusinessLogic = new CustomerBusinessLogic(new DataAccess());
        }
    }

    public getCustomerName(): string {
        return this.customerBusinessLogic.getCustomerName();
    }
}

export interface ICustomerDataAccess {
    getCustomerName(): string;
}

export class CustomerBusinessLogic {
    private customerDataAccess

    constructor(customerDataAccess: ICustomerDataAccess) {
        this.customerDataAccess = customerDataAccess;
    }

    public getCustomerName() {
        return this.customerDataAccess.getCustomerName();
    }
}

export class DataAccess implements ICustomerDataAccess {
    constructor() {

    }
    public getCustomerName(): string {
        return "Narutooooooooooo";
    }
}

export class SomeOtherDataAccessService implements ICustomerDataAccess {
    public getCustomerName() {
        const dbOutput = fs.readFileSync(path.join(__dirname, '../customerDb'), { encoding: 'utf-8' });
        return dbOutput;
    }
}



console.log(new CustomerService().getCustomerName());