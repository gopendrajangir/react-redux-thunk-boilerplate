/* eslint-disable linebreak-style */

export default (state = [], action) => {
  console.log('Hey');
  switch (action.type) {
    case 'FETCH_USER':
      return [...state, action.payload];
    default:
      return state;
  }
};