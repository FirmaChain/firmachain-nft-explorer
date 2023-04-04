import Routes from './routes';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

import Header from './organisms/header';
import Footer from './organisms/footer';

import './default.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import theme from './themes';
import GloabalFont from './styles/globalFont';
import { MainContainer } from './styles/app';

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
            <MainContainer>
              <Header />
              <Routes />
              <Footer />
            </MainContainer>
          </BrowserRouter>
        </SnackbarProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
