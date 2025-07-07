import React, { useEffect, useState } from 'react';
import { Grid, MenuItem, TextField, Typography } from '@mui/material';
import CardInformation from '../components/CardInformation';

import { GetAllCountries, GetContinents } from '../API/countries';
import { useQuery } from '@apollo/client';
import type { AllCountries, Continents } from '../interfaces/countries';
import Loading from '../components/Loading';

const Home = () => {
  const { data, loading } = useQuery<AllCountries>(GetAllCountries);

  const [filterByContient, setFilterByContinent] = useState('ALL');

  const { data: dataContinent } = useQuery<Continents>(GetContinents);
  const ChangeContinent = (contient: string) => {
    setFilterByContinent(contient);
  };

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

        <Grid container size={12}>
          <Grid size={6}>
            <TextField
              label="Search field"
              type="search"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid size={3}>
            <TextField
              select
              label="Filter By"
              variant="outlined"
              fullWidth
              size="small"
            >
              {/* {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))} */}
            </TextField>
          </Grid>
          <Grid size={3}>
            <TextField
              select
              label="Filter By Contient"
              fullWidth
              size="small"
              variant="outlined"
              defaultValue="ALL"
              onChange={(e) => ChangeContinent(e.target.value)}
            >
              <MenuItem key="ALL" value="ALL">
                All
              </MenuItem>
              {dataContinent?.continents?.map(({ name, code }) => (
                <MenuItem key={code} value={code}>
                  {name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        {filterByContient !== 'ALL'
          ? data?.countries
              .filter(({ continent }) => continent.code === filterByContient)
              .map(({ code, name, continent, currency }) => {
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
              })
          : data?.countries.map(({ code, name, continent, currency }) => {
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

        {/* {data?.countries.map(({ name, code, continent, currency }) => {
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
        })} */}
      </Grid>
    </>
  );
};

export default Home;
