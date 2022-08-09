import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import {
  CloseButton,
  Content,
  Overlay,
  TransactionTypeButton,
  TransactionTypes,
} from "./styles";

interface NewTransactionModalProps {}

export const NewTransactionModal: React.FC<NewTransactionModalProps> = () => (
  <Dialog.Portal>
    <Overlay />

    <Content>
      <CloseButton>
        <X size={24} />
      </CloseButton>

      <Dialog.Title>Nova transação</Dialog.Title>

      <form onSubmit={event => event.preventDefault()}>
        <input type="text" placeholder="Descrição" required />
        <input type="number" placeholder="Preço" required />
        <input type="text" placeholder="Categoria" required />

        <TransactionTypes>
          <TransactionTypeButton type="button" variant="income">
            <ArrowCircleUp size={24} />
            Entrada
          </TransactionTypeButton>

          <TransactionTypeButton type="button" variant="outcome">
            <ArrowCircleDown size={24} />
            Saída
          </TransactionTypeButton>
        </TransactionTypes>

        <button type="submit">Cadastrar</button>
      </form>
    </Content>
  </Dialog.Portal>
);
