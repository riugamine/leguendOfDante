import styles from '../../styles/layout/header.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function header() {
    return (
        <header>
            <nav className={`${styles.navbar} navbar navbar-expand-lg`}>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className={`${styles.btnWhite} navbar-toggler-icon`} ></span>
                </button>
                <div className={`${styles.responsiveNav} collapse navbar-collapse `} id="navbarNavDropdown">
                    <div className={`${styles.displayContents} navbar-nav `}>
                        <div className={styles.logo}><Image src="/img/logo.png" width={100} height={80} alt='league-of-dante'></Image></div>
                        <ul className={styles.navLinks}>
                            <li> <Link className={styles.navLink} href='/'>MY ASSETS</Link></li>
                            <li><Link className={styles.navLink} href='/marketplace'>VESTING/CLAIM</Link></li>
                            <li><Link className={styles.navLink} href='/marketplace'>MARKETPLACE</Link></li>
                            <li><Link className={styles.navLink} href='/marketplace'>STAKING SYSTEM</Link></li>
                        </ul>
                        <div className={styles.infoContainer}>

                            <div className={styles.icon}><Image src="/img/internet-icon.png" width={40} height={40} alt='league-of-dante'></Image></div>
                            <div className={styles.infoBox}>
                                <div className={styles.infoIcon}><Image src="/img/logo.png" width={50} height={35} alt='league-of-dante'></Image></div>
                                <div className={styles.infoText}>
                                    <p>100 Dantes</p>
                                    <p>11154155 545451541</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </nav>
        </header>
    )
}
