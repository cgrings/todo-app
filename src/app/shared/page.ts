export interface Page<T> {
  content: Array<T>;
  first: Boolean;
  last: Boolean;
  size: number;
  number: number;
  numberOfElements: number;
  totalElements: number;
  totalPages: number;
}