import { zodResolver } from "@hookform/resolvers/zod";
import { CircleNotch, MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { SearchFormContainer } from "./styles";

const searchFormValidationSchema = zod.object({
  query: zod.string({ required_error: "Este campo é obrigatório" }),
});

type SearchFormValues = zod.infer<typeof searchFormValidationSchema>;

interface SearchFormProps {}

export const SearchForm: React.FC<SearchFormProps> = () => {
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
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(values);
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
