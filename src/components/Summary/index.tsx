import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { useTheme } from "styled-components";
import { useTransactionsContext } from "../../contexts/TransactionsContext";
import { SummaryCard, SummaryContainer } from "./styles";

interface SummaryProps {}

export const Summary: React.FC<SummaryProps> = () => {
  const { colors } = useTheme();
  const { transactions } = useTransactionsContext();

  const summary = transactions.reduce(
    (sum, transaction) => {
      if (transaction.type === "income") {
        sum.income += transaction.price;
        sum.total += transaction.price;
      } else {
        sum.outcome += transaction.price;
        sum.total -= transaction.price;
      }

      return sum;
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  );

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color={colors.green[300]} />
        </header>

        <strong>{summary.income}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color={colors.red[300]} />
        </header>

        <strong>{summary.outcome}</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color={colors.white} />
        </header>

        <strong>{summary.total}</strong>
      </SummaryCard>
    </SummaryContainer>
  );
};
