import { useTransactionsContext } from "../contexts/TransactionsContext";

interface TransactionSummary {
  income: number;
  outcome: number;
  total: number;
}

export function useTransactionsSummary() {
  const { transactions } = useTransactionsContext();

  return transactions.reduce<TransactionSummary>(
    (summary, transaction) => {
      if (transaction.type === "income") {
        summary.income += transaction.price;
        summary.total += transaction.price;
      } else {
        summary.outcome += transaction.price;
        summary.total -= transaction.price;
      }

      return summary;
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  );
}
