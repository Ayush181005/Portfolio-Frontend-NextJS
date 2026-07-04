import Link from 'next/link'
import Head from 'next/head'
import styles from '@/styles/NotFound.module.css'

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 | Ayush Singh</title>
      </Head>
      <main className={styles.wrap}>
        <p className={styles.eyebrow}>
          <span className={styles.tick}>+</span> Error 404
        </p>
        <h1>Off the drawing sheet.</h1>
        <p className={styles.copy}>The page you&apos;re looking for doesn&apos;t exist, or has moved.</p>
        <Link href="/" className={styles.homeLink}>
          Back to home
        </Link>
      </main>
    </>
  )
}
