import { createUser, uploadPhoto } from './utils.js';

export default async function asyncUploadUser () {
  try {
    const user = await createUser();
    const photo = await uploadPhoto();
    return Promise.resolve({
      photo,
      user
    });
  } catch (err) {
    return Promise.resolve({
      photo: null,
      user: null
    });
  }
}
