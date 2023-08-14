import styles from '../../styles/layout/footer.module.css'
import Image from 'next/image'

export default function footer() {
  return (
    <footer className={styles.footer}>
    <Image className={styles.logo} src="/img/logo.png" width={250} height={200} alt='league-of-dante'></Image>

    <ul className={styles.socialLinks}>
      <li><a className={styles.socialLink} href="#"><Image className={styles.socialIcon} src="/img/internet-icon.png" width={40} height={40} alt='league-of-dante'></Image></a></li>
      <li><a className={styles.socialLink} href="#"><Image className={styles.socialIcon} src="/img/internet-icon.png" width={40} height={40} alt='league-of-dante'></Image></a></li>
      <li><a className={styles.socialLink} href="#"><Image className={styles.socialIcon} src="/img/internet-icon.png" width={40} height={40} alt='league-of-dante'></Image></a></li>
      <li><a className={styles.socialLink} href="#"><Image className={styles.socialIcon} src="/img/internet-icon.png" width={40} height={40} alt='league-of-dante'></Image></a></li>
    </ul>

    <p className={styles.lenguage}> <button className=' btn btn-text' type='button'>English</button> | <button className=' btn btn-text' type='button'>Español</button></p>
  </footer>
  )
}
