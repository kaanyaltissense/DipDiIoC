/**
 * Here we are implementing a basic factory to implement IoC
 * 
 * CustomerBusinessLogic no longer creates the DataAccess object itself.
 * It uses DataAccessFactory to get an instance of DataAccess. 
 * Already CustomerBusinessLogic and DataAccess are less coupled compared to how they were before
 */
namespace IoCWithFactory {
    class CustomerBusinessLogic {
        constructor() {
        }

        public getCustomerName() {
            const dataAccess: DataAccess = DataAccessFactory.getDataAccessObject();
            return dataAccess.getCustomerName();
        }
    }

    class DataAccessFactory {
        public static getDataAccessObject(): DataAccess {
            return new DataAccess();
        }
    }

    class DataAccess {
        constructor() {

        }
        public getCustomerName(): string {
            return "Narutooooooooooo";
        }
    }
}