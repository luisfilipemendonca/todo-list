import styled from "styled-components";

export const Container = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 4rem;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.secondary};
`;
