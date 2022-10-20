import ReactPaginate from "react-paginate";

import styles from './pagination.module.scss'
import {FC} from "react";

type PaginationProps = {
    currentPage: number,
    onChangePage: (page: number) => void
}

const index: FC<PaginationProps> = ({currentPage, onChangePage}) => {
    return (
        <ReactPaginate
            className={styles.root}
            breakLabel="..."
            nextLabel=">"
            onPageChange={(e) => onChangePage(e.selected + 1)}
            pageRangeDisplayed={4}
            pageCount={3}
            forcePage={currentPage - 1}
            previousLabel="<"
        />
    );
}

export default index;