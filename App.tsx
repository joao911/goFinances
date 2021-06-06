import React from 'react';
import {ThemeProvider} from 'styled-components';
import colors from './src/utils/styles/colors';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {AppRoutes} from './src/routes/app.routes';

const App = () => {
  return (
    <ThemeProvider theme={colors}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
