import {LargeButton, Spinner} from 'app/components';
import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Text} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import {BottomSheet, TopBar, NoNoteComponent} from 'app/components';
import {AppStackProps} from 'app/types/AppStackTypes';

const HomePage = ({navigation}: AppStackProps) => {
  return (
    <View style={styles.container}>
      <TopBar onGridListPress={() => console.log('switching view')} />

      <NoNoteComponent />

      <BottomSheet onFABPress={() => navigation.navigate('NewNotePage')} />
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  noNoteContainer: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
