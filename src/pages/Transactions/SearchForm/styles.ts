import styled, { css } from "styled-components";

export const SearchFormContainer = styled.form`
  width: 100%;
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    padding: 1rem;

    ${({ theme }) => css`
      color: ${theme.colors.gray[300]};
      background-color: ${theme.colors.gray[900]};

      &::placeholder {
        color: ${theme.colors.gray[500]};
      }
    `}
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem;
    font-weight: 700;
    border-radius: 6px;

    transition: 0.2s linear;
    transition-property: background-color, color, border-color;

    ${({ theme }) => css`
      color: ${theme.colors.green[300]};
      border: 1px solid ${theme.colors.green[300]};

      &:hover {
        color: ${theme.colors.white};
        background-color: ${theme.colors.green[500]};
        border-color: ${theme.colors.green[500]};
      }
    `}
  }
`;
