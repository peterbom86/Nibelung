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

@NgModule({
  declarations: [
    AppComponent,
    UnitComponent,
    YesnoPipe,
    FactionRulesComponent,
    SubfactionComponent
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
