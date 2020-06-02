import "reflect-metadata";
import { expect } from 'chai';
import * as sinon from 'sinon';
import { CustomerBusinessLogic } from '../DIWithFramework/CustomerBusinessLogic';



describe('Testing CustomerBusinessLogic getCustomerName', () => {
    let sandbox: sinon.SinonSandbox;
    let customerBusinessLogic: CustomerBusinessLogic;

    const mockDataAccess: any = {
        getCustomerName: Function
    }

    let getCustomerNameStub: sinon.SinonStub;

    before(() => {
        sandbox = sinon.createSandbox();
    })
    beforeEach(() => {
        getCustomerNameStub = sandbox.stub(mockDataAccess, 'getCustomerName');
        customerBusinessLogic = new CustomerBusinessLogic(mockDataAccess);
    })
    afterEach(() => {
        sandbox.restore();
    })

    describe('When getCustomerName is called with the stubbed object', () => {
        it('Should use the mock behavior defined in the stub', () => {
            const expectedResult = 'My name is Jeeeef!';
            getCustomerNameStub.returns(expectedResult);
            const actualResult = customerBusinessLogic.getCustomerName();
            expect(actualResult).to.equal(expectedResult);
        });
    });
});