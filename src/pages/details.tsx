import React from 'react';
import {
  Box,
  Card,
  Divider,
  Grid,
  ListItemText,
  Typography,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { useParams, Link } from 'react-router';
import { useQuery } from '@apollo/client';
import { GetCountry } from '../API/countries';
import type { country } from '../interfaces/countries';
import Loading from '../components/Loading';

const Details = () => {
  const { code } = useParams();

  const { data, loading } = useQuery<country>(GetCountry, {
    variables: { code },
  });

  if (loading) return <Loading />;

  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <Card sx={{ bgcolor: 'primary.200', minWidth: 500, p: 1 }}>
        <Link to="/">
          <ArrowBackIcon />
        </Link>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <img src={`https://flagsapi.com/${code}/flat/64.png`} width={100} />
        </Box>
        <Typography variant="h5" color="primary.800" align="center">
          {data?.country.name}
        </Typography>
        <Divider />
        <Grid container spacing={2}>
          <Grid size={6}>
            <ListItemText primary={data?.country.code} secondary="Code" />
          </Grid>
          <Grid size={6}>
            <ListItemText primary={data?.country.capital} secondary="Capital" />
          </Grid>
          <Grid size={6}>
            <ListItemText
              primary={data?.country.currency}
              secondary="Currency"
            />
          </Grid>
          <Grid size={6}>
            <ListItemText
              primary={data?.country.languages
                .map(({ name }) => name)
                .join(', ')}
              secondary="Languages"
            />
          </Grid>
          <Grid size={6}>
            <ListItemText
              primary={data?.country.continent.name}
              secondary="Continent"
            />
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default Details;
