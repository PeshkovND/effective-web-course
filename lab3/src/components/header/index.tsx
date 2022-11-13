import { NavLink } from 'react-router-dom'
import styles from './header.module.css'

export const Header = () => {

    const isActive = (href: string) => {
        if (window.location.href === href) return styles.navItem__active
        return styles.navItem
    }


    return (
        <header className={styles.headerContainer}>
            <a className={styles.logoContainer}>
                <img src="/marvel_logo.svg" className={styles.logo} alt="Marvel" />
            </a>
            <nav className={styles.nav}>
                <NavLink className={styles.navItem} to='/characters'> Chartacters</NavLink>
                <NavLink className={styles.navItem} to='/comics'>Comics</NavLink>
                <NavLink className={styles.navItem} to='/series'>Series</NavLink>
            </nav>
        </header>
    )
}