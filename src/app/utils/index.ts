import { Property } from '../models/property.model';

export const getPropertyFutureValue = (state: Property) => {
  const { pricePaid, mortgageLength, expectedAnnualIncrease } = state;
  const future = pricePaid * Math.pow((1 + expectedAnnualIncrease / 100), mortgageLength);
  return Math.round(future * 100) / 100;
};
