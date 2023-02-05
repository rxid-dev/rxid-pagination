import React, { useEffect, useState } from "react";
import { Pagination } from "./domain/Pagination";
import { PaginationProps } from "./interfaces/PaginationProps";
import { resolvePagination } from "./resolve-pagination";
import "./RxidPagination.scss";
interface Props extends PaginationProps {
  onChangePage: (page: number) => void;
}

export const RxidPagination = (props: Props) => {
  const { onChangePage, ...model } = props;
  const [state, setState] = useState({
    currentPage: model.currentPage || 1,
    pagination: Pagination.createEmpty(),
  });

  useEffect(() => {
    const pagination = resolvePagination({
      ...model,
      currentPage: state.currentPage,
    });
    setState((state) => ({
      ...state,
      pagination,
    }));
  }, [model.totalRecord, state.currentPage, model.perPage]);

  const setCurrentPage = (currentPage: number) => {
    setState((state) => ({
      ...state,
      currentPage,
    }));
    if (onChangePage) {
      onChangePage(currentPage);
    }
  };

  const handleChangePage = (currentPage: number) => {
    if (state.currentPage === currentPage) return;
    setCurrentPage(currentPage);
  };

  const handleBackPage = () => {
    const currentPage = state.currentPage - 1;
    if (currentPage < state.pagination.firstPage) return;
    setCurrentPage(currentPage);
  };

  const handleNextPage = () => {
    const currentPage = state.currentPage + 1;
    if (currentPage > state.pagination.lastPage) return;
    setCurrentPage(currentPage);
  };

  return (
    <ul className="pagination-list">
      <li className="pagination-item">
        <a
          className={
            "pagination-link " + (state.currentPage === 1 ? "disabled" : "")
          }
          onClick={() => handleChangePage(1)}
        >
          <em className="fa-solid fa-angles-left" />
        </a>
      </li>
      <li className="pagination-item">
        <a
          className={
            "pagination-link " + (state.currentPage === 1 ? "disabled" : "")
          }
          onClick={handleBackPage}
        >
          <em className="fas fa-chevron-left" />
        </a>
      </li>
      {state.pagination.startPage > 1 ? (
        <li className="pagination-item">
          <a className="pagination-link" onClick={() => handleChangePage(1)}>
            1
          </a>
        </li>
      ) : (
        ""
      )}
      {state.pagination.startPage > 2 ? (
        <li className="pagination-item">
          <a className="pagination-link separator">...</a>
        </li>
      ) : (
        ""
      )}
      {state.pagination.list.map((page) => {
        return (
          <li className="pagination-item" key={page}>
            <a
              className={
                "pagination-link " +
                (state.currentPage === page ? "active" : "")
              }
              onClick={() => handleChangePage(page)}
            >
              {page}
            </a>
          </li>
        );
      })}

      {state.currentPage < state.pagination.lastPage - 3 &&
      state.pagination.endPage + 1 < state.pagination.lastPage ? (
        <li className="pagination-item">
          <a className="pagination-link separator">...</a>
        </li>
      ) : (
        ""
      )}

      {state.currentPage < state.pagination.lastPage - 2 &&
      state.pagination.endPage < state.pagination.lastPage ? (
        <li className="pagination-item">
          <a
            className="pagination-link"
            onClick={() => handleChangePage(state.pagination.lastPage)}
          >
            {state.pagination.lastPage}
          </a>
        </li>
      ) : (
        ""
      )}

      <li className="pagination-item">
        <a
          className={
            "pagination-link " +
            (state.currentPage === state.pagination.lastPage ? "disabled" : "")
          }
          onClick={handleNextPage}
        >
          <em className="fas fa-chevron-right" />
        </a>
      </li>

      <li className="pagination-item">
        <a
          className={
            "pagination-link " +
            (state.currentPage === state.pagination.lastPage ? "disabled" : "")
          }
          onClick={() => handleChangePage(state.pagination.lastPage)}
        >
          <em className="fa-solid fa-angles-right" />
        </a>
      </li>
    </ul>
  );
};
