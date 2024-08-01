import { Text, View } from 'react-native';
import React from 'react';
import ToggleTheme from '@components/shared/ToggleTheme';

const index = () => {
  return (
    <View>
      <View>
        <Text>Home</Text>
      </View>
      <ToggleTheme />
    </View>
  );
};

export default index;
