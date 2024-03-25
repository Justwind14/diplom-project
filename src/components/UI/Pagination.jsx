import Buttons from "./Buttons";

const Pagination = ({ totalPages, currentPage, paginate, prevPage, nextPage }) => {
    // Создаем массив номеров страниц для пагинации
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="pagination">
            {currentPage > 1 && <Buttons className="pagination__arrow" onClick={prevPage}>
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.99512 2L2.99512 7L7.99512 12L6.99512 14L-0.00488281 7L6.99512 0L7.99512 2Z" fill="black"/>
                </svg>
            </Buttons>}
            <div className="pagination__numbers">
                {pageNumbers.map(number => (
                    <Buttons
                        key={number}
                        onClick={() => paginate(number)}
                        className={`pagination__number ${currentPage === number ? "pagination__number--active" : ""}`}
                    >
                        {number}
                    </Buttons>
                ))}
            </div>
            {currentPage < totalPages && <Buttons className="pagination__arrow" onClick={nextPage}>
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-0.00500488 12L4.995 7L-0.00500488 2L0.994995 0L7.995 7L0.994995 14L-0.00500488 12Z" fill="black"/>
                </svg>
            </Buttons>}
        </div>
    );
};

export default Pagination;
