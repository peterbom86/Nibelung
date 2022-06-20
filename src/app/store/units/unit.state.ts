import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store/';
import { Unit } from 'src/app/components/unit/unit';
import { UnitService } from 'src/app/services/unit.service';
import { LoadUnits } from './unit.actions';

export interface UnitsStateModel {
  units: Unit[];
}

@State<UnitsStateModel>({
  name: 'units',
  defaults: {
    units: [],
  },
})
@Injectable()
export class UnitsState {
  constructor(private unitService: UnitService) { }

  @Action(LoadUnits)
  loadUnits(ctx: StateContext<Unit[]>): void {
    const units = this.unitService.getUnits();
    ctx.setState([...units]);
  }
}
