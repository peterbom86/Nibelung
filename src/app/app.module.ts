import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialModule } from './angular-material.module';
import { UnitComponent } from './components/unit/unit.component';
import { UnitsState } from './store/units/unit.state';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { YesnoPipe } from './components/pipes/yesno.pipe';
import { FactionRulesComponent } from './components/faction/faction-rules/faction-rules.component';
import { SubfactionComponent } from './components/faction/subfaction/subfaction.component';
import { RulesComponent } from './components/rules/rules.component';
import { RoundDescriptionComponent } from './components/rules/round-description/round-description.component';
import { TurnDescriptionComponent } from './components/rules/turn-description/turn-description.component';
import { DiceProfileComponent } from './components/rules/dice-profile/dice-profile.component';
import { UnitProfileComponent } from './components/rules/unit-profile/unit-profile.component';
import { OrdersComponent } from './components/rules/orders/orders.component';
import { NormalOrdersComponent } from './components/rules/orders/normal-orders/normal-orders.component';
import { ReactiveOrdersComponent } from './components/rules/orders/reactive-orders/reactive-orders.component';
import { CombatOrdersComponent } from './components/rules/orders/combat-orders/combat-orders.component';
import { OtherConceptsComponent } from './components/rules/other-concepts/other-concepts.component';
import { FlankingComponent } from './components/rules/other-concepts/flanking/flanking.component';
import { PushesComponent } from './components/rules/other-concepts/pushes/pushes.component';
import { ExperienceAndLevelingComponent } from './components/rules/other-concepts/experience-and-leveling/experience-and-leveling.component';
import { LegendaryHeroesComponent } from './components/rules/other-concepts/legendary-heroes/legendary-heroes.component';
import { MagicComponent } from './components/rules/magic/magic.component';
import { CastingSpellsComponent } from './components/rules/magic/casting-spells/casting-spells.component';
import { CounteringSpellsComponent } from './components/rules/magic/countering-spells/countering-spells.component';
import { ArmyRecruitmentComponent } from './components/rules/army-recruitment/army-recruitment.component';
import { RecruitingComponent } from './components/rules/army-recruitment/recruiting/recruiting.component';
import { UpkeepComponent } from './components/rules/army-recruitment/upkeep/upkeep.component';
import { MaxFieldAllowanceComponent } from './components/rules/army-recruitment/max-field-allowance/max-field-allowance.component';
import { TerrainComponent } from './components/rules/terrain/terrain.component';
import { ScenariosComponent } from './components/rules/scenarios/scenarios.component';
import { ScenarioStructureComponent } from './components/rules/scenarios/scenario-structure/scenario-structure.component';
import { ScenarioElementsComponent } from './components/rules/scenarios/scenario-elements/scenario-elements.component';
import { ScenarioVictoryConditionsComponent } from './components/rules/scenarios/scenario-victory-conditions/scenario-victory-conditions.component';
import { ExampleScenarioComponent } from './components/rules/scenarios/example-scenario/example-scenario.component';
import { FactionsComponent } from './components/rules/factions/factions.component';

@NgModule({
  declarations: [
    AppComponent,
    UnitComponent,
    YesnoPipe,
    FactionRulesComponent,
    SubfactionComponent,
    RulesComponent,
    RoundDescriptionComponent,
    TurnDescriptionComponent,
    DiceProfileComponent,
    UnitProfileComponent,
    OrdersComponent,
    NormalOrdersComponent,
    ReactiveOrdersComponent,
    CombatOrdersComponent,
    OtherConceptsComponent,
    FlankingComponent,
    PushesComponent,
    ExperienceAndLevelingComponent,
    LegendaryHeroesComponent,
    MagicComponent,
    CastingSpellsComponent,
    CounteringSpellsComponent,
    ArmyRecruitmentComponent,
    RecruitingComponent,
    UpkeepComponent,
    MaxFieldAllowanceComponent,
    TerrainComponent,
    ScenariosComponent,
    ScenarioStructureComponent,
    ScenarioElementsComponent,
    ScenarioVictoryConditionsComponent,
    ExampleScenarioComponent,
    FactionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AngularMaterialModule,
    NgxsModule.forRoot([UnitsState], {
      developmentMode: !environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
