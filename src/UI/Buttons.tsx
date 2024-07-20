import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useTheme } from '@theme/ThemeContext';

interface PrimaryButtonProps {
  text: string;
  onPress: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text, onPress }) => {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  return (
    <Pressable onPress={onPress}>
      <View style={styles.primaryButtonContainer}>
        <Text style={styles.primaryButtonText}>{text}</Text>
      </View>
    </Pressable>
  );
};

const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    primaryButtonContainer: {
      backgroundColor: theme.background,
      borderRadius: 4,
      elevation: 4,
      padding: 4,
    },
    primaryButtonText: {
      color: theme.text,
      fontSize: 16,
    },
  });
  return styles;
};

export { PrimaryButton };
