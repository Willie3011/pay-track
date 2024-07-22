import { Pagination as Pag } from "react-bootstrap";

function Pagination({ currentPage, totalPages, onPageChange }) {
    let items = [];
    for (let n = 1; n <= totalPages; n++) {
        items.push(
            <Pag.Item key={n} active={n === currentPage} onClick={() => onPageChange(n)}>
                {n}
            </Pag.Item>
        );
    }

    return (
        <Pag>
            {currentPage > 1 && (
                <Pag.Prev onClick={() => onPageChange(currentPage - 1)} />
            )}
            {items}
            {currentPage < totalPages && (
                <Pag.Next onClick={() => onPageChange(currentPage + 1)} />
            )}
        </Pag>
    );
}

export default Pagination;
