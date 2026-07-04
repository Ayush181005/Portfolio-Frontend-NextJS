import React from 'react'
import styles from '@/styles/StageTracker.module.css'

export const STAGES = [
  'Literature Review',
  'Data & Simulation',
  'Analysis',
  'Manuscript Drafting',
  'Under Review',
  'Published',
]

/**
 * currentIndex is 0-based into STAGES (or a custom stages array).
 * complete=true renders a filled/stamped state instead of a live loader.
 */
const StageTracker = ({
  stages = STAGES,
  currentIndex = 0,
  complete = false,
  completeLabel = 'Published',
}) => {
  const total = stages.length

  return (
    <div className={`${styles.tracker} ${complete ? styles.complete : ''}`}>
      <div className={styles.track}>
        {stages.map((stage, i) => {
          const filled = complete || i <= currentIndex
          const isCurrent = !complete && i === currentIndex
          return (
            <React.Fragment key={stage}>
              <div
                className={`${styles.node} ${filled ? styles.nodeFilled : ''} ${isCurrent ? styles.nodeCurrent : ''}`}
                title={stage}
              >
                {isCurrent && <span className={styles.pulse} />}
              </div>
              {i < total - 1 && (
                <div className={`${styles.segment} ${i < currentIndex || complete ? styles.segmentFilled : ''}`} />
              )}
            </React.Fragment>
          )
        })}
      </div>

      <div className={styles.readout}>
        {complete ? (
          <span className={styles.stamp}>{completeLabel}</span>
        ) : (
          <>
            <span className={styles.statusDot} />
            <span className={styles.statusText}>{stages[currentIndex]}</span>
          </>
        )}
      </div>
    </div>
  )
}

export default StageTracker
