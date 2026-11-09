---
title: Growing Helios adoption from 65% to 92%
summary: >-
  At HashiCorp, I helped build the Helios design system from its foundations
  and make it the easiest way for product teams to ship, taking adoption from
  65% to 92%.
tags: [Design systems, Adoption, Accessibility]
role: Product designer, Design Systems (HashiCorp, now IBM)
team: Helios design systems team, working with 9+ product teams
timeline: 2021 – Jan 2026
featured: true
order: 3

metrics:
  - value: "92%"
    label: Helios adoption, up from 65%
  - value: "9+"
    label: product teams using Helios components and tokens
  - value: "500K+"
    label: users across the product ecosystem

cover: /assets/img/helios-adoption/cover.svg
cover_alt: "Bar chart: Helios adoption grew from 65 percent to 92 percent."
cover_width: 1200
cover_height: 750
cover_panel: true
---

## Context

Helios is HashiCorp's design system, now part of IBM. It supports a cross-platform product ecosystem serving more than 500,000 users, built by 9+ product teams.

## Problem

Helios was in use but not everywhere. Part of the product surface still relied on one-off components and local patterns. That meant inconsistent experiences across products, duplicated effort for teams, and fixes that had to be made many times instead of once.

## Role

From 2021 to 2026 on the design systems team, my scope grew from foundations to platform standards:

- **Foundations.** Built foundational parts of Helios: color primitives, type scales, grids, and light and dark themes.
- **Components.** Led design of UI components and pattern libraries used across 9+ product teams, including mobile-optimized components with 44 px touch targets.
- **Standards.** Owned WCAG 2.2 AA accessibility standards across design tokens, component states, and production code.
- **Alignment.** Facilitated design reviews and working sessions with 15+ stakeholders, and partnered with engineering through QA.

## Decisions

{% include decision.html title="How to grow adoption" options="Mandate the system|Make it the path of least resistance" chosen="Make it the path of least resistance" why="Remove the reasons teams didn't adopt: fill component gaps, make standards easy to act on, and keep design and code in step." rejected="Mandate the system: compliance without buy-in, and teams work around it" %}

{% include decision.html title="Where standards live" options="Figma only|Tokens in both Figma and code" chosen="Tokens in both Figma and code" why="What designers specify is what engineers ship, which cuts implementation variance." rejected="Figma only: design and code drift apart after handoff" %}

## System and approach

- **Token-based standards.** Built in both Figma and code, so what designers specify is what engineers ship.
- **Components and patterns.** Designed for consistency, accessibility, and cross-platform behavior, with specifications ready for engineering handoff.
- **Documentation.** Authored Figma and Storybook documentation so teams could self-serve.
- **Governance.** Contributed to token architecture, accessibility audits, and governance, so teams could propose changes instead of working around the system.

## Evidence

{% include figure.html src="/assets/img/helios-adoption/cover.svg" alt="Bar chart: Helios adoption grew from 65 percent to 92 percent." width="1200" height="750" caption="Adoption before and after the work." panel="true" %}

## Results and adoption

- Adoption grew from **65% to 92%**.
- Token-based standards reduced implementation variance and sped up delivery across 9+ product teams.
- Platform foundations (color, typography, motion, iconography, and components) now support a cross-platform product ecosystem serving 500K+ users.

## What I'd do next

- Track adoption continuously in each product, so regressions are visible early.
- Pair adoption numbers with quality signals, such as accessibility issues and UI bugs, to show the system's impact beyond coverage.
- Write a self-serve migration guide, so future teams can adopt without hands-on support.
