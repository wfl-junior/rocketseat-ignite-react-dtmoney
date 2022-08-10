import { zodResolver } from "@hookform/resolvers/zod";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, CircleNotch, X } from "phosphor-react";
import { Controller, useForm } from "react-hook-form";
import * as zod from "zod";
import { useTransactionsContext } from "../../contexts/TransactionsContext";
import {
  CloseButton,
  Content,
  Overlay,
  TransactionTypeButton,
  TransactionTypes,
} from "./styles";

const newTransactionFormValidationSchema = zod.object({
  description: zod.string({ required_error: "A descrição é obrigatória" }),
  price: zod.number({ required_error: "O preço é obrigatório" }),
  category: zod.string({ required_error: "A categoria é obrigatória" }),
  type: zod.enum(["income", "outcome"], {
    invalid_type_error: "O tipo deve ser de entrada ou saída",
    required_error: "O tipo é obrigatório",
  }),
});

type NewTransactionFormValues = zod.infer<
  typeof newTransactionFormValidationSchema
>;

interface NewTransactionModalProps {}

export const NewTransactionModal: React.FC<NewTransactionModalProps> = () => {
  const { createTransaction } = useTransactionsContext();
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting },
  } = useForm<NewTransactionFormValues>({
    resolver: zodResolver(newTransactionFormValidationSchema),
    defaultValues: {
      description: "",
      category: "",
      price: undefined,
      type: undefined,
    },
  });

  const handleCreateNewTransaction = handleSubmit(async values => {
    await createTransaction(values);
    reset();
  });

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <Dialog.Title>Nova transação</Dialog.Title>

        <form onSubmit={handleCreateNewTransaction}>
          <input
            type="text"
            placeholder="Descrição"
            required
            {...register("description")}
          />

          <input
            type="number"
            placeholder="Preço"
            required
            {...register("price", { valueAsNumber: true })}
          />

          <input
            type="text"
            placeholder="Categoria"
            required
            {...register("category")}
          />

          <Controller
            control={control}
            name="type"
            render={({ field: { onChange, value } }) => (
              <TransactionTypes onValueChange={onChange} value={value}>
                <TransactionTypeButton
                  type="button"
                  variant="income"
                  value="income"
                >
                  <ArrowCircleUp size={24} />
                  Entrada
                </TransactionTypeButton>

                <TransactionTypeButton
                  type="button"
                  variant="outcome"
                  value="outcome"
                >
                  <ArrowCircleDown size={24} />
                  Saída
                </TransactionTypeButton>
              </TransactionTypes>
            )}
          />

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting && <CircleNotch size={20} />}
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
};
