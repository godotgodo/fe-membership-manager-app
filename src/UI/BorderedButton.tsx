import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useTheme } from '@theme/ThemeContext';

type BorderedButtonProps = {
  text: string;
  onPress?: () => void;
};
const BorderedButton: React.FC<BorderedButtonProps> = ({ text, onPress }) => {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  return (
    <Pressable onPress={onPress}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </Pressable>
  );
};

const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    buttonContainer: {
      borderRadius: 20,
      borderWidth: 1,
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    buttonText: {
      color: theme.text,
    },
  });
  return styles;
};

export default BorderedButton;
