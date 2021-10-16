import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import {colors, fonts, hp, wp} from 'app/utils';

interface Props {
  title: string;
  onPress: () => void;
}

const LargeButton = ({title, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={[colors.PRIMARY, colors.SECONDARY]}
        style={styles.button}>
        <Text style={[fonts.buttonText]}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default LargeButton;

const styles = StyleSheet.create({
  button: {
    height: hp(6),
    width: wp(90),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(3),
  },
});
