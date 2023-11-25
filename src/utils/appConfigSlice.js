import { createSlice } from "@reduxjs/toolkit";

const appConfigSlice=createSlice({
    name:"appConfig",
    initialState:{
        currentLang:'en',
    },
    reducers:{
        changelanguage:(state,action)=>{
            state.currentLang = action.payload;
        }
    }
})

export const {changelanguage} = appConfigSlice.actions;
export default appConfigSlice.reducer; 