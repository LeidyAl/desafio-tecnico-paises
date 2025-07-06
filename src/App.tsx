import theme from './config/theme';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/home';
import Details from './pages/details';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="details/:idcountry" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
