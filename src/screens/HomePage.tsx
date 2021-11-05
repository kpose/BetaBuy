import {LargeButton, Spinner} from 'app/components';
import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import {BottomSheet} from 'app/components';
import {AppStackProps} from 'app/types/AppStackTypes';

const HomePage = ({navigation}: AppStackProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  const logOut = () => {
    setLoading(true);
    auth()
      .signOut()
      .then(() => {
        setLoading(false);
        console.log('user signed out');
      });
  };

  if (loading) {
    return <Spinner />;
  }
  return (
    <View style={styles.container}>
      <Text>HomePage</Text>

      <LargeButton onPress={() => navigation.navigate('Out')} title="logout" />
      <BottomSheet />
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
