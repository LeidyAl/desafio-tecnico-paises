import React from 'react';

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from '@mui/material';
import { Link } from 'react-router';

const CardInformation = ({ name, code, continent, currency }: any) => {
  return (
    <>
      <Link to={`/details/${code}`}>
        <CardActionArea>
          <Card
            sx={{
              display: 'flex',
              alignItems: 'center',
              p: 1,
              bgcolor: 'primary.100',
            }}
          >
            <CardMedia
              component="img"
              image={`https://flagsapi.com/${code}/flat/64.png`}
              alt={`Flag's ${name}`}
              sx={{ width: 50 }}
            />
            <CardContent>
              <Typography
                variant="subtitle1"
                color="primary.800"
                sx={{
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  width: '200px',
                  display: 'block',
                }}
              >
                {name}
              </Typography>
              <Typography variant="subtitle2" color="primary.800">
                Contient: {continent}
              </Typography>
              <Typography variant="subtitle2" color="primary.800"  sx={{
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  width: '200px',
                  display: 'block',
                }}>
                Currency: {currency}
              </Typography>
            </CardContent>
          </Card>
        </CardActionArea>
      </Link>
    </>
  );
};

export default CardInformation;
