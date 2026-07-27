import Head from 'next/head'
import styles from '@/styles/Experience.module.css'
import ProjectCard from '@/components/ProjectCard'

const EXPERIENCE = [
  {
    role: 'Undergraduate Research Intern & Summer Research Intern',
    org: 'Department of Civil Engineering, IIT Gandhinagar',
    period: 'May 2025 — Present',
    points: [
      'Selected for SRIP internship (~0.4% selection rate), continued as an Undergraduate Research Fellow in the group',
      'VOF-based CFD simulation of avalanche flow (Bingham plastic) in Ansys Fluent, validated to within 5% of experimental data',
      'Structural testing of 2 lattice geometries — reduced peak impact force by up to 30%',
      <>
        Began as a Student Research Internship Program (SRIP) project — now continuing as an Undergraduate Research Fellow in the group{' '}
        <a href="/docs/Avalanche CFD_SRIP2025_IIT-Gandhinagar_Report.pdf" className={styles.advisorLink} target="_blank" rel="noopener noreferrer">
          (Summer Internship Report Link)
        </a>
      </>,
    ],
  },
  {
    role: 'Core Systems Engineer, Design & Analysis',
    org: 'Team Zenith & Apogee3 club — Aerospace Society, PDEU',
    period: 'Jun 2023 — Present',
    points: [
      'Founder & Technical Head, Team Zenith - PDEU Rocketry Team (2025) — systems engineering across propulsion, design & analysis',
      'Finalist, National Model Rocketry India competition; FRR-approved; secured ₹3,00,000 in sponsorship',
      'Treasurer, Apogee3 Aerospace Society (2024) as a core team member along with rocket design and analysis',
      'Same thrust with almost half the fuel weight - redesigned the propellant and designed additively manufactured CD nozzle, validated in static fire tests and rocket launches',
      'Rocket motor fitting and body design and analysis, electronics subsystems, and launch pad design & fabrication — all in-house',
    ],
  },
]

const ACTIVE_PROJECTS = [
  {
    id: 'avalanche-lattice',
    title: 'Lattice structures to blunt avalanche impact',
    field: 'CFD · Granular Flow · Structures',
    advisor: 'Prof. Manish Kumar, Dean of Student Affairs',
    org: 'IIT Gandhinagar',
    advisorLink: 'https://iitgn.ac.in/faculty/civil/fac-manish',
    duration: '~1 year, ongoing',
    points: [
      'Treats snow as a granular fluid rather than a simple solid — VOF-based CFD in Ansys Fluent, validated to within 5% of experimental data',
      'Two lattice geometries simulated and impact-tested; the strongest design cuts peak impact force by up to 30%',
      <>
        Began as a Student Research Internship Program (SRIP) project — now continuing as an Undergraduate Research Fellow in the group{' '}
        <a href="/docs/Avalanche CFD_SRIP2025_IIT-Gandhinagar_Report.pdf" className={styles.advisorLink} target="_blank" rel="noopener noreferrer">
          (Internship Report Link)
        </a>
      </>,
      'Won the Bhalodia–Khetan Research Excellence Award — ₹50,000',
    ],
    badge: 'Award · ₹50,000 Research Excellence',
    stage: { currentIndex: 3, complete: false },
  },
  {
    id: 'tpms-heat-exchanger',
    title: 'Cutting pressure drop in TPMS heat exchangers',
    field: 'Thermal · Design · TPMS · CFD',
    advisor: 'Prof. Pavan Gurrala, Associate Dean of School of Technology',
    org: 'PDEU',
    advisorLink: 'https://orsp.pdpu.ac.in/adminfacviewprofile.aspx?facid=pavan.gurrala',
    duration: 'Ongoing',
    points: [
      'Exploring triply periodic minimal surface (TPMS) geometries as an alternative to conventional fin-and-channel exchanger designs',
      'The specific approach is staying off the record until the paper is out — but it targets lower pressure drop without giving up heat transfer',
      'Novel geometry, novel fabrication path, six months from a journal submission',
    ],
    stage: { currentIndex: 2, complete: false },
  },
  {
    id: 'mandibular-implant',
    title: '3D-printed mandibular implants, without a bone graft',
    field: 'Biomedical · Additive Manufacturing',
    advisor: 'Prof. Pavan Gurrala, Associate Dean of School of Technology',
    org: 'PDEU',
    advisorLink: 'https://orsp.pdpu.ac.in/adminfacviewprofile.aspx?facid=pavan.gurrala',
    duration: 'Ongoing',
    points: [
      'Designed and 3D-printed a patient-specific mandibular implant technique that removes the need for a bone graft entirely',
      'Applied and tested successfully in a live case — a tumour patient',
      'Conference paper under review at ICBME 2026, National University of Singapore',
    ],
    stage: { currentIndex: 4, complete: false },
  },
  {
    id: 'sma-exoskeleton',
    title: 'SMA-actuated exoskeleton for stroke rehabilitation',
    field: 'Biomechanics · Smart Materials',
    advisor: 'Prof. Nilavjyoti Sarmah',
    org: 'PDEU',
    advisorLink: 'https://orsp.pdpu.ac.in/adminfacviewprofile.aspx?facid=nilavjyoti.sarmah_ad',
    duration: 'Started this month',
    points: [
      'Designing a rehabilitation exoskeleton driven by shape memory alloy (SMA) actuators for stroke patients',
      'Currently deep in literature review and actuator characterisation',
    ],
    stage: { currentIndex: 0, complete: false },
  },
]

const COMPLETE_PROJECTS = [
  {
    id: 'ann-med',
    title: 'ANN model for multi-effect distillation output',
    field: 'Machine Learning · Thermal Systems',
    advisor: 'Dr. Rahul Deharkar',
    org: 'PDEU',
    advisorLink: 'https://orsp.pdpu.ac.in/adminfacviewprofile.aspx?facid=rahul.deharkar',
    points: [
      'Built an artificial neural network to predict distillate output of a Multi-Effect Distillation (MED) system',
      'Accepted for publication — Springer-Nature conference proceedings, ICAWTM-25, PDEU',
    ],
    stage: { complete: true, completeLabel: 'Accepted · ICAWTM-25' },
  },
  {
    id: 'lpbf-hot-cracking',
    title: 'Hot cracking across materials in LPBF',
    field: 'Additive Manufacturing · Materials',
    advisor: 'Prof. Vishvesh Badheka, former Dean of Academic Affairs',
    org: 'PDEU',
    advisorLink: 'https://orsp.pdpu.ac.in/adminfacviewprofile.aspx?facid=vishvesh.badheka',
    points: [
      'Studied how material property and composition drive hot cracking in Laser Powder Bed Fusion (LPBF) across different alloy systems',
      'Published — conference proceedings, IMECE-2025, ASME, Hyderabad',
    ],
    stage: { complete: true, completeLabel: 'Published · IMECE 2025' },
  },
  {
    id: 'batch-ro',
    title: 'Fitness-function optimisation for batch reverse osmosis',
    field: 'Optimisation · Water Systems',
    advisor: 'Dr. Rahul Deharkar',
    org: 'PDEU',
    advisorLink: 'https://orsp.pdpu.ac.in/adminfacviewprofile.aspx?facid=rahul.deharkar',
    points: [
      'Developed a physics-aligned model and a multi-objective fitness function for design optimisation of a batch reverse osmosis (RO) system',
      'Accepted for publication — conference proceedings, IMECE-2026, ASME',
    ],
    stage: { complete: true, completeLabel: 'Accepted · IMECE 2026' },
  },
]

const EARLIER_WORK = [
  {
    title: 'Acoustic signal based real-time monitoring system for LPBF & GTAW processes for crack mitigation in bio-compatible ZK60 magnesium implants',
    advisor: 'Dr. Ojas Satbhai, PDEU',
    note: 'The project that started it all — two years, first year onward',
  },
  {
    title: 'Additive Manufacturing of Batteries: Recent Trends and Challenges (review)',
    advisor: 'Dr. Ojas Satbhai, PDEU',
    note: 'Under review, ICTEA — presented as lead coordinator at the 1st International Battery Symposium',
  },
]

export default function Experience() {
  return (
    <>
      <Head>
        <title>Experience & Projects | Ayush Singh</title>
        <meta name="description" content="Ayush Singh's research experience and project timeline — CFD, additive manufacturing, biomedical design, and thermal systems, tracked from idea to publication." />
        <meta name="robots" content="index, follow" />
      </Head>

      <main className="pageContainer">
        <p className="sheetLabel">
          <span className="tick">+</span> Drawing Sheet 03 &middot; Experience & Projects
        </p>

        <header className={styles.header}>
          <h1>Experience & Projects</h1>
          <p className={styles.intro}>
            Every research thread I&apos;m pulling on right now, tracked from first literature search
            to publication — plus the roles that keep me building outside the lab.
          </p>
        </header>

        <section className={styles.experienceSection}>
          <p className="eyebrow">Experience</p>
          <div className={styles.timelineList}>
            {EXPERIENCE.map((e) => (
              <div key={e.role} className={styles.timelineItem}>
                <div className={styles.timelineHead}>
                  <h3>{e.role}</h3>
                  <span className={styles.timelinePeriod}>{e.period}</span>
                </div>
                <p className={styles.timelineOrg}>{e.org}</p>
                <ul className={styles.pointList}>
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.projectsSection}>
          <p className="eyebrow">Active & ongoing research</p>
          <div className={styles.cardGrid}>
            {ACTIVE_PROJECTS.map((p) => (
              <ProjectCard project={p} key={p.id} />
            ))}
          </div>
        </section>

        <section className={styles.projectsSection}>
          <p className="eyebrow">Published & accepted</p>
          <div className={styles.cardGrid}>
            {COMPLETE_PROJECTS.map((p) => (
              <ProjectCard project={p} key={p.id} />
            ))}
          </div>
        </section>

        <section className={styles.earlierSection}>
          <p className="eyebrow">Earlier / foundational work</p>
          <div className={styles.earlierList}>
            {EARLIER_WORK.map((w) => (
              <div key={w.title} className={styles.earlierItem}>
                <h4>{w.title}</h4>
                <p className={styles.earlierAdvisor}>{w.advisor}</p>
                <p className={styles.earlierNote}>{w.note}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
