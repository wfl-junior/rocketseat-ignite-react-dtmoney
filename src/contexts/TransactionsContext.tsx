import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { TransactionDTO } from "../@types/DTOs/TransactionDTO";
import { api } from "../services/api";

type NewTransactionData = Omit<TransactionDTO, "id" | "createdAt">;

type FetchTransactionsFn = (query?: string) => Promise<void>;

type CreateTransactionFn = (
  data: NewTransactionData,
) => Promise<TransactionDTO>;

interface TransactionsContextData {
  transactions: TransactionDTO[];
  fetchTransactions: FetchTransactionsFn;
  createTransaction: CreateTransactionFn;
}

const TransactionsContext = createContext({} as TransactionsContextData);

export const useTransactionsContext = () => useContext(TransactionsContext);

interface TransactionsContextProviderProps {
  children: React.ReactNode;
}

export const TransactionsContextProvider: React.FC<
  TransactionsContextProviderProps
> = ({ children }) => {
  const [transactions, setTransactions] = useState<TransactionDTO[]>([]);

  const fetchTransactions: FetchTransactionsFn = useCallback(async query => {
    try {
      const response = await api.get<TransactionDTO[]>("/transactions", {
        params: {
          _sort: "createdAt",
          _order: "desc",
          q: query || undefined,
        },
      });

      setTransactions(response.data);
    } catch (error) {
      console.warn(error);
    }
  }, []);

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  const createTransaction: CreateTransactionFn = useCallback(async data => {
    const { data: newTransaction } = await api.post<TransactionDTO>(
      "/transactions",
      {
        ...data,
        createdAt: new Date(),
      },
    );

    // nova transação vem primeiro porque transações está ordenada por createdAt desc
    setTransactions(transactions => [newTransaction, ...transactions]);

    return newTransaction;
  }, []);

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
        createTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
