import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  ScrollView,
  Keyboard,
} from 'react-native';
import {Text, Surface} from 'react-native-paper';
import {LargeInput, LargeButton, Spinner} from 'app/components';
import VectorIcon from 'react-native-vector-icons/FontAwesome';
import {colors, fonts, hp, navigationIconSize, wp} from 'app/utils';
import {AuthStackProps} from 'app/types/AuthStackTypes';
import {isValidEmail, isValidPassword} from 'app/utils/validators';
import {SignupUser} from 'app/providers/SignupUser';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Signup = ({navigation}: AuthStackProps) => {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isSignupError, setIsSignupError] = useState<string | null>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  /* this is used to render a label for the form input */
  const renderLabel = (label: string) => {
    return (
      <View style={styles.labelContainer}>
        <Text style={[fonts.body]}>{label}</Text>
      </View>
    );
  };

  /* To register user and navigate to homepage */
  const register = async () => {
    setIsLoading(true);
    await auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        firestore().collection('users').add({email: email, username: name});
        navigation.navigate('HomePage');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          setIsLoading(false);
          setIsSignupError(
            'This email address is already in use by another account.',
          );
        }
        setIsLoading(false);
      });
    setIsLoading(false);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      {/* show spinner if 'create button' is clicked */}
      {isLoading && <Spinner />}

      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}>
          {/* <View style={styles.socialContainer}>
            <Text style={[fonts.caption, styles.socialCaption]}>
              Sign up with one of the following options.
            </Text>
            <View style={styles.socialRow}>
              <TouchableOpacity>
                <Surface style={[{backgroundColor: '#db3236'}, styles.surface]}>
                  <VectorIcon name="google" size={25} color={colors.WHITE} />
                </Surface>
              </TouchableOpacity>
              <TouchableOpacity>
                <Surface style={[styles.surface, {backgroundColor: '#3b5998'}]}>
                  <VectorIcon name="facebook" size={25} color={colors.WHITE} />
                </Surface>
              </TouchableOpacity>
            </View>
          </View> */}

          <View>
            {renderLabel('Name')}
            <LargeInput
              value={name}
              onChangeText={(x: string) => setName(x)}
              placeholder="John Doe"
              hasIcon={true}
              icon={email ? 'emoticon-cool' : 'emoticon-confused'}
              iconColor={colors.SECONDARY}
            />

            {renderLabel('Email')}
            <LargeInput
              value={email}
              onChangeText={(x: string) => setEmail(x)}
              placeholder="John Doe"
              error={email.length > 3 && !isValidEmail(email)}
              hasIcon={true}
              icon={email ? 'emoticon-cool' : 'emoticon-confused'}
              iconColor={colors.SECONDARY}
            />
            {email.length > 3 && !isValidEmail(email) && (
              <Text style={[fonts.caption, {color: colors.WARNING}]}>
                Invalid email, please verify.
              </Text>
            )}

            {isSignupError && (
              <Text style={[fonts.caption, {color: colors.WARNING}]}>
                {isSignupError}
              </Text>
            )}

            {renderLabel('Password')}
            <LargeInput
              value={password}
              onChangeText={(x: string) => setPassword(x)}
              placeholder="John Doe"
              error={password.length > 3 && !isValidPassword(password)}
              hasIcon={true}
              icon={email ? 'eye-off' : 'eye'}
              iconColor={colors.SECONDARY}
            />
            {password.length > 3 && !isValidPassword(password) && (
              <Text style={[fonts.caption, {color: colors.WARNING}]}>
                Password must contain an uppercase and lowercase letter, a
                number and special character.
              </Text>
            )}
          </View>
          <View style={styles.buttonContainer}>
            <LargeButton title="Create Account" onPress={register} />
          </View>
          <View style={styles.option}>
            <Text style={[fonts.caption]}>Already have a account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
              <Text
                style={[
                  fonts.caption,
                  {fontWeight: 'bold', marginLeft: wp(2)},
                ]}>
                Log in
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: wp(4),
  },

  socialContainer: {
    marginTop: hp(6),
  },
  socialCaption: {
    color: colors.LIGHT_GRAY,
  },
  surface: {
    height: hp(6),
    width: wp(40),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(3),
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: hp(3),
  },
  labelContainer: {
    marginTop: hp(2),
  },

  buttonContainer: {
    marginTop: hp(5),
  },
  option: {
    marginTop: hp(2),
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
});
