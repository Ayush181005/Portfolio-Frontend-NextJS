import Head from 'next/head'
import styles from '@/styles/Achievements.module.css'

const HEADLINE_STATS = [
  { value: '9.88', unit: '/10', label: 'CPI in Mechanical Engineering' },
  { value: '#1', unit: '', label: 'Rank, Mechanical Engineering, PDEU' },
  { value: '₹12.55L', unit: '', label: 'Combined awards, scholarship, grants & sponsorships secured' },
]

const TIMELINE = [
  {
    year: '2023 — 2025',
    items: [
      {
        title: '1st Rank, Mechanical Engineering',
        detail: 'Pandit Deendayal Energy University — felicitated with a ₹15,000 prize',
      },
      {
        title: 'Merit Scholarship recipient',
        detail: '100% tuition fee waiver — ₹1,30,000 per semester, PDEU',
      },
    ],
  },
  {
    year: '2024',
    items: [
      {
        title: '10-day Residential Model Rocketry Training',
        detail: 'Selected among 70 students nationwide — IN-SPACe, ISRO, Bengaluru',
      },
    ],
  },
  {
    year: '2025',
    items: [
      {
        title: 'Bhalodia–Khetan Summer Research Excellence Award',
        detail: '₹50,000 prize, Student Research Internship Program, IIT Gandhinagar',
        highlight: true,
      },
      {
        title: 'Selected for the Student Research Internship Program (SRIP), IIT Gandhinagar',
        detail: 'One of the prestigious research placements at IIT Gandhinagar, ~200 selected nationwide out of ~45,000 applicants',
      },
      {
        title: ['3rd Rank, Mech-A-Thon 2025 ', <a href="/docs/Report_Wing_Spar.pdf" target="_blank" rel="noopener noreferrer" className={styles.reportLink}>(Report Link)</a>],
        detail: 'Worked on optimization of aircraft wing spar and skin design for weight reduction and cost efficiency (achieved 16% weight reduction)'
      },
      {
        title: 'Finalist, National Model Rocketry India competition',
        detail: 'FRR-approved design; secured ₹3,00,000 in sponsorship',
      },
    ],
  },
]

const CERTIFICATIONS = [
  'Flight Mechanics — IIT Bombay (Topper)',
  'Metal 3D Printing — University of Michigan',
  'Launch Vehicle Analysis & Design — IIT Bombay',
  'Essentials of Model Rocketry — IN-SPACe, ISRO',
  'Java SE 8 Fundamentals — Oracle',
]

export default function Achievements() {
  return (
    <>
      <Head>
        <title>Achievements | Ayush Singh</title>
        <meta name="description" content="Awards, scholarships, and certifications earned by Ayush Singh across research, academics, and model rocketry." />
        <meta name="robots" content="index, follow" />
      </Head>

      <main className="pageContainer">
        <p className="sheetLabel">
          <span className="tick">+</span> Sheet 05 &middot; Achievements
        </p>

        <header className={styles.header}>
          <h1>Achievements</h1>
          <p className={styles.intro}>
            A running log of what&apos;s been recognised so far &mdash; academics, research, and a
            rocket or two.
          </p>
        </header>

        <div className={styles.statsRow}>
          {HEADLINE_STATS.map((s) => (
            <div key={s.label} className={styles.statCard}>
              <span className={styles.statValue}>
                {s.value}
                <span className={styles.statUnit}>{s.unit}</span>
              </span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>

        <section className={styles.timelineSection}>
          <p className="eyebrow">Timeline</p>
          <div className={styles.timeline}>
            {TIMELINE.map((group) => (
              <div key={group.year} className={styles.timelineRow}>
                <div className={styles.yearCol}>
                  <span className={styles.yearMark}>{group.year}</span>
                </div>
                <div className={styles.itemsCol}>
                  {group.items.map((item) => (
                    <div
                      key={item.title}
                      className={`${styles.timelineCard} ${item.highlight ? styles.timelineCardHighlight : ''}`}
                    >
                      <h3>{item.title}</h3>
                      <p>{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.certSection}>
          <p className="eyebrow">Certifications</p>
          <div className={styles.certWrap}>
            {CERTIFICATIONS.map((c) => (
              <span key={c} className="pill">
                {c}
              </span>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
