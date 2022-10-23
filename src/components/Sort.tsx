import React, {FC} from "react";

type SortProps = {
    sortBy: number,
    onChangeSortBy: (index: number) => void
}

type M = MouseEvent & {
    path: Node[];
}

const Sort: FC<SortProps> =({sortBy, onChangeSortBy}) => {

    const [open, setOpen] = React.useState(false)
    const sortRef = React.useRef<HTMLDivElement>(null)

    const sortCategory = ["популярности", "цене", "алфавиту"]

    const handleSortClick = (index: number) => {
        onChangeSortBy(index)
        setOpen(false)
    }

    function handleClick(e: MouseEvent) {
        const _e = e as M
        if (sortRef.current && !_e.path.includes(sortRef.current)) {
            setOpen(false)
        }
    }

    React.useEffect(() => {
        document.body.addEventListener("click", (e) => {
            handleClick(e)
        })
        return () => {
            document.body.removeEventListener("click", (e) => {
                handleClick(e)
            })
        }
    }, [])

    return (
        <div ref={sortRef} className="sort">
            <div onClick={() => setOpen(!open)} className="sort__label">
                <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`${open ? "active" : ''}`}
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
                <b>Сортировка по:</b>
                <span>{sortCategory[sortBy]}</span>
            </div>
            <div className={`sort__popup ${open && "_active"}`}>
                <ul>
                    {sortCategory.map((item, index) => <li className={`${sortBy === index && "active"}`} key={index}
                                                           onClick={() => handleSortClick(index)}>{item}</li>)}
                </ul>
            </div>
        </div>
    );
}

export default React.memo(Sort)