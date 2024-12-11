import React from 'react';
import { Button, TextField } from '@mui/material';

const CommonComponent = () => (
  <div>
    <TextField label="Input" variant="outlined" />
    <Button variant="contained" color="primary">Submit</Button>
  </div>
);

export default CommonComponent;
