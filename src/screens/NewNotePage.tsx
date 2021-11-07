import React, {useState, useRef} from 'react';
import {
  View,
  Button,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableWithoutFeedback,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from 'react-native';
//import {Text} from 'react-native-paper';
import {hp, wp, fonts, colors} from 'app/utils';
import {margin} from 'app/utils/sizes';
import {NewNoteHeader, KeyboardHeader, NewNoteModal} from 'app/components';
import {AppStackProps} from 'app/types/AppStackTypes';

const NewNotePage = ({navigation}: AppStackProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onAddPress = () => {
    Keyboard.dismiss();
    setIsModalVisible(true);
  };

  const closeAddModal = () => {
    setIsModalVisible(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      <NewNoteHeader onBackPress={() => navigation.goBack()} />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.innerContainer}>
        <ScrollView>
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <TextInput
              style={[styles.input, fonts.title]}
              placeholder="Title"
              multiline={true}
              textAlignVertical="top"
              numberOfLines={2}
              selectionColor={colors.PRIMARY}
              underlineColorAndroid="transparent"
            />
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <TextInput
              style={[styles.input, fonts.body, {marginTop: hp(1)}]}
              placeholder="Note"
              multiline={true}
              autoFocus={true}
              textAlignVertical="top"
              selectionColor={colors.PRIMARY}
              underlineColorAndroid="transparent"
            />
          </TouchableWithoutFeedback>
        </ScrollView>
        <NewNoteModal isVisible={isModalVisible} closeModal={closeAddModal} />
        <KeyboardHeader onAddPress={onAddPress} />
      </KeyboardAvoidingView>
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
  innerContainer: {
    flex: 1,
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
  titleText: {},
  input: {
    padding: wp(2),
  },
});
