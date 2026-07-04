# TheAyush.in - Personal Portfolio of Ayush

[![Netlify Status](https://api.netlify.com/api/v1/badges/e8f19968-fe0b-4b49-82d6-e835d9452255/deploy-status)](https://app.netlify.com/sites/loquacious-biscotti-ed2461/deploys)

This repository contains the source code for **[TheAyush.in](https://theayush.in/)**, the personal portfolio website of Ayush, a Mechanical Engineering student at Pandit Deendayal Energy University, India.

## Overview

**TheAyush.in** serves as a digital platform to showcase Ayush's academic journey, projects, research interests, and personal achievements in fields like aerospace engineering, fluid mechanics, heat transfer, and advanced manufacturing.

## Features

- **About Me**: Detailed insights into Ayush's background, interests, and academic pursuits.
- **Gallery**: A collection of certificates, awards, and key moments from Ayush's journey in engineering and innovation.
- **Contact Me**: Easy access to connect with Ayush through various platforms.
- **Resume**: Downloadable resume highlighting Ayush's skills, experiences, and accomplishments.

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation.
- **React.js**: Library for building user interfaces.

---

## 2026 Revamp Notes

This site was rebuilt from the ground up as a research-focused portfolio. Quick orientation for whoever (you!) picks this up next:

**Design system** — a "drafting sheet / blueprint" identity: near-black navy background, blueprint-cyan for anything in motion, brass-gold for anything finished/awarded. Type is Space Grotesk (headings), IBM Plex Sans (body), IBM Plex Mono (labels, stage tags, dates) — all defined as CSS variables in `styles/globals.css`.

**Pages** — `/`, `/about`, `/experience` (Experience & Projects), `/publications`, `/achievements`, `/involvement`, `/contact`. Each new page uses global utility classes from `globals.css` (`pageContainer`, `sheetLabel`, `eyebrow`, `pill`) plus its own CSS module.

**Signature element** — `components/StageTracker.js` + `styles/StageTracker.module.css`: the segmented "research status gauge" on the Experience & Projects cards. Ongoing projects get a pulsing live indicator at their current stage; published/accepted ones get a filled brass "stamp." Reused via `components/ProjectCard.js`.
