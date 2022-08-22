import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactionRulesComponent } from './components/faction/faction-rules/faction-rules.component';
import { SubfactionComponent } from './components/faction/subfaction/subfaction.component';
import { ArmyRecruitmentComponent } from './components/rules/army-recruitment/army-recruitment.component';
import { MaxFieldAllowanceComponent } from './components/rules/army-recruitment/max-field-allowance/max-field-allowance.component';
import { RecruitingComponent } from './components/rules/army-recruitment/recruiting/recruiting.component';
import { UpkeepComponent } from './components/rules/army-recruitment/upkeep/upkeep.component';
import { DiceProfileComponent } from './components/rules/dice-profile/dice-profile.component';
import { FactionsComponent } from './components/rules/factions/factions.component';
import { CastingSpellsComponent } from './components/rules/magic/casting-spells/casting-spells.component';
import { CounteringSpellsComponent } from './components/rules/magic/countering-spells/countering-spells.component';
import { MagicComponent } from './components/rules/magic/magic.component';
import { SpellTypesComponent } from './components/rules/magic/spell-types/spell-types.component';
import { CombatOrdersComponent } from './components/rules/orders/combat-orders/combat-orders.component';
import { NormalOrdersComponent } from './components/rules/orders/normal-orders/normal-orders.component';
import { OrdersComponent } from './components/rules/orders/orders.component';
import { ReactiveOrdersComponent } from './components/rules/orders/reactive-orders/reactive-orders.component';
import { ExperienceAndLevelingComponent } from './components/rules/other-concepts/experience-and-leveling/experience-and-leveling.component';
import { FlankingComponent } from './components/rules/other-concepts/flanking/flanking.component';
import { LegendaryHeroesComponent } from './components/rules/other-concepts/legendary-heroes/legendary-heroes.component';
import { OtherConceptsComponent } from './components/rules/other-concepts/other-concepts.component';
import { PushesComponent } from './components/rules/other-concepts/pushes/pushes.component';
import { RoundDescriptionComponent } from './components/rules/round-description/round-description.component';
import { RulesComponent } from './components/rules/rules.component';
import { ExampleScenarioComponent } from './components/rules/scenarios/example-scenario/example-scenario.component';
import { ScenarioElementsComponent } from './components/rules/scenarios/scenario-elements/scenario-elements.component';
import { ScenarioStructureComponent } from './components/rules/scenarios/scenario-structure/scenario-structure.component';
import { ScenarioVictoryConditionsComponent } from './components/rules/scenarios/scenario-victory-conditions/scenario-victory-conditions.component';
import { ScenariosComponent } from './components/rules/scenarios/scenarios.component';
import { TerrainComponent } from './components/rules/terrain/terrain.component';
import { TurnDescriptionComponent } from './components/rules/turn-description/turn-description.component';
import { UnitProfileComponent } from './components/rules/unit-profile/unit-profile.component';
import { UnitComponent } from './components/unit/unit.component';

const routes: Routes = [
  { path: 'unit/:id', component: UnitComponent },
  { path: 'faction/:id', component: FactionRulesComponent },
  { path: 'subfaction/:id', component: SubfactionComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'rules/armyRecruitment', component: ArmyRecruitmentComponent},
  { path: 'rules/fieldAllowance', component: MaxFieldAllowanceComponent },
  { path: 'rules/recruiting', component: RecruitingComponent },
  { path: 'rules/upkeep', component: UpkeepComponent },
  { path: 'rules/diceProfile', component: DiceProfileComponent },
  { path: 'rules/factions', component: FactionsComponent },
  { path: 'rules/magic', component: MagicComponent },
  { path: 'rules/castingSpells', component: CastingSpellsComponent },
  { path: 'rules/countering', component: CounteringSpellsComponent },
  { path: 'rules/spellTypes', component: SpellTypesComponent },
  { path: 'rules/orders', component: OrdersComponent },
  { path: 'rules/combatOrders', component: CombatOrdersComponent },
  { path: 'rules/normalOrders', component: NormalOrdersComponent },
  { path: 'rules/reactiveOrders', component: ReactiveOrdersComponent },
  { path: 'rules/otherConcepts', component: OtherConceptsComponent },
  { path: 'rules/xp', component: ExperienceAndLevelingComponent },
  { path: 'rules/flanking', component: FlankingComponent },
  { path: 'rules/legends', component: LegendaryHeroesComponent },
  { path: 'rules/pushes', component: PushesComponent },
  { path: 'rules/roundDesc', component: RoundDescriptionComponent },
  { path: 'rules/turnDesc', component: TurnDescriptionComponent },
  { path: 'rules/scenarios', component: ScenariosComponent },
  { path: 'rules/exampleScenario', component: ExampleScenarioComponent },
  { path: 'rules/scenarioElements', component: ScenarioElementsComponent },
  { path: 'rules/scenarioStructure', component: ScenarioStructureComponent },
  { path: 'rules/victoryConditions', component: ScenarioVictoryConditionsComponent },
  { path: 'rules/terrain', component: TerrainComponent },
  { path: 'rules/unitProfile', component: UnitProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
