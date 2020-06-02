import { kernel } from './Registry';
import { ICustomerBusinessLogic } from './Interfaces';

const customerBusinessLogic = kernel.get<ICustomerBusinessLogic>('CustomerBusinessLogic');

console.log(customerBusinessLogic.getCustomerName());