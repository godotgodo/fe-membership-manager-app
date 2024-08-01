import { Button, Text, View } from 'react-native';
import React from 'react';
import { useTheme } from '@theme/ThemeContext';

const ToggleTheme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <View>
      <Text style={{ color: theme.text }}>Hello, World!</Text>
      <Button
        title="Toggle Theme"
        onPress={toggleTheme}
        color={theme.primary}
      />
    </View>
  );
};

export default ToggleTheme;
