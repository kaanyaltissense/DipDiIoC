/**
 * Here we are implementing a basic factory to implement IoC
 * 
 * CustomerBusinessLogic no longer creates the DataAccess object itself.
 * It uses DataAccessFactory to get an instance of DataAccess. 
 * We achieved Inversion of Control; however, CustomerBusinessLogic still depends 
 * on the concrete implementation DataAccess. Which is not desireable since any change in 
 * DataAccess would require changes in CustomerBusinessLogic. 
 * 
 * To achieve a more loosely coupled code, we need to introduce some abstractions
 */
export class CustomerBusinessLogic {
    constructor() {
    }

    public getCustomerName() {
        const dataAccess: DataAccess = DataAccessFactory.getDataAccessObject();
        return dataAccess.getCustomerName();
    }
}

export class DataAccessFactory {
    public static getDataAccessObject(): DataAccess {
        return new DataAccess();
    }
}

export class DataAccess {
    constructor() {

    }
    public getCustomerName(): string {
        return "Narutooooooooooo";
    }
}