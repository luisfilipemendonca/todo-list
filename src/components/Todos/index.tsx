import React from "react";
import { FaTrashAlt, FaCheck, FaPen } from "react-icons/fa";

import { TodosTable, Thead, Tbody, Th, Td, TableActionButton } from "./styled";

const Todos: React.FC = () => {
  return (
    <TodosTable>
      <Thead>
        <tr>
          <Th width={15}>Priority</Th>
          <Th width={65}>Description</Th>
          <Th width={20}>Actions</Th>
        </tr>
      </Thead>
      <Tbody>
        <tr>
          <Td textAlign="center">High</Td>
          <Td>Do something</Td>
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
        <tr>
          <Td textAlign="center">High</Td>
          <Td>
            Do somethingsdfdsfdsfdsfsdfsdfsdfsdd
            fsfsdsffssomethingsdfdsfdsfdsfsdfsdfsdfsddfsfsdsffssomethingsdfdsfdsfdsfsdfsdfsdfsddfsfsdsffs
          </Td>
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
      </Tbody>
    </TodosTable>
  );
};

export default Todos;
