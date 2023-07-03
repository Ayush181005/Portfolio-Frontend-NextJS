import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>It's Me - Ayush!</title>
        <meta name="description" content="Websites are a way to express the art and the skills of any programmer, developer or any other person, and so is this. Here, I have all my Certificates and my Portfoliosfor you, please have a look." />
      </Head>

      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.glowContainer}>
          <div className={styles.glow}></div>
        </div>
        <div className={styles.introContainer}>
          <div className={styles.content}>
            <h1>Hi, I'm <span className={styles.name}>Ayush</span></h1>
            <small>With single 'A' 😅😁</small>
          </div>
          <div className={styles.imgContainer}>
            <Image src='/home-img.png' alt="Me" className={styles.homeImg} width={220} height={298} priority />
          </div>
        </div>
      </main>
    </>
  )
}
