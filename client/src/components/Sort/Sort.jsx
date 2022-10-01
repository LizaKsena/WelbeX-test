/* eslint-disable react/prop-types */
import React from 'react';

export default function Sort({ inputHandler, submitHandler, resetSubmit }) {
  return (
    <div className=" d-flex justify-content-center">
      <form onSubmit={submitHandler}>
        <select
          name="row"
          onChange={inputHandler}
          className="form-select mb-3 mt-5"
        >
          <option defaultValue="Выберите колонку">Выберите колонку</option>
          <option value="name">Название</option>
          <option value="number">Количество</option>
          <option value="distance">Расстояние</option>
        </select>

        <select
          name="condition"
          onChange={inputHandler}
          className="form-select mb-3"
        >
          <option defaultValue="Условие">Условие</option>
          <option value="equals">Равно</option>
          <option value="include">Содержит</option>
          <option value="more">Больше</option>
          <option value="less">Меньше</option>
        </select>

        <input
          name="value"
          onChange={inputHandler}
          type="text"
          placeholder="Фильтр"
          className="form-control mb-3"
        />
        <div className="d-flex justify-content-between mb-2">
          <button onClick={resetSubmit} type="submit" className="btn btn-outline-dark">
            Стереть
          </button>
          <button type="submit" className="btn btn-outline-dark">
            Отправить
          </button>
        </div>

      </form>
    </div>
  );
}
