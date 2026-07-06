import Head from 'next/head'
import styles from '@/styles/About.module.css'

const COMPETENCIES = [
  {
    heading: 'Simulation & CAD',
    items: ['Ansys Fluent', 'OpenFOAM', 'Ansys Mechanical (FEA)', 'SolidWorks', 'Siemens NX', 'Fusion 360', 'MATLAB'],
  },
  {
    heading: 'Manufacturing & Fabrication',
    items: ['LPBF (Intech Additive)', 'WAAM', 'EDM', 'CNC Turning', 'GTAW / GMAW', 'Laser & Ultrasonic Welding', 'FSW', 'Resistance & Plasma Welding', '3D printing', 'Casting', 'Traditional Machining'],
  },
  {
    heading: 'Programming & Data',
    items: ['Python', 'C++', 'Java', 'MATLAB', 'LaTeX', 'Full-Stack Web Dev'],
  },
  {
    heading: 'Research & Systems',
    items: ['CFD Modeling', 'Non-Newtonian Granular Flow Analysis', 'Propulsion & Systems Engineering', 'Technical Writing'],
  },
  {
    heading: 'Beyond Academia',
    items: ['Fine Arts', 'Trekking', 'Lawn Tennis', 'Karate', 'Sketching & Painting', 'Travel & Culture'],
  },
]

const EDUCATION = [
  {
    level: 'Undergraduate',
    degree: 'Bachelor of Technology, Mechanical Engineering',
    school: 'Pandit Deendayal Energy University (PDEU), Gandhinagar',
    period: '2023 — Present',
    detail: 'CPI 9.88 / 10 (WES GPA 3.96 / 4.0) · 1st Rank in Mechanical Engineering · 100% Merit Scholarship',
  },
  {
    level: 'Schooling',
    degree: 'Indian School Certificate (ISC), Class XII',
    school: 'Anand Niketan Shilaj, Ahmedabad',
    period: 'Completed 2023',
    detail: 'Science stream — Physics, Chemistry, Mathematics',
  },
]

export default function About() {
  return (
    <>
      <Head>
        <title>About | Ayush Singh</title>
        <meta name="description" content="Ayush Singh's background — from a first research assistantship in additive manufacturing to CFD, biomedical design, competencies, and education." />
        <meta name="robots" content="index, follow" />
      </Head>

      <main className="pageContainer">
        <p className="sheetLabel">
          <span className="tick">+</span> Drawing Sheet 02 &middot; About
        </p>

        <header className={styles.header}>
          <h1>About</h1>
          <p className={styles.intro}>
            Three chapters, more or less, how a curious kid ended up running CFD on snow.
          </p>
        </header>

        <div className={styles.bioGrid}>
          <article className={styles.bioBlock}>
            <span className={styles.bioLabel}>01 &middot; Origins</span>
            <p>
              I started programming in seventh grade, scribbling code into notebooks because the
              family computer crashed too often to trust it with unsaved work. That same restlessness
              showed up everywhere else &mdash; I read physics chapters that weren&apos;t on the
              syllabus, built models for school science fairs, and spent a stretch of high school
              tracking down anyone who could teach me how model rockets actually fly. On my first day
              at Pandit Deendayal Energy University, that hunt turned into a research assistantship: a
              professor building a real-time monitoring system for laser powder bed fusion of
              biocompatible magnesium implants took a chance on a first-year who clearly wanted in. I
              stayed on that project for two years, and I haven&apos;t really stopped since.
            </p>
          </article>

          <article className={styles.bioBlock}>
            <span className={styles.bioLabel}>02 &middot; Research</span>
            <p>
              My work now sits at the intersection of Design, Manufacturing, and Thermal engineering
              &mdash; the three pillars of mechanical engineering. I use
              CFD to treat snow as a granular fluid with Bingham plastic behavior and design lattice structures that reduce avalanche
              impact, a project that won the Bhalodia&ndash;Khetan Research Excellence Award at IIT
              Gandhinagar and that I&apos;ve since continued as an undergraduate research fellow. In
              parallel, I&apos;m developing TPMS-based heat exchanger geometries to reduce pressure drop
              without sacrificing heat transfer, and pointing that same design instinct at biomedical
              engineering &mdash; including a 3D-printed mandibular implant technique, tested
              successfully on a tumour patient, that avoids the need for a bone graft. I don&apos;t
              think research is really about the paper count; it&apos;s about building things that
              hold up when it matters.
            </p>
          </article>

          <article className={styles.bioBlock}>
            <span className={styles.bioLabel}>03 &middot; Beyond the lab</span>
            <p>
              None of this happens in isolation. I lead the technical side of Apogee, PDEU&apos;s
              aerospace society, where I&apos;ve spent three years on propulsion, structural design,
              and systems engineering for competition rockets &mdash; and learned nearly as much about
              budgets and team management as I did about thrust curves. I&apos;ve played competitive
              lawn tennis for fifteen years and now serve as the university&apos;s Tennis Secretary; I
              trained in Karate long enough to push past being scared of it and take home a
              state-level bronze. I paint, worse on some days and better on others, ever since art
              classes at the Kanoria Centre first taught me to see problems as shapes. Somewhere
              between the CFD solver, the tennis court, and the sketchbook, curiosity has turned out to
              be the only throughline I need.
            </p>
          </article>
        </div>

        <section className={styles.competenciesSection}>
          <p className="eyebrow">Core Competencies</p>
          <div className={styles.competenciesGrid}>
            {COMPETENCIES.map((c) => (
              <div key={c.heading} className={styles.competencyCol}>
                <h4 className={styles.competencyHeading}>{c.heading}</h4>
                <div className={styles.tagWrap}>
                  {c.items.map((item) => (
                    <span key={item} className="pill">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.educationSection}>
          <p className="eyebrow">Education</p>
          <div className={styles.eduList}>
            {EDUCATION.map((e) => (
              <div key={e.degree} className={styles.eduCard}>
                <div className={styles.eduTop}>
                  <span className={styles.eduLevel}>{e.level}</span>
                  <span className={styles.eduPeriod}>{e.period}</span>
                </div>
                <h3 className={styles.eduDegree}>{e.degree}</h3>
                <p className={styles.eduSchool}>{e.school}</p>
                <p className={styles.eduDetail}>{e.detail}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
