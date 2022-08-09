export interface TransactionDTO {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}
