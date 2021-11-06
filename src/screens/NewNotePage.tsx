import {hp, wp} from 'app/utils';
import {margin} from 'app/utils/sizes';
import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {Text} from 'react-native-paper';
import {NewNoteHeader} from 'app/components';
import {AppStackProps} from 'app/types/AppStackTypes';

const NewNotePage = ({navigation}: AppStackProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <NewNoteHeader onBackPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
};

export default NewNotePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: hp(1),
    marginHorizontal: margin,
  },

  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  innerRight: {
    flexDirection: 'row',
    width: wp(30),
    justifyContent: 'space-around',
  },
});
