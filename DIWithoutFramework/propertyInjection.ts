
/**
 * We are basically providing a setter method for each deendency.
 * This setter function can be used anywhere and at any time in the code.
 */
import * as fs from 'fs';
import * as path from 'path';
export class CustomerService {
    private customerBusinessLogic: CustomerBusinessLogic;

    constructor() {
        this.customerBusinessLogic = new CustomerBusinessLogic();
        if (process.env.USE_THE_OTHER_DATA_SERVICE === 'true') {
            this.customerBusinessLogic.setDataAccess(new SomeOtherDataAccessService());
        } else {
            this.customerBusinessLogic.setDataAccess(new DataAccess());
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

    constructor() {
    }

    public getCustomerName() {
        return this.customerDataAccess.getCustomerName();
    }

    public setDataAccess(dataAccess: ICustomerDataAccess) {
        this.customerDataAccess = dataAccess;
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