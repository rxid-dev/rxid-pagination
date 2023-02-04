import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import "./App.css";
import { Pagination, usePagination } from "./components/pagination";

function App() {
  const pagination = usePagination({ perPage: 5, totalRecord: 99 });

  const handleChangeTotalRecord = () => {
    const totalRecord = Math.ceil(Math.random() * 100);
    pagination.setTotalRecord(totalRecord);
  };

  const handleOnChangePage = (currentPage: number) => {
    console.log(currentPage);
  };

  return (
    <div className="container p-5">
      <h1>React Pagination Tutorial</h1>
      <p>Create reusable pagination component on react app</p>

      <button
        className="btn btn-primary mb-4"
        onClick={handleChangeTotalRecord}
      >
        Change Total Record
      </button>

      <div className="text-end">
        <Pagination model={pagination} onChangePage={handleOnChangePage} />
      </div>
    </div>
  );
}

export default App;
