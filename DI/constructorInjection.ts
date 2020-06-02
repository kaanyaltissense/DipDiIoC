
/**
 * Here 'CustomerService' refers to the service in n-tier architecture
 * This is going to be our 'injector'
 * As can be seen, the injector class provides the dependency, aka ICustomerDataAccess implementation, in the constructor of the
 * client class (CustomerBusinessLogic)
 */
export class CustomerService {
    private customerBusinessLogic: CustomerBusinessLogic;

    constructor() {
        this.customerBusinessLogic = new CustomerBusinessLogic(new DataAccess());
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
        return "Sasukeeeeeeeeeeeeeeeee";
    }
}



