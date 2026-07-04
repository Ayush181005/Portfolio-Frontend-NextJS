import React from 'react'

const base = {
  width: 18,
  height: 18,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const GithubIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.7 2.8 5.6 3.1 5.6 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.2 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.1-.5 2V21" />
  </svg>
)

export const LinkedinIcon = (props) => (
  <svg {...base} {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2.5" />
    <path d="M7.5 10v6.5M7.5 7.4v.05M11.5 16.5V10m0 0c0-1.5 1-2.4 2.5-2.4S16.5 8.5 16.5 10v6.5M11.5 10v.4" />
  </svg>
)

export const MailIcon = (props) => (
  <svg {...base} {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </svg>
)

export const InstagramIcon = (props) => (
  <svg {...base} {...props}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="3.6" />
    <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
  </svg>
)

export const StackOverflowIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M6 15.5h11.5V20H4.5v-4.5H6Z" />
    <path d="M7.5 13.5 16 15M8.3 10.3l7.9 3.6M9.7 7 16.7 12M12 4l6 5.5" />
  </svg>
)

export const ScholarIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M2 9.5 12 4l10 5.5-10 5.5L2 9.5Z" />
    <path d="M6 12v4.5c0 1.8 2.7 3.2 6 3.2s6-1.4 6-3.2V12" />
  </svg>
)

export const DownloadIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M12 4v11m0 0-4-4m4 4 4-4M5 19.5h14" />
  </svg>
)

export const ArrowRightIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M4.5 12h15m0 0-5.5-5.5M19.5 12l-5.5 5.5" />
  </svg>
)

export const PhoneIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M6.5 3.5h3l1.5 4-2 1.5a10 10 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2Z" />
  </svg>
)
