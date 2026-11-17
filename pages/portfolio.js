import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Seo from '@/components/Seo'
import styles from '@/styles/Portfolio.module.css'

const INTRO_VIDEO_ID = 'yQmD5XvbBLw?si=9ebTupjuhrFvGgAP'

// Map URL slugs (?user=...) to formatted university display names
const UNIVERSITIES = {
  mit: 'MIT',
  caltech: 'CalTech',
  stanford: 'Stanford',
  berkeley: 'UC Berkeley',
  cmu: 'Carnegie Mellon',
  tamu: 'Texas A&M',
  uf: 'University of Florida',
  cornell: 'Cornell',
  gatech: 'Georgia Tech',
}

const TESTIMONIALS = [
  {
    id: 'prof-1',
    name: 'Prof. Manish Kumar',
    designation: 'Professor, Civil Engineering · IIT Gandhinagar',
    relation: 'SRIP & Research Fellowship Advisor',
    photo: '/testimonials/manish-kumar.jpg',
    quote: 'Placeholder quote — add the testimonial text provided by your advisor or collaborator here.',
  },
  {
    id: 'prof-2',
    name: 'Prof. Pavan Gurrala',
    designation: 'Faculty · PDEU',
    relation: 'Research Mentor (TPMS & Mandibular Implant)',
    photo: '/testimonials/pavan-gurrala.jpg',
    quote: 'Placeholder quote — add the testimonial text provided by your mentor or teammate here.',
  },
]

const BUILDS = [
  {
    id: 'avalanche',
    title: 'Avalanche impact test flume setup',
    where: 'IIT Gandhinagar',
    line: 'Experimental setup I fabricated to validate the avalanche CFD model.',
    built: [
      'Fabricated for the lattice-barrier project with Prof. Manish Kumar (Civil Engineering), which began as a two-month SRIP internship in May 2025 and continues as an Undergraduate Research Fellowship.',
      'Variable flume tilt angle angle with different barrier attachment, 8 mm thickness Plexiglass with metal frame.',
      'Snow is modelled as a Bingham-plastic granular fluid in Ansys Fluent (volume-of-fluid). The rig impact-tests two lattice geometries as energy-dissipating barriers.',
      'CFD validated to within 5% of experimental data; the strongest lattice cut peak impact force by up to 30%.',
      'Won the Bhalodia–Khetan Summer Research Excellence Award (₹50,000), Aug 2025. Manuscript in preparation.',
    ],
    photo: '/gallery/avalanche-project.jpg'
  },
  {
    id: 'tpms',
    title: 'TPMS pressure-drop rig',
    where: 'PDEU',
    line: 'Experimental setup for measuring pressure drop across TPMS heat exchangers (made with zero cost).',
    built: [
      'Fabricated alongside CFD validation for the TPMS heat-exchanger project with Prof. Pavan Gurrala.',
      'Used old high power pump (had to clean and start by opening it), used PVC pipes on old fluid mechanics lab setup, converted a water tank to make recirculation setup',
      'Triply periodic minimal surface geometries as an alternative to fin-and-channel exchangers, aiming for lower pressure drop without losing heat transfer.',
      'CFD validation complete; manuscript in preparation (Kansara, Singh, Gurrala). The specific design approach is withheld until publication.',
    ],
    photo: '/gallery/tpms.jpg'
  },
  {
    id: 'weld',
    title: 'GTAW weld-pool monitoring setup',
    where: 'PDEU',
    line: 'Acoustic-sensor setup for real-time visualisation of the GTAW weld pool.',
    built: [
      'Minor project (July 2024) under Dr. Ojas Satbhai, part of the longer project on acoustic monitoring of LPBF and GTAW for crack mitigation in ZK60 magnesium implants.',
      'Real-time acoustic signal capture with an Arduino-based setup, aimed at catching defects as they form.',
    ],
    photo: '/gallery/gtaw.jpg'
  },
  {
    id: 'rocket',
    title: 'Team Zenith rocket',
    where: 'PDEU · Team Zenith',
    line: 'Rocket built for the IN-SPACe model rocketry competition held at Kushinagar, India.',
    built: [
      'I co-founded Team Zenith and worked as systems and analysis engineer (now advisor). Airframe and motor-fitting design, trajectory analysis, electronics subsystems and launch-pad design and fabrication were all done in-house.',
      'Design cleared the Flight Readiness Review; the team was a finalist at the national competition (ISRO / IN-SPACe).',
      'Target: 1 km altitude with a 1 kg payload.',
      'Raised ₹3,00,000 in sponsorship and managed about ₹1 lakh in team funds.',
    ],
    photo: '/gallery/rocket2.jpg'
  },
  {
    id: 'nozzle',
    title: 'G-class Rocket Motor',
    where: 'PDEU · Apogee3 Aerospace Society',
    line: 'Reusable solid motor, 3D-printed De Laval nozzle, built and launched in-house.',
    built: [
      'Redesigned the propellant (worked with sugar, black powder and sorbitol-based mixes) and designed an additively manufactured converging–diverging nozzle.',
      'Same thrust with almost half the fuel weight, validated in static-fire tests and launches.',
      'Reusable solid-motor casings; body, motor fittings, electronics and launch pad all made in-house.',
    ],
    photo: '/gallery/motor.jpg'
  },
  {
    id: 'implant',
    title: 'Mandibular implant',
    where: 'PDEU',
    line: 'Patient-specific 3D-printed implant that replaces the bone graft.',
    built: [
      'A patient-specific, additively manufactured mandibular implant technique that removes the need for a bone graft after tumour resection (with Prof. Pavan Gurrala).',
      'Used successfully in a live case with a tumour patient.',
      'Paper accepted at ICEDMAM 2026 (Singh, Kansara, Gurrala).',
    ],
    photo: '/gallery/implant.jpg'
  },
]

const MOMENTS = [
  {
    id: 'trek',
    caption: 'The Pin Bhaba Pass (16,000 ft) trek - not completely unrelated to academics and professional life, trekking has shaped me in a way I want to care about people I meet and love the process, major life learnings and team building.',
    when: 'Jul 2026',
    photo: '/gallery/trek.JPG',
  },
  {
    id: 'volunteering',
    caption: 'Volunteering at blood donation camp organized in collaboration Red Cross by Rotary Club of Ahmedabad Shantigram.',
    when: 'Aug 2025',
    photo: '/gallery/volunteer.jpg',
  },
  {
    id: 'cssi',
    caption: 'During internship at the Rotary Club of Ahmedabad Shantigram, promoted waste management and segregation and visited 3 government schools to teach about global warming and the need to save the earth.',
    when: '2024',
    photo: '/gallery/cssi.jpg',
  },
  {
    id: 'tennis',
    caption: 'Lawn Tennis Secretary at PDEU, organized various events including flagship Energy cup involving managing more than 150+ participants across tournaments.',
    when: '2025-2026',
    photo: '/gallery/tennis.jpg',
  },
  {
    id: 'ambani',
    caption: 'Presenting the PDEU’s metal 3D printing facility to Mukesh Ambani, Chairman of Reliance Industries and President of PDEU.',
    when: 'Jan 2025',
    photo: '/gallery/24.jpg',
  },
  {
    id: 'isro',
    caption: 'ISRO / IN-SPACe model rocketry training at Air Force Station Jalahalli, Bengaluru: 10 days, residential, students selected nationwide.',
    when: 'Nov 2024',
    photo: '/gallery/9.jpg',
  },
  {
    id: 'award',
    caption: 'Receiving the Bhalodia–Khetan Summer Research Excellence Award at IIT Gandhinagar for the avalanche CFD work.',
    when: 'Aug 2025',
    photo: '/gallery/SRE.jpg',
  },
  {
    id: 'mech',
    caption: 'Mech-A-Thon podium: 3rd among 45+ teams, with a 16% weight reduction on an aircraft wing spar.',
    when: 'Mar 2025',
    photo: '/gallery/mechathon.jpg',
  },
  {
    id: 'icawtm',
    caption: 'Presenting at ICAWTM-25 on Predictive Analysis of Multi-Effect Distillation System Using Artificial Neural Networks',
    when: 'Mar 2025',
    photo: '/gallery/icawtm.jpg',
  },
  {
    id: 'cfd',
    caption: 'Teaching peer-to-peer CFD workshops (finite-difference and finite-volume with Python) to 100+ BTech, MTech and PhD students.',
    when: '2024-2025',
    photo: '/gallery/cfdlec.jpg',
  },
  {
    id: 'battery',
    caption: 'Anchoring, coordinating and presenting at the 1st International Symposium on Battery Technology, with McMaster, Toronto Metropolitan and Yalova universities.',
    when: 'Jan 2024',
    photo: '/gallery/battery.jpg',
  },
  {
    id: 'imece',
    caption: 'Presenting at ASME IMECE-India, on hot cracking in LPBF (Hyderabad, 2025) and batch RO optimisation (Chennai, 2026).',
    when: '2025-2026',
    photo: '/gallery/imece25.jpg',
  },
  {
    id: 'cince',
    caption: 'Running the metal 3D printing stall at CINCE 2025, Ahmedabad University.',
    when: '2025',
    photo: '/gallery/cince.jpg',
  },
]

export default function Portfolio() {
  const router = useRouter()
  const [open, setOpen] = useState(null)
  const [welcomeUni, setWelcomeUni] = useState(null)

  // Trigger Admissions modal when ?user=<slug> matches a key in UNIVERSITIES
  useEffect(() => {
    if (!router.isReady) return
    const rawSlug = Array.isArray(router.query.user)
      ? router.query.user[0]
      : router.query.user

    if (rawSlug) {
      const matchedUni = UNIVERSITIES[rawSlug.toLowerCase().trim()]
      if (matchedUni) {
        setWelcomeUni(matchedUni)
      }
    }
  }, [router.isReady, router.query.user])

  // Unified Escape-key and body-scroll lock for both modals
  useEffect(() => {
    if (!open && !welcomeUni) return
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(null)
        setWelcomeUni(null)
      }
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, welcomeUni])

  return (
    <>
      <Seo
        title="Things I've Built | Ayush Singh"
        description="Hardware built by Ayush Singh: an avalanche impact test setup at IIT Gandhinagar, a TPMS pressure-drop rig, a GTAW weld-pool monitor, Team Zenith's rocket, an H-class rocket motor, and a 3D-printed mandibular implant."
        path="/portfolio"
      />

      <main className="pageContainer">
        <p className="sheetLabel">
          <span className="tick">+</span> Drawing Sheet 07 &middot; Portfolio
        </p>
        <header className={styles.header}>
          <h1>Things I&apos;ve built</h1>
          <p className={styles.intro}>
            What gave me the confidence beyond my publications, the tangible things I built.
          </p>
          <p>
            Please feel free to go through the complete site (all drawing sheets), every sheet tells the same story with a different example.
          </p>
          <a className={`${styles.pdf} ${styles.textHighlighted}`} href="/docs/Portfolio_Concise.pdf" target="_blank" rel="noopener noreferrer">
            Download a PDF portfolio
          </a>
          <br />
          <a className={styles.pdf} href="/docs/Portfolio.pdf" target="_blank" rel="noopener noreferrer">
            Download the full PDF portfolio
          </a> (Includes every detail from school to university)
        </header>

        {/* ---- 1. YouTube Introduction Video ---- */}
        {INTRO_VIDEO_ID && (
          <section className={styles.videoSection} aria-labelledby="intro-video-title">
            <p className="sheetLabel">
              <span className="tick">+</span> Introduction
            </p>
            <h2 id="intro-video-title" className={styles.sectionTitle}>A brief introduction (A new video will be added soon)</h2>
            <div className={styles.videoFrame}>
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${INTRO_VIDEO_ID}?rel=0`}
                title="Ayush Singh — Introduction"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </section>
        )}

        {/* ---- 2. Hardware Builds Grid ---- */}
        <div className={styles.grid}>
          {BUILDS.map((b) => (
            <button key={b.id} className={styles.card} onClick={() => setOpen(b)}>
              <span className={styles.frame}>
                {b.photo && <img src={b.photo} alt={b.title} loading="lazy" />}
              </span>
              <span className={styles.cardMeta}>{b.where}</span>
              <h3>{b.title}</h3>
              <p>{b.line}</p>
            </button>
          ))}
        </div>

        {/* ---- 3. Testimonials Section ----
        {TESTIMONIALS.length > 0 && (
          <section className={styles.testimonials} aria-labelledby="testimonials-title">
            <p className="sheetLabel">
              <span className="tick">+</span> Perspectives
            </p>
            <h2 id="testimonials-title" className={styles.sectionTitle}>Notes from mentors &amp; collaborators</h2>
            <p className={styles.intro}>
              Words from professors, advisors, and teammates I have worked alongside.
            </p>
            <div className={styles.testimonialGrid}>
              {TESTIMONIALS.map((t) => (
                <article key={t.id} className={styles.testimonialCard}>
                  <blockquote className={styles.testimonialQuote}>
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className={styles.testimonialAuthor}>
                    {t.photo && (
                      <img
                        src={t.photo}
                        alt={t.name}
                        className={styles.avatar}
                        loading="lazy"
                      />
                    )}
                    <div className={styles.authorInfo}>
                      <strong className={styles.authorName}>{t.name}</strong>
                      <span className={styles.authorDesignation}>{t.designation}</span>
                      <span className={styles.authorRelation}>{t.relation}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )} */}

        {/* ---- 4. Gallery Moments ---- */}
        <section className={styles.moments} aria-labelledby="moments-title">
          <p className="sheetLabel">
            <span className="tick">+</span> In pictures
          </p>
          <h2 id="moments-title" className={styles.momentsTitle}>Moments along the way</h2>
          <p className={styles.intro}>
            Launches, talks, workshops and awards. Memories on the <a className={styles.pdf} href="/gallery">gallery page</a>.
          </p>
          <div className={styles.momentGrid}>
            {MOMENTS.map((m) => (
              <figure key={m.id} className={styles.moment}>
                {m.photo && (
                  <span className={styles.momentFrame}>
                    <img src={m.photo} alt={m.caption} loading="lazy" />
                  </span>
                )}
                <figcaption>
                  <span className={styles.cardMeta}>{m.when}</span>
                  <span className={styles.momentText}>{m.caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </main>

      {/* ---- Dynamic Admissions Welcome Modal (?user=<slug>) ---- */}
      {welcomeUni && (
        <div className={styles.backdrop} onClick={() => setWelcomeUni(null)}>
          <div
            className={`${styles.modal} ${styles.mitModal}`}
            role="dialog"
            aria-modal="true"
            aria-label={`Note for ${welcomeUni} Admissions Committee and Professors`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.close}
              onClick={() => setWelcomeUni(null)}
              aria-label="Close welcome note"
              autoFocus
            >
              ×
            </button>
            <p className={styles.cardMeta}>Drawing Sheet 07 &middot; Welcome Note</p>
            <h2>Dear {welcomeUni} Admissions Committee and Professors,</h2>
            <p className={styles.mitBody}>
              Thank you for visiting!<br />
              The portfolio is a glimpse into my academic and research journey, but there's a little more to me than what's on those pages. Feel free to explore the rest of the website as well. It's my attempt to bring together my work, interests, experiences, and the things that have shaped me.<br />
              I hope you enjoy exploring it!
            </p>
            <button
              type="button"
              className={styles.mitAction}
              onClick={() => setWelcomeUni(null)}
            >
              Explore the portfolio &rarr;
            </button>
          </div>
        </div>
      )}

      {/* ---- Build Detail Modal ---- */}
      {open && (
        <div className={styles.backdrop} onClick={() => setOpen(null)}>
          <div className={styles.modal} role="dialog" aria-modal="true" aria-label={open.title} onClick={(e) => e.stopPropagation()}>
            <button className={styles.close} onClick={() => setOpen(null)} aria-label="Close" autoFocus>×</button>
            {open.photo && <img className={styles.big} src={open.photo} alt={open.title} />}
            <p className={styles.cardMeta}>{open.where}</p>
            <h2>{open.title}</h2>
            <ul className={styles.points}>
              {open.built.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </div>
        </div>
      )}
    </>
  )
}