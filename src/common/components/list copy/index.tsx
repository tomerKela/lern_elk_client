import styled from "@emotion/styled";
import AddIcon from "@mui/icons-material/AddCircle";
import {
  Box,
  Button,
  Grid,
  Modal,
  Pagination,
  Typography,
} from "@mui/material";
import React, { useCallback, useMemo, useState } from "react";
import { MainColumn, Page } from "../../styledComponents";
import { ElementCard } from "./components/elementCard";
import { ListProps } from "./data";

const ListMainColumn = styled(MainColumn)`
  max-width: 900px;
  padding-top: 7vh;
  max-height: 94vh;
  gap: 40px;
  position: relative;
`;

const ListMainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const FormBoxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

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
        <Button onClick={handleOpenModal}>
          <AddIcon style={{ fontSize: "2.5rem" }} />
        </Button>
        {openModal && (
          <Modal component="div" open={openModal} onClose={handleCloseModal}>
            <Box sx={FormBoxStyle}>
              <NewElementForm onClose={handleCloseModal} />
            </Box>
          </Modal>
        )}
      </>
    );
  }, [NewElementForm, openModal, setOpenModal]);

  return (
    <Page>
      <ListMainColumn>
        {header && (
          <Typography variant="h4" id="notificationHeader">
            {header}
          </Typography>
        )}
        {newElementButton && (
          <Box
            style={{
              display: "flex",
              position: "absolute",
              right: "0",
              marginTop: "-5px",
            }}
          >
            {newElementButton}
          </Box>
        )}
        <ListMainContent>
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
        </ListMainContent>
        <Pagination
          count={Math.ceil(data.length / elementsPerPage)}
          page={page}
          onChange={handleChange}
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        />
      </ListMainColumn>
    </Page>
  );
};

export default List;
