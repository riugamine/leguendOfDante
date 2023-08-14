'use client'

import Link from "next/link"
import styles from '../../../styles/marketplace/layout/headerMarketplace.module.css'
import { useRouter } from "next/navigation"

export default function HeaderMarkeplace() {
    const router = useRouter()
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navLinks}>
                <li><Link className={router.pathName === '/marketplace' ? [styles.navLink, styles.active ] : styles.navLink} href="#">MARKETPLACE</Link></li>
                <li><Link className={router.pathName === '/marketplace' ? [styles.navLink, styles.active ] : styles.navLink} href="#">CREATE A SALE</Link></li>
                <li><Link className={router.pathName === '/marketplace' ? [styles.navLink, styles.active ] : styles.navLink} href="#">MY LISTING</Link></li>
                <li><Link className={router.pathName === '/marketplace' ? [styles.navLink, styles.active ] : styles.navLink} href="#">MY PURCHASE</Link></li>
                <li><Link className={router.pathName === '/marketplace' ? [styles.navLink, styles.active ] : styles.navLink} href="#">FAVORITES</Link></li>
            </ul>
        </nav>
    )
}
