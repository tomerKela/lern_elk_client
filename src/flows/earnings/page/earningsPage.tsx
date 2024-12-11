import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import {
  convertPaymentsToListDetails,
  useEarningsState,
} from "../data/earningsState";
import { mockEarnings } from "../mock/mockEarnings";
import { List } from "../../../common/components/list";

export const EarningsPage: React.FC = () => {
  const { register, handleSubmit, watch, reset } = useForm<{
    withdrawAmount: number;
    bankAccountId: string;
  }>();
  const [showBankAccounts, setShowBankAccounts] = useState(false);
  const {
    availableBalance,
    bankAccounts,
    payments,
    setAvailableBalance,
    setBankAccounts,
    setPayments,
  } = useEarningsState();

  useEffect(() => {
    // Mock fetching bank accounts
    setBankAccounts(mockEarnings.bankAccounts);
    // Mock fetching payments
    setPayments(mockEarnings.payments);
    // Mock fetching available balance
    setAvailableBalance(mockEarnings.availableBalance);
  }, [setAvailableBalance, setBankAccounts, setPayments]);

  const listData = useMemo(() => {
    const result = convertPaymentsToListDetails(payments);
    return result;
  }, [payments, convertPaymentsToListDetails]);

  const handleWithdraw = async (data: {
    withdrawAmount: number;
    bankAccountId: string;
  }) => {
    // Withdraw amount from the bank account
    reset();
    setShowBankAccounts(false);
  };

  const withdrawAmount = watch("withdrawAmount");

  return (
    <Container maxWidth="sm">
      <Box mt={10}>
        <Typography variant="h4" gutterBottom>
          Payments Page
        </Typography>
        <Card>
          <CardContent>
            <Typography variant="h6">Available Balance:</Typography>
            <Typography variant="h4" color="primary">
              ${availableBalance.toFixed(2)}
            </Typography>
            <form onSubmit={handleSubmit(() => setShowBankAccounts(true))}>
              <TextField
                label="Withdraw Amount"
                type="number"
                fullWidth
                {...register("withdrawAmount", { required: true })}
                margin="normal"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Withdraw
              </Button>
            </form>
            {showBankAccounts && withdrawAmount > 0 && (
              <form onSubmit={handleSubmit(handleWithdraw)}>
                <FormControl fullWidth margin="normal">
                  <InputLabel>Bank Account</InputLabel>
                  <Select {...register("bankAccountId", { required: true })}>
                    {bankAccounts.map((account) => (
                      <MenuItem key={account.Id} value={account.Id}>
                        {account.name}: ****{account.suffix}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Confirm Withdrawal
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
        <Box>
          <List
            data={listData}
            header="Past Payments"
            ActionButtons={() => <div></div>}
          />
        </Box>
      </Box>
    </Container>
  );
};
