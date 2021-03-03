/* eslint-disable no-unused-vars */
import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#E50914',
    },
  },
});

export default function CircularIndeterminate() {
  return (
    <div className="loading-wrapper">

      <MuiThemeProvider theme={theme}>
        <CircularProgress color="secondary" />
      </MuiThemeProvider>

    </div>
  );
}
