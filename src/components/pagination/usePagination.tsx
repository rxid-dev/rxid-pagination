import { useState } from "react";
import { PaginationProps } from "./interfaces/PaginationProps";

interface Props {
  perPage?: number;
  currentPage?: number;
  size?: number;
  totalRecord?: number;
}

export const usePagination = (props: Props): PaginationProps => {
  const { perPage, currentPage, size, totalRecord } = props;
  const [state, setState] = useState({
    perPage: perPage || 10,
    currentPage: currentPage || 1,
    size: size || 5,
    totalRecord: totalRecord || 0,
  });

  const setTotalRecord = (totalRecord: number): void => {
    setState((state) => ({
      ...state,
      totalRecord,
    }));
  };

  const changePerPage = (perPage: number): void => {
    setState((state) => ({
      ...state,
      perPage,
    }));
  };

  return { ...state, setTotalRecord, changePerPage };
};
