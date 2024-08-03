import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import { useTheme } from '@theme/ThemeContext';

interface ButtonProps {
  text: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const PrimaryButton: React.FC<ButtonProps> = ({ text, onPress, style }) => {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  return (
    <Pressable onPress={onPress} style={style}>
      <View style={styles.primaryButtonContainer}>
        <Text style={styles.primaryButtonText}>{text}</Text>
      </View>
    </Pressable>
  );
};

const SecondaryButton: React.FC<ButtonProps> = ({ text, onPress, style }) => {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  return (
    <Pressable onPress={onPress} style={style}>
      <View style={styles.secondaryButtonContainer}>
        <Text style={styles.secondaryButtonText}>{text}</Text>
      </View>
    </Pressable>
  );
};

const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    primaryButtonContainer: {
      backgroundColor: theme.primary,
      borderRadius: 10,
      elevation: 4,
      height: '100%',
      margin: 10,
      padding: 10,
    },
    primaryButtonText: {
      color: theme.text,
      fontSize: 16,
    },
    secondaryButtonContainer: {
      backgroundColor: theme.primary,
      borderRadius: 10,
      elevation: 4,
      height: '100%',
      padding: 10,
    },
    secondaryButtonText: {
      color: theme.text,
      fontSize: 16,
    },
  });
  return styles;
};

export { PrimaryButton, SecondaryButton };
