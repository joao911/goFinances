import React from 'react';
import {ThemeProvider} from 'styled-components';
import colors from './src/utils/styles/colors';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {AppRoutes} from './src/routes/app.routes';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import {StatusBar} from 'react-native';
import SignIn from './src/screens/SignIn';

const App = () => {
  return (
    <ThemeProvider theme={colors}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" />
        {/* <AppRoutes /> */}
        <SignIn />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
