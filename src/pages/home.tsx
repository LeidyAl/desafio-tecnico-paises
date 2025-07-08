import { useState, useMemo } from 'react';
import { Grid, MenuItem, TextField, Typography } from '@mui/material';
import CardInformation from '../components/CardInformation';

import { GetAllCountries, GetContinents } from '../API/countries';
import { useQuery } from '@apollo/client';
import type { AllCountries, Continents } from '../interfaces/countries';
import Loading from '../components/Loading';

const Home = () => {
  const { data, loading } = useQuery<AllCountries>(GetAllCountries);
  const { data: dataContinent } = useQuery<Continents>(GetContinents);

  const [filterByContinent, setFilterByContinent] = useState('ALL');
  const [filterByName, setFilterByName] = useState('');
  const [filterByCurrency, setFilterByCurrency] = useState('');

  const filteredCountries = useMemo(() => {
    if (!data?.countries) return [];
    return data?.countries?.filter(({ name, continent, currency }) => {
      const matchesContinent =
        filterByContinent === 'ALL' || continent.code === filterByContinent;
      const matchesName = name.toLowerCase().includes(filterByName);
      const matchesCurrency = currency?.toLowerCase().includes(filterByCurrency);
      return matchesContinent && matchesName && matchesCurrency;
    });
  }, [data, filterByContinent, filterByName, filterByCurrency]);

  const ChangeFilterName = (name: string) => {
    setFilterByName(name?.toLowerCase());
  };

  const ChangeFilterCurrency = (currency: string) => {
    setFilterByCurrency(currency?.toLowerCase());
  };

  const ChangeContinent = (continent: string) => {
    setFilterByContinent(continent);
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
              onChange={(e) => ChangeFilterName(e.target.value)}
              value={filterByName}
              fullWidth
            />
          </Grid>
          <Grid size={3}>
            <TextField
              label="Search By Currency"
              type="search"
              size="small"
              onChange={(e) => ChangeFilterCurrency(e.target.value)}
              value={filterByCurrency}
              fullWidth
            />
          </Grid>
          <Grid size={3}>
            <TextField
              select
              label="Filter By Continent"
              fullWidth
              size="small"
              variant="outlined"
              value={filterByContinent}
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

        {filteredCountries?.map(({ code, name, continent, currency }) => (
          <Grid size={3}>
            <CardInformation
              name={name}
              continent={continent.name}
              currency={currency}
              code={code}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Home;
