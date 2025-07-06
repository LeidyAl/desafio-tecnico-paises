import React from 'react';
import { Grid, TextField, Typography } from '@mui/material';
import CardInformation from '../components/CardInformation';

const Home = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid size={12}>
          <Typography
            align="center"
            variant="h4"
            color="primary.800"
            fontWeight="bolder"
          >
            COUNTRIES LIST
          </Typography>
        </Grid>

        <Grid size={12}>
          <TextField
            label="Search field"
            type="search"
            size="small"
            fullWidth
          />
        </Grid>
        <Grid size={3}>
          <CardInformation
            name="Colombia"
            continent="South America"
            currency="COP"
            code="CO"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
