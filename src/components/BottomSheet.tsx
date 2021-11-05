import {colors, hp, wp} from 'app/utils';
import {margin} from 'app/utils/sizes';
import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {Text, Surface} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

const BottomSheet = () => {
  return (
    <Surface style={styles.container}>
      <View style={styles.fab}>
        <Icon name="add-outline" size={wp(7)} color={colors.PRIMARY} />
      </View>
      <View style={styles.innerContainer}>
        <TouchableWithoutFeedback>
          <Icon name="md-brush" size={wp(5)} color={colors.PRIMARY} />
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback>
          <Icon name="md-recording" size={wp(5)} color={colors.PRIMARY} />
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback>
          <Icon name="image" size={wp(5)} color={colors.PRIMARY} />
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback>
          <Icon name="checkbox" size={wp(5)} color={colors.PRIMARY} />
        </TouchableWithoutFeedback>
      </View>
    </Surface>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: hp(9),
    position: 'absolute',
    bottom: 0,
    paddingLeft: margin,
  },
  innerContainer: {
    marginTop: hp(3),
    flexDirection: 'row',
    width: wp(40),
    justifyContent: 'space-around',
  },
  fab: {
    position: 'absolute',
    bottom: hp(7),
    right: margin,
    width: wp(10),
    height: wp(10),
    backgroundColor: colors.LIGHT_GRAY,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,

    shadowColor: colors.PRIMARY,
    shadowOffset: {width: 5, height: 3},
    shadowOpacity: 0.7,
    shadowRadius: 5,
    elevation: 10,
  },
});
