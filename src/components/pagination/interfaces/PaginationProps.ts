export interface PaginationProps {
  perPage: number;
  currentPage: number;
  size: number;
  totalRecord: number;
  setTotalRecord: (totalRecord: number) => void;
  changePerPage: (perPage: number) => void;
}
