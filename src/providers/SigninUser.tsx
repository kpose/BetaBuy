import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

interface IPromise {
  success: boolean;
  message: string;
  data: any;
}
export default async function SigninUser(
  email: string,
  password: string,
): Promise<any> {
  try {
    await auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        const userID = res.user.uid;
        firestore()
          .collection('users')
          .where('uid', '==', userID)
          .get()
          .then(userData => {
            return Promise.resolve({
              success: true,
              message: 'signed in successfully',
              data: userData,
            });
          })
          .catch(error => {
            const invalidCredentials = 'Invalid credentials, try again';
            return Promise.resolve({
              success: false,
              message: error.code,
            });
          });
      });
  } catch (e) {
    return Promise.resolve({
      success: false,
      message: e,
    });
  }
}
