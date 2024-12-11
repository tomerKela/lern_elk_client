import { create } from "zustand";
import { ListElementState } from "../../../common/components/list/data";

export interface BankAccount {
  ID: string;
  accountDetails: {
    bankName: string;
    bankCode: string;
    number: string;
    branchCode: string;
  };
  accountHolder: {
    firstName: string;
    lastName: string;
  };
}

interface BankAccountsState {
  bankAccounts: Array<BankAccount>;
  setBankAccounts: (bankAccounts: Array<BankAccount>) => void;
}

export const useBankAccountsState = create<BankAccountsState>((set) => ({
  bankAccounts: [],
  setBankAccounts: (bankAccounts) => set({ bankAccounts }),
}));

export const convertBankAccountsToListDetails = (
  bankAccounts: Array<BankAccount>
): ListElementState<BankAccount>[] => {
  const data = bankAccounts.map((bankAccount) => {
    const { ID, accountDetails, accountHolder } = bankAccount;
    const {
      number: accountNumber,
      bankName,
      branchCode,
      bankCode,
    } = accountDetails;
    const { firstName, lastName } = accountHolder;
    const result: ListElementState<BankAccount> = {
      header: `${firstName} ${lastName}| ${bankName} `,
      secondHeader: ` ${bankCode} - ${branchCode} - ${accountNumber}`,
      additionalData: bankAccount,
      description: "",
    };
    return result;
  });
  return data;
};
