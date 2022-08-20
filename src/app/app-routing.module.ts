import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactionRulesComponent } from './components/faction/faction-rules/faction-rules.component';
import { SubfactionComponent } from './components/faction/subfaction/subfaction.component';
import { RulesComponent } from './components/rules/rules.component';
import { UnitComponent } from './components/unit/unit.component';

const routes: Routes = [
  { path: 'unit/:id', component: UnitComponent },
  { path: 'faction/:id', component: FactionRulesComponent },
  { path: 'subfaction/:id', component: SubfactionComponent },
  { path: 'rules', component: RulesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
