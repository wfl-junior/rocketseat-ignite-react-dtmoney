import { createContext, useContext, useEffect, useState } from "react";
import { TransactionDTO } from "../@types/DTOs/TransactionDTO";
import { API_BASE_URL } from "../utils/constants";

interface TransactionsContextData {
  transactions: TransactionDTO[];
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

  useEffect(() => {
    fetch(`${API_BASE_URL}/transactions`)
      .then(response => response.json())
      .then(setTransactions)
      .catch(console.warn);
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
};
