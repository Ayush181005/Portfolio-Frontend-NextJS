import React from 'react'
import styles from '@/styles/Footer.module.css'
import { GithubIcon, LinkedinIcon, MailIcon, InstagramIcon, StackOverflowIcon } from './Icons'

const SOCIALS = [
  { href: 'https://github.com/Ayush181005', label: 'GitHub', Icon: GithubIcon },
  { href: 'https://linkedin.com/in/ayyyuusshhh', label: 'LinkedIn', Icon: LinkedinIcon },
  { href: 'mailto:ayush.s181005@gmail.com', label: 'Email', Icon: MailIcon },
  { href: 'https://stackoverflow.com/users/15543100/ayush?tab=profile', label: 'StackOverflow', Icon: StackOverflowIcon },
  { href: 'https://instagram.com/ayyyuusshhh_', label: 'Instagram', Icon: InstagramIcon },
]

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.titleBlock}>
        <div className={styles.blockCol}>
          <span className={styles.blockLabel}>Drawn by</span>
          <span className={styles.blockValue}>Ayush Singh</span>
        </div>
        <div className={styles.blockCol}>
          <span className={styles.blockLabel}>Discipline</span>
          <span className={styles.blockValue}>Mechanical Engineering</span>
        </div>
        <div className={styles.blockCol}>
          <span className={styles.blockLabel}>Based in</span>
          <span className={styles.blockValue}>Gandhinagar, India</span>
        </div>
        <div className={styles.blockCol}>
          <span className={styles.blockLabel}>Revision</span>
          <span className={styles.blockValue}>{new Date().getFullYear()}</span>
        </div>
      </div>

      <div className={styles.bottomRow}>
        <p className={styles.copy}>&copy; {new Date().getFullYear()} Ayush Singh. All rights reserved.</p>

        <div className={styles.iconRow}>
          {SOCIALS.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              className={styles.footerIcon}
              target="_blank"
              rel="noreferrer noopener"
              title={label}
            >
              <Icon width={15} height={15} />
              <span className={styles.text}>{label}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
