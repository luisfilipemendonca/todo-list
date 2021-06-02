import styled from "styled-components";

type ITableHead = {
  width: number;
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
