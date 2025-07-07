import React from 'react';
import { Grid, TextField, Typography } from '@mui/material';
import CardInformation from '../components/CardInformation';

import { GetAllCountries } from '../API/countries';
import { useQuery } from '@apollo/client';
import type { AllCountries } from '../interfaces/countries';
import Loading from '../components/Loading';

const Home = () => {
  const { data, loading } = useQuery<AllCountries>(GetAllCountries);

  if (loading) return <Loading />;

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
        {data?.countries.map(({ name, code, continent, currency }) => {
          return (
            <Grid size={3}>
              <CardInformation
                name={name}
                continent={continent.name}
                currency={currency}
                code={code}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Home;
