import React from "react";
import { FaTrashAlt, FaCheck, FaPen } from "react-icons/fa";

import { Td, TableActionButton } from "./styled";

interface ITodo {
  priority: string;
  description: string;
}

const TodoItem: React.FC<ITodo> = ({ priority, description }) => {
  return (
    <tr>
      <Td textAlign="center" uppercase={true}>
        {priority}
      </Td>
      <Td>{description}</Td>
      <Td textAlign="center">
        <TableActionButton>
          <FaCheck />
        </TableActionButton>
        <TableActionButton>
          <FaPen />
        </TableActionButton>
        <TableActionButton>
          <FaTrashAlt />
        </TableActionButton>
      </Td>
    </tr>
  );
};

export default TodoItem;
