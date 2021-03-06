export class TravelModel {
  constructor(public departureairport: string,
              public unitname: string,
              public sdk: string,
              public numberofpassengers: string,
              public paymentmethod: string,
              public subaccount: string,
              public reasonfortravel: string,
              public creditcard: string,
              public arrivalairport: string,
              public departuredate: Date,
              public arrivaldate: Date,
              public cost: number,
              public costoption: boolean,
              public reason: string,
              public hotelname: string,
              public hotelcost: number,
              public hoteldates: Date,
              public car: string,
              public collectionat: Date,
              public carpickup: Date,
              public totalprice: number,
              public returnto: string,
              public costperday: number)
  {
  }
}
