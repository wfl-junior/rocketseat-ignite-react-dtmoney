import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { CloseButton, Content, Overlay } from "./styles";

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

        <button type="submit">Cadastrar</button>
      </form>
    </Content>
  </Dialog.Portal>
);
