import React from 'react'
import Link from 'next/link'
import styles from '@/styles/Footer.module.css'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer>
            <div className={styles.footerBody}>
                <div className={styles.row}>
                    <div className={styles.rowLeft}>
                        Copyright &copy; {new Date().getFullYear()} |
                    </div>
                    <div className={styles.rowRight}>
                        <a href='https://github.com/Ayush181005' className={styles.footerIcon} target='_blank' rel="noreferrer noopener" title='Github'>
                            <Image src='/icons/github.svg' width={20} height={20} alt='Github icon' />
                            &nbsp;
                            <span className={styles.text}>Github</span>
                        </a>

                        <a href='https://stackoverflow.com/users/15543100/ayush?tab=profile' className={styles.footerIcon} target='_blank' rel="noreferrer noopener" title='StackOverflow'>
                            <Image src='/icons/stack-overflow.svg' width={20} height={20} alt='StackOverflow icon' />
                            &nbsp;
                            <span className={styles.text}>StackOverflow</span>
                        </a>

                        <a href='"https://linkedin.com/in/ayyyuusshhh' className={styles.footerIcon} target='_blank' rel="noreferrer noopener" title='StackOverflow'>
                            <Image src='/icons/linkedin.svg' width={20} height={20} alt='Linkedin icon' />
                            &nbsp;
                            <span className={styles.text}>Linkedin</span>
                        </a>

                        <a href='https://instagram.com/ayyyuusshhh_' className={styles.footerIcon} target='_blank' rel="noreferrer noopener" title='StackOverflow'>
                            <Image src='/icons/instagram.svg' width={20} height={20} alt='Instagram icon' />
                            &nbsp;
                            <span className={styles.text}>Instagram</span>
                        </a>
                    </div>
                </div>
                <div className={styles.developer}>
                    <small>Designed and Developed by <Link href="/">Ayush</Link></small>
                </div>
            </div>
        </footer>
    )
}

export default Footer