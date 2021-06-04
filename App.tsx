import React from 'react';
import Dashboard from './src/screens/Dashboard';
import {ThemeProvider} from 'styled-components';
import colors from './src/utils/styles/colors';
import Register from './src/screens/Register';
import CategorySelect from './src/screens/CategorySelect';

const App = () => {
  return (
    <ThemeProvider theme={colors}>
      {/* <Dashboard /> */}
      <CategorySelect />
    </ThemeProvider>
  );
};

export default App;
