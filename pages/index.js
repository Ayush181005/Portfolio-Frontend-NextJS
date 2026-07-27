import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import { GithubIcon, LinkedinIcon, MailIcon, InstagramIcon, DownloadIcon, ArrowRightIcon } from '@/components/Icons'
import Image from 'next/image'

const STATS = [
  { value: '9.88', unit: '/10', label: 'CPI, 4th year, Mechanical Engineering' },
  { value: '170 + 147', unit: '= 317 + 3', label: 'GRE Quant + Verbal + AWA' },
  { value: '#1', unit: ' ₹50,000', label: 'Research Excellence Award, IIT Gandhinagar' },
  { value: '3', unit: 'yrs', label: 'Research experience, 7 research projects (published to ongoing)' },
]

const FEATURED = [
  {
    title: 'Lattice structures for avalanche impact mitigation',
    org: 'IIT Gandhinagar · Prof. Manish Kumar',
    status: 'Drafting manuscript',
    tone: 'live',
    href: '/experience#avalanche-lattice',
  },
  {
    title: '3D-printed mandibular implants, no bone graft',
    org: 'PDEU · Prof. Pavan Gurrala',
    status: 'Under review, ICBME 2026, NUS Singapore',
    tone: 'live',
    href: '/experience#mandibular-implant',
  },
  {
    title: 'Hot cracking in LPBF across material systems',
    org: 'PDEU · Prof. Vishvesh Badheka',
    status: 'Published, IMECE 2025',
    tone: 'done',
    href: '/experience#lpbf-hot-cracking',
  },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Ayush Singh | Mechanical Engineering Researcher</title>
        <meta
          name="description"
          content="Ayush Singh is a mechanical engineering researcher at PDEU working across granular-flow CFD, TPMS heat exchangers, additive manufacturing, and biomedical implant design, alongside model rocketry leadership and science outreach."
        />
        <meta name="keywords" content="Ayush Singh, Mechanical Engineering, PDEU, CFD, Additive Manufacturing, TPMS, Avalanche Modeling, Biomedical Implants, Research" />
        <meta name="author" content="Ayush Singh" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Ayush Singh — Mechanical Engineering Researcher" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.theayush.in/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroGrid}>
            <div className={styles.heroText}>
              <p className={styles.eyebrow}>
                <span className={styles.tickMark} />
                Mechanical Engineering · PDEU
              </p>
              <h1 className={styles.name}>
                Hi, I&apos;m <span className={styles.highlight}>Ayush</span>
              </h1>
              <p className={styles.tagline}>I model how things break, then design them not to.</p>
              <p className={styles.subtext}>
                I&apos;m a mechanical engineering researcher working across non-Newtonian granular-flow (snow-avalanche) CFD, TPMS
                heat exchanger design for reduced pressure drop, additive manufacturing, and biomedical implants &mdash; with a
                parallel life leading a university rocketry team and running science outreach on the side.
              </p>

              <div className={styles.ctaRow}>
                <Link href="/experience" className={styles.btnPrimary}>
                  View my research <ArrowRightIcon width={15} height={15} />
                </Link>
                <a href="/docs/Ayush Singh CV.pdf" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
                  <DownloadIcon width={15} height={15} /> Resume
                </a>
                <Link href="/contact" className={styles.btnGhost}>
                  Get in touch
                </Link>
                {/* <a href="/docs/Portfolio.pdf" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
                  <DownloadIcon width={15} height={15} /> Portfolio
                </a>
                <Link href="/gallery" className={styles.btnGhost}>
                  View Gallery
                </Link> */}
              </div>

              <div className={styles.iconRow}>
                <a href="https://github.com/Ayush181005" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <GithubIcon width={19} height={19} />
                </a>
                <a href="https://linkedin.com/in/ayyyuusshhh" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <LinkedinIcon width={19} height={19} />
                </a>
                <a href="mailto:ayush.s181005@gmail.com" aria-label="Email">
                  <MailIcon width={19} height={19} />
                </a>
                <a href="https://instagram.com/ayyyuusshhh_" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <InstagramIcon width={19} height={19} />
                </a>
              </div>
            </div>

            <div className={styles.heroFigure} aria-hidden="true">
              <div className={styles.figureImageWrap}>
                <Image
                  src="/gallery/14.jpg"
                  alt="ME"
                  fill
                  priority
                  className={styles.figureImage}
                />
                <svg viewBox="0 0 420 460" className={styles.figureSvg}>
                  <defs>
                    <linearGradient id="flowGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#5ec8e0" />
                      <stop offset="1" stopColor="#d4a24e" />
                    </linearGradient>
                  </defs>

                  {/* lattice cross-section */}
                  <g stroke="#2c3746" strokeWidth="1.2" fill="none">
                    {Array.from({ length: 6 }).map((_, row) =>
                      Array.from({ length: 5 }).map((_, col) => {
                        const x = 40 + col * 70 + (row % 2 === 1 ? 35 : 0)
                        const y = 40 + row * 70
                        return (
                          <polygon
                            key={`${row}-${col}`}
                            points={`${x},${y - 22} ${x + 19},${y - 11} ${x + 19},${y + 11} ${x},${y + 22} ${x - 19},${y + 11} ${x - 19},${y - 11}`}
                          />
                        )
                      })
                    )}
                  </g>

                  {/* streamline threading through the lattice */}
                  <path
                    d="M -10 90 C 90 40, 130 160, 210 120 S 330 60, 430 130"
                    stroke="url(#flowGrad)"
                    strokeWidth="2.4"
                    fill="none"
                    className={styles.flowLine}
                  />
                  <path
                    d="M -10 230 C 100 190, 140 300, 220 250 S 340 190, 430 260"
                    stroke="url(#flowGrad)"
                    strokeWidth="2.4"
                    fill="none"
                    className={styles.flowLineDelay}
                  />
                  <path
                    d="M -10 370 C 90 330, 150 420, 220 380 S 340 330, 430 400"
                    stroke="url(#flowGrad)"
                    strokeWidth="2.4"
                    fill="none"
                    className={styles.flowLineDelay2}
                  />
                </svg>
              </div>
              <span className={styles.figureCaption}>Fig. 1: Ayush presenting his paper on additive manufacturing of batteries at the International Symposium on Battery Technology, ICTEA, 2023 <a href="#ref1">[1]</a></span>
            </div>
          </div>
        </section>

        <section className={styles.statsSection}>
          <div className={styles.statsGrid}>
            {STATS.map((s) => (
              <div className={styles.statCard} key={s.label}>
                <span className={styles.statValue}>
                  {s.value}
                  <span className={styles.statUnit}>{s.unit}</span>
                </span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.quoteSection}>
          <p className={styles.quote}>
            &ldquo;Research is about solving real problems for society &mdash; not merely about
            publishing papers, but about creating solutions that actually work in the real world.&rdquo;
          </p>
        </section>

        <section className={styles.featuredSection}>
          <div className={styles.sectionHead}>
            <p className={styles.eyebrow}>
              <span className={styles.tickMark} />
              Featured research
            </p>
            <Link href="/experience" className={styles.viewAllLink}>
              Full timeline <ArrowRightIcon width={14} height={14} />
            </Link>
          </div>

          <div className={styles.featuredGrid}>
            {FEATURED.map((f) => (
              <Link href={f.href} key={f.title} className={styles.featuredCard}>
                <span className={`${styles.statusPill} ${f.tone === 'done' ? styles.statusDone : styles.statusLive}`}>
                  {f.tone === 'done' ? '✓' : '●'} {f.status}
                </span>
                <h3 className={styles.featuredTitle}>{f.title}</h3>
                <p className={styles.featuredOrg}>{f.org}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
