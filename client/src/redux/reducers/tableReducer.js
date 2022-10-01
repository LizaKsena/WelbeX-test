/* eslint-disable default-param-last */
const allEntries = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_TABLE':
      return payload;
    default:
      return state;
  }
};

export default allEntries;
