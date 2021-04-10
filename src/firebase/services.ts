import { firebase } from './firebase';

export const createNewBoard = async (
  name: string,
  selectedColor: string,
  uid: string | undefined,
) => {
  try {
    await firebase.firestore().collection('boards').doc().set({
      name,
      selectedColor,
      ownerId: uid,
    });
  } catch (error) {
    console.error(error);
  }
};

// export const getBoardNamesAndColors = async (uid: string| undefined) => {
//     try {
//         await firebase.firestore().collection('boards').where('uid', '==', uid).onSnapshot((snapShot) =>
//     console.log(snapShot)
//   )
//     } catch (error) {

//     }

// };
