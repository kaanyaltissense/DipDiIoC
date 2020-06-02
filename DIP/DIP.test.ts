import "reflect-metadata";
import { expect } from 'chai';
import * as sinon from 'sinon';
import { CustomerBusinessLogic, DataAccessFactory } from './DIP';

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
        customerBusinessLogic = new CustomerBusinessLogic();
    })
    afterEach(() => {
        sandbox.restore();
    })

    describe('When getCustomerName is called with the stubbed object', () => {
        it('Should use the mock behavior defined in the stub', () => {
            const expectedResult = 'My name is Jeeeef!';
            sinon.stub(DataAccessFactory, 'getDataAccessObject').returns(mockDataAccess);
            getCustomerNameStub.returns(expectedResult);
            const actualResult = customerBusinessLogic.getCustomerName();
            expect(actualResult).to.equal(expectedResult);
        });
    });
});