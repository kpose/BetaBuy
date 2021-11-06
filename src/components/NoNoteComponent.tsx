import {fonts, hp, wp} from 'app/utils';
import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Text} from 'react-native-paper';
import LottieView from 'lottie-react-native';

const NoNoteComponent = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.noNoteContainer}
      showsHorizontalScrollIndicator={false}>
      <View style={{height: hp(40)}}>
        <LottieView source={require('../assets/think.json')} autoPlay loop />
      </View>
      <Text style={[fonts.title]}>Notes you add will appear here.</Text>
    </ScrollView>
  );
};

export default NoNoteComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  noNoteContainer: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  lottieStyle: {
    height: hp(40),
    width: wp(60),
  },
});
