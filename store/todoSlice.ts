import { createSlice,nanoid  } from '@reduxjs/toolkit'


export interface Item {
    id: string
    text: string
  }

const todoSlice = createSlice({
    name:"todo",
    initialState: {todos:[] as Item [],completeTodos:[] as Item [], error:null},
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

            const {id, text} = action.payload;
            const todoIndex = state.todos.findIndex(todo => todo.id === id);
            if (todoIndex >= 0) {
            state.todos[todoIndex].text = text;
            }


        },

        completeTodo: (state, action) => {
            
                const todos = state.todos;
                const item = action.payload;
              
                const completeTodos = todos.filter((todo) => todo.id !== item.id);
              
                // Move this line outside of the if block
                state.completeTodos.push(item);
              
                let newState = {
                  ...state,
                  todos: completeTodos,
                }
                return newState;

                console.log( "complete done")
              
        }



        
    }
})

export const {addTodo, deleteTodo, updateTodo, completeTodo} = todoSlice.actions;


export default todoSlice.reducer;