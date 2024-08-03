import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useTheme } from '@theme/ThemeContext';

const Signup: React.FC = () => {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, themed signup world!</Text>
    </View>
  );
};

const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: theme.background,
      flex: 1,
      justifyContent: 'center',
    },
    text: {
      color: theme.text,
      fontSize: 16,
    },
  });
  return styles;
};

export default Signup;
