import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Gallery.module.css'
import Seo from '@/components/Seo'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <Seo
          title="My Work & Achievements | Ayush 🚀📄🎖️"
          description="Browse CFD notes, research reports, award photos, and key moments from Ayush Singh's journey in mechanical engineering, aerospace, and additive manufacturing — plus his resume and professional achievements, all in one place."
          keywords="CFD Notes, Research Reports, Resume, Engineering Projects, Aerospace Engineering, Mechanical Engineering, Achievements, Awards, Additive Manufacturing"
          path="/gallery"
        />
      </Head>

      <div className={styles.impLinks}>
        <a href="/docs/Ayush Singh CV.pdf" target="_blank">My Resume</a>
        <span className={styles.character}>&#9675;</span>
        <a href="/docs/Portfolio.pdf" target="_blank">Portfolio</a>
        <span className={styles.character}>&#9675;</span>
        <a href="/docs/CFD.pdf" target="_blank">CFD Notes</a>
        <span className={styles.character}>&#9675;</span>
        <a href="/docs/Report_1D_Diffusion.pdf" target="_blank">Comparision of 1D Diffusion solved Analytically and Numerically</a>
        <span className={styles.character}>&#9675;</span><br />
        <a href="/docs/Report_Wing_Spar.pdf" target="_blank">Optimized Structural Design of an Aircraft Wing Spar for Weight Reduction and Strength Enhancement</a>
        <span className={styles.character}>&#9675;</span><br />
        <a href="/docs/Avalanche CFD_SRIP2025_IIT-Gandhinagar_Report.pdf" target="_blank">Mitigating Avalanche Destruction through CFD Modeling & Lattice Structure Design (IIT-Gn)</a>
      </div>

      <div className={styles.imageGallery}>
        <div className={styles.row}> 
          <div className={styles.column}>
            <Image src='/gallery/0.jpg' width={500} height={500} style={{width:'100%', height:'auto'}} alt="Gallery Image" />
            <Image src='/gallery/3.jpg' width={500} height={500} style={{width:'100%', height:'auto'}} alt="Gallery Image" />
            <Image src='/gallery/7.jpg' width={500} height={500} style={{width:'100%', height:'auto'}} alt="Gallery Image" />
            <Image src='/gallery/30.jpg' width={500} height={500} style={{width:'100%', height:'auto'}} alt="Gallery Image" />
            <Image src='/gallery/11.jpg' width={500} height={500} style={{width:'100%', height:'auto'}} alt="Gallery Image" />
            <Image src='/gallery/15.jpg' width={500} height={500} style={{width:'100%', height:'auto'}} alt="Gallery Image" />
            <Image src='/gallery/19.jpg' width={500} height={500} style={{width:'100%', height:'auto'}} alt="Gallery Image" />
            <Image src='/gallery/23.jpg' width={500} height={500} style={{width:'100%', height:'auto'}} alt="Gallery Image" />
            <Image src='/gallery/35.jpg' width={500} height={500} style={{width:'100%', height:'auto'}} alt="Gallery Image" />
          </div>
          <div className={styles.column}>
            <Image src='/gallery/01.jpg' width={500} height={500} style={{width:'100%', height:'auto'}} alt="Gallery Image" />
            <Image src='/gallery/37.jpg' width={500} height={500} style={{width:'100%', height:'auto'}} alt="Gallery Image" />
            <Image src='/gallery/4.jpg' width={500} height={500} style={{width:'100%', height:'auto'}} alt="Gallery Image" />
            <Image src='/gallery/8.jpg' width={500} height={500} style={{width:'100%', height:'auto'}} alt="Gallery Image" />
            <Image src='/gallery/12.jpg' width={500} height={500} style={{width:'100%', height:'auto'}} alt="Gallery Image" />
            <Image src='/gallery/16.jpg' width={500} height={500} style={{width:'100%', height:'auto'}} alt="Gallery Image" />
            <Image src='/gallery/31.jpg' width={500} height={500} style={{width:'100%', height:'auto'}} alt="Gallery Image" />
            <Image src='/gallery/20.jpg' width={500} height={500} style={{width:'100%', height:'auto'}} alt="Gallery Image" />
            <Image src='/gallery/24.jpg' width={500} height={500} style={{width:'100%', height:'auto'}} alt="Gallery Image" />
            <Image src='/gallery/28.jpg' width={500} height={500} style={{width:'100%', height:'auto'}} alt="Gallery Image" />
          </div>  
          <div className={styles.column}>
            <Image src='/gallery/1.jpg' width={500} height={500} style={{width:'100%', height:'auto'}} alt="Gallery Image" />
            <Image src='/gallery/5.jpg' width={500} height={500} style={{width:'100%', height:'auto'}} alt="Gallery Image" />
            <Image src='/gallery/00.jpg' width={500} height={500} style={{width:'100%', height:'auto'}} alt="Gallery Image" />
            <Image src='/gallery/33.jpg' width={500} height={500} style={{width:'100%', height:'auto'}} alt="Gallery Image" />
            <Image src='/gallery/9.jpg' width={500} height={500} style={{width:'100%', height:'auto'}} alt="Gallery Image" />
            <Image src='/gallery/13.jpg' width={500} height={500} style={{width:'100%', height:'auto'}} alt="Gallery Image" />
            <Image src='/gallery/17.jpg' width={500} height={500} style={{width:'100%', height:'auto'}} alt="Gallery Image" />
            <Image src='/gallery/21.jpg' width={500} height={500} style={{width:'100%', height:'auto'}} alt="Gallery Image" />
            <Image src='/gallery/25.jpg' width={500} height={500} style={{width:'100%', height:'auto'}} alt="Gallery Image" />
            <Image src='/gallery/34.jpg' width={500} height={500} style={{width:'100%', height:'auto'}} alt="Gallery Image" />
          </div>
          <div className={styles.column}>
            <Image src='/gallery/2.jpg' width={500} height={500} style={{width:'100%', height:'auto'}} alt="Gallery Image" />
            <Image src='/gallery/6.jpg' width={500} height={500} style={{width:'100%', height:'auto'}} alt="Gallery Image" />
            <Image src='/gallery/29.jpg' width={500} height={500} style={{width:'100%', height:'auto'}} alt="Gallery Image" />
            <Image src='/gallery/10.jpg' width={500} height={500} style={{width:'100%', height:'auto'}} alt="Gallery Image" />
            <Image src='/gallery/14.jpg' width={500} height={500} style={{width:'100%', height:'auto'}} alt="Gallery Image" />
            <Image src='/gallery/18.jpg' width={500} height={500} style={{width:'100%', height:'auto'}} alt="Gallery Image" />
            <Image src='/gallery/22.jpg' width={500} height={500} style={{width:'100%', height:'auto'}} alt="Gallery Image" />
            <Image src='/gallery/26.jpg' width={500} height={500} style={{width:'100%', height:'auto'}} alt="Gallery Image" />
            <Image src='/gallery/32.jpg' width={500} height={500} style={{width:'100%', height:'auto'}} alt="Gallery Image" />
            <Image src='/gallery/36.jpg' width={500} height={500} style={{width:'100%', height:'auto'}} alt="Gallery Image" />
          </div>
        </div>
      </div>
    </>
  )
}
