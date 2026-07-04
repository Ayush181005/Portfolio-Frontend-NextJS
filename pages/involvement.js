import Head from 'next/head'
import styles from '@/styles/Involvement.module.css'

const LEADERSHIP = [
  {
    role: 'Founder & Technical Head, PDEU Rocketry Team',
    period: '2025 — Present',
    points: [
      'Built the team from scratch within Apogee, PDEU\'s aerospace society',
      'Also serve as Core Technical Engineer & Treasurer, Apogee — handling budgets and sponsorships alongside propulsion and design work',
    ],
  },
  {
    role: 'Volunteer, Rotary Club of Ahmedabad Shantigram',
    period: '2024 — Present',
    points: [
      'International Yoga Day celebration event preparation and execution',
      'Climate Change & Waste management awareness campaign in local schools in the rural areas of Jaspur village',
      'Blood donation camp organisation and execution in collaboration with the Red Cross Society of India',
      'Blanket distribution drive for the underprivileged and homeless in Ahmedabad city',
      <a href="https://www.linkedin.com/company/rcashantigram/about/" target="_blank" rel="noopener noreferrer" className={styles.siteLink}>
        Rotary Club of Ahmedabad Shantigram LinkedIn Link
      </a>
    ],
  },
  {
    role: 'Lawn Tennis Secretary & Player, PDEU',
    period: '2024 — 2026',
    points: [
      'Promoting the sport across campus and organising the university\'s inter-college and recreational tournaments',
      'Flagship PDEU\'s Energy Cup 2025 and 2026, Intracup & Freshers Cup',
      '100+ participants across 3 tournaments in 2025, and 150+ participants across 4 tournaments in 2026',
      'The unbeatable PDEU Lawn Tennis Team — 1st place in 2025 and 2026 Energy Cup, and 95% win rate across all matches in 2025 and 2026',
    ],
  },
  {
    role: 'Founding President, SciKnowTech VIPNET Club - SciKnowTech Education Foundation',
    period: '2021 — 2023',
    points: [
      'Started and ran a student science-outreach club with Gujarat government and VIPNET',
      'Organised hands-on STEM workshops and events, and online expert sessions during COVID-19 lockdown',
      <a href="https://sciknowtech.com/sciknowtech-education-foundation/" target="_blank" rel="noopener noreferrer" className={styles.siteLink}>
        SciKnowTech Education Foundation Link
      </a>,
      'Still Serving as a mentor and advisor to the club, helping with preparation of STEM projects and ideations for year-end carnival and organizing flagship events (eggdrop challenge, bridge building, parachute challenge)',
    ],
  },
]

const COORDINATION = [
  {
    role: 'CFD (FDM) Python Workshops',
    detail: 'Coordinated and taught workshops that trained 100+ BTech, MTech, and PhD students at PDEU',
  },
  {
    role: '1st International Battery Symposium — ICTEA 2024, PDEU, McMaster University, Toronto Metropolitan University, Yalova University',
    detail: 'Lead coordinator for the symposium, run jointly with McMaster University, Toronto Metropolitan University, Yalova University, and PDEU; presented a review article',
  },
]

const OUTREACH = {
  title: 'Astronomy outreach — @astroyush',
  detail: 'Created and actively manage a dedicated Instagram account for astronomy outreach, sharing accessible explainers and observation updates.',
  href: 'https://instagram.com/astroyush',
}

const MEMBERSHIPS = [
  'American Society of Mechanical Engineers (ASME)',
  'Indian Institute of Welding (IIW)',
  'Society of Automotive Engineers (SAE)',
]

export default function Involvement() {
  return (
    <>
      <Head>
        <title>Involvement | Ayush Singh</title>
        <meta name="description" content="Leadership, coordination, and outreach work by Ayush Singh — rocketry team leadership, science outreach, workshop coordination, and professional memberships." />
        <meta name="robots" content="index, follow" />
      </Head>

      <main className="pageContainer">
        <p className="sheetLabel">
          <span className="tick">+</span> Sheet 06 &middot; Involvement
        </p>

        <header className={styles.header}>
          <h1>Involvement</h1>
          <p className={styles.intro}>
            Research doesn&apos;t happen in a vacuum, and neither does a good university experience
            &mdash; the roles, workshops, and outreach that run alongside the lab work.
          </p>
        </header>

        <section className={styles.section}>
          <p className="eyebrow">Leadership & Volunteering</p>
          <div className={styles.leadershipGrid}>
            {LEADERSHIP.map((l) => (
              <div key={l.role} className={styles.leadershipCard}>
                <div className={styles.cardHead}>
                  <h3>{l.role}</h3>
                  <span className={styles.period}>{l.period}</span>
                </div>
                <ul className={styles.pointList}>
                  {l.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <p className="eyebrow">Coordination</p>
          <div className={styles.coordList}>
            {COORDINATION.map((c) => (
              <div key={c.role} className={styles.coordItem}>
                <h3>{c.role}</h3>
                <p>{c.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <p className="eyebrow">Outreach</p>
          <a href={OUTREACH.href} target="_blank" rel="noopener noreferrer" className={styles.outreachCard}>
            <h3>{OUTREACH.title}</h3>
            <p>{OUTREACH.detail}</p>
          </a>
        </section>

        <section className={styles.section}>
          <p className="eyebrow">Professional bodies</p>
          <div className={styles.membershipWrap}>
            {MEMBERSHIPS.map((m) => (
              <span key={m} className="pill">
                {m}
              </span>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
