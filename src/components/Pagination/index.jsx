import ReactPaginate from "react-paginate";

import styles from './pagination.module.scss'
import {setCurrentPage} from "../../store/filterSlice";

const index = ({dispatch}) => {
    return (
        <ReactPaginate
            className={styles.root}
            breakLabel="..."
            nextLabel=">"
            onPageChange={(e) => dispatch(setCurrentPage(e.selected + 1))}
            pageRangeDisplayed={4}
            pageCount={3}
            previousLabel="<"
            renderOnZeroPageCount={null}
        />
    );
}

export default index;