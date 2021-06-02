import styled from "styled-components";

type ITableHead = {
  width: number;
};

type ITableData = {
  textAlign?: string;
};

export const TodosTable = styled.table`
  table-layout: fixed;
  width: 60%;
  border-collapse: collapse;
  word-wrap: break-word;
`;

export const Thead = styled.thead`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Tbody = styled.tbody``;

export const Th = styled.th<ITableHead>`
  padding: 1rem;
  width: ${({ width }) => `${width}%`};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
`;

export const Td = styled.td<ITableData>`
  padding: 1rem;
  text-align: ${({ textAlign }) => textAlign || "left"};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
`;

export const TableActionButton = styled.button`
  background: none;
  border: none;
  font-size: 0.9rem;
  display: inline-flex;
  padding: 0.2rem;
  border: 1px solid ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.text};

  &:not(:last-child) {
    margin-right: 0.5rem;
  }
`;
