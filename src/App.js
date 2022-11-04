import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <div className="container p-5">
      <h4>React Pagination Tutorial</h4>
      <p>Create reusable pagination component on react app</p>
      <button className="btn btn-primary">
        <em className="fas fa-plus me-2"></em>
        Add
      </button>

      <div className="text-end">
        <ul className="pagination-list">
          <li className="pagination-item">
            <a className="pagination-link disabled">
              <em className="fa-solid fa-angles-left" />
            </a>
          </li>
          <li className="pagination-item">
            <a className="pagination-link disabled">
              <em className="fas fa-chevron-left" />
            </a>
          </li>
          <li className="pagination-item">
            <a className="pagination-link ">1</a>
          </li>
          <li className="pagination-item">
            <a className="pagination-link separator">...</a>
          </li>
          <li className="pagination-item">
            <a className="pagination-link">50</a>
          </li>
          <li className="pagination-item">
            <a className="pagination-link">51</a>
          </li>
          <li className="pagination-item">
            <a className="pagination-link active">52</a>
          </li>
          <li className="pagination-item">
            <a className="pagination-link">53</a>
          </li>
          <li className="pagination-item">
            <a className="pagination-link">54</a>
          </li>
          <li className="pagination-item">
            <a className="pagination-link separator">...</a>
          </li>
          <li className="pagination-item">
            <a className="pagination-link">99</a>
          </li>
          <li className="pagination-item">
            <a className="pagination-link">
              <em className="fas fa-chevron-right" />
            </a>
          </li>
          <li className="pagination-item">
            <a className="pagination-link">
              <em className="fa-solid fa-angles-right" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
