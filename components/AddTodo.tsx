import {
  Button,
  Center,
  HStack,
  Input,
  StackDivider,
  VStack,
  Spacer,
  Text,
  IconButton,
  Flex,
  Stack,
  Badge,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import useTodos from "../customHooks/useTodos";
import { AddIcon, EditIcon } from "@chakra-ui/icons";
import TodoList from "./TodoList";
import { Item } from "@/store/todoSlice";
import { FaCheck, FaEdit, FaTrash } from "react-icons/fa";

const AddTodo = () => {
  const {
    addTodos,
    input,
    setInput,
    storeTodos,
    onUpdateHandler,
    deleteTodos,
    isEditing,
    editTodo,
    completeHandler,
  } = useTodos();

  return (
    <>
      <Stack>
        <VStack
          mt={8}
          divider={<StackDivider />}
          borderColor="gray.200"
          borderWidth={"2px"}
          borderRadius="lg"
          p="3"
          w={"100%"}
          alignItems="stretch"
        >
          {storeTodos.map((todo: Item) => (
            <HStack key={todo.id}>
              <Text fontSize="2xl">{todo.text}</Text>
              <Spacer />
              <IconButton
                icon={<FaCheck onClick={() => completeHandler(todo)} />}
                aria-label={"complete"}
              />
              <IconButton
                icon={<FaEdit onClick={() => onUpdateHandler(todo)} />}
                aria-label={"edit"}
              />
              <IconButton
                onClick={() => deleteTodos(todo)}
                icon={<FaTrash />}
                aria-label={"delete"}
              />
            </HStack>
          ))}
        </VStack>
        <Spacer />
        <Spacer />
        <HStack mt={8}>
          <Input
            size={"lg"}
            w="29vw"
            variant={"filled"}
            value={input}
            placeholder="Add Task Here ..."
            onChange={(e) => setInput(e.target.value)}
          />
          {isEditing ? (
            <Button
              size={"lg"}
              colorScheme={"green"}
              px="12"
              onClick={editTodo}
            >
              <FaEdit />
            </Button>
          ) : (
            <Button
              size={"lg"}
              colorScheme={"green"}
              px="12"
              onClick={addTodos}
            >
              +
            </Button>
          )}
        </HStack>
      </Stack>
    </>
  );
};

export default AddTodo;
