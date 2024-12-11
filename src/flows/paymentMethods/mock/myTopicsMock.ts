import { PaymentMethod } from "../data/paymentMethodState";

export const paymentMethodsMock: PaymentMethod[] = [
  {
    ID: "1",
    methodDetails: {
      cardNumber: "1234 5678 1234 5678",
      cvv: "123",
      expiryDate: "12/24",
      hint: "**** - 5678",
      type: "CREDIT",
    },
    holderDetails: {
      firstName: "John",
      lastName: "Doe",
    },
  },
  {
    ID: "2",
    methodDetails: {
      paypalEmail: "jane_doe@gmail.com",
      token: "123456789",
      hint: "**** - 5678",
      type: "PAYPAL",
    },
    holderDetails: {
      firstName: "Jane",
      lastName: "Doe",
    },
  },
  {
    ID: "3",
    methodDetails: {
      stripeAccount: "lark jhonson x3",
      password: "password",
      hint: "**** - 5678",
      type: "STRIPE",
    },
    holderDetails: {
      firstName: "Lark",
      lastName: "Jhonson",
    },
  },
  {
    ID: "4",
    methodDetails: {
      cardNumber: "9876 5432 1098 7654",
      cvv: "456",
      expiryDate: "06/23",
      hint: "**** - 1098",
      type: "CREDIT",
    },
    holderDetails: { firstName: "Sarah", lastName: "Smith" },
  },
  {
    ID: "4",
    methodDetails: {
      cardNumber: "9876 5432 1098 7654",
      cvv: "456",
      expiryDate: "06/23",
      hint: "**** - 1098",
      type: "CREDIT",
    },
    holderDetails: { firstName: "Sarah", lastName: "Smith" },
  },
];
