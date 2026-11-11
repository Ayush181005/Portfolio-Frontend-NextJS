import { useState, useEffect } from 'react'
import Seo from '@/components/Seo'
import styles from '@/styles/Portfolio.module.css'

/*
  Add a photo later: drop the image in /public/gallery/ and set `photo`
  to its path. While `photo` is null the card shows an empty frame.
  TODO (only you can say): materials, dimensions, sensors, test conditions.
  Search this file for "TODO" to find the spots.
*/
const BUILDS = [
  {
    id: 'avalanche',
    title: 'Avalanche impact test setup',
    where: 'IIT Gandhinagar',
    line: 'Experimental setup I fabricated to validate the avalanche CFD model.',
    built: [
      'Fabricated for the lattice-barrier project with Prof. Manish Kumar (Civil Engineering), which began as a two-month SRIP internship in May 2025 and continues as an Undergraduate Research Fellowship.',
      'Snow is modelled as a Bingham-plastic granular fluid in Ansys Fluent (volume-of-fluid). The rig impact-tests two lattice geometries as energy-dissipating barriers.',
      'CFD validated to within 5% of experimental data; the strongest lattice cut peak impact force by up to 30%.',
      'Won the Bhalodia–Khetan Summer Research Excellence Award (₹50,000), Aug 2025. Manuscript in preparation.',
      // TODO: flume/chute dimensions, material and scale of the lattice, load cell or sensor used.
    ],
    photo: '/gallery/avalanche-project.jpg'
  },
  {
    id: 'tpms',
    title: 'TPMS pressure-drop rig',
    where: 'PDEU',
    line: 'Experimental setup for measuring pressure drop across TPMS heat exchangers.',
    built: [
      'Fabricated alongside CFD validation for the TPMS heat-exchanger project with Prof. Pavan Gurrala.',
      'Triply periodic minimal surface geometries as an alternative to fin-and-channel exchangers, aiming for lower pressure drop without losing heat transfer.',
      'CFD validation complete; manuscript in preparation (Kansara, Singh, Gurrala). The specific design approach is withheld until publication.',
      // TODO: how the samples were made (printer, material), pressure sensors, flow range.
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
      // TODO: sensor/microphone model, sampling rate, what you could detect.
    ],
    photo: '/gallery/gtaw.jpg'
  },
  {
    id: 'rocket',
    title: 'Team Zenith rocket',
    where: 'PDEU · Team Zenith',
    line: 'Rocket built for the IN-SPACe model rocketry competition held at Kushinagar, India.',
    built: [
      'I founded Team Zenith and lead it as Technical Head. Airframe and motor-fitting design, trajectory analysis, electronics subsystems and launch-pad design and fabrication were all done in-house.',
      'Design cleared the Flight Readiness Review; the team was a finalist at the national competition (ISRO / IN-SPACe).',
      'Target: 1 km altitude with a 1 kg payload.',
      'Raised ₹3,00,000 in sponsorship and managed about ₹1 lakh in team funds.',
    ],
    photo: '/gallery/rocket2.jpg'
  },
  {
    id: 'nozzle',
    title: 'H-class Rocket Motor',
    where: 'PDEU · Apogee3 Aerospace Society',
    line: 'Reusable solid motor, 3D-printed De Laval nozzle, built and launched in-house.',
    built: [
      'Redesigned the propellant (worked with sugar, black powder and sorbitol-based mixes) and designed an additively manufactured converging–diverging nozzle.',
      'Same thrust with almost half the fuel weight, validated in static-fire tests and launches.',
      'Reusable solid-motor casings; body, motor fittings, electronics and launch pad all made in-house.',
      // TODO: total impulse, burn time, casing material, nozzle printing process.
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
      // TODO: implant material and printing process, what you personally designed.
    ],
    photo: '/gallery/implant.jpg'
  },
]

/*
  Gallery moments: text captions with optional photos.
  `photo: null` = caption only. Set a path once you add the image.
  (`src` notes are for you; delete them when done.)
*/
const MOMENTS = [
  {
    id: 'ambani',
    caption: 'Presenting the Apogee model rocketry work to Mukesh Ambani, Chairman of Reliance Industries and President of PDEU.',
    when: 'Jan 2025',
    photo: null,
  },
  {
    id: 'am-facility',
    caption: 'Showcasing PDEU’s metal 3D printing facility to the university leadership and Mr. Ambani.',
    when: 'Jan 2024',
    photo: null,
  },
  {
    id: 'isro',
    caption: 'ISRO / IN-SPACe model rocketry training at Air Force Station Jalahalli, Bengaluru: 10 days, residential, students selected nationwide.',
    when: 'Nov 2024',
    photo: null,
  },
  {
    id: 'award',
    caption: 'Receiving the Bhalodia–Khetan Summer Research Excellence Award at IIT Gandhinagar for the avalanche CFD work.',
    when: 'Aug 2025',
    photo: null,
  },
  {
    id: 'srip',
    caption: 'Presenting the lattice-barrier poster at the end of the SRIP internship, IIT Gandhinagar.',
    when: 'Jun 2025',
    photo: null,
  },
  {
    id: 'mech',
    caption: 'Mech-A-Thon podium: 3rd among 45+ teams, with a 16% weight reduction on an aircraft wing spar.',
    when: 'Mar 2025',
    photo: null,
  },
  {
    id: 'cfd',
    caption: 'Teaching peer-to-peer CFD workshops (finite-difference and finite-volume with Python) to 100+ BTech, MTech and PhD students.',
    when: '2024–2025',
    photo: null,
  },
  {
    id: 'battery',
    caption: 'Anchoring and coordinating the 1st International Symposium on Battery Technology, with McMaster, Toronto Metropolitan and Yalova universities.',
    when: 'Jan 2024',
    photo: null,
  },
  {
    id: 'imece',
    caption: 'Presenting at ASME IMECE-India, on hot cracking in LPBF (Hyderabad, 2025) and batch RO optimisation (Chennai, 2026).',
    when: '2025–2026',
    photo: null,
  },
  {
    id: 'cince',
    caption: 'Running the metal 3D printing stall at CINCE 2025, Ahmedabad University.',
    when: '2025',
    photo: null,
  },
  {
    id: 'gusec',
    caption: 'Guest talk on rockets at Gujarat University’s GUSEC for ISRO Day and Youth Day.',
    when: 'Nov 2025',
    photo: null,
  },
]

export default function Portfolio() {
  const [open, setOpen] = useState(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(null)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <Seo
        title="Things I've Built | Ayush Singh"
        description="Hardware built by Ayush Singh: an avalanche impact test setup at IIT Gandhinagar, a TPMS pressure-drop rig, a GTAW weld-pool monitor, Team Zenith's rocket, an H-class rocket motor, and a 3D-printed mandibular implant."
        path="/portfolio"
      />

      <main className="pageContainer">
        <p className="sheetLabel">
          <span className="tick">+</span> Portfolio
        </p>
        <header className={styles.header}>
          <h1>Things I&apos;ve built</h1>
          <p className={styles.intro}>
            The hardware behind the simulations and papers. Select one for details.
          </p>
          <a className={styles.pdf} href="/docs/Portfolio.pdf" target="_blank" rel="noopener noreferrer">
            Download the full PDF portfolio
          </a>
        </header>

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

        <section className={styles.moments} aria-labelledby="moments-title">
          <p className="sheetLabel">
            <span className="tick">+</span> In pictures
          </p>
          <h2 id="moments-title" className={styles.momentsTitle}>Moments along the way</h2>
          <p className={styles.intro}>
            Launches, talks, workshops and awards. More on the <a className={styles.pdf} href="/gallery">gallery page</a>.
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