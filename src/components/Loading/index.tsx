import { CircularProgress } from '@mui/material';

const Loading = () => {
  return (
    <CircularProgress
      size={100}
      sx={{ display: 'flex', justifySelf: 'center', alignSelf: 'center' }}
    />
  );
};

export default Loading;
