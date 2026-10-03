import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import { SearchForm } from "./components/SearchForm";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

export function Transactions() {
  const transactions = [
    {
      id: 1,
      description: "Freelance de website",
      type: "income",
      price: 6000,
      category: "Desenvolvimento",
      createdAt: new Date("2022-02-12 09:00:00"),
    },
    {
      id: 2,
      description: "Aluguel do apartamento",
      type: "outcome",
      price: 1100,
      category: "Casa",
      createdAt: new Date("2022-02-14 11:00:00"),
    },
  ] as const;

  return (
    <>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.type === "outcome" && "- "}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </>
  );
}
