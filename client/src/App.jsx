import './App.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Table from './components/Table/Table';
import { getAllEntriesThunk } from './redux/actions/getAllEntries';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEntriesThunk());
  }, [dispatch]);

  return (
    <Table />
  );
}

export default App;
