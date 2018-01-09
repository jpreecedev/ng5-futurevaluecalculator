import { Property } from '../models/property.model';
import { AppState } from '../reducers/app.states';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

import {
  priceChangedAction,
  mortgageLengthChangedAction,
  expectedAnnualIncreaseChangedAction
} from '../actions/property.actions';

@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.component.html'
})
export class BasicDetailsComponent implements OnInit {

  public property: Property;

  constructor(private _store: Store<AppState>) {  }

  ngOnInit() {
    this._store.select('property').subscribe(property => this.property = property);
  }

  priceChanged(pricePaid) {
    this._store.dispatch(priceChangedAction(Number(pricePaid)));
  }

  mortgageLengthChanged(mortgageLength) {
    this._store.dispatch(mortgageLengthChangedAction(Number(mortgageLength)));
  }

  expectedAnnualIncreaseChanged(expectedAnnualIncrease) {
    this._store.dispatch(expectedAnnualIncreaseChangedAction(Number(expectedAnnualIncrease)));
  }
}
