import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js"
import moviesReducer from "./movieSlice.js"
import gptReducer from "./gptSlice.js";
import appConfigReducer from "./appConfigSlice.js";

const appStore = configureStore(
    {
        reducer:{
            user:userReducer,
            movies:moviesReducer,
            gpt:gptReducer,
            appConfig:appConfigReducer,
        }
    }
)

export default appStore;