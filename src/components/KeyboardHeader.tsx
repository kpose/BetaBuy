import {colors, hp, regularIconSize, wp} from 'app/utils';
import {margin} from 'app/utils/sizes';
import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface IProps {
  onAddPress: () => void;
  onPalettePress: () => void;
  onDotsPress: () => void;
}

const KeyboardHeader = ({onAddPress, onDotsPress, onPalettePress}: IProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Pressable onPress={onAddPress}>
          <Icon
            name="add-circle-outline"
            size={regularIconSize}
            color={colors.PRIMARY}
          />
        </Pressable>
        <Pressable onPress={onPalettePress}>
          <Icon
            name="color-palette-outline"
            size={regularIconSize}
            color={colors.PRIMARY}
          />
        </Pressable>
      </View>
      <View>
        <Pressable onPress={onDotsPress}>
          <Icon
            name="ellipsis-vertical"
            size={regularIconSize}
            color={colors.PRIMARY}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default KeyboardHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: hp(1),
  },
  left: {
    flexDirection: 'row',
    width: wp(15),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
