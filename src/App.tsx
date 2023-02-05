import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import "./App.css";
import { Example } from "./components/example";
import { RxidPagination, usePagination } from "./components/pagination";

function App() {
  const pagination = usePagination({ perPage: 5, totalRecord: 99 });

  const handleChangeTotalRecord = () => {
    const totalRecord = Math.ceil(Math.random() * 100);
    pagination.setTotalRecord(totalRecord);
  };

  return (
    <div className="container p-5">
      <h1>React Pagination Tutorial</h1>
      <p>Create reusable pagination component on react app</p>
      <Example />
      <button
        className="btn btn-primary mb-4 me-2"
        onClick={handleChangeTotalRecord}
      >
        Change Total Record
      </button>

      <select
        className="form-select mb-4"
        onChange={(e) => {
          pagination.changePerPage(+e.target.value);
        }}
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={25}>25</option>
      </select>

      <div className="text-end">
        <RxidPagination {...pagination} />
      </div>
    </div>
  );
}

export default App;
