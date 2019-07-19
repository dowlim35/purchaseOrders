import {Training} from '../model/training';
import {Injectable} from '@angular/core';
@Injectable({
  providedIn: 'root'
})

export class TrainingService {
  name = '';
  setName(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}
