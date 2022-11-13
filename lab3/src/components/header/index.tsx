import styles from './header.module.css'

export const Header = () => {
    return (
        <header className={styles.headerContainer}>
            <a className={styles.logoContainer}>
                <img src="/marvel_logo.svg" className={styles.logo} alt="Marvel" />
            </a>
            <nav className={styles.nav}>
                <a className={styles.navItem}> Chartacters</a>
                <a className={styles.navItem}>Comics</a>
                <a className={styles.navItem}>Series</a>
            </nav>
        </header>
    )
}