import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useTheme } from '@theme/ThemeContext';
import LoginForm from './LoginForm';

const Login: React.FC = () => {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <Image
        style={styles.loginImage}
        source={require('../../../assets/login.png')}
      />
      <Text style={styles.header}>Log In</Text>
      <Text style={styles.text}>Login to continue using the app</Text>
      <LoginForm />
    </View>
  );
};

const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      alignItems: 'flex-start',
      backgroundColor: theme.background,
      flex: 1,
      gap: 5,
      justifyContent: 'center',
      padding: 20,
    },
    header: {
      color: theme.text,
      fontSize: 24,
      fontWeight: 'bold',
    },
    loginImage: {
      alignSelf: 'center',
    },
    text: {
      color: theme.text,
      fontSize: 16,
    },
  });
  return styles;
};

export default Login;
