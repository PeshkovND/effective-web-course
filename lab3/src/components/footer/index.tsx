import styles from './footer.module.css'

export const Footer = () => {
    const CURRENT_YEAR: number = new Date().getFullYear()

    return (
        <footer className={styles.footerContainer}>
            <div className={styles.logoContainer}>
                <img src="/marvel_logo.svg" className={styles.logo} alt="Marvel" />
            </div>
            <p>Data provided by Marvel. © {CURRENT_YEAR} MARVEL</p>
            <a href='https://developer.marvel.com/' className={styles.link} target="_blank">developer.marvel.com</a>
        </footer>
    )
}