import React, { useEffect, useMemo, useState } from "react";
import { List } from "../../../common/components/list";
import {
  BankAccount,
  convertBankAccountsToListDetails,
  useBankAccountsState,
} from "../data/bankAccountsState";

import EditIcon from "@mui/icons-material/Edit";

import { Box, Button, Modal } from "@mui/material";
import { BankAccountForm } from "../components/bankAccountForm";
import { bankAccountsMock } from "../mock/bankAccountsMock";
import { NiceBackground } from "../../../common/components/niceBackgruond/component/niceBackground";

const EditFormModalButton: React.FC<{ data: BankAccount }> = (props) => {
  const [showModal, setShowModal] = useState(false);
  const { data } = props;

  const handleEditClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Button onClick={handleEditClick}>
        <EditIcon />
      </Button>
      {showModal && (
        <Modal open={showModal} onClose={handleCloseModal} component="div">
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 600,
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
            }}
          >
            <BankAccountForm onClose={handleCloseModal} initialValues={data} />
          </Box>
        </Modal>
      )}
    </>
  );
};

export const BankAccountsPage: React.FC = () => {
  const { bankAccounts, setBankAccounts } = useBankAccountsState();

  useEffect(() => {
    setBankAccounts(bankAccountsMock);
  }, [setBankAccounts]);

  const listData = useMemo(() => {
    const result = convertBankAccountsToListDetails(bankAccounts);
    return result;
  }, [bankAccounts, convertBankAccountsToListDetails]);

  return (
    <>
      <NiceBackground />
      <List
        data={listData}
        header="Bank Accounts"
        NewElementForm={BankAccountForm}
        ActionButtons={EditFormModalButton}
      />
    </>
  );
};
