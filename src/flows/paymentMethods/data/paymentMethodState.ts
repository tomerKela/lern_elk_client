import { create } from "zustand";
import { ListElementState } from "../../../common/components/list/data";

interface PaymentMethodDetailsBase {
  type: string;
  hint: string;
}

export interface CreditCardDetails extends PaymentMethodDetailsBase {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  type: "CREDIT";
}

export interface PayPalDetails extends PaymentMethodDetailsBase {
  paypalEmail: string;
  token: string;
  type: "PAYPAL";
}

export interface StripeDetails extends PaymentMethodDetailsBase {
  stripeAccount: string;
  password: string;
  type: "STRIPE";
}

type PaymentMethodDetails = CreditCardDetails | PayPalDetails | StripeDetails;

export interface PaymentMethod {
  ID: string;
  methodDetails: PaymentMethodDetails;
  holderDetails: {
    firstName: string;
    lastName: string;
  };
}

interface PaymentMethodState {
  paymentMethod: Array<PaymentMethod>;
  setPaymentMethod: (myTopics: Array<PaymentMethod>) => void;
}

export const usePaymentMethodState = create<PaymentMethodState>((set) => ({
  paymentMethod: [],
  setPaymentMethod: (myTopics) => set({ paymentMethod: myTopics }),
}));

export const convertPaymentMethodToListDetails = (
  myTopics: Array<PaymentMethod>
): ListElementState<PaymentMethod>[] => {
  const data = myTopics.map((paymentMethod) => {
    const { ID, holderDetails, methodDetails } = paymentMethod;
    const { firstName, lastName } = holderDetails;
    const { type, hint } = methodDetails;
    const result = {
      description: "",
      header: `${type} - ${hint}`,
      secondHeader: `${firstName} ${lastName}`,
      additionalData: paymentMethod,
    };
    return result;
  });
  return data;
};
