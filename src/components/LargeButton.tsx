import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import {colors, fonts, hp, wp} from 'app/utils';

interface Props {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

const LargeButton = ({title, onPress, disabled}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.button,
        {backgroundColor: disabled ? colors.DISABLED : colors.PRIMARY},
      ]}>
      <Text style={[fonts.buttonText]}>{title}</Text>
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
