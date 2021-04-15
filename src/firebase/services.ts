import { firebase } from './firebase';

export const createNewBoard = async (
  name: string,
  backgroundColorOrImage: string,
  uid: string | undefined,
) => {
  try {
    await firebase.firestore().collection('boards').doc().set({
      name,
      backgroundColorOrImage,
      ownerId: uid,
    });
  } catch (error) {
    console.error(error);
  }
};
