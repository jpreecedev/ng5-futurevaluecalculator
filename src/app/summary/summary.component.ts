import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../reducers/app.states';
import { Property } from '../models/property.model';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html'
})
export class SummaryComponent {

  property: Property;

  constructor(_store: Store<AppState>) {
    _store.select('property').subscribe(result => {
      this.property = result;
    });
  }
}
