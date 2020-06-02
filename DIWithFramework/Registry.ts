import 'reflect-metadata';
import { Container } from 'inversify';
import { ICustomerDataAccess } from './CustomerBusinessLogic';
import { CustomerDataAccess } from './CustomerDataAccess';
import { SomeOtherDataAccessService } from './SomeOtherDataAccess';

const kernel = new Container();

kernel.bind<ICustomerDataAccess>('DataService').to(CustomerDataAccess).inSingletonScope().whenTargetNamed('Generic');
kernel.bind<ICustomerDataAccess>('DataService').to(SomeOtherDataAccessService).inSingletonScope().whenTargetNamed('FileDb');