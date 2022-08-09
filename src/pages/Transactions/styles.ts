import styled from "styled-components";
import { Transaction } from ".";

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding-inline: 1.5rem;
`;

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  td {
    padding: 1.25rem 2rem;
    background-color: ${({ theme }) => theme.colors.gray[700]};

    &:first-child {
      width: 50%;
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`;

interface PriceHighlightProps {
  variant: Transaction["type"];
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${({ theme, variant }) => {
    if (variant === "income") {
      return theme.colors.green[300];
    }

    return theme.colors.red[300];
  }};
`;
