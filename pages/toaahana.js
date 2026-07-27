import { useState, useEffect, useRef, useMemo } from 'react'
import Head from 'next/head'
import styles from '@/styles/Birthday.module.css'

/* ============================================================================
   EDIT ME — everything you'll want to personalize lives in this block.
   ============================================================================ */

// Her name, used in headings ("To Aahana,")
const HER_NAME = 'Aahana'

// How many correct keywords are needed to unlock the page.
const NEEDED_HEARTS = 5

// The keyword pool. She needs to get NEEDED_HEARTS of these right — she does
// NOT need to know all of them. Replace every "REPLACE_ME" with a real word,
// nickname, or phrase only the two of you would know. `answers` can hold more
// than one accepted spelling/variant of the same answer (typos, nicknames,
// with/without spaces — all fine, matching ignores case, punctuation & extra
// spaces). `hint` is shown in the optional "need a nudge?" panel — keep hints
// vague enough that they don't just give the answer away.
const KEYWORDS = [
  { id: 'k1', answers: ['dleep'], hint: 'What do we do at night' },
  { id: 'k2', answers: ['M-Leko'], hint: 'Where we had our first date' },
  { id: 'k3', answers: ['saxy'], hint: 'Your favorite inside joke, in one word' },
  { id: 'k4', answers: ['coffee'], hint: 'fav food (I started with you)' },
  { id: 'k5', answers: ['dinally'], hint: 'yayyyy we did it _______!' },
  { id: 'k6', answers: ['pin bhaba'], hint: 'A place we traveled to together' },
  { id: 'k7', answers: ['lenskart'], hint: '2nd most often date <3' },
  { id: 'k8', answers: ['dogs'], hint: 'Fav animal' },
  { id: 'k9', answers: ['aahana'], hint: 'The best person' },
]

// Key dates. `date` is any string Date() can parse — 'YYYY-MM-DD' is safest.
const KEY_DATES = [
  { date: '03-01-2026', label: 'First Chat'},
  { date: '11-01-2026', label: 'Our first date'},
  { date: '11-05-2026', label: 'First cheek kiss' },
]

// Who can post a thought. Add more names if you'd like.
const AUTHORS = [HER_NAME]

/* ============================================================================
   Internals — no need to touch anything below this line.
   ============================================================================ */

const LS = {
  unlocked: 'toaahana_unlocked_v1',
  found: 'toaahana_found_v1',
  welcomed: 'toaahana_welcomed_v1',
  thoughts: 'toaahana_thoughts_v1',
  author: 'toaahana_author_v1',
}

function normalize(str) {
  return String(str)
    .toLowerCase()
    .trim()
    .replace(/['\u2019]/g, '')
    .replace(/[^\p{L}\p{N}\s]/gu, '')
    .replace(/\s+/g, ' ')
}

function formatDate(d) {
  try {
    return new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  } catch {
    return d
  }
}

function relativeTime(ts) {
  const diff = Date.now() - ts
  const min = Math.floor(diff / 60000)
  if (min < 1) return 'just now'
  if (min < 60) return `${min}m ago`
  const hr = Math.floor(min / 60)
  if (hr < 24) return `${hr}h ago`
  const day = Math.floor(hr / 24)
  if (day < 7) return `${day}d ago`
  return new Date(ts).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

/* ---- small line-style icons, matching the site's stroke icon language ---- */
const iconBase = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' }

const HeartIcon = ({ filled, size = 18 }) => (
  <svg {...iconBase} width={size} height={size} fill={filled ? 'currentColor' : 'none'}>
    <path d="M12 20s-7.5-4.6-10-9.3C.5 7.2 2.3 4 5.7 4c2 0 3.5 1 6.3 3.8C14.8 5 16.3 4 18.3 4c3.4 0 5.2 3.2 3.7 6.7C19.5 15.4 12 20 12 20Z" />
  </svg>
)
const ArrowIcon = (props) => (
  <svg {...iconBase} {...props}>
    <path d="M4.5 12h15m0 0-5.5-5.5M19.5 12l-5.5 5.5" />
  </svg>
)
const TrashIcon = (props) => (
  <svg {...iconBase} {...props}>
    <path d="M4.5 7h15M9.5 7V4.8c0-.6.5-1 1-1h3c.5 0 1 .4 1 1V7m-8 0 .8 12c.1 1.1 1 2 2.1 2h5.2c1.1 0 2-.9 2.1-2L18 7" />
  </svg>
)
const CloseIcon = (props) => (
  <svg {...iconBase} {...props}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
)

/* ---- confetti-style heart burst, plays once on unlock ---- */
function HeartBurst() {
  const hearts = useMemo(
    () =>
      Array.from({ length: 22 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.5,
        duration: 2.6 + Math.random() * 1.6,
        size: 14 + Math.random() * 16,
        drift: Math.round((Math.random() - 0.5) * 140),
      })),
    []
  )
  return (
    <div className={styles.burst} aria-hidden="true">
      {hearts.map((h) => (
        <span
          key={h.id}
          className={styles.burstHeart}
          style={{
            left: `${h.left}%`,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s`,
            '--drift': `${h.drift}px`,
          }}
        >
          <HeartIcon filled size={h.size} />
        </span>
      ))}
    </div>
  )
}

export default function Toaahana() {
  const [mounted, setMounted] = useState(false)
  const [stage, setStage] = useState('locked') // 'locked' | 'welcome' | 'main'

  // lock screen
  const [found, setFound] = useState([])
  const [inputVal, setInputVal] = useState('')
  const [shake, setShake] = useState(false)
  const [feedback, setFeedback] = useState(null) // { text, kind }
  const [pulseId, setPulseId] = useState(null)
  const [showHint, setShowHint] = useState(false)
  const [bursting, setBursting] = useState(false)

  // thoughts board
  const [thoughts, setThoughts] = useState([])
  const [draft, setDraft] = useState('')
  const [author, setAuthor] = useState(AUTHORS[0])
  const [confirmClear, setConfirmClear] = useState(false)
  const [confirmDeleteId, setConfirmDeleteId] = useState(null)
  const [confirmRelock, setConfirmRelock] = useState(false)
  const [openMemory, setOpenMemory] = useState(null)
  const [failedImg, setFailedImg] = useState({})

  const feedbackTimer = useRef(null)
  const pulseTimer = useRef(null)
  const deleteTimer = useRef(null)
  const clearTimer = useRef(null)
  const relockTimer = useRef(null)

  // ---- load persisted state on mount (client-only) ----
  useEffect(() => {
    try {
      const unlocked = localStorage.getItem(LS.unlocked) === '1'
      const welcomed = localStorage.getItem(LS.welcomed) === '1'
      const foundRaw = localStorage.getItem(LS.found)
      const thoughtsRaw = localStorage.getItem(LS.thoughts)
      const savedAuthor = localStorage.getItem(LS.author)

      if (foundRaw) {
        const parsed = JSON.parse(foundRaw)
        if (Array.isArray(parsed)) setFound(parsed)
      }
      if (thoughtsRaw) {
        const parsed = JSON.parse(thoughtsRaw)
        if (Array.isArray(parsed)) setThoughts(parsed)
      }
      if (savedAuthor && AUTHORS.includes(savedAuthor)) setAuthor(savedAuthor)

      if (unlocked) setStage(welcomed ? 'main' : 'welcome')
    } catch {
      // localStorage unavailable — page still works, just won't remember state
    }
    setMounted(true)
  }, [])

  // clear all pending timers on unmount
  useEffect(() => {
    return () => {
      ;[feedbackTimer, pulseTimer, deleteTimer, clearTimer, relockTimer].forEach((t) => {
        if (t.current) clearTimeout(t.current)
      })
    }
  }, [])

  const showFeedback = (text, kind) => {
    if (feedbackTimer.current) clearTimeout(feedbackTimer.current)
    setFeedback({ text, kind })
    feedbackTimer.current = setTimeout(() => setFeedback(null), 2200)
  }

  const handleSubmitKeyword = (e) => {
    e.preventDefault()
    if (bursting) return
    const guess = normalize(inputVal)
    if (!guess) return

    const matched = KEYWORDS.find((k) => k.answers.some((a) => normalize(a) === guess))

    if (!matched) {
      setShake(true)
      showFeedback("Not quite \u2014 think of something only we'd know.", 'err')
      setTimeout(() => setShake(false), 450)
      return
    }

    if (found.includes(matched.id)) {
      showFeedback("You've already found that one.", 'dup')
      setInputVal('')
      return
    }

    const next = [...found, matched.id]
    setFound(next)
    try {
      localStorage.setItem(LS.found, JSON.stringify(next))
    } catch {}
    setInputVal('')
    setPulseId(matched.id)
    if (pulseTimer.current) clearTimeout(pulseTimer.current)
    pulseTimer.current = setTimeout(() => setPulseId(null), 650)

    if (next.length >= NEEDED_HEARTS) {
      showFeedback("That's five. This page is yours now.", 'ok')
      setBursting(true)
      try {
        localStorage.setItem(LS.unlocked, '1')
      } catch {}
      setTimeout(() => setStage('welcome'), 1900)
    } else {
      showFeedback(`One heart earned \u2014 ${NEEDED_HEARTS - next.length} to go.`, 'ok')
    }
  }

  const dismissWelcome = () => {
    try {
      localStorage.setItem(LS.welcomed, '1')
    } catch {}
    setStage('main')
  }

  const addThought = () => {
    const text = draft.trim()
    if (!text) return
    const t = { id: `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`, text, author, ts: Date.now() }
    const next = [t, ...thoughts]
    setThoughts(next)
    setDraft('')
    try {
      localStorage.setItem(LS.thoughts, JSON.stringify(next))
      localStorage.setItem(LS.author, author)
    } catch {}
  }

  const requestDelete = (id) => {
    if (deleteTimer.current) clearTimeout(deleteTimer.current)
    setConfirmDeleteId(id)
    deleteTimer.current = setTimeout(() => setConfirmDeleteId(null), 4000)
  }

  const confirmDelete = (id) => {
    const next = thoughts.filter((t) => t.id !== id)
    setThoughts(next)
    setConfirmDeleteId(null)
    try {
      localStorage.setItem(LS.thoughts, JSON.stringify(next))
    } catch {}
  }

  const requestClearAll = () => {
    if (clearTimer.current) clearTimeout(clearTimer.current)
    setConfirmClear(true)
    clearTimer.current = setTimeout(() => setConfirmClear(false), 4500)
  }

  const confirmClearAll = () => {
    setThoughts([])
    setConfirmClear(false)
    try {
      localStorage.removeItem(LS.thoughts)
    } catch {}
  }

  const requestRelock = () => {
    if (relockTimer.current) clearTimeout(relockTimer.current)
    setConfirmRelock(true)
    relockTimer.current = setTimeout(() => setConfirmRelock(false), 4500)
  }

  const confirmRelockNow = () => {
    try {
      localStorage.removeItem(LS.unlocked)
      localStorage.removeItem(LS.found)
      localStorage.removeItem(LS.welcomed)
    } catch {}
    setFound([])
    setConfirmRelock(false)
    setStage('locked')
  }

  if (!mounted) return <div className={styles.wrapper} />

  return (
    <>
      <Head>
        <title>To {HER_NAME}</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="A private page." />
      </Head>

      <div className={styles.wrapper}>
        <div className={styles.ambientGlow} aria-hidden="true" />

        {stage === 'locked' && (
          <section className={styles.lockScreen}>
            <div className={styles.lockCard}>
              <span className={`${styles.corner} ${styles.cornerTL}`} />
              <span className={`${styles.corner} ${styles.cornerTR}`} />
              <span className={`${styles.corner} ${styles.cornerBL}`} />
              <span className={`${styles.corner} ${styles.cornerBR}`} />

              <p className={styles.lockLabel}>
                <span className={styles.tick}>&mdash;</span> Sheet 00 &middot; Restricted
              </p>
              <h1 className={styles.lockTitle}>
                To <span className={styles.roseText}>{HER_NAME}</span>,
              </h1>
              <p className={styles.lockSub}>
                This page needed a few things only you&rsquo;d know. Get five right, one at a time, and it&rsquo;s yours.
              </p>

              <div className={styles.heartsRow} aria-label={`${found.length} of ${NEEDED_HEARTS} hearts collected`}>
                {Array.from({ length: NEEDED_HEARTS }).map((_, i) => {
                  const filled = i < found.length
                  const isPulsing = filled && found[i] === pulseId
                  return (
                    <span key={i} className={`${styles.heart} ${filled ? styles.heartFilled : ''} ${isPulsing ? styles.heartPulse : ''}`}>
                      <HeartIcon filled={filled} />
                    </span>
                  )
                })}
              </div>
              <p className={styles.clearanceReadout}>
                Clearance {Math.min(found.length, NEEDED_HEARTS)}/{NEEDED_HEARTS}
              </p>

              <form className={styles.guessForm} onSubmit={handleSubmitKeyword}>
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="type a word that's ours..."
                  className={`${styles.guessInput} ${shake ? styles.shake : ''}`}
                  disabled={bursting}
                  autoComplete="off"
                  autoCapitalize="off"
                  spellCheck="false"
                  aria-label="Enter a keyword"
                />
                <button type="submit" className={styles.guessSubmit} disabled={bursting} aria-label="Submit keyword">
                  <ArrowIcon />
                </button>
              </form>

              <p className={styles.feedbackLine} aria-live="polite">
                {feedback && <span className={styles[`feedback${feedback.kind === 'ok' ? 'Ok' : feedback.kind === 'err' ? 'Err' : 'Dup'}`]}>{feedback.text}</span>}
              </p>

              {found.length > 0 && (
                <div className={styles.foundChips}>
                  {found.map((id) => (
                    <span key={id} className={styles.chip}>
                      &#10003; {KEYWORDS.find((k) => k.id === id)?.hint}
                    </span>
                  ))}
                </div>
              )}

              <button type="button" className={styles.hintToggle} onClick={() => setShowHint((s) => !s)}>
                {showHint ? 'Hide the nudge' : 'Need a nudge?'}
              </button>
              {showHint && (
                <ol className={styles.hintList}>
                  {KEYWORDS.map((k, i) => (
                    <li key={k.id} className={found.includes(k.id) ? styles.hintDone : ''}>
                      {i + 1}. {k.hint}
                    </li>
                  ))}
                </ol>
              )}
            </div>

            {bursting && <HeartBurst />}
          </section>
        )}

        {stage === 'welcome' && (
          <section className={styles.welcomeScreen}>
            <div className={styles.welcomeCard}>
              <span className={`${styles.corner} ${styles.cornerTL}`} />
              <span className={`${styles.corner} ${styles.cornerTR}`} />
              <span className={`${styles.corner} ${styles.cornerBL}`} />
              <span className={`${styles.corner} ${styles.cornerBR}`} />

              <p className={styles.welcomeEyebrow}>Sheet 01 &middot; Unlocked</p>
              <h2 className={styles.welcomeLine1}>Happy birthday, {HER_NAME}.</h2>
              <p className={styles.welcomeLine2}>
                Stay exactly like this &mdash; always. Keep the same joy, the same light. I love you.
              </p>
              <p className={styles.welcomeLine2}>
                So many memories with you, and so many more to come. You are just so cute, the day you came to that metro station, the day you waited so long for me at IIT, the day we sat and studied a bit, so many!!!! You are the best, and I love you so much. I hope you have a wonderful birthday, and I hope this page makes you smile.
              </p>
              <p className={styles.welcomeBody}>
                This is your corner of the internet. Nothing here leaves your device &mdash; no accounts, no servers,
                no one watching. Write anything you want, whenever you want. It&rsquo;ll be here when you come back.
              </p>
              <button type="button" className={styles.welcomeButton} onClick={dismissWelcome}>
                Step inside &rarr;
              </button>
            </div>
          </section>
        )}

        {stage === 'main' && (
          <main className={styles.board}>
            <header className={styles.boardHero}>
              <p className={styles.heroEyebrow}>To {HER_NAME}</p>
              <h1 className={styles.heroTitle}>Happy birthday.</h1>
              <p className={styles.heroSub}>
                A few dates, and a place to say whatever&rsquo;s on your mind &mdash; just for you.
              </p>
            </header>

            <section className={styles.section}>
              <p className={styles.sectionEyebrow}>Sheet 03 &middot; Dates on record</p>
              <div className={styles.timeline}>
                {KEY_DATES.map((d, i) => (
                  <div key={i} className={styles.timelineItem}>
                    <span className={styles.timelineNode} />
                    <div>
                      <span className={styles.timelineDate}>{formatDate(d.date)}</span>
                      <h3 className={styles.timelineLabel}>{d.label}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className={styles.section}>
              <p className={styles.sectionEyebrow}>Sheet 04 &middot; Say anything</p>
              <p className={styles.sectionIntro}>
                Write down a thought, a memory, a complaint about your day &mdash; anything. It stays only on this
                device, in this browser. No one else will ever see it unless they&rsquo;re standing right here.
              </p>

              <div className={styles.composer}>
                <div className={styles.authorToggle}>
                  {AUTHORS.map((a) => (
                    <button
                      key={a}
                      type="button"
                      className={`${styles.authorPill} ${author === a ? styles.authorActive : ''}`}
                      onClick={() => setAuthor(a)}
                    >
                      {a}
                    </button>
                  ))}
                </div>
                <textarea
                  value={draft}
                  onChange={(e) => setDraft(e.target.value.slice(0, 1000))}
                  placeholder="Say anything..."
                  className={styles.composerInput}
                  maxLength={1000}
                />
                <div className={styles.composerRow}>
                  <span className={styles.charCount}>{draft.length}/1000</span>
                  <button type="button" className={styles.pinButton} onClick={addThought} disabled={!draft.trim()}>
                    Pin this thought
                  </button>
                </div>
              </div>

              <div className={styles.boardHeader}>
                <span className={styles.thoughtCount}>
                  {thoughts.length} pinned
                </span>
                {thoughts.length > 0 &&
                  (confirmClear ? (
                    <span className={styles.confirmRow}>
                      <span>Delete all thoughts?</span>
                      <button type="button" className={styles.confirmYes} onClick={confirmClearAll}>
                        Yes, clear
                      </button>
                      <button type="button" className={styles.confirmNo} onClick={() => setConfirmClear(false)}>
                        Cancel
                      </button>
                    </span>
                  ) : (
                    <button type="button" className={styles.clearAllBtn} onClick={requestClearAll}>
                      Clear all
                    </button>
                  ))}
              </div>

              <div className={styles.thoughtsGrid}>
                {thoughts.length === 0 && <p className={styles.emptyState}>No thoughts yet. Be the first to leave one.</p>}
                {thoughts.map((t) => (
                  <div key={t.id} className={styles.thoughtCard}>
                    <p className={styles.thoughtText}>{t.text}</p>
                    <div className={styles.thoughtMeta}>
                      <span className={styles.thoughtAuthor}>{t.author}</span>
                      <span className={styles.thoughtTime}>{relativeTime(t.ts)}</span>
                      {confirmDeleteId === t.id ? (
                        <button type="button" className={styles.confirmDeleteBtn} onClick={() => confirmDelete(t.id)}>
                          Confirm
                        </button>
                      ) : (
                        <button type="button" className={styles.deleteBtn} onClick={() => requestDelete(t.id)} aria-label="Delete this thought">
                          <TrashIcon width={15} height={15} />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <footer className={styles.boardFooter}>
              <p className={styles.footerNote}>
                Everything on this page &mdash; your progress, your thoughts &mdash; lives only in this browser&rsquo;s
                storage on this device. Clearing your browser data will erase it, and nothing is ever sent anywhere.
              </p>
              {confirmRelock ? (
                <span className={styles.relockConfirm}>
                  <span>Lock the page again? You&rsquo;ll need to re-enter the keywords.</span>
                  <button type="button" className={styles.confirmYes} onClick={confirmRelockNow}>
                    Yes, lock it
                  </button>
                  <button type="button" className={styles.confirmNo} onClick={() => setConfirmRelock(false)}>
                    Cancel
                  </button>
                </span>
              ) : (
                <button type="button" className={styles.relockLink} onClick={requestRelock}>
                  Lock this page again
                </button>
              )}
            </footer>
          </main>
        )}

        {openMemory !== null && (
          <div className={styles.lightbox} onClick={() => setOpenMemory(null)}>
            <button type="button" className={styles.lightboxClose} aria-label="Close" onClick={() => setOpenMemory(null)}>
              <CloseIcon width={16} height={16} />
            </button>
            <img src={MEMORIES[openMemory].src} alt={MEMORIES[openMemory].caption} onClick={(e) => e.stopPropagation()} />
            <p className={styles.lightboxCaption}>{MEMORIES[openMemory].caption}</p>
          </div>
        )}
      </div>
    </>
  )
}