import {fonts} from 'app/utils';
import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Text} from 'react-native-paper';

const NoNoteComponent = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.noNoteContainer}
      showsHorizontalScrollIndicator={false}>
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
});
