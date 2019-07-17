export class DraftHistory {
  formType: string;
  subAccount: string;
  desc: string;
  date: string;

  static fromJson(obj: any): DraftHistory {
    const result = new DraftHistory();
    result.formType = obj.formType;
    result.subAccount = obj.subAccount;
    result.desc = obj.desc;
    result.date = obj.date;
    return result;
  }}
