
import * as fs from 'fs';
import * as path from 'path';
import { injectable } from 'inversify';
import { ICustomerDataAccess } from './Interfaces';

@injectable()
export class SomeOtherDataAccessService implements ICustomerDataAccess {
    public getCustomerName(): string {
        const dbOutput = fs.readFileSync(path.join(__dirname, '../customerDb'), { encoding: 'utf-8' });
        return dbOutput;
    }
}