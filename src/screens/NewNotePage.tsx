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
import {
  NewNoteHeader,
  KeyboardHeader,
  NewNoteModal,
  NewNoteOptionsModal,
  Spinner,
} from 'app/components';
import {AppStackProps} from 'app/types/AppStackTypes';
import {useAppSelector} from 'app/hooks/reduxHooks';
import CreateNote from 'app/providers/CreateNote';

const NewNotePage = ({navigation}: AppStackProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isOptionsModal, setIsOptionsModal] = useState(false);
  const [title, setTitle] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [body, setBody] = useState<string>('');
  const userEmail = useAppSelector(state => state.user.user.email);

  const onAddPress = () => {
    Keyboard.dismiss();
    setIsModalVisible(true);
  };

  const onOptionsPress = () => {
    Keyboard.dismiss();
    setIsOptionsModal(true);
  };

  const closeAddModal = () => {
    setIsModalVisible(false);
  };

  const saveNote = async () => {
    setIsLoading(true);
    const response = await CreateNote(title, body, userEmail);
    setIsLoading(false);
    console.log(response);
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <NewNoteHeader
        onBackPress={() => navigation.goBack()}
        onSavePress={saveNote}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.innerContainer}>
        <ScrollView>
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <TextInput
              style={[styles.input, fonts.title]}
              value={title}
              onChangeText={(text: string) => setTitle(text)}
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
              value={body}
              onChangeText={(text: string) => setBody(text)}
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
        <NewNoteOptionsModal
          isVisible={isOptionsModal}
          closeModal={() => setIsOptionsModal(false)}
        />
        <KeyboardHeader onAddPress={onAddPress} onDotsPress={onOptionsPress} />
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
