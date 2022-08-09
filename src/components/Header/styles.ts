import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.gray[900]};
  padding-block: 2.5rem 7.5rem;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin-inline: auto;
  padding-inline: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NewTransactionButton = styled.button`
  height: 50px;
  font-weight: 700;
  padding-inline: 1.25rem;
  border-radius: 6px;

  transition: background-color 0.2s linear;

  ${({ theme }) => css`
    background-color: ${theme.colors.green[500]};
    color: ${theme.colors.white};

    &:hover {
      background-color: ${theme.colors.green[700]};
    }
  `}
`;
