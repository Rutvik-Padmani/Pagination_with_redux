import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   isLoading : false ,
   data  : [],
   error : {}
}

const pageslice = createSlice({
  name: 'page',
  initialState,
  reducers: {

    PageRequest : (state,action) => {

        state.isLoading = true ; 
    },

    PageSucess : (state,action) => {

        state.isLoading = false;
        state.data = action.payload;
    },

    PageFail : (state,action) => {
        state.isLoading = false ; 
        state.error = action.payload;
    }
  }
});

export const {PageFail,PageSucess,PageRequest} = pageslice.actions

export default pageslice.reducer