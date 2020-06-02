import { expect } from 'chai';
import { CustomerBusinessLogic } from './noIoC';

describe('Testing CustomerBusinessLogic getCustomerName', () => {
    let customerBusinessLogic;

    beforeEach(() => {
        customerBusinessLogic = new CustomerBusinessLogic();
    })

    describe('When getCustomerName is called with the stubbed object', () => {
        it('Should use the mock behavior defined in the stub', () => {
            const expectedResult = 'My name is Jeeeef!';
            const actualResult = customerBusinessLogic.getCustomerName();
            expect(actualResult).to.equal(expectedResult);
        });
    });
});