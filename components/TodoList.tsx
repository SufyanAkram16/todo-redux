import useTodos from "@/customHooks/useTodos";
import { Item } from "@/store/todoSlice";
import {
  HStack,
  IconButton,
  VStack,
  Text,
  Spacer,
  StackDivider,
  Badge,
} from "@chakra-ui/react";
import React from "react";
import { FaTrash, FaCheck, FaEdit } from "react-icons/fa";

const TodoList = () => {
  const {
    storeTodos,
    deleteTodos,
    onUpdateHandler,
  } = useTodos();

  if (!storeTodos.length) {
    return (
      <Badge colorScheme={"green"} p="4" m={"4"} borderRadius="lg">
        No Todos, yay!!!
      </Badge>
    );
  }

  return (
    <>
      <VStack
        mt={8}
        divider={<StackDivider />}
        borderColor="gray.200"
        borderWidth={"2px"}
        borderRadius="lg"
        p="3"
        w={"100%"}
        maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
        alignItems="stretch"
      >
        {storeTodos.map((todo: Item) => (
          <HStack key={todo.id}>
            <Text fontSize="2xl">{todo.text}</Text>
            <Spacer />
            <IconButton icon={<FaCheck />} aria-label={"complete"} />
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
    </>
  );
};

export default TodoList;
