import React from 'react';
import Dashboard from './src/screens/Dashboard';
import {ThemeProvider} from 'styled-components';
import colors from './src/utils/styles/colors';

const App = () => {
  return (
    <ThemeProvider theme={colors}>
      <Dashboard />
    </ThemeProvider>
  );
};

export default App;
