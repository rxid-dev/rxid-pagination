import { useRef } from "react";
import { PaginationProps } from "./interfaces/PaginationProps";

interface Props {
  perPage?: number;
  currentPage?: number;
  size?: number;
  totalRecord?: number;
}

export const usePagination = (props: Props): PaginationProps => {
  const ref = useRef<any>();

  const setTotalRecord = (totalRecord: number): void => {
    if (!ref.current) return;
    ref.current.setTotalRecord(totalRecord);
  };

  const changePerPage = (changePerPage: number): void => {
    if (!ref.current) return;
    ref.current.changePerPage(changePerPage);
  };

  return { ...props, setTotalRecord, changePerPage, ref };
};
