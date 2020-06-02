import { ICustomerDataAccess } from './CustomerBusinessLogic';
import * as fs from 'fs';
import { injectable } from 'inversify';

@injectable()
export class SomeOtherDataAccessService implements ICustomerDataAccess {
    public getCustomerName(): string {
        const dbOutput = fs.readFileSync('../customerDb', { encoding: 'utf-8' });
        return dbOutput;
    }
}

console.log(new SomeOtherDataAccessService().getCustomerName());