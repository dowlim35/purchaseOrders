import {FormType} from '../../assets/enums/FormType';

import {AccountType} from '../../assets/enums/AccountType';
import {PurchaseOrder} from './purchaseOrder';

export interface History {
  pNo: number;
  formType: FormType;
  subAccount: AccountType;
  desc: string;
  date: Date;
  status: string;
  details: PurchaseOrder;

  // static fromJson(obj: any): History {
  //   const result = new History();
  //   result.poNumber = parseInt(obj.poNumber, 10);
  //   result.formType = obj.formType;
  //   result.subAccount = obj.subAccount;
  //   result.desc = obj.desc;
  //   result.date = obj.date;
  //   result.status = obj.status;
  //   return result;
  // }
  // result.date = new Date(obj.date);
}
