import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Grid,
  Box,
  Typography,
  MenuItem,
} from "@mui/material";
import { useUserDetailsState } from "../data/userDetailsState";
import { countries, languages } from "events-tomeroko3";
import { NiceBackground } from "../../../common/components/niceBackgruond/component/niceBackground";

export const UserDetailsPage: React.FC = () => {
  const { setUserDetails, userDetails } = useUserDetailsState();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log(userDetails);
  };

  return (
    <>
      <NiceBackground />
      <Container maxWidth="sm">
        <Box sx={{ mt: 10 }}>
          <Typography variant="h4" component="h1" gutterBottom marginBottom={5}>
            User Details
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                value={userDetails.email}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="password"
                label="Password"
                name="password"
                value={userDetails.password}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phoneNumber"
                value={userDetails.phoneNumber}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="First Name"
                name="firstName"
                value={userDetails.firstName}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Last Name"
                name="lastName"
                value={userDetails.lastName}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                select
                label="Country"
                name="country"
                value={userDetails.country}
                onChange={handleChange}
                variant="outlined"
              >
                {Object.values(countries).map((country) => (
                  <MenuItem key={country} value={country}>
                    {country.replace(/_/g, " ")}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                select
                label="Language"
                name="language"
                value={userDetails.language}
                onChange={handleChange}
                variant="outlined"
              >
                {Object.values(languages).map((language) => (
                  <MenuItem key={language} value={language}>
                    {language}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                style={{ marginTop: "10px" }}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};
