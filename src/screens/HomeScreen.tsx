import { Button, SafeAreaView, Text } from 'react-native';
import React from 'react';
import { useTheme } from '@theme/ThemeContext';

const HomeScreen = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.background,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ color: theme.text }}>Hello, World!</Text>
      <Button
        title="Toggle Theme"
        onPress={toggleTheme}
        color={theme.primary}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
