import {
  Box,
  Button,
  DialogActions,
  FormLabel,
  MenuItem,
  TextField,
} from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { PaymentMethod } from "../data/paymentMethodState";

interface TopicFormProps {
  onClose: () => void;
  initialValues?: PaymentMethod;
}

export const PaymentMethodForm: React.FC<TopicFormProps> = ({
  onClose,
  initialValues,
}) => {
  const { control, handleSubmit, reset, watch } = useForm<PaymentMethod>({
    defaultValues: initialValues || {
      holderDetails: {
        firstName: "",
        lastName: "",
      },
      methodDetails: {
        type: "CREDIT",
        hint: "**** - 1111",
        cardNumber: "",
        expiryDate: "",
        cvv: "",
      },
      ID: "",
    },
  });

  const onSubmit = (data: PaymentMethod) => {
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box display="flex" flexDirection="column" gap={2} sx={{ p: 2 }}>
        <FormLabel>Holder Details</FormLabel>
        <Controller
          name="holderDetails.firstName"
          control={control}
          defaultValue=""
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
          name="holderDetails.lastName"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Last Name"
              variant="outlined"
              fullWidth
            />
          )}
        />
      </Box>

      <Box display="flex" flexDirection="column" gap={2} sx={{ p: 2 }}>
        <FormLabel>Method Details</FormLabel>
        <Controller
          name="methodDetails.type"
          control={control}
          defaultValue="CREDIT"
          render={({ field }) => (
            <TextField
              {...field}
              label="Type"
              variant="outlined"
              fullWidth
              select
            >
              <MenuItem value="CREDIT">Credit</MenuItem>
              <MenuItem value="PAYPAL">PayPal</MenuItem>
              <MenuItem value="STRIPE">Stripe</MenuItem>
            </TextField>
          )}
        />
        {watch("methodDetails.type") === "CREDIT" && (
          <Controller
            name="methodDetails.cardNumber"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Card Number"
                variant="outlined"
                fullWidth
              />
            )}
          />
        )}
        {watch("methodDetails.type") === "CREDIT" && (
          <Controller
            name="methodDetails.expiryDate"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Expiry Date"
                variant="outlined"
                fullWidth
              />
            )}
          />
        )}
        {watch("methodDetails.type") === "CREDIT" && (
          <Controller
            name="methodDetails.cvv"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField {...field} label="CVV" variant="outlined" fullWidth />
            )}
          />
        )}

        {watch("methodDetails.type") === "PAYPAL" && (
          <Controller
            name="methodDetails.paypalEmail"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="PayPal Email"
                variant="outlined"
                fullWidth
              />
            )}
          />
        )}
        {watch("methodDetails.type") === "PAYPAL" && (
          <Controller
            name="methodDetails.token"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Token"
                variant="outlined"
                fullWidth
              />
            )}
          />
        )}

        {watch("methodDetails.type") === "STRIPE" && (
          <Controller
            name="methodDetails.stripeAccount"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Stripe Account"
                variant="outlined"
                fullWidth
              />
            )}
          />
        )}

        {watch("methodDetails.type") === "STRIPE" && (
          <Controller
            name="methodDetails.password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Password"
                variant="outlined"
                fullWidth
              />
            )}
          />
        )}
      </Box>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button type="submit" variant="contained" color="primary">
          Save
        </Button>
      </DialogActions>
    </form>
  );
};

export default PaymentMethodForm;
