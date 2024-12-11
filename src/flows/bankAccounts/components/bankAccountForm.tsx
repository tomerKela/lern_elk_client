import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { BankAccount } from "../data/bankAccountsState";

interface TopicFormProps {
  onClose: () => void;
  initialValues?: BankAccount;
}

export const BankAccountForm: React.FC<TopicFormProps> = ({
  onClose,
  initialValues,
}) => {
  const { control, handleSubmit, reset } = useForm<BankAccount>({
    defaultValues: initialValues || {
      accountDetails: {
        bankName: "",
        bankCode: "",
        number: "",
        branchCode: "",
      },
      accountHolder: {
        firstName: "",
        lastName: "",
      },
      ID: "",
    },
  });

  const onSubmit = (data: BankAccount) => {
    onClose();
    console.log(data);
    //if (initialValues) {
    //  updateMyTopic(data);
    //} else {
    //  addMyTopic(data);
    //}
  };

  React.useEffect(() => {
    if (initialValues) {
      reset(initialValues);
    }
  }, [initialValues, reset]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display="flex" flexDirection="column" gap={2}>
          <Controller
            name="accountHolder.firstName"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="First Name"
                variant="outlined"
                fullWidth
              />
            )}
          />
          <Controller
            name="accountHolder.lastName"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Last Name"
                variant="outlined"
                fullWidth
              />
            )}
          />
          <Controller
            name="accountDetails.bankName"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Bank Name"
                variant="outlined"
                fullWidth
              />
            )}
          />
          <Controller
            name="accountDetails.bankCode"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Bank Code"
                variant="outlined"
                fullWidth
              />
            )}
          />
          <Controller
            name="accountDetails.branchCode"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Branch Code"
                variant="outlined"
                fullWidth
              />
            )}
          />
          <Controller
            name="accountDetails.number"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Account Number"
                variant="outlined"
                fullWidth
              />
            )}
          />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      </form>
    </>
  );
};
