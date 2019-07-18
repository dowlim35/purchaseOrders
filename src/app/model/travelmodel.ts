export class TravelModel {
  constructor(public departureairport: string,
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
              public cardropoff: Date,
              public returnto: string,
              public costperday: number){
  }
}
