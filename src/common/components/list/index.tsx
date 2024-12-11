import styled from "@emotion/styled";
import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  Button,
  Grid,
  Modal,
  Pagination,
  Typography,
  Container,
  Paper,
} from "@mui/material";
import React, { useCallback, useMemo, useState } from "react";
import { ElementCard } from "./components/elementCard";
import { ListProps } from "./data";

const ListContainer = styled(Container)`
  padding-top: 5vh;
  padding-bottom: 5vh;
`;

const ListHeader = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const ListContent = styled(Paper)`
  padding: 2rem;
  background-color: #f5f5f5;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const PaginationWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const AddButton = styled(Button)`
  background-color: #1a73e8;
  color: white;
  &:hover {
    background-color: #1557b0;
  }
`;

const ModalContent = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 600px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  padding: 2rem;
`;

export const List = <T extends Record<string, any>>({
  ElementExtension,
  data,
  ActionButtons,
  header,
  NewElementForm,
  hideExpandButton,
}: ListProps<T>): React.ReactElement => {
  const [page, setPage] = useState(1);
  const elementsPerPage = 5;

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const paginatedElements = data.slice(
    (page - 1) * elementsPerPage,
    page * elementsPerPage
  );

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = useCallback(() => {
    setOpenModal(true);
  }, [setOpenModal]);

  const handleCloseModal = useCallback(() => {
    setOpenModal(false);
  }, [setOpenModal]);

  const newElementButton = useMemo(() => {
    if (!NewElementForm) {
      return null;
    }
    return (
      <>
        <AddButton
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleOpenModal}
        >
          Add New
        </AddButton>
        <Modal open={openModal} onClose={handleCloseModal}>
          <ModalContent>
            <NewElementForm onClose={handleCloseModal} />
          </ModalContent>
        </Modal>
      </>
    );
  }, [NewElementForm, openModal, handleOpenModal, handleCloseModal]);

  return (
    <ListContainer maxWidth="md">
      <ListHeader>
        {header && (
          <Typography variant="h4" component="h1" fontWeight="bold">
            {header}
          </Typography>
        )}
        {newElementButton}
      </ListHeader>
      <ListContent elevation={0}>
        <Grid container spacing={3}>
          {paginatedElements.map((data, index) => (
            <Grid item xs={12} key={index}>
              <ElementCard
                data={data}
                ElementExtension={ElementExtension}
                ActionButtons={ActionButtons}
                hideExpandButton={hideExpandButton}
              />
            </Grid>
          ))}
        </Grid>
        <PaginationWrapper>
          <Pagination
            count={Math.ceil(data.length / elementsPerPage)}
            page={page}
            onChange={handleChange}
            color="primary"
            size="large"
          />
        </PaginationWrapper>
      </ListContent>
    </ListContainer>
  );
};
