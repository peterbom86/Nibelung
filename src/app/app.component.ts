import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { LoadFactions, LoadSubfactions, LoadUnits } from './store/units/unit.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new LoadUnits());
    this.store.dispatch(new LoadFactions());
    this.store.dispatch(new LoadSubfactions());
  }
}
