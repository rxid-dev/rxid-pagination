import { MutableRefObject } from "react";

export interface PaginationProps {
  perPage?: number;
  currentPage?: number;
  size?: number;
  totalRecord?: number;
  ref: MutableRefObject<any>;
  setTotalRecord: (totalRecord: number) => void;
  changePerPage: (perPage: number) => void;
}
