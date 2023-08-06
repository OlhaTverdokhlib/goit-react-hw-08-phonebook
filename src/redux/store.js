//
// import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactSlice/contactSlice';
import { filterReducer } from './filterSlice/filterSlice';
import { authReducer } from './auth/slice';

const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
    auth: authReducer,
  },
});

export default store;
