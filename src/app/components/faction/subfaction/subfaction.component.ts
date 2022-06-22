import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable, switchMap } from 'rxjs';
import { AppState, RulesStateModel } from 'src/app/store/units/unit.state';
import { Subfaction } from './subfaction';

@Component({
  selector: 'app-subfaction',
  templateUrl: './subfaction.component.html',
  styleUrls: ['./subfaction.component.scss']
})
export class SubfactionComponent {

  subfaction$: Observable<Subfaction | undefined>;

  constructor(private route: ActivatedRoute, private store: Store) {
    this.subfaction$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const subfactionId = params.get('id') as string;
        return this.store.select((state: AppState) =>
          state.rules.subfactions.find((s) => s.id === subfactionId)
        );
      })
    );
  }
}
