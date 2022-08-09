import styled, { css } from "styled-components";

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin-inline: auto;
  padding-inline: 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;
`;

interface SummaryCardProps {
  variant?: "default" | "green";
}

export const SummaryCard = styled.div<SummaryCardProps>`
  border-radius: 6px;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${({ theme }) => theme.colors.gray[300]};
  }

  strong {
    display: block;
    font-weight: 700;
    margin-top: 1rem;
    font-size: 2rem;
  }

  ${({ theme, variant }) => css`
    background-color: ${variant === "green"
      ? theme.colors.green[700]
      : theme.colors.gray[600]};
  `}
`;
