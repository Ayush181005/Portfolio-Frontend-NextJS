import React from 'react'
import Link from 'next/link'
import styles from '@/styles/Navbar.module.css'
import { useRouter } from 'next/router'
import Image from 'next/image'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/experience', label: 'Experience & Projects' },
  { href: '/publications', label: 'Publications' },
  { href: '/achievements', label: 'Achievements' },
  { href: '/involvement', label: 'Involvement' },
  { href: '/contact', label: 'Contact' },
]

const Navbar = () => {
  const router = useRouter()
  const location = router.pathname

  const navListToggle = () => {
    document.getElementById('nav-list').classList.toggle(styles.navListOpen)
    document.getElementById('toggle-button').classList.toggle(styles.menuOpen)
  }
  const closeNav = () => {
    document.getElementById('nav-list').classList.remove(styles.navListOpen)
    document.getElementById('toggle-button').classList.remove(styles.menuOpen)
  }

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href="/" className={styles.logoMark} aria-label="Home" onClick={closeNav}>
          <span className={styles.logoBox}>
            <Image
              src="/icons/logo.jpg"
              alt="logo"
              width={40}
              height={40}
              // className={styles.logo}
            />
          </span>
          
          <span className={styles.logoText}>
            Ayush Singh
            <em>Mechanical Engineering Research</em>
          </span>
        </Link>

        <ul className={styles.navList} id="nav-list">
          {NAV_LINKS.map((link) => (
            <li key={link.href} className={styles.listItem}>
              <Link
                className={`${styles.navbarText} ${location === link.href ? styles.active : ''}`}
                href={link.href}
                onClick={closeNav}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={styles.menu}
          id="toggle-button"
          aria-label="Toggle navigation menu"
          onClick={navListToggle}
        >
          <span className={styles.menuLine}></span>
          <span className={styles.menuLine}></span>
          <span className={styles.menuLine}></span>
        </button>
      </nav>
    </header>
  )
}

export default Navbar
