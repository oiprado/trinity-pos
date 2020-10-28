import { Product } from './product.model';

export interface ProductResponse {
    content:          Product[];
    pageable:         Pageable;
    last:             boolean;
    totalPages:       number;
    totalElements:    number;
    sort:             Sort;
    numberOfElements: number;
    first:            boolean;
    size:             number;
    number:           number;
    empty:            boolean;
}

export interface Pageable {
    sort:       Sort;
    pageNumber: number;
    pageSize:   number;
    offset:     number;
    unpaged:    boolean;
    paged:      boolean;
}

export interface Sort {
    sorted:   boolean;
    unsorted: boolean;
    empty:    boolean;
}
