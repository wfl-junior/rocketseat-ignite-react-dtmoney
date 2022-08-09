import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";

interface SearchFormProps {}

export const SearchForm: React.FC<SearchFormProps> = () => (
  <SearchFormContainer onSubmit={event => event.preventDefault()}>
    <input type="text" placeholder="Busque por transações" />

    <button type="submit">
      <MagnifyingGlass size={20} />
      Buscar
    </button>
  </SearchFormContainer>
);
