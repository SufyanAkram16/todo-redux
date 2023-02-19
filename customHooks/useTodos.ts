import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addTodo, Item, deleteTodo, updateTodo, completeTodo } from '@/store/todoSlice'
import { useToast } from '@chakra-ui/react';

const useTodos = () => {
  const toast = useToast();
    const [input, setInput] = useState<string>("")
    const [isEditing, setIsEditing] = useState<boolean>(false)
    const [oldId, setOldId] = useState<string>()
    const dispatch = useDispatch()

    const storeTodos = useSelector((store:any) =>store.todoSlice.todos)

    const addTodos = () => {
      if (!input) {
        toast({
          title: "Nothing to add.",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
        return
      }
        dispatch(addTodo(input))
        console.log(storeTodos)

        setInput("")
    }

    const deleteTodos = (item:Item)  => {
      dispatch(deleteTodo(item))

    }

    const onUpdateHandler = (todo:Item) => {
      setInput(todo.text);
      setIsEditing(true);
      setOldId(todo.id);

      console.log(input, isEditing, oldId)
    };

    const editTodo = () => {

      dispatch(updateTodo({id:oldId, text: input}));
      setIsEditing(false)
      setInput("")

      console.log(isEditing)

    }

    const completeHandler = (todo: Item) => {
        dispatch(completeTodo(todo));
        console.log(`Completed todo with id ${todo.id}`);
  
    }

    

  return {
    addTodos,
    input,
    setInput,
    storeTodos,
    deleteTodos,
    onUpdateHandler,
    editTodo,
    isEditing,
    setIsEditing,
    completeHandler,
  }
    
  
}

export default useTodos