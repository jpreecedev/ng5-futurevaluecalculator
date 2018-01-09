import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { BasicDetailsComponent } from './basic-details/basic-details.component';
import { FutureValueCalculatorComponent } from './future-value-calculator/future-value-calculator.component';
import { SummaryComponent } from './summary/summary.component';
import { TextFieldComponent } from './text-field/text-field.component';

import * as reducers from './reducers/reducers';

@NgModule({
  declarations: [
    AppComponent,
    BasicDetailsComponent,
    FutureValueCalculatorComponent,
    SummaryComponent,
    TextFieldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot(reducers),
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 25 }) : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
