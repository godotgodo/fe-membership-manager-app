import { Image, StyleSheet, View, ImageBackground, Text } from 'react-native';
import React from 'react';
import { useTheme } from '@theme/ThemeContext';
import BorderedButton from '@UI/BorderedButton';
import { useNavigation } from '@react-navigation/native';

const index: React.FC = () => {
  const { theme } = useTheme();
  const styles = createStyles(theme);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.loginImageContainer}>
        <Image source={require('../../../assets/login.png')} />
      </View>
      <View style={styles.waveImageContainer}>
        <ImageBackground
          resizeMode="stretch"
          source={require('../../../assets/wave.png')}
          style={styles.waveImage}
        >
          <Text style={styles.headText}>
            Take Controls Your Course Membership!
          </Text>
          <Text style={styles.descriptionText}>
            Managing memberships, tracking attendance, and handling payments.
          </Text>
          <View style={styles.authButtons}>
            <BorderedButton
              text="Log In"
              onPress={() => navigation.navigate('Login')}
            />
            <BorderedButton
              text="Sign Up"
              onPress={() => navigation.navigate('Signup')}
            />
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    authButtons: {
      flexDirection: 'row',
      gap: 10,
    },
    container: {
      alignItems: 'center',
      backgroundColor: theme.background,
      flex: 1,
      justifyContent: 'space-between',
    },
    descriptionText: {
      color: theme.text,
      fontSize: 14,
      textAlign: 'center',
    },
    headText: {
      color: theme.text,
      fontSize: 17,
      fontWeight: 'bold',
    },
    loginImageContainer: {
      margin: '10%',
    },
    waveImage: {
      alignItems: 'center',
      flex: 1,
      gap: 20,
      height: '100%',
      justifyContent: 'center',
    },
    waveImageContainer: {
      height: 500,
      width: '100%',
    },
  });
  return styles;
};

export default index;
