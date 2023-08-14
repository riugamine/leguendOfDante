import styles from '../../styles/utils/pagination.module.css'

export default function Pagination(props) {
    return (
        <div className={styles.pagination}>
            <button className={styles.pageSymbol}>&lt;</button>
            <div className={styles.pageText}>Page</div>
            <div className={`${styles.pageNumber} ${styles.active}`}>1</div>
            
            <div className={styles.totalPages}>of 1500</div>
            <button className={styles.pageSymbol}>&gt;</button>
        </div>
    )
}
