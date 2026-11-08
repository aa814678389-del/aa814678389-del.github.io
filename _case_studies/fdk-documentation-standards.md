---
title: One documentation standard for humans and agents
summary: >-
  I created a single standard for component documentation, covering structure,
  voice, and naming, so every page reads as if one person wrote it, and AI agents
  can follow it as reliably as people can.
tags: [Content foundations, Documentation, Design systems]
role: Product designer, Foundation Design Kit
team: "TODO: e.g. me + component owners across design and engineering"
timeline: "2026"
featured: true
order: 2

metrics:
  - value: "[X%]"
    label: of component pages moved to the new standard
    note: "TODO: real figure, cleared with Roblox"
  - value: "1"
    label: standard for structure, voice, and naming

cover: /assets/img/fdk-documentation-standards/cover.svg
cover_alt: >-
  Diagram: one documentation standard produces a readable page for people and a
  structured version, with fields like component, when to use, and tokens, for AI agents.
cover_width: 1200
cover_height: 750
cover_panel: true
---

{% include todo.html note="TODO (Roblox review): confirm everything here is cleared to share. Examples are generic on purpose; do not add real page screenshots." %}

## Problem

Component documentation had grown page by page, written by many people at different times. Each page was useful on its own, but together they were inconsistent: sections in different orders, the same idea named three ways, and guidance buried in paragraphs.

That cost people time, because they had to re-learn every page. It cost AI agents even more: a model can't tell that "Usage," "When to use," and "Guidelines" mean the same thing unless something says so.

## My role

I wrote the standard, piloted it on a set of components, and set up the review process that keeps new pages consistent. I also wrote the guidance that helps other contributors write to the standard without me in the loop.

{% include todo.html note="TODO: add how many contributors or teams wrote to the standard, if you can share it." %}

## Decision

**One standard serves both readers.** Instead of maintaining separate "human docs" and "AI docs," every page follows a fixed structure with consistent labels, so it scans well for people and parses cleanly for agents.

I deliberately kept the standard small: a fixed set of sections, a short voice guide, and naming rules. A standard people can remember gets followed; a long one gets skimmed.

## System and approach

- **Structure.** The same sections in the same order on every page, each with a clear job.
- **Voice.** Short, direct sentences, with "Do" and "Don't" written as rules rather than suggestions.
- **Naming.** One name per concept, used the same way in docs, Figma, and code.
- **Review.** A lightweight checklist for new and updated pages, so the standard holds as the system grows.

{% include before-after.html before="/assets/img/fdk-documentation-standards/before.svg" before_alt="Before: a documentation page that is one long run of unlabeled paragraphs." after="/assets/img/fdk-documentation-standards/after.svg" after_alt="After: the same page split into labeled sections: When to use, Do and Don't, and Tokens." width="800" height="500" caption="Illustrative layout, not a real page: the same content, restructured so both people and agents can find what they need." panel="true" %}

## Results and adoption

{% include metrics.html %}

- **[X%]** of component pages now follow the standard.
- The same pages feed the structured spec used by the AI design pipeline (see the [Design Assist case study]({{ '/work/design-assist-component-parity/' | relative_url }})).

{% include todo.html note="TODO: add one qualitative signal, such as feedback from contributors, faster reviews, or fewer questions in support channels." %}

## What I'd do next

- Add automated checks that flag pages missing a required section or using a non-standard term.
- Extend the voice and naming rules to pattern documentation and release notes.
- Track which sections people and agents actually use, and trim the ones nobody reads.
