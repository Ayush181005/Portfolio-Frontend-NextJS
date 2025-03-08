import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>It&apos;s Me - Ayush!</title>
        <meta name="description" content="Websites are a way to express the art and the skills of any programmer, developer or any other person, and so is this. Have a look at mine ;)" />
      </Head>

      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.glowContainer}>
          <div className={styles.glow}></div>
        </div>
        <div className={styles.introContainer}>
          <div className={styles.content}>
            <h1>Hi, I&apos;m <span className={styles.name}>Ayush</span>!!!</h1>

            <div className={styles.iconContainer}>
                <a href="https://linkedin.com/ayyyuusshhh" target="_blank" rel="noopener noreferrer" aria-label="Linkedin">
                    <Image src='/icons/linkedin.svg' width={70} height={70} className={styles.aboutmeIcon} alt='Linkedin icon' />
                </a>

                <a href="https://instagram.com/ayyyuusshhh_" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <Image src='/icons/instagram.svg' width={70} height={70} className={styles.aboutmeIcon} alt='Instagram icon' />
                </a>

                <a href="/resume.pdf" target="_blank" aria-label="Resume">
                    <Image src='/icons/RESUME.png' width={70} height={70} className={styles.aboutmeIcon} alt='DownloadResume icon' />
                </a>
            </div>
          </div>
        </div>
        
        <section className={styles.aboutSection}>
            <p>
                Hi, I&apos;m <b>Ayush</b>, a Mechanical Engineering student, Research enthusiast, and Innovator, passionate about Aerospace Engineering, Fluid Mechanics, Heat Transfer, and Advanced Manufacturing. My work spans across Computational Fluid Dynamics (CFD) 🌊, Experimental Fluid Mechanics, Additive Manufacturing (LPBF) 🏗️, and AI-driven optimization 🤖 in thermal MED systems.
            </p>
            <p>
                With a strong foundation in engineering simulations, propulsion systems, and structural analysis, I have actively contributed to national-level IN-SPACe Model Rocketry Competition 🚀, designed and launched experimental rockets, and developed propulsion systems, flight computers, thrust measurement systems, and recovery mechanisms. My research in Multi-Effect Desalination (MED) 💧 explores heat transfer efficiency and AI integration for sustainable water solutions.
            </p>
            <p>
                I have interned at Tanmaye’s Amazing Space and Royal Technosoft, gaining hands-on experience in fluid mechanics, software development 💻, and system optimization. As a core member of Apogee3 (Aerospace Society of PDEU) 🛰️, I collaborate with multidisciplinary teams to push the boundaries of aerospace and mechanical engineering.
            </p>
            <p>
                Beyond academics, I am highly interested in Lawn Tennis! 
            </p>
            <p>
                Driven by curiosity and innovation, I am committed to leveraging science, technology, and research to create impactful solutions in aerospace, energy, and sustainability 🌍.
            </p>
            <p>
                Let’s connect and build the future, one experiment at a time! 🚀✨
            </p>
        </section>
      </main>
    </>
  )
}
