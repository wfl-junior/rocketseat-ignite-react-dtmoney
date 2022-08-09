import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { useTheme } from "styled-components";
import { useTransactionsSummary } from "../../hooks/useTransactionsSummary";
import { formatPrice } from "../../utils/formatPrice";
import { SummaryCard, SummaryContainer } from "./styles";

interface SummaryProps {}

export const Summary: React.FC<SummaryProps> = () => {
  const { colors } = useTheme();
  const summary = useTransactionsSummary();

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color={colors.green[300]} />
        </header>

        <strong>{formatPrice(summary.income)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color={colors.red[300]} />
        </header>

        <strong>{formatPrice(summary.outcome)}</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color={colors.white} />
        </header>

        <strong>{formatPrice(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  );
};
