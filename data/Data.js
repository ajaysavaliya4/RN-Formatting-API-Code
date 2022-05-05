import {Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {addUser, addUsers} from '../actions/actions';

// export const onSave = ({
//   name,
//   email,
//   gender,
//   status,
//   dispatch,
//   refreshData,
//   navigation,
// }) => {
//   const myHeaders = new Headers();

//   myHeaders.append(
//     'Authorization',
//     'Bearer bc1e0809f9bb5ce03125ea49290ec9c8acc225870ebd21e484217e79b88800db',
//   );
//   myHeaders.append('Content-Type', 'application/json');
//   fetch('https://gorest.co.in/public/v1/users', {
//     method: 'POST',
//     headers: myHeaders,
//     body: JSON.stringify({
//       name: name,
//       email: email,
//       gender: gender,
//       status: status,
//     }),
//   })
//     .then(response => response.json())
//     .then(result => {
//       dispatch(addUser(result));
//       refreshData;
//       navigation.navigate('User List');
//     })
//     .then(refreshData)

//     .catch(error => console.log(error));
// };

export const getData = ({dispatch, setIsFetching}) => {
  const myHeaders = new Headers();
  myHeaders.append(
    'Authorization',
    'Bearer bc1e0809f9bb5ce03125ea49290ec9c8acc225870ebd21e484217e79b88800db',
  );
  myHeaders.append('Content-Type', 'application/json');
  fetch('https://gorest.co.in/public/v1/users', {
    method: 'GET',
    headers: myHeaders,
  })
    .then(response => response.json())
    .then(results => {
      dispatch(addUsers(results.data));
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => setIsFetching(false));
};