import {configureStore} from '@reduxjs/toolkit';
import modalReducer from "./redux/modalSlider"
import todoReducer from "./redux/todoSlider"


const store = configureStore({
    reducer: {
        modalState: modalReducer,
        todo:todoReducer,
    },
});

export default store
