import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import "./App.css";
import { RxidTable, useTable } from "./components/rxid-table";

function App() {
  const tableModel = useTable({
    columns: [
      {
        field: "title",
        header: "Judul",
      },
      {
        field: "body",
        header: "Kotent",
      },
    ],
  });

  return (
    <div className="container p-5">
      <h1>React Pagination Tutorial</h1>
      <p>Create reusable pagination component on react app</p>
      <RxidTable
        {...tableModel}
        stringUrl="https://jsonplaceholder.typicode.com/posts"
      />
    </div>
  );
}

export default App;
