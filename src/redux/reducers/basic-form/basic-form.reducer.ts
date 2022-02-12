import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BasicFormEnum } from '../../../enums/basic-form-status.enum';
import { BasicFormInterface } from '../../../interfaces/basic-form.interface';
import { RootState, AppThunk } from '../../store';
import { BasicFormReducerInterface } from './basic-form-reducer.interface';

const initialState: BasicFormReducerInterface = {
  value: {} as BasicFormInterface,
  status: BasicFormEnum.unset,
};

export const basicForm = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setForm: (state, action: PayloadAction<BasicFormInterface>) => {
      state.status = BasicFormEnum.ready;
      state.value = action.payload;
    },
    resetForm: (state) => {
      state.status = BasicFormEnum.unset;
      state.value = {} as BasicFormInterface;
    }
  },
  extraReducers: (builder) => {
  },
});

export const { setForm, resetForm } = basicForm.actions;

/* export const selectCount = (state: RootState) => state.counter.value;
 
export const incrementIfOdd = (amount: number): AppThunk => (
  dispatch,
  getState
) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
}; */

export default basicForm.reducer;
