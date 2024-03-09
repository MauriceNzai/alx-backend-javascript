import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const p1 = signUpUser(firstName, lastName);
  const p2 = uploadPhoto(fileName);

  return Promise.allSettled([p1, p2])
    .then((values) => values
      .map(({ status, value, reason }) => {
        if (status === 'fulfilled') {
          return {
            status,
            value,
          };
        }
        return {
          status,
          value: `Error: ${reason.message}`,
        };
      }));
}
