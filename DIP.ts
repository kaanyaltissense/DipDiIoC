/**
 * CustomerBusinessLogic and DataAccess are concrete implementations, we can create objects using them
 * We cannot create objects of abstractions (Interfaces, Abstract Classes)
 * Even though we achieved Ioc by implementing a factory and outsourcing creation of the DataAccess object,
 * CustomerBusinessLogic was still dependent on cocnrete DataAccess, so they are still quite tightly coupled.
 * Here we are itroducing an abstraction in between them to loosen this dependency
 * 
 * As a result our high level module, CustomerBusinessLogic, no longer depends on a concrete class but depends on an abstraction (ICustomerDataAccess)
 * and the abstraction does not depend on the detail (DataAccess), but the detail depend on the abstraction
 * 
 * It is now quite easy to switch out DataAccess with another class (SomeOtherDataAccessService) that implements ICustomerDataAccess, and we won't have to make changes in
 * CustomerBusinessLogic
 */
namespace DIP {

    class CustomerBusinessLogic {
        constructor() {
        }

        public getCustomerName() {
            const dataAccess: ICustomerDataAccess = DataAccessFactory.getDataAccessObject();
            return dataAccess.getCustomerName();
        }
    }

    // The abstraction that we introduced is this interface
    interface ICustomerDataAccess {
        getCustomerName(): string;
    }

    class DataAccessFactory {
        public static getDataAccessObject(): ICustomerDataAccess {
            return new DataAccess();
        }
    }

    class DataAccess implements ICustomerDataAccess {
        constructor() {

        }
        public getCustomerName(): string {
            return "Narutooooooooooo";
        }
    }

    class SomeOtherDataAccessService implements ICustomerDataAccess {
        public getCustomerName() {
            return "Sasukeeeeeeeeeeeeeeeee";
        }
    }
}