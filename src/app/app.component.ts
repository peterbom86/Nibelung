import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { LoadUnits } from './store/units/unit.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new LoadUnits());
  }
}
