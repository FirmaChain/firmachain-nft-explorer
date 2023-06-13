import Routes from './routes';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

import './default.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import theme from './themes';
import GloabalFont from './styles/globalFont';

function App() {
  return (
    <>
      <GloabalFont />
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          maxSnack={3}
          style={{ fontSize: '1.6rem' }}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </SnackbarProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
