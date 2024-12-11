import { BankAccount } from "../data/bankAccountsState";

export const bankAccountsMock: BankAccount[] = [
  {
    accountDetails: {
      bankName: "Bank of America",
      bankCode: "BOA",
      branchCode: "1234",
      number: "1234567890",
    },
    accountHolder: {
      firstName: "John",
      lastName: "Doe",
    },
    ID: "1",
  },
  {
    accountDetails: {
      bankName: "Chase",
      bankCode: "CHS",
      branchCode: "5678",
      number: "0987654321",
    },
    accountHolder: { firstName: "Jane", lastName: "Doe" },
    ID: "2",
  },
  {
    accountDetails: {
      bankName: "Wells Fargo",
      bankCode: "WFG",
      branchCode: "9876",
      number: "5432109876",
    },
    accountHolder: { firstName: "John", lastName: "Doe" },
    ID: "3",
  },
  {
    accountDetails: {
      bankName: "Citibank",
      bankCode: "CTB",
      branchCode: "4321",
      number: "6789054321",
    },
    accountHolder: { firstName: "John", lastName: "Doe" },
    ID: "4",
  },
];
