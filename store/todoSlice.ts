import { createSlice,nanoid  } from '@reduxjs/toolkit'


export interface Item {
    id: string
    text: string
  }

const todoSlice = createSlice({
    name:"todo",
    initialState: {todos:[] as Item [], error:null},
    reducers: {

        addTodo : (state, action) => {
            const todo:Item = {
                id:nanoid(),
                text:action.payload,
            }

            state.todos.push(todo)
        },

        deleteTodo: (state, action) => {
           
            const todos = state.todos;
            const item = action.payload;

            let filteredTodos = todos.filter((todo) => todo.id !== item.id)

            let newState = {
                ...state,
                todos:filteredTodos,
            }

            return newState;


        },

        updateTodo: (state, action) =>{


        }



        
    }
})

export const {addTodo, deleteTodo} = todoSlice.actions;


export default todoSlice.reducer;