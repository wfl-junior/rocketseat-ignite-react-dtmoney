import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContainer } from "./styles";

interface TransactionsProps {}

export const Transactions: React.FC<TransactionsProps> = () => (
  <TransactionsContainer>
    <Header />
    <Summary />
  </TransactionsContainer>
);
