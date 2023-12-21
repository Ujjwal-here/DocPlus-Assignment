import {createSlice, nanoid} from '@reduxjs/toolkit'

export const toDoSlider = createSlice({
    name: 'todo',
    initialState: {
        todoList: [],
        isEditing: false,
        updateId: "",
    },
    reducers: {
        addTodo: (state, action) => {
            let newTodoList = {
                id: nanoid(),
                ...action.payload
            }
            state.todoList.push(newTodoList);
        },
        deleteToDo: (state, action) => {
            state.todoList = state.todoList.filter((item) =>
                item.id !== action.payload);
        },
        editTodo: (state, action) => {
            state.updateId = action.payload
            state.isEditing = true
        },
        updateTodo: (state, action) => {
            state.todoList.map((item) => {
                if (item.id === state.updateId) {
                    item.name = action.payload.name
                    item.description = action.payload.description
                }
            })
            state.updateId = ""
            state.isEditing = false
        },

    },
})
// Action creators are generated for each case reducer function
export const {addTodo, deleteToDo, editTodo, updateTodo} = toDoSlider.actions
export default toDoSlider.reducer;
