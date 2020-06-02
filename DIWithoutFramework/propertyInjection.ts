
/**
 * We are basically providing a setter method for each deendency.
 * This setter function can be used anywhere and at any time in the code.
 */
export class CustomerService {
    private customerBusinessLogic: CustomerBusinessLogic;

    constructor() {
        this.customerBusinessLogic = new CustomerBusinessLogic();
        this.customerBusinessLogic.setDataAccess(new DataAccess());
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
        return "Sasukeeeeeeeeeeeeeeeee";
    }
}
