import { Header } from "../../components/Header";
import { TransactionsContainer } from "./styles";

interface TransactionsProps {}

export const Transactions: React.FC<TransactionsProps> = () => (
  <TransactionsContainer>
    <Header />
  </TransactionsContainer>
);
