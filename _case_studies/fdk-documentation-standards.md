---
title: One documentation standard for humans and agents
summary: >-
  I standardized the Foundation Design Kit's component documentation into one
  structure and voice, so every page reads as if one person wrote it, and AI
  agents can follow it as reliably as people can.
tags: [Content foundations, Documentation, Governance]
role: Product designer, Foundation Design Kit
team: Partnered with content design, design, and engineering
timeline: 2026
featured: true
order: 2

metrics:
  - value: "80%"
    label: FDK adoption across product teams
  - value: "1"
    label: structure and voice for every component page

cover: /assets/img/fdk-documentation-standards/cover.svg
cover_alt: >-
  Diagram: one documentation standard produces a readable page for people and a
  structured version, with fields like component, when to use, and tokens, for AI agents.
cover_width: 1200
cover_height: 750
cover_panel: true
---

## Context

The Foundation Design Kit (FDK) is Roblox's design system. Its component documentation is read by designers and engineers on the FDK website, and the same content feeds the AI-readable guidance behind Design Assist, Roblox's AI design tool.

## Problem

Component documentation had grown page by page, written by different people at different times. Each page was useful on its own, but together they were inconsistent: sections in different orders, the same idea named different ways, and guidance buried in paragraphs.

That cost people time, because they had to re-learn every page. It cost AI agents even more: a model can't tell that two differently worded sections mean the same thing unless something says so.

## Role

I led the standard and the governance around it:

- standardized component documentation on the FDK website into one structure and voice
- worked with content design partners to align terminology, tone, and writing patterns across pages
- reorganized the FDK Figma library taxonomy, defining naming and information architecture conventions
- set up the governance standards and contribution paths that keep the system consistent as it grows

## Decisions

{% include decision.html title="Who the docs are written for" options="Separate human docs and AI docs|One standard that serves both readers" chosen="One standard that serves both readers" why="A fixed structure with consistent labels scans well for people and parses cleanly for agents." rejected="Separate human docs and AI docs: twice the upkeep, and the two versions drift" %}

{% include decision.html title="How big the standard should be" options="A complete style guide|A small, memorable standard" chosen="A small, memorable standard" why="A fixed set of sections, a short voice guide, and naming rules. A standard people can remember gets followed." rejected="A complete style guide: long standards get skimmed, then ignored" %}

{% include todo.html note="TODO (Roblox review): confirm these were the options you actually weighed, and that describing them publicly is fine with Roblox." %}

## System and approach

- **Structure.** The same sections in the same order on every page, each with a clear job.
- **Voice and terminology.** Aligned with content design, with one name per concept used the same way in docs, Figma, and code.
- **Naming and taxonomy.** A reorganized Figma library with naming and information architecture conventions that match the docs.
- **Governance.** Clear contribution paths, so teams can propose changes instead of working around the system.

## Evidence

{% include before-after.html before="/assets/img/fdk-documentation-standards/before.svg" before_alt="Before: a documentation page that is one long run of unlabeled paragraphs." after="/assets/img/fdk-documentation-standards/after.svg" after_alt="After: the same page split into labeled sections: When to use, Do and Don't, and Tokens." width="800" height="500" caption="Illustrative layout, not a real page: the same content, restructured so both people and agents can find what they need." panel="true" %}

## Results and adoption

- FDK adoption reached **80% across all product teams**, driven by governance standards, clear contribution paths, and partnership with design, engineering, and content design.
- The same standardized pages feed the AI-readable guidance behind Design Assist (see the [Design Assist case study]({{ '/work/design-assist-component-parity/' | relative_url }})).

## What went wrong

{% include todo.html note="TODO: add one or two honest setbacks, such as pages that resisted the new structure, terms teams disagreed on, or contributors who skipped the standard, and how you handled them. Keep it general enough to clear with Roblox." %}

## What I'd do next

- Add automated checks that flag pages missing a required section or using a non-standard term.
- Extend the voice and naming rules to pattern documentation and release notes.
- Track which sections people and agents actually use, and trim the ones nobody reads.
