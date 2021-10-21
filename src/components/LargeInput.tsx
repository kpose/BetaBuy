import {colors, fonts, hp, regularIconSize, wp} from 'app/utils';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';

interface Props {
  value: string;
  onChangeText: (x: string) => void;
  hasIcon?: boolean;
  icon?: string;
  disabled?: boolean;
  placeholder: string;
  error?: boolean;
  secureTextEntry?: boolean;
  iconColor?: string;
  keyboardType?:
    | 'default'
    | 'number-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad';
}

const LargeInput = ({
  value,
  onChangeText,
  icon,
  disabled,
  placeholder,
  error,
  hasIcon,
  secureTextEntry,
  keyboardType,
  iconColor,
}: Props) => {
  return (
    <View>
      <TextInput
        mode="outlined"
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        disabled={disabled}
        error={error}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        style={[styles.inputStyle, fonts.textInput]}
        right={
          hasIcon ? (
            <TextInput.Icon
              name={icon}
              color={iconColor}
              size={regularIconSize}
            />
          ) : null
        }
      />
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
    marginBottom: hp(0.5),
  },
});
