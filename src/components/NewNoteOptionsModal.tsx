import React, {useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import Modal from 'react-native-modal';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {hp, wp, colors, regularIconSize, fonts} from 'app/utils';
import {margin} from 'app/utils/sizes';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface IProps {
  isVisible: boolean;
  closeModal: () => void;
}
const NewNoteOptionsModal = ({isVisible, closeModal}: IProps) => {
  return (
    <Modal
      isVisible={isVisible}
      swipeDirection={['up', 'left', 'right', 'down']}
      hasBackdrop={true}
      backdropColor="transparent"
      onBackdropPress={closeModal}
      onBackButtonPress={closeModal}
      style={styles.modal}>
      <View>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.rowContainer}>
              <Icon
                name="trash"
                size={regularIconSize}
                color={colors.PRIMARY}
              />
              <Text style={[styles.text, fonts.body]}> Delete </Text>
            </View>

            <View style={styles.rowContainer}>
              <Icon
                name="copy-outline"
                size={regularIconSize}
                color={colors.PRIMARY}
              />
              <Text style={[styles.text, fonts.body]}> Make a copy </Text>
            </View>

            <View style={styles.rowContainer}>
              <Icon
                name="share-social-outline"
                size={regularIconSize}
                color={colors.PRIMARY}
              />
              <Text style={[styles.text, fonts.body]}> Send </Text>
            </View>

            <View style={styles.rowContainer}>
              <Icon
                name="person-add-outline"
                size={regularIconSize}
                color={colors.PRIMARY}
              />
              <Text style={[styles.text, fonts.body]}> Collaborate </Text>
            </View>

            <View style={[styles.rowContainer]}>
              <Icon
                name="pricetag-outline"
                size={regularIconSize}
                color={colors.PRIMARY}
              />
              <Text style={[styles.text, fonts.body]}> Labels </Text>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default NewNoteOptionsModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalView: {
    padding: margin,
    backgroundColor: 'red',
    width: '100%',
    height: 450,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(2),
  },
  text: {
    marginLeft: wp(3),
  },
});
