import styled from "styled-components";

type ITableData = {
  textAlign?: string;
  uppercase?: boolean;
};

export const Td = styled.td<ITableData>`
  padding: 1rem 0.8rem;
  text-align: ${({ textAlign }) => textAlign || "left"};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
  text-transform: ${({ uppercase }) => (uppercase ? "uppercase" : "lowercase")};
`;

export const TableActionButton = styled.button`
  background: none;
  border: none;
  font-size: 0.9rem;
  display: inline-flex;
  padding: 0.3rem;
  border: 1px solid ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.text};

  &:not(:last-child) {
    margin-right: 0.5rem;
  }
`;
