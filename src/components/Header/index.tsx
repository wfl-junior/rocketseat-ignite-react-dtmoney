import logo from "../../assets/logo.svg";
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => (
  <HeaderContainer>
    <HeaderContent>
      <img src={logo} alt="" />

      <NewTransactionButton>Nova transação</NewTransactionButton>
    </HeaderContent>
  </HeaderContainer>
);
