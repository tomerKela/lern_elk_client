import { create } from "zustand";
import { ListElementState } from "../../../common/components/list/data";

export interface BankAccountInPayment {
  Id: string;
  suffix: string;
  name: string;
}

export interface Payment {
  id: string;
  amount: number;
  date: string;
  bankAccount: BankAccountInPayment;
}

interface EarningsState {
  availableBalance: number;
  setAvailableBalance: (availableBalance: number) => void;
  payments: Payment[];
  setPayments: (payments: Payment[]) => void;
  bankAccounts: BankAccountInPayment[];
  setBankAccounts: (bankAccounts: BankAccountInPayment[]) => void;
}

export const useEarningsState = create<EarningsState>((set) => ({
  availableBalance: 0,
  setAvailableBalance: (availableBalance) => set({ availableBalance }),
  payments: [],
  setPayments: (payments) => set({ payments }),
  bankAccounts: [],
  setBankAccounts: (bankAccounts) => set({ bankAccounts }),
}));

export const convertPaymentsToListDetails = (
  myTopics: Array<Payment>
): ListElementState<Payment>[] => {
  const data = myTopics.map((payment) => {
    const { amount, bankAccount, date, id } = payment;
    const { Id, name, suffix } = bankAccount;
    const result: ListElementState<Payment> = {
      description: "",
      header: `$${amount.toFixed(2)} - ${date}`,
      additionalData: payment,
      secondHeader: `${name}: ****${suffix}`,
    };
    return result;
  });
  return data;
};
