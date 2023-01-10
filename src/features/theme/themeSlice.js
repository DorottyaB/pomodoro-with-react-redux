import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  color: '#f6706e',
  font: 'Raleway',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    selectColor(state, action) {
      state.color = action.payload;
    },
    selectFont(state, action) {
      state.font = action.payload;
    },
  },
});

export const { selectColor, selectFont } = themeSlice.actions;
export default themeSlice.reducer;
