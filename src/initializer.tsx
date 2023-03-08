import React, { ReactNode } from 'react';
import { QueryClientProvider } from 'react-query';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import ErrorBoundary from 'components/ErrorBoundary';
import DialogWrapper from 'components/Dialog/Wrapper';

/** Services */
import { queryClient } from 'config/react-query';
import { theme } from 'config/mui';

/** CSS Files */
import 'styles/index.css';
import 'styles/font.css';

type Props = {
  children: ReactNode;
};

function Initializer({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <Router>
            <DialogWrapper />
            {children}
          </Router>
        </QueryClientProvider>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default Initializer;
