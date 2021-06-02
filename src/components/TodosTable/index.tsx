import React from "react";
import { useSelector } from "../../hooks/useSelector";

import { TodosTable, Thead, Tbody, Th } from "./styled";

import TodoItem from "../TodoItem";

const Todos: React.FC = () => {
  const { high, medium, low } = useSelector((state) => state.todos);

  return (
    <TodosTable>
      <Thead>
        <tr>
          <Th width={20}>Priority</Th>
          <Th width={65}>Description</Th>
          <Th width={25}>Actions</Th>
        </tr>
      </Thead>
      <Tbody>
        {[...high, ...medium, ...low].map(({ id, description, priority }) => (
          <TodoItem key={id} priority={priority} description={description} />
        ))}
      </Tbody>
    </TodosTable>
  );
};

export default Todos;
