import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable, switchMap } from 'rxjs';
import { AppState, RulesStateModel } from 'src/app/store/units/unit.state';
import { Faction } from './faction';

@Component({
  selector: 'app-faction-rules',
  templateUrl: './faction-rules.component.html',
  styleUrls: ['./faction-rules.component.scss']
})
export class FactionRulesComponent {

  faction$: Observable<Faction | undefined>;

  constructor(private route: ActivatedRoute, private store: Store) {
    this.faction$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const factionId = params.get('id') as string;
        return this.store.select((state: AppState) =>
          state.rules.factions.find((f: Faction) => f.id === factionId)
        );
      })
    );
  }
}
