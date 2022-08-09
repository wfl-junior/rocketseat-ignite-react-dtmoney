import * as Dialog from "@radix-ui/react-dialog";
import styled, { css } from "styled-components";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.75);
`;

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background-color: ${({ theme }) => theme.colors.gray[800]};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
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

    button[type="submit"] {
      height: 58px;
      font-weight: 700;
      padding-inline: 1.25rem;
      border-radius: 6px;
      margin-top: 1.5rem;

      transition: background-color 0.2s linear;

      ${({ theme }) => css`
        color: ${theme.colors.white};
        background-color: ${theme.colors.green[500]};

        &:hover {
          background-color: ${theme.colors.green[700]};
        }
      `}
    }
  }
`;

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const TransactionTypes = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`;

interface TransactionTypeButtonProps {
  variant: "income" | "outcome";
}

export const TransactionTypeButton = styled.button<TransactionTypeButtonProps>`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 6px;

  ${({ theme, variant }) => css`
    color: ${theme.colors.gray[300]};
    background-color: ${theme.colors.gray[700]};

    svg {
      color: ${variant === "income"
        ? theme.colors.green[300]
        : theme.colors.red[300]};
    }
  `}
`;
