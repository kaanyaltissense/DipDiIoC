import 'reflect-metadata';

import { Container } from 'inversify';
import { CustomerBusinessLogic } from './CustomerBusinessLogic';
import { CustomerDataAccess } from './CustomerDataAccess';
import { SomeOtherDataAccessService } from './SomeOtherDataAccess';
import { ICustomerBusinessLogic, ICustomerDataAccess } from './Interfaces';
import { config } from './config';

export const kernel = new Container();

if (config.isFileDbEnabled) {
    kernel.bind<ICustomerDataAccess>('DataService').to(SomeOtherDataAccessService).inSingletonScope().whenTargetNamed('Customer');
} else {
    kernel.bind<ICustomerDataAccess>('DataService').to(CustomerDataAccess).inSingletonScope().whenTargetNamed('Customer');
}

kernel.bind<ICustomerBusinessLogic>('CustomerBusinessLogic').to(CustomerBusinessLogic);