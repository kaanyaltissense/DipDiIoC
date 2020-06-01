namespace SetterInjection {
    /**
     * We are basically providing a setter method for each deendency.
     * This setter function can be used anywhere and at any time in the code.
     */
    class CustomerService {
        private customerBusinessLogic: CustomerBusinessLogic;

        constructor() {
            this.customerBusinessLogic = new CustomerBusinessLogic();
            this.customerBusinessLogic.setDataAccess(new DataAccess());
        }

        public getCustomerName(): string {
            return this.customerBusinessLogic.getCustomerName();
        }
    }

    interface ICustomerDataAccess {
        getCustomerName(): string;
    }

    class CustomerBusinessLogic {
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
