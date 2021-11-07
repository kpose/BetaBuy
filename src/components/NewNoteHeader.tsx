import {hp, wp, colors, regularIconSize, navigationIconSize} from 'app/utils';
import {margin} from 'app/utils/sizes';
import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

interface IProps {
  onBackPress: () => void;
  onPinPress: () => void;
  onBellPress: () => void;
  onSavePress: () => void;
}

const NewNoteHeader = ({
  onBackPress,
  onBellPress,
  onPinPress,
  onSavePress,
}: IProps) => {
  return (
    <View style={styles.headerContainer}>
      <View>
        <Pressable onPress={onBackPress}>
          <Icon
            name="chevron-back"
            size={navigationIconSize}
            color={colors.LIGHT_GRAY}
          />
        </Pressable>
      </View>

      <View style={styles.innerRight}>
        <Pressable onPress={onPinPress}>
          <Icon
            name="ios-pin-outline"
            size={regularIconSize}
            color={colors.LIGHT_GRAY}
          />
        </Pressable>
        <Pressable onPress={onBellPress}>
          <Icon
            name="notifications"
            size={regularIconSize}
            color={colors.LIGHT_GRAY}
          />
        </Pressable>
        <Pressable onPress={onSavePress}>
          <Icon
            name="ios-archive-outline"
            size={regularIconSize}
            color={colors.LIGHT_GRAY}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default NewNoteHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(1),
  },
  innerRight: {
    flexDirection: 'row',
    width: wp(30),
    justifyContent: 'space-around',
  },
});
