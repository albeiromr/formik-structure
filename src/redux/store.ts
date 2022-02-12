import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import basicFormReducer from './reducers/basic-form/basic-form.reducer';

export const store = configureStore({
  reducer: {
    basicFormReducer: basicFormReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
