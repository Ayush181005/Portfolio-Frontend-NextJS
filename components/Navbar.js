import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Navbar.module.css'
import { useRouter } from 'next/router'

const Navbar = () => {
    const router = useRouter();
    let location = router.pathname;

    const navListToggle = () => {document.getElementById('nav-list').classList.toggle(styles.navListHidden);}
    const closeNav = () => {document.getElementById('nav-list').classList.add(styles.navListHidden);}

    return (
        <header>
            <nav className={styles.navbar}>
                <div className={styles.navLogoParent}>
                    <Link href="/">
                        <Image src='/logo.jpg' alt="Logo" className={styles.navbarLogo} height={120} width={120} style={{width:"auto", height:"auto"}} priority />
                    </Link>
                </div>
                <ul className={`${styles.navList} ${styles.navListHidden}`} id="nav-list">
                    <li className={styles.listItem}>
                        <Link className={`${styles.navbarText} ${styles.left} ${location === '/' ? styles.active : ''}`} href="/" onClick={closeNav}>Home</Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link className={`${styles.navbarText} ${styles.right} ${location === '/gallery' ? styles.active : ''}`} href="/gallery" onClick={closeNav}>Gallery</Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link className={`${styles.navbarText} ${styles.right} ${location === '/contact' ? styles.active : ''}`} href="/contact" onClick={closeNav}>Contact Me</Link>
                    </li>
                </ul>
                <div className={styles.menu} id="toggle-button" onClick={navListToggle}>
                    <div className={styles.menuLine} id="menu-line-1"></div>
                    <div className={styles.menuLine} id="menu-line-2"></div>
                    <div className={styles.menuLine} id="menu-line-3"></div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar