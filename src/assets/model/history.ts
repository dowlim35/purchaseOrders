export class History {
  poNumber: number;
  formType: string;
  subAccount: string;
  desc: string;
  date: Date;
  status: string;

  static fromJson(obj: any): History {
    const result = new History();
    result.poNumber = parseInt(obj.poNumber, 10);
    result.formType = obj.formType;
    result.subAccount = obj.subAccount;
    result.desc = obj.desc;
    result.date = new Date(obj.date);
    result.status = obj.status;
    return result;
  }
}
