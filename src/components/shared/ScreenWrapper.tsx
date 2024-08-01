import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useTheme } from '@theme/ThemeContext';

type ScreenWrapperProps = {
  children: React.ReactNode;
};

const ScreenWrapper: React.FC<ScreenWrapperProps> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default ScreenWrapper;
