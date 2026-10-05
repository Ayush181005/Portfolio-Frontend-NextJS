import Link from 'next/link'
import Head from 'next/head'
import styles from '@/styles/NotFound.module.css'
import Seo from '@/components/Seo'

export default function Custom404() {
  return (
    <>
      <Seo
        title="404 | Ayush Singh"
        description="The page you're looking for doesn't exist, or has moved."
        path="/404"
        noIndex
      />
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
