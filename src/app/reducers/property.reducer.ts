import { ActionReducer } from "@ngrx/store";
import { Property } from '../models/property.model';
import { getPropertyFutureValue } from '../utils';
import { InvestmentActions } from '../actions/property.actions';

import {
  priceChangedAction,
  mortgageLengthChangedAction,
  expectedAnnualIncreaseChangedAction
} from '../actions/property.actions';

const initialState: Property = {
  pricePaid: 120000,
  mortgageLength: 25,
  expectedAnnualIncrease: 5,
  futureValue: 0
}

export const property : ActionReducer<Property> = (state : Property = initialState, action : any) => {
  switch (action.type) {
    case InvestmentActions.PRICE_PAID_CHANGED:
      state = Object.assign(state, {
        pricePaid: action.payload
      });
      break;

    case InvestmentActions.MORTGAGE_LENGTH_CHANGED:
      state = Object.assign(state, {
        mortgageLength: action.payload
      });
      break;

    case InvestmentActions.EXPECTED_ANNUAL_INCREASE_CHANGED:
      state = Object.assign(state, {
        expectedAnnualIncrease: action.payload
      });
      break;
  }

  state.futureValue = getPropertyFutureValue(state);
  return state;
}
