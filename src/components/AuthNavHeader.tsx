import {colors, fonts, hp, navigationIconSize, wp} from 'app/utils';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import {Surface, Text} from 'react-native-paper';
import VectorIcon from 'react-native-vector-icons/FontAwesome';

interface Props {
  title: string;
  onBackPress: () => void;
}

const AuthNavHeader = ({title, onBackPress}: Props) => {
  return (
    <SafeAreaView>
      <Surface style={styles.container}>
        <View style={styles.inner}>
          <TouchableOpacity
            style={styles.navIconContainer}
            onPress={onBackPress}>
            <VectorIcon
              name="angle-left"
              size={navigationIconSize}
              color={colors.LIGHT_GRAY}
            />
          </TouchableOpacity>
          <Text style={[styles.title, fonts.headerTitle]}>{title}</Text>
        </View>
      </Surface>
    </SafeAreaView>
  );
};

export default AuthNavHeader;

const styles = StyleSheet.create({
  container: {
    height: hp(10),
    justifyContent: 'center',
  },
  inner: {
    flexDirection: 'row',
    marginLeft: wp(4),
  },
  navIconContainer: {
    height: wp(10),
    width: wp(10),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: wp(0.3),
    borderColor: colors.LIGHT_GRAY,
    borderRadius: wp(2),
  },
  title: {
    marginLeft: wp(4),
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(1),
  },
});
