import { createGlobalStyle } from 'styled-components';

import Metropolis_Bold from '../assets/fonts/Metropolis_Bold.woff';
import Metropolis_Regular from '../assets/fonts/Metropolis_Regular.woff';
import Metropolis_Medium from '../assets/fonts/Metropolis_Medium.woff';
import Metropolis_Light from '../assets/fonts/Metropolis_Light.woff';

export const Metropolis = 'Metropolis';

export default createGlobalStyle`
    @font-face {
        font-family: "${Metropolis}";
        src: local("Font_test"), url(${Metropolis_Regular}) format('woff'); 
        font-weight: normal;
    }
    @font-face {
        font-family: "${Metropolis}";
        src: local("Font_test"), url(${Metropolis_Medium}) format('woff'); 
        font-weight: 500;
    }
    @font-face {
        font-family: "${Metropolis}";
        src: local("Font_test"), url(${Metropolis_Bold}) format('woff');
        font-weight: bold;
    }
    @font-face {
        font-family: "${Metropolis}";
        src: local("Font_test"), url(${Metropolis_Light}) format('woff');
        font-weight: 300;
    }
`;
