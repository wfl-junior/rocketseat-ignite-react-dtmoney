import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { TransactionDTO } from "../@types/DTOs/TransactionDTO";
import { API_BASE_URL } from "../utils/constants";

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
    const url = new URL(`${API_BASE_URL}/transactions`);

    if (query) {
      url.searchParams.append("q", query);
    }

    try {
      const response = await fetch(url);
      const data = (await response.json()) as TransactionDTO[];

      setTransactions(data);
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
