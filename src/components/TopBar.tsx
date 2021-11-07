import {colors, hp, wp, fonts} from 'app/utils';
import {margin} from 'app/utils/sizes';
import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView, Pressable, Image} from 'react-native';
import {Text, Surface} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

interface IProps {
  onMenuPress: () => void;
  onSearchPress: () => void;
  onGridListPress: () => void;
  onAvatarPress: () => void;
}

const TopBar = ({
  onAvatarPress,
  onGridListPress,
  onMenuPress,
  onSearchPress,
}: IProps) => {
  const [isList, setIsList] = useState<boolean>(true);

  const toggleView = () => {
    setIsList(!isList);
    onGridListPress();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Surface style={styles.innerTab}>
        <View style={styles.leftContainer}>
          <Pressable onPress={onMenuPress}>
            <Icon name="menu" size={wp(6)} color={colors.PRIMARY} />
          </Pressable>
          <Pressable>
            <Text style={[styles.searchText, fonts.textInput]}>
              Search your notes
            </Text>
          </Pressable>
        </View>

        <View style={styles.rightContainer}>
          <Pressable onPress={toggleView}>
            <Icon
              name={isList ? 'list' : 'grid-outline'}
              size={wp(6)}
              color={colors.PRIMARY}
            />
          </Pressable>
          <Pressable style={styles.imageButton}>
            <Image
              source={require('../assets/avatar.png')}
              style={styles.image}
            />
          </Pressable>
        </View>
      </Surface>
    </SafeAreaView>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  container: {
    paddingTop: hp(1),
  },
  innerTab: {
    marginHorizontal: margin,
    flexDirection: 'row',
    height: hp(6),
    borderRadius: 5,
    alignItems: 'center',
    paddingHorizontal: wp(3),
    justifyContent: 'space-between',
  },
  leftContainer: {
    width: wp(65),
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchText: {
    marginLeft: wp(3),
    paddingRight: wp(20),
  },
  imageButton: {
    paddingLeft: wp(4),
  },
  image: {
    width: wp(8),
    height: wp(8),
    borderRadius: 50,
    borderWidth: wp(0.3),
    borderColor: colors.PRIMARY,
  },
});
