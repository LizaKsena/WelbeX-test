import { GET_TABLE } from '../types/types';

export const getAll = (payload) => ({
  type: GET_TABLE,
  payload,
});

export const getAllEntriesThunk = () => async (dispath) => {
  const response = await fetch('http://localhost:3001/');
  const data = await response.json();
  dispath(getAll(data.allEntries));
};
