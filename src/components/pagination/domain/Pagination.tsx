import { PaginationProps } from "../interfaces/PaginationProps";

export class Pagination {
  public currentPage: number;
  public firstPage: number;
  public lastPage: number;
  public startPage: number;
  public endPage: number;
  public list: Array<number>;

  public totalRecord: number;
  public perPage: number;
  public size: number;
  private constructor() {}

  public static create(model: PaginationProps) {
    const pagination = new Pagination();
    pagination.list = [];
    pagination.currentPage = model.currentPage || 1;
    pagination.totalRecord = model.totalRecord || 0;
    pagination.perPage = model.perPage || 10;
    pagination.size = model.size || 5;
    return pagination;
  }
}
