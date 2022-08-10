import { zodResolver } from "@hookform/resolvers/zod";
import { CircleNotch, MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { useTransactionsContext } from "../../../contexts/TransactionsContext";
import { SearchFormContainer } from "./styles";

const searchFormValidationSchema = zod.object({
  query: zod.string({ required_error: "Este campo é obrigatório" }),
});

type SearchFormValues = zod.infer<typeof searchFormValidationSchema>;

interface SearchFormProps {}

export const SearchForm: React.FC<SearchFormProps> = () => {
  const { fetchTransactions } = useTransactionsContext();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormValues>({
    resolver: zodResolver(searchFormValidationSchema),
    defaultValues: {
      query: "",
    },
  });

  const handleSearch = handleSubmit(async values => {
    await fetchTransactions(values.query);
  });

  const SubmitButtonIcon = isSubmitting ? CircleNotch : MagnifyingGlass;

  return (
    <SearchFormContainer onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register("query")}
      />

      <button type="submit" disabled={isSubmitting}>
        <SubmitButtonIcon size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  );
};
