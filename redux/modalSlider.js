import {createSlice} from "@reduxjs/toolkit";

export const modalSlider = createSlice({
    name: "modalState",
    initialState: {
        isOpen: false
    },
    reducers: {
        openModal: (state, action) => {
            state.isOpen = true
        },
        closeModal: (state, action) => {
            state.isOpen = false
        }
    }
})

export const {openModal, closeModal} = modalSlider.actions

export default modalSlider.reducer
