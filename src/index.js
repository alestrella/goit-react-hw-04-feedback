import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import GlobalStyles from 'components/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { Title } from 'components/Title/Title';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Title>Feedback</Title>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
