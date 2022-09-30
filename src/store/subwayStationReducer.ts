import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IStatino } from 'interface/apiInterface/subwayStation';

export const initState: IStatino = {
  stationNumber: 95,
  stationName: '다대포해수욕장',
};

const stageSlice = createSlice({
  name: 'subwayStation',
  initialState: initState,
  reducers: {
    setStation: (state, action: PayloadAction<IStatino>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setStation } = stageSlice.actions;
export default stageSlice.reducer;
