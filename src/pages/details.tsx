import React from 'react';
import { Typography } from '@mui/material';

import { useParams } from "react-router";

const Details = () => {
  const params = useParams()
  return (
    <>
      <Typography>Details {params.idcountry}</Typography>
    </>
  );
};

export default Details;
