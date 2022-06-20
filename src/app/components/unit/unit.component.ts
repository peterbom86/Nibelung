import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Attack, DamageTrack, Unit } from './unit';
import { map, switchMap } from 'rxjs/operators';
import { UnitsStateModel } from 'src/app/store/units/unit.state';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.scss']
})
export class UnitComponent {

  unit$: Observable<Unit | undefined>;

  constructor(private route: ActivatedRoute, private store: Store) {
    this.unit$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const unitId = params.get('id') as string;
        return this.store.select((state: UnitsStateModel) =>
          state.units.find((u) => u.id === unitId)
        );
      })
    );
  }

  hasXHits(attack: Attack, trackIdentifier: (t: DamageTrack) => boolean): boolean {
      return attack.damageTracks.some(trackIdentifier);
  }

  hasOneHit(attack: Attack): boolean {
    return this.hasXHits(attack, (t: DamageTrack) => t.hits1 !== undefined);
  }

  hasTwoHits(attack: Attack): boolean {
    return this.hasXHits(attack, (t: DamageTrack) => t.hits2 !== undefined);
  }

  hasThreeHits(attack: Attack): boolean {
    return this.hasXHits(attack, (t: DamageTrack) => t.hits3 !== undefined);
  }

  hasFourHits(attack: Attack):boolean {
    return this.hasXHits(attack, (t: DamageTrack) => t.hits4 !== undefined);
  }

  hasFiveHits(attack: Attack):boolean {
    return this.hasXHits(attack, (t: DamageTrack) => t.hits5 !== undefined);
  }

  hasSixHits(attack: Attack): boolean {
    return this.hasXHits(attack, (t: DamageTrack) => t.hits6 !== undefined);
  }

  hasSevenHits(attack: Attack): boolean {
    return this.hasXHits(attack, (t: DamageTrack) => t.hits7 !== undefined);
  }

  hasEightHits(attack: Attack): boolean {
    return this.hasXHits(attack, (t: DamageTrack) => t.hits8 !== undefined);
  }
}
