import Head from 'next/head'
import styles from '@/styles/Publications.module.css'

const GROUPS = [
  {
    status: 'Published',
    tone: 'done',
    items: [
      {
        title: 'Property and Composition Dependence of Hot Cracking in LPBF for Different Materials',
        authors: 'A. Singh, with Prof. Vishvesh Badheka',
        venue: 'Conference Proceedings, IMECE-2025, ASME · Hyderabad',
      },
    ],
  },
  {
    status: 'Accepted',
    tone: 'done',
    items: [
      {
        title: 'Predictive ANN Model for Multi-Effect Distillation System Output',
        authors: 'A. Singh, with Dr. Rahul Deharkar',
        venue: 'Conference Proceedings, ICAWTM-25, Springer-Nature · PDEU',
      },
      {
        title: 'Physics-Aligned Modeling and Multi-Objective Fitness Function Development for Design Optimization of a Batch Reverse Osmosis System',
        authors: 'A. Singh, with Dr. Rahul Deharkar',
        venue: 'Conference Proceedings, IMECE-2026, ASME',
      },
    ],
  },
  {
    status: 'Under Review',
    tone: 'live',
    items: [
      {
        title: '3D-Printed Mandibular Implants Without a Bone Graft: A Novel Surgical Technique',
        authors: 'A. Singh, with Prof. Pavan Gurrala',
        venue: 'Conference Paper, ICBME 2026 · National University of Singapore',
      },
      {
        title: 'Additive Manufacturing of Batteries: Recent Trends and Challenges',
        authors: 'A. Singh, with Dr. Ojas Satbhai',
        venue: 'Review Article, ICTEA',
      },
    ],
  },
  {
    status: 'In Preparation',
    tone: 'live',
    items: [
      {
        title: 'Design of Lattice-Based Structures for Mitigating Snow-Avalanche Impact via Granular-Fluid CFD Modeling',
        authors: 'A. Singh, with Prof. Manish Kumar',
        venue: 'IIT Gandhinagar · targeting journal submission within 6 months',
      },
      {
        title: 'A Novel Design Approach for Pressure Drop Reduction in TPMS-Based Heat Exchangers',
        authors: 'A. Singh, with Prof. Pavan Gurrala',
        venue: 'PDEU · targeting journal submission within 6 months',
      },
    ],
  },
]

export default function Publications() {
  return (
    <>
      <Head>
        <title>Publications | Ayush Singh</title>
        <meta name="description" content="Published, accepted, under-review, and in-preparation research papers by Ayush Singh across additive manufacturing, thermal systems, and biomedical design." />
        <meta name="robots" content="index, follow" />
      </Head>

      <main className="pageContainer">
        <p className="sheetLabel">
          <span className="tick">+</span> Sheet 04 &middot; Publications
        </p>

        <header className={styles.header}>
          <h1>Publications</h1>
          <p className={styles.intro}>
            Seven papers, four stages of the pipeline &mdash; from a first published conference
            paper to two more still finding their final shape.
          </p>
        </header>

        {GROUPS.map((group) => (
          <section key={group.status} className={styles.group}>
            <div className={styles.groupHead}>
              <span className={`${styles.statusTag} ${group.tone === 'done' ? styles.tagDone : styles.tagLive}`}>
                {group.status}
              </span>
              <span className={styles.groupCount}>
                {group.items.length} {group.items.length === 1 ? 'paper' : 'papers'}
              </span>
            </div>

            <ol className={styles.pubList}>
              {group.items.map((item) => (
                <li key={item.title} className={styles.pubItem}>
                  <h3 className={styles.pubTitle}>{item.title}</h3>
                  <p className={styles.pubAuthors}>{item.authors}</p>
                  <p className={styles.pubVenue}>{item.venue}</p>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </main>
    </>
  )
}
