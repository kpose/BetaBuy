import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {Text, Surface} from 'react-native-paper';
import {LargeInput, LargeButton} from 'app/components';
import VectorIcon from 'react-native-vector-icons/FontAwesome';
import {colors, fonts, hp, navigationIconSize, wp} from 'app/utils';

const Signin = () => {
  const [email, setEmail] = useState<string>('');
  const renderLabel = (label: string) => {
    return (
      <View style={styles.labelContainer}>
        <Text style={[fonts.body]}>{label}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity
          style={styles.navIconContainer}
          onPress={() => console.log('back button pressed')}>
          <VectorIcon
            name="angle-left"
            size={navigationIconSize}
            color={colors.LIGHT_GRAY}
          />
        </TouchableOpacity>
        <Text style={[styles.title, fonts.headerTitle]}>Sign up</Text>
      </View>

      <View style={styles.socialContainer}>
        <Text style={[fonts.caption, styles.socialCaption]}>
          Sign up with one of the following options.
        </Text>
        <View style={styles.socialRow}>
          <TouchableOpacity>
            <Surface style={styles.surface}>
              <VectorIcon name="google" size={25} color={colors.LIGHT_GRAY} />
            </Surface>
          </TouchableOpacity>
          <TouchableOpacity>
            <Surface style={styles.surface}>
              <VectorIcon name="facebook" size={25} color={colors.LIGHT_GRAY} />
            </Surface>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        {renderLabel('Name')}
        <LargeInput
          value={email}
          onChangeText={(x: string) => setEmail(x)}
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
          hasIcon={true}
          icon={email ? 'emoticon-cool' : 'emoticon-confused'}
          iconColor={colors.SECONDARY}
        />

        {renderLabel('Password')}
        <LargeInput
          value={email}
          onChangeText={(x: string) => setEmail(x)}
          placeholder="John Doe"
          hasIcon={true}
          icon={email ? 'eye-off' : 'eye'}
          iconColor={colors.SECONDARY}
        />
      </View>
      <View style={styles.buttonContainer}>
        <LargeButton
          title="Create Account"
          onPress={() => console.log('button pressed')}
        />
      </View>
      <View style={styles.option}>
        <Text style={[fonts.caption]}>Already have a account?</Text>
        <TouchableOpacity>
          <Text
            style={[fonts.caption, {fontWeight: 'bold', marginLeft: wp(2)}]}>
            Log in
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: wp(4),
  },
  navIconContainer: {
    height: wp(10),
    width: wp(10),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: wp(0.3),
    borderColor: colors.DARK_GRAY,
    borderRadius: wp(2),
  },
  title: {
    marginLeft: wp(4),
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(1),
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
