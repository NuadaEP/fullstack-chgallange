import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import theme from '../styles/theme'
import GlobalStyle from '../styles/global'

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
);

export default App;