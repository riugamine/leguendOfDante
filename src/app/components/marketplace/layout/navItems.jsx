'use client'
import Link from "next/link"
import styles from '../../../styles/marketplace/layout/navItems.module.css'
import { usePathname } from "next/navigation"

export default function NavItems() {
    const pathName = usePathname();
    return (
        <nav className={styles.navbarI}>
            <ul className={styles.navLinksI}>
                <li><Link className={pathName === '/marketplace/demons' ? `${styles.activeI} ${styles.navLinkI}` : styles.navLinkI} href="#"><span className={styles.iconI}>👹</span>Demons</Link></li>
                <li><Link className={pathName === '/marketplace/heroes' ?  `${styles.activeI} ${styles.navLinkI}` : styles.navLinkI} href="/marketplace/heroes"><span className={styles.iconI}>🦸</span>Heroes</Link></li>
                <li><Link className={pathName === '/marketplace/pets' ? `${styles.activeI} ${styles.navLinkI}` : styles.navLinkI} href="#"><span className={styles.iconI}>🐾</span>Pets</Link></li>
                <li><Link className={pathName === '/marketplace/equipment' ? `${styles.activeI} ${styles.navLinkI}` : styles.navLinkI} href="#"><span className={styles.iconI}>🗡️</span>Equipment</Link></li>
                <li><Link className={pathName === '/marketplace/potions' ? `${styles.activeI} ${styles.navLinkI}` : styles.navLinkI} href="#"><span className={styles.iconI}>🍯</span>Potions</Link></li>
                <li><Link className={pathName === '/marketplace/spell' ? `${styles.activeI} ${styles.navLinkI}` : styles.navLinkI} href="#"><span className={styles.iconI}>✨</span>Spell</Link></li>
                <div className={styles.optionsBoxI}>
                    <p className={styles.infoText}>312.551 Heroes</p>
                </div>
            </ul>
        </nav>
    )
}
