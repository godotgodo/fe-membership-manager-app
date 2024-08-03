import React from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '@theme/ThemeContext';
import { SafeAreaView } from 'react-native-safe-area-context';

type ScreenWrapperProps = {
  children: React.ReactNode;
};

const ScreenWrapper: React.FC<ScreenWrapperProps> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: theme.background }]}
    >
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default ScreenWrapper;
