import { BankAccountInPayment, Payment } from "../data/earningsState";

const availableBalance: number = 1500.75;

const payments: Payment[] = [
  {
    id: "1",
    amount: 250.0,
    date: "2023-06-01",
    bankAccount: {
      Id: "123456789",
      suffix: "6789",
      name: "Goldman Sachs",
    },
  },
  {
    id: "2",
    amount: 300.0,
    date: "2023-06-15",
    bankAccount: {
      Id: "987654321",
      suffix: "4321",
      name: "JPMorgan Chase",
    },
  },
  {
    id: "3",
    amount: 450.0,
    date: "2023-07-01",
    bankAccount: {
      Id: "456789123",
      suffix: "9123",
      name: "Wells Fargo Bank",
    },
  },
  {
    id: "4",
    amount: 500.0,
    date: "2023-07-15",
    bankAccount: {
      Id: "789123456",
      suffix: "3456",
      name: "JPMorgan Chase",
    },
  },
];

const bankAccounts: BankAccountInPayment[] = [
  { Id: "123456789", suffix: "6789", name: "Goldman Sachs" },
  { Id: "987654321", suffix: "4321", name: "JPMorgan Chase" },
  { Id: "456789123", suffix: "9123", name: "Wells Fargo Bank" },
];

export const mockEarnings = {
  availableBalance,
  payments,
  bankAccounts,
};
