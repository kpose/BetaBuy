import {colors, hp, wp} from 'app/utils';
import {margin} from 'app/utils/sizes';
import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import {Text, Surface} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface IProps {
  onCheckPress: () => void;
  onBrushPress: () => void;
  onVoicePress: () => void;
  onImagePress: () => void;
  onFABPress: () => void;
}

const BottomSheet = ({
  onBrushPress,
  onCheckPress,
  onImagePress,
  onVoicePress,
  onFABPress,
}: IProps) => {
  return (
    <Surface style={styles.container}>
      <Pressable style={styles.fab} onPress={onFABPress}>
        <Icon name="add-outline" size={wp(7)} color={colors.SECONDARY} />
      </Pressable>
      <View style={styles.innerContainer}>
        <Pressable onPress={onCheckPress}>
          <Icon name="checkbox" size={wp(5)} color={colors.PRIMARY} />
        </Pressable>

        <Pressable onPress={onBrushPress}>
          <Icon name="md-brush" size={wp(5)} color={colors.PRIMARY} />
        </Pressable>

        <Pressable onPress={onVoicePress}>
          <MaterialIcons
            name="keyboard-voice"
            size={wp(5)}
            color={colors.PRIMARY}
          />
        </Pressable>

        <Pressable onPress={onImagePress}>
          <Icon name="image" size={wp(5)} color={colors.PRIMARY} />
        </Pressable>
      </View>
    </Surface>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: hp(8),
    position: 'absolute',
    bottom: 0,
    paddingLeft: margin,
  },
  innerContainer: {
    marginTop: hp(3),
    flexDirection: 'row',
    width: wp(50),
    justifyContent: 'space-around',
  },
  fab: {
    position: 'absolute',
    bottom: hp(5.5),
    right: margin,
    width: wp(10),
    height: wp(10),
    backgroundColor: colors.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,

    shadowColor: colors.PRIMARY,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.7,
    shadowRadius: 5,
    elevation: 10,
  },
});
