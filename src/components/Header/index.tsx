import * as Dialog from "@radix-ui/react-dialog";
import logo from "../../assets/logo.svg";
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => (
  <HeaderContainer>
    <HeaderContent>
      <img src={logo} alt="" />

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <NewTransactionButton>Nova transação</NewTransactionButton>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay />

          <Dialog.Content>
            <Dialog.Close />

            <Dialog.Title>Nova transação</Dialog.Title>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </HeaderContent>
  </HeaderContainer>
);
