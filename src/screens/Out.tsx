import {LargeButton, Spinner} from 'app/components';
import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import {AuthStackProps} from 'app/types/AuthStackTypes';

const Out = ({navigation}: AuthStackProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  const logOut = () => {
    setLoading(true);
    auth()
      .signOut()
      .then(() => {
        setLoading(false);
        //navigation.navigate('Signin');
        console.log('user signed out...');
      });
  };

  if (loading) {
    return <Spinner />;
  }
  return (
    <View style={styles.container}>
      <Text>Out</Text>

      <LargeButton onPress={logOut} title="logout" />
    </View>
  );
};

export default Out;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
