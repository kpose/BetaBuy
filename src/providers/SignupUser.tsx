import auth from '@react-native-firebase/auth';

export const SignupUser = (email: string, password: string) => {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(res => {
      return res;
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        return error.code;
      }
      return error;
    });
};
