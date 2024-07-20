import React from 'react';
import { ThemeProvider } from './theme/ThemeContext';
import AppNavigator from './navigation';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <StatusBar style="auto" />
        <AppNavigator />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
