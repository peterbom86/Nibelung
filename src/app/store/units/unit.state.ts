import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store/';
import { Subfaction } from 'src/app/components/faction/subfaction/subfaction';
import { Unit } from 'src/app/components/unit/unit';
import { UnitService } from 'src/app/services/unit.service';
import { LoadFactions, LoadSubfactions, LoadUnits } from './unit.actions';
import { patch } from '@ngxs/store/operators';
import { Faction } from 'src/app/components/faction/faction-rules/faction';

export interface AppState {
  rules: RulesStateModel
}

export interface RulesStateModel {
  units: Unit[];
  subfactions: Subfaction[];
  factions: Faction[];
}

@State<RulesStateModel>({
  name: 'rules',
  defaults: {
    units: [],
    subfactions: [],
    factions: []
  },
})
@Injectable()
export class UnitsState {
  constructor(private unitService: UnitService) { }

  @Action(LoadUnits)
  loadUnits(ctx: StateContext<RulesStateModel>): void {
    const units = this.unitService.getUnits();
    ctx.setState(patch({ units: [...units] }) );
  }

  @Action(LoadSubfactions)
  loadSubfactions(ctx: StateContext<RulesStateModel>): void {
    const subfactions = this.unitService.getSubfactions();
    ctx.setState(patch({ subfactions: [...subfactions] }) );
  }

  @Action(LoadFactions)
  loadFactions(ctx: StateContext<RulesStateModel>): void {
    const factions = this.unitService.getFactions();
    ctx.setState(patch({ factions: [...factions] }) );
  }
}
