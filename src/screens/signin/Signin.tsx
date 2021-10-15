import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {LargeInput} from 'app/components';

const Signin = () => {
  return (
    <View style={styles.container}>
      <Text> sign in</Text>
      <LargeInput />
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
