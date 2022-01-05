/**
 * This file contains function that allow secured user data mapped into user state in this reducer section
 */ 
// Ambil data redux di luar lifecycle react
import {createSelector} from 'reselect';

const authorizationSelector = (state) => state.authorizationReducer;

export const userSelector = createSelector(
  authorizationSelector,
  (authorizationState) => {
    return authorizationState.user || {};
  },
);