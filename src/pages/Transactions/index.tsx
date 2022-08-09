import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { useTransactionsContext } from "../../contexts/TransactionsContext";
import { SearchForm } from "./SearchForm";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

interface TransactionsProps {}

export const Transactions: React.FC<TransactionsProps> = () => {
  const { transactions } = useTransactionsContext();

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactions.map(transaction => (
              <tr key={transaction.id}>
                <td>{transaction.description}</td>

                <td>
                  <PriceHighlight variant={transaction.type}>
                    {transaction.type === "outcome" && "-"} {transaction.price}
                  </PriceHighlight>
                </td>

                <td>{transaction.category}</td>
                <td>{transaction.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
};
