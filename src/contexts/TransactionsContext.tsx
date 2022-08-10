import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { TransactionDTO } from "../@types/DTOs/TransactionDTO";
import { api } from "../services/api";

type FetchTransactionsFn = (query?: string) => Promise<void>;

interface TransactionsContextData {
  transactions: TransactionDTO[];
  fetchTransactions: FetchTransactionsFn;
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

  return (
    <TransactionsContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionsContext.Provider>
  );
};
