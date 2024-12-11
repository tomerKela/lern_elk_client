import React, { useEffect, useMemo, useState } from "react";
import { List } from "../../../common/components/list";
import {
  convertPaymentMethodToListDetails,
  PaymentMethod,
  usePaymentMethodState,
} from "../data/paymentMethodState";
import PaymentMethodForm from "../components/paymentMethodForm";
import { Box, Button, Modal } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import { paymentMethodsMock } from "../mock/myTopicsMock";
import { NiceBackground } from "../../../common/components/niceBackgruond/component/niceBackground";

const EditFormModalButton: React.FC<{ data: PaymentMethod }> = (props) => {
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
      </Button>{" "}
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
            <PaymentMethodForm
              onClose={handleCloseModal}
              initialValues={data}
            />
          </Box>
        </Modal>
      )}
    </>
  );
};

export const PaymentMethodsPage: React.FC = () => {
  const { paymentMethod, setPaymentMethod } = usePaymentMethodState();

  useEffect(() => {
    setPaymentMethod(paymentMethodsMock);
  }, [setPaymentMethod]);

  const listData = useMemo(() => {
    const result = convertPaymentMethodToListDetails(paymentMethod);
    return result;
  }, [paymentMethod, convertPaymentMethodToListDetails]);

  return (
    <>
      <NiceBackground />
      <List
        data={listData}
        header="Payment Methods"
        NewElementForm={PaymentMethodForm}
        ActionButtons={EditFormModalButton}
      />{" "}
    </>
  );
};
