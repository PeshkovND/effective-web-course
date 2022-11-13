import styles from "./searcher.module.css"

export const Searcher = () => {
    return (
        <div className={styles.inputContainer}>
            <input className={styles.input} />
            <button className={styles.button}>Search</button>
        </div>
    )
}