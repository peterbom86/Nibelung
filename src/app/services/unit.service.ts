import { Injectable } from '@angular/core';
import { Faction } from '../components/faction/faction-rules/faction';
import { Subfaction } from '../components/faction/subfaction/subfaction';
import { Unit } from '../components/unit/unit';
import { FACTIONS, SUBFACTIONS, UNITS } from '../data/AllData';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  constructor() { }

  getUnits(): Unit[] {
    return UNITS;
  }

  getSubfactions(): Subfaction[] {
    return SUBFACTIONS;
  }

  getFactions(): Faction[] {
    return FACTIONS;
  }
}
