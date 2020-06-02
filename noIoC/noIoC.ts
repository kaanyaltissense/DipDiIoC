/**
 * - CustomerBusinessLogic depends on DataAccess
 * - Creates an object of DataAccess
 * - Because of this, these two classes are tightly coupled
 * - Changes in DataAccess will lead to changes in the CustomerBusinessLogic class
 * - What would happen if in the future we need to get customer from another database, or from a web service?
 * - It is not possible to replace DataAccess with a mock, so we can't really test CustomerBusinessLogic in isolation, can't do TDD
 */
export class CustomerBusinessLogic {
    private dataAccess: DataAccess;

    constructor() {
        this.dataAccess = new DataAccess();
    }

    public getCustomerName() {
        return this.dataAccess.getCustomerName();
    }
}

export class DataAccess {
    constructor() {

    }
    public getCustomerName(): string {
        return "Narutooooooooooo";
    }
}