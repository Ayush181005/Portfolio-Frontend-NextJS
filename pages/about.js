import Head from 'next/head'
import styles from '@/styles/About.module.css'

const COMPETENCIES = [
  {
    heading: 'Simulation & CAD',
    items: ['Ansys Fluent', 'N-Topology', 'OpenFOAM', 'Ansys Mechanical (FEA)', 'SolidWorks', 'Siemens NX', 'Fusion 360', 'MATLAB'],
  },
  {
    heading: 'Manufacturing & Fabrication',
    items: ['LPBF (Intech Additive)', 'WAAM', 'EDM', 'CNC Turning', 'GTAW / GMAW', 'Laser & Ultrasonic Welding', 'FSW', 'Resistance & Plasma Welding', '3D printing', 'Casting', 'Traditional Machining'],
  },
  {
    heading: 'Programming & Data',
    items: ['Python', 'C++', 'C', 'Java', 'MATLAB', 'LaTeX', 'Full-Stack Web Dev', 'PHP', 'Game Dev (Unity)'],
  },
  {
    heading: 'Research',
    items: ['CFD Modeling', 'Non-Newtonian Granular Flow Analysis', 'Avalanche Modeling', 'Structural Design', 'Biomedical Design', 'TPMS Design', 'Heat Transfer', 'Biomechanics', 'Propulsion & Systems Engineering', 'Technical Writing'],
  },
  {
    heading: 'Beyond Academia',
    items: ['Fine Arts', 'High Altitude Trekking', 'Lawn Tennis', 'Karate', 'Sketching & Painting', 'Travel & Culture'],
  },
]

const EDUCATION = [
  {
    level: 'Undergraduate',
    degree: 'Bachelor of Technology, Mechanical Engineering',
    school: 'Pandit Deendayal Energy University (PDEU), Gandhinagar',
    period: '2023 — Present',
    detail: 'CPI 9.88 / 10 (WES GPA 3.97 / 4.0) · 1st Rank in Mechanical Engineering · 100% Merit Scholarship',
  },
  {
    level: 'Schooling',
    degree: 'Indian School Certificate (ISC), Class XII',
    school: 'Anand Niketan Shilaj, Ahmedabad',
    period: 'Completed 2023',
    detail: 'Science (Physics, Chemistry, Mathematics) · School Vice President · Annual Function Backstage Head · 3rd, Interschool Art Competition · Cartoonist, Model United Nations · 3rd, Quiz Competition · Finaslist, Extempore · Finalist, Declamation · Science Carnival Coordinator · 1st Best out of Waste competition · 1st, National Computer Olympiad · Respect for Others Award · Respect for Self Award · Respect for Property Award · 100% Attendance for 7 years',
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
            What makes me different?<br />
            Four chapters, more or less, how a curious kid ended up running CFD on snow.
          </p>
        </header>

        <div className={styles.bioGrid}>
          <article className={styles.bioBlock}>
            <span className={styles.bioLabel}>01 &middot; Origins & Ethos</span>
            <p>
              I started programming in seventh grade, scribbling code into notebooks because the family computer crashed too often to trust it with unsaved work. I don&apos;t claim to have special intelligence; my progress stems from relentless hard work and a Feynman-like enthusiasm for figuring things out. I spent high school tracking down anyone who could teach me how model rockets actually fly. On my first day at Pandit Deendayal Energy University, that zeal turned into a research assistantship: a professor building a real-time monitoring system for 3D printing biocompatible magnesium implants took a chance on a first-year who clearly wanted in. Starting research on day one was a lucky head start, and I haven&apos;t stopped running since.
            </p>
          </article>

          <article className={styles.bioBlock}>
            <span className={styles.bioLabel}>02 &middot; Multidisciplinary Joy</span>
            <p>
              My guiding rule is simple: I only pursue what is fun and brings me happiness, which allows me to pour my absolute best into my work. This pure joy drives my multidisciplinary reach, helping me achieve high-level output across design, thermal engineering, fluids, CFD, biomechanics, structural, and even soil mechanics. Whether I&apos;m treating snow as a granular fluid for avalanche-reducing structures (winning IIT Gandhinagar&apos;s Bhalodia&ndash;Khetan Award), developing TPMS heat exchangers, or engineering 3D-printed mandibular implants that avoid bone grafts, I don&apos;t care about paper counts. I care about the thrill of building things that hold up when it matters.
            </p>
          </article>

          <article className={styles.bioBlock}>
            <span className={styles.bioLabel}>03 &middot; The Creative Mind</span>
            <p>
              I visualize engineering problems differently because my foundation is in Fine Arts. I&apos;ve been painting since I was three years old, earning numerous certifications and presenting in exhibitions throughout my life. That lifelong immersion didn&apos;t just build early confidence and communication skills; it trained me to seamlessly combine my left and right brain. Whether I&apos;m looking at a complex CFD solver or a blank sketchbook, my time at the Kanoria Centre taught me to approach rigid technical challenges with a highly creative, imaginative mindset, seeing problems purely as shapes and possibilities.
            </p>
          </article>

          <article className={styles.bioBlock}>
            <span className={styles.bioLabel}>04 &middot; Calculated Risks</span>
            <p>
              I don&apos;t fear taking calculated risks, whether that means picking up a textbook to conquer a brand new research field, taking home a state-level bronze in Karate, or playing an aggressive, attacking game in competitive lawn tennis even when I am losing. Beyond serving as university Tennis Secretary and leading Team Zenith&apos;s rocketry engineering, I seek out extreme environments. High-altitude trekking taught me what no classroom could: true self-exploration, survival in -20&deg;C weather with barefoot river crossings, and, most importantly, the leadership and teamwork required to step up and help others when conditions are unforgiving.
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
