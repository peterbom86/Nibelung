import { Injectable } from '@angular/core';
import { Unit } from '../components/unit/unit';
import { UNITS } from '../data/NobleElves/NobleElves_units';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  constructor() { }

  getUnits(): Unit[] {
    return UNITS;
  }
}
