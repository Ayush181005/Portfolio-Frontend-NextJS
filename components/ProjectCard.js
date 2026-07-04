import React from 'react'
import styles from '@/styles/Experience.module.css'
import StageTracker from './StageTracker'

const ProjectCard = ({ project }) => {
  const { id, title, field, org, advisor, advisorLink, duration, points, badge, stage } = project

  return (
    <article id={id} className={styles.card}>
      <div className={styles.cardTop}>
        <span className={styles.fieldPill}>{field}</span>
        {duration && <span className={styles.duration}>{duration}</span>}
      </div>

      <h3 className={styles.cardTitle}>{title}</h3>

      <p className={styles.advisorLine}>
        {advisorLink ? (
          <a href={advisorLink} target="_blank" rel="noopener noreferrer" className={styles.advisorLink}>
            {advisor}
          </a>
        ) : (
          advisor
        )}
        {org && <span className={styles.org}> &middot; {org}</span>}
      </p>

      <ul className={styles.pointList}>
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>

      {badge && <span className={styles.badge}>{badge}</span>}

      <StageTracker
        currentIndex={stage.currentIndex}
        complete={stage.complete}
        completeLabel={stage.completeLabel}
      />
    </article>
  )
}

export default ProjectCard
