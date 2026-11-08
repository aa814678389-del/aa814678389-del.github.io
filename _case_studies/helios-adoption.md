---
title: Growing Helios adoption from 65% to 92%
summary: >-
  At HashiCorp, I helped make the Helios design system the easiest way for
  product teams to ship, taking adoption from 65% to 92%.
tags: [Design systems, Adoption, Governance]
role: Product designer, Design Systems (HashiCorp)
team: "TODO: e.g. the Helios design systems team"
timeline: "TODO: e.g. 2023–2025"
featured: true
order: 3

metrics:
  - value: "92%"
    label: Helios adoption, up from 65%
    note: "TODO: say what adoption measured (products, screens, or component usage)"
  - value: "+27 pts"
    label: adoption gain over the project

cover: /assets/img/helios-adoption/cover.svg
cover_alt: "Bar chart: Helios adoption grew from 65 percent to 92 percent."
cover_width: 1200
cover_height: 750
cover_panel: true
---

{% include todo.html note="TODO: Helios is public, but check that any HashiCorp/IBM product names, figures, or screenshots you add are cleared to share." %}

## Problem

Helios, HashiCorp's design system, was already in use, but not everywhere. About a third of the product surface still relied on one-off components and local patterns. That meant inconsistent experiences across products, duplicated effort for teams, and fixes that had to be made many times instead of once.

{% include todo.html note="TODO: add the main reasons teams hadn't adopted (missing components, migration cost, unclear guidance?). Use what you actually found." %}

## My role

As a designer on the design systems team, I:

- found where and why teams were working outside the system
- designed and documented the components and guidance that closed those gaps
- worked directly with product teams to make migrating practical

{% include todo.html note="TODO: name one or two things you personally led." %}

## Decision

**Make the system the path of least resistance, not a mandate.** Rather than asking teams to adopt Helios because they should, we focused on removing the reasons they didn't: filling component gaps, making documentation easier to act on, and supporting migrations directly.

## System and approach

- **Gap analysis.** Mapped where products diverged from Helios and why, then prioritized the gaps that blocked the most teams.
- **Components and guidance.** Built or extended the components teams were missing, with clear documentation of when and how to use them.
- **Migration support.** Worked alongside product teams so switching to Helios was a planned task, not a side project.
- **Governance.** Clear contribution and review paths so teams could propose changes instead of working around the system.

{% include todo.html note="TODO: optional: add a redrawn diagram of your adoption approach or a before/after of a migrated screen using the figure or before-after include." %}

## Results and adoption

{% include metrics.html %}

- Adoption grew from **65% to 92%**.
- More of the product surface now gets fixes and improvements from one place.

## What I'd do next

- Track adoption continuously in each product, so regressions are visible early.
- Pair adoption numbers with quality signals, such as accessibility issues and UI bugs, to show the system's impact beyond coverage.
- Turn the migration playbook into self-serve guidance for future teams.
