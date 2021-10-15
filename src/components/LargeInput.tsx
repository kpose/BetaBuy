import {colors, hp, wp} from 'app/utils';
import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const LargeInput = () => {
  return (
    <View>
      <TextInput style={styles.inputStyle} />
    </View>
  );
};

export default LargeInput;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  inputStyle: {
    width: wp(90),
    height: hp(7),
    borderColor: colors.PRIMARY,
    borderWidth: wp(0.4),
    borderRadius: 15,
    padding: wp(3),
  },
});
