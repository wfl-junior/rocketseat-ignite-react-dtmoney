import * as Dialog from "@radix-ui/react-dialog";
import logo from "../../assets/logo.svg";
import { NewTransactionModal } from "../NewTransactionModal";
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

        <NewTransactionModal />
      </Dialog.Root>
    </HeaderContent>
  </HeaderContainer>
);
