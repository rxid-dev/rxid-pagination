import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import "./App.css";
import { RxidPagination, usePagination } from "./components/pagination";

function App() {
  const pagination = usePagination({ perPage: 5, totalRecord: 99 });

  const [current, setCurrent] = useState(0);

  const handleChangeTotalRecord = () => {
    const totalRecord = Math.ceil(Math.random() * 100);
    pagination.setTotalRecord(totalRecord);
  };

  const handleOnChangePage = (currentPage: number) => {
    console.log(currentPage);
  };

  const handleChangePerPage = () => {
    const perPages = [5, 10, 25];
    const position = (current + 1) % 3;
    pagination.changePerPage(perPages[position]);
    setCurrent(position);
  };

  return (
    <div className="container p-5">
      <h1>React Pagination Tutorial</h1>
      <p>Create reusable pagination component on react app</p>

      <button
        className="btn btn-primary mb-4 me-2"
        onClick={handleChangeTotalRecord}
      >
        Change Total Record
      </button>

      <button className="btn btn-primary mb-4" onClick={handleChangePerPage}>
        Change Per Page{" "}
        <div className="badge bg-warning">{pagination.perPage}</div>
      </button>

      <div className="text-end">
        <RxidPagination {...pagination} onChangePage={handleOnChangePage} />
      </div>
    </div>
  );
}

export default App;
