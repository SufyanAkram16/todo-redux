import { Button, HStack, Input } from "@chakra-ui/react";
import React from "react";
import useTodos from "../customHooks/useTodos";

const AddTodo = () => {
  const { addTodos, input, setInput } = useTodos();

  return (
    <HStack mt={8}>
      <Input
        size={"lg"}
        w="29vw"
        variant={"filled"}
        placeholder="Add Task Here ..."
        onChange={(e) => setInput(e.target.value)}
      />
      <Button size={"lg"} colorScheme={"green"} px="12" onClick={addTodos}>
        Add Todo
      </Button>
    </HStack>
  );
};

export default AddTodo;
