import firestore from '@react-native-firebase/firestore';

interface IPromise {
  success: boolean;
  message: string;
  data?: any;
}
export default async function CreateNote(
  title: string,
  body: string,
  authorEmail: string,
): Promise<any> {
  try {
    await firestore()
      .collection('notes')
      .add({
        title,
        body,
        authorEmail: authorEmail,
        collaborators: [],
        labels: [],
        createdAt: firestore.Timestamp.now(),
      })
      .then(res => {
        return Promise.resolve({
          success: true,
          message: 'new note created successfully',
          data: res,
        });
      });
  } catch (e) {
    return Promise.resolve({
      success: false,
      message: e,
    });
  }
}
