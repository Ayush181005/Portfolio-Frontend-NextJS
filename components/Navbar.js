import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Navbar.module.css'
import { useRouter } from 'next/router'

const Navbar = () => {
    const router = useRouter();
    let location = router.pathname;

    const navListToggle = () => {document.getElementById('nav-list').classList.toggle(styles.navListHidden);}
    // const dropdownClick = () => document.getElementsByClassName('dropdown')[0].classList.toggle('hidden');
    const closeNav = () => {document.getElementById('nav-list').classList.add(styles.navListHidden);}

    return (
        <header>
            <nav className={styles.navbar}>
                <div className={styles.navLogoParent}>
                    <Link href="/">
                        <Image src='/logo.jpg' alt="Logo" className={styles.navbarLogo} height={120} width={120} priority={true} />
                    </Link>
                </div>
                <ul className={`${styles.navList} ${styles.navListHidden}`} id="nav-list">
                    <li className={styles.listItem}>
                        <Link className={`${styles.navbarText} ${styles.left} ${location === '/' ? styles.active : ''}`} href="/" onClick={closeNav}>Home</Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link className={`${styles.navbarText} ${styles.right} ${location === '/about' ? styles.active : ''}`} href="/about" onClick={closeNav}>About Me</Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link className={`${styles.navbarText} ${styles.right} ${location === '/portfolio' ? styles.active : ''}`} href="/portfolio" onClick={closeNav}>Portfolio</Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link className={`${styles.navbarText} ${styles.right} ${location === '/certificates' ? styles.active : ''}`} href="/certificates" onClick={closeNav}>Certificates</Link>
                    </li>
                    {/* <li className='list-item'><Link className={`navbar-text right ${location.pathname==='/contact'?'active':''}`} to="/contact">Contact Me</Link></li> */}
                    <li className={styles.listItem}>
                        <Link className={`${styles.navbarText} ${styles.right} ${location === '/contact' ? styles.active : ''}`} href="/contact" onClick={closeNav}>Contact Me</Link>
                    </li>
                    {/* {userData.success && <li className='list-item'>
              <button className="btn navbar-btn" onClick={dropdownClick}>Hi {userData.user.name}&nbsp;<i className="arrow down"></i></button>
              <div className="dropdown hidden">
                <div className="dropdown-menu">
                  <div className="dropdown-item" onClick={handleLogout}>Logout</div>
                  {userData.user.type==='superuser' && <a href="/admin" target="_blank"><div className="dropdown-item">Admin</div></a>}
                </div>
              </div>
            </li>} */}
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