/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Sort from '../Sort/Sort';
import Pagination from '../Pagination/Pagination';

export default function Table() {
  const table = useSelector((store) => store.table);
  const [data, setData] = useState(table);
  //  флаг для сортировки
  const [order, setOrder] = useState('ASC');
  // стейт для получениия объекта с параметрами для фильтра( {row: 'row_name', condition: 'include', value: 'value'})
  const [input, setInput] = useState({});
  // стейт для пагинации
  const [currentPage, setCurrentPage] = useState(1);
  const [rowPerPage] = useState(6);

  useEffect(() => {
    setData(table);
  }, [table]);

  // переменные для отображения количества элементов
  const lastRowIndex = currentPage * rowPerPage;
  const firtsRowIndex = lastRowIndex - rowPerPage;
  const currentRow = data.slice(firtsRowIndex, lastRowIndex);

  const inputHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    switch (input.condition) {
      case 'equals':
        setData(
          data.filter((elem) => elem[input.row].toString() === input.value),
        );
        break;
      case 'include':
        setData(
          data.filter((elem) => elem[input.row].toString().toLowerCase().includes(input.value)),
        );
        break;
      case 'more':
        setData(data.filter((elem) => +elem[input.row] > +input.value));
        break;
      case 'less':
        setData(data.filter((elem) => +elem[input.row] < +input.value));
        break;
      default:
        break;
    }
  };
  // сортировка по расстоянию и номеру
  const sorting = (arg) => {
    if (order === 'ASC') {
      const sortedData = [...data].sort((a, b) => a[arg] - b[arg]);
      setData(sortedData);
      setOrder('DESC');
    }
    if (order === 'DESC') {
      const sortedData = [...data].sort((a, b) => b[arg] - a[arg]);
      setData(sortedData);
      setOrder('ASC');
    }
  };
  // сортировка по имени
  const sortingByName = (arg) => {
    if (order === 'ASC') {
      const sortedData = [...data].sort((a, b) => (a[arg].toLowerCase()
       > b[arg].toLowerCase() ? 1 : -1));
      setData(sortedData);
      setOrder('DESC');
    }
    if (order === 'DESC') {
      const sortedData = [...data].sort((a, b) => (a[arg].toLowerCase()
       < b[arg].toLowerCase() ? 1 : -1));
      setData(sortedData);
      setOrder('ASC');
    }
  };
  // очистка поля ввода и списков
  const resetSubmit = () => {
    window.location.reload(false);
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className=" flex flex-col justify-content-evenly">
      <Sort
        data={data}
        inputHandler={inputHandler}
        submitHandler={submitHandler}
        resetSubmit={resetSubmit}
      />
      <Pagination
        key={data.length}
        rowPerPage={rowPerPage}
        totalRows={data.length}
        paginate={paginate}
      />
      <div className="flex flex-col align-items-center ml-5">
        <table className="table w-full m-1  table-striped table-hover  w-50">
          <thead>
            <tr>
              <th className="fst-italic fw-semibold text-success text-center">Дата</th>
              <th onClick={() => sortingByName('name')} className="fst-italic fw-semibold text-success text-center">Название</th>
              <th onClick={() => sorting('number')} className="fst-italic fw-semibold text-success text-center">Количество</th>
              <th onClick={() => sorting('distance')} className="fst-italic fw-semibold text-success text-center">Расстояние</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              currentRow.map((elem) => (
                <tr key={elem.id}>
                  <th className="fw-light text-center">{elem.date.slice(0, 10)}</th>
                  <th className="fw-light text-center">{elem.name}</th>
                  <th className="fw-light text-center">{elem.number}</th>
                  <th className="fw-light text-center">{elem.distance}</th>
                </tr>
              ))
            ) : (
              <tr>
                <th className="fw-light text-center">ничего не найдено</th>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}
