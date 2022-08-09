import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";
import styled, { css } from "styled-components";
import { TransactionDTO } from "../../@types/DTOs/TransactionDTO";

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
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;

      transition: background-color 0.2s linear;

      ${({ theme }) => css`
        color: ${theme.colors.white};
        background-color: ${theme.colors.green[500]};

        &:enabled:hover {
          background-color: ${theme.colors.green[700]};
        }
      `}

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;

        svg {
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }

            to {
              transform: rotate(360deg);
            }
          }

          animation: spin 750ms linear infinite;
        }
      }
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

export const TransactionTypes = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`;

interface TransactionTypeButtonProps {
  variant: TransactionDTO["type"];
}

// para evitar de quebrar o syntax highlighting com quebra de linhas no TransactionTypeButton
const I = RadioGroup.Item;

export const TransactionTypeButton = styled(I)<TransactionTypeButtonProps>`
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

    &[data-state="unchecked"]:hover {
      background-color: ${theme.colors.gray[600]};
      transition: background-color 0.2s linear;
    }

    &[data-state="checked"] {
      color: ${theme.colors.white};
      background-color: ${variant === "income"
        ? theme.colors.green[500]
        : theme.colors.red[500]};

      svg {
        color: ${theme.colors.white};
      }
    }
  `}
`;
