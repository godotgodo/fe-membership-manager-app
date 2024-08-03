import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { useTheme } from '@theme/ThemeContext';
import { TextInput } from 'react-native';
import { SecondaryButton } from '@UI/Buttons';

type LoginState = {
  email: string;
  password: string;
};

const LoginForm: React.FC = () => {
  const { theme } = useTheme();
  const styles = createStyles(theme);
  const [formData, setFormData] = useState<LoginState>({
    email: '',
    password: '',
  });

  const submit = () => {
    console.log(formData);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.inputHeader}>Email</Text>
      <TextInput
        placeholder="Enter your email..."
        value={formData.email}
        onChangeText={(text) =>
          setFormData((prev) => ({ ...prev, email: text }))
        }
        style={styles.input}
      />
      <Text style={styles.inputHeader}>Password</Text>
      <TextInput
        placeholder="Enter your password..."
        value={formData.password}
        onChangeText={(text) =>
          setFormData((prev) => ({ ...prev, password: text }))
        }
        style={styles.input}
      />
      <SecondaryButton
        text="Submit"
        onPress={submit}
        style={styles.submitButton}
      />
    </View>
  );
};

const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.background,
      flex: 1,
      gap: 5,
      width: '100%',
    },
    input: {
      backgroundColor: theme.primary,
      borderRadius: 10,
      height: 48,
      padding: 10,
      width: '100%',
    },
    inputHeader: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    submitButton: {
      height: 48,
      marginTop: 10,
      textAlign: 'center',
      width: '100%',
    },
    text: {
      color: theme.text,
      fontSize: 16,
    },
  });
  return styles;
};

export default LoginForm;
