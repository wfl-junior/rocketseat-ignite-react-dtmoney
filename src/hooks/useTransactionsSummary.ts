import { useMemo } from "react";
import { useTransactionsContextSelector } from "../contexts/TransactionsContext";

interface TransactionSummary {
  income: number;
  outcome: number;
  total: number;
}

export function useTransactionsSummary() {
  const transactions = useTransactionsContextSelector(
    context => context.transactions,
  );

  const summary = useMemo(() => {
    return transactions.reduce<TransactionSummary>(
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
  }, [transactions]);

  return summary;
}
