---
# ─── Card + "At a glance" (all of this shows on the page) ───
title: Making Design Assist output match Figma, web, and Luau
summary: >-
  I turned our design system's documentation into a structured source an AI
  design tool can follow, so what it generates matches the components teams
  actually ship.
tags: [Design systems, AI-ready documentation, Standards]
role: Product designer, Foundation Design Kit
team: "TODO: e.g. me + design systems engineers + the AI tooling team"
timeline: "2026"
featured: true
order: 1

metrics:
  - value: "[X%]"
    label: of generated components matched the shipped system
    note: "TODO: say how this was measured, and confirm Roblox is OK sharing it"
  - value: "3"
    label: platforms kept in step from one source (Figma, web, Luau)

# ─── Images ───
cover: /assets/img/design-assist-component-parity/cover.svg
cover_alt: >-
  Diagram: design system standards become a structured spec, which an AI design
  assistant uses to produce matching Figma, web, and Luau output.
cover_width: 1200
cover_height: 750
cover_panel: true
# thumb_video: /assets/video/design-assist-component-parity/loop.webm   # optional, plays on hover
---

{% include todo.html note="TODO (Roblox review): confirm that the names “Design Assist” and “Foundation Design Kit” are public, and that this page includes nothing unreleased. Diagrams here are redrawn and generic on purpose." %}

## Problem

An AI design tool is only as consistent as what it learns from. Our design system existed in three places (Figma, web code, and Luau), and its guidance was written for people: helpful prose, but loosely structured and different from page to page.

When a generator reads that kind of documentation, small gaps turn into visible drift: a component with the wrong size, a token that exists on one platform but not another, a pattern used where the guidelines say not to. Teams then spend time correcting generated designs instead of building on them.

## My role

I own the Foundation Design Kit's documentation and standards. On this project I:

- defined what "matching the system" means, component by component
- designed the structure that turns our documentation into input the tool can rely on
- set the standards and review process that keep that input in step with Figma, web, and Luau

{% include todo.html note="TODO: name your partners (by role, not by name) and anything you led versus contributed to." %}

## Decision

**Fix the source, not the output.** Correcting generated designs one at a time would never scale, so we made the documentation itself machine-readable, with one structured definition per component that every platform and the AI tool read from.

The trade-off was up-front work: every component page had to be rewritten to a stricter standard before the tool improved at all. I chose that over prompt tweaks because the documentation work also helps the people reading our docs.

## System and approach

The pipeline has three parts:

1. **Standards.** One documentation structure for every component: when to use it, when not to, its variants, and the tokens it uses.
2. **Structured spec.** The same content exported in a predictable format the AI tool can parse, with no reading between the lines.
3. **Parity checks.** A review step that compares each component's definition across Figma, web, and Luau, so a mismatch is caught in the source before it shows up in generated output.

{% include figure.html src="/assets/img/design-assist-component-parity/parity.svg" alt="Before: the same component appears at three different sizes and shapes in Figma, web, and Luau. After: it is identical on all three." width="1200" height="700" caption="Illustrative only: the goal was the same component, the same way, on every platform." panel="true" wide="true" %}

{% include todo.html note="TODO: add a sentence on how the parity check works in practice (manual review, automated diff, or both), described at a general level." %}

## Results and adoption

{% include metrics.html %}

- Generated components matched the shipped system **[X%]** of the time after the change.
- One source of truth now serves Figma, web, Luau, and the AI tool, so fixing a definition once fixes it everywhere.

{% include todo.html note="TODO: replace [X%] with your real number and add one adoption signal (teams using the output, fewer corrections, etc.). The check script will block publishing until [X%] is gone." %}

## What I'd do next

- Measure parity continuously instead of at review time, and surface drift to component owners automatically.
- Extend the same structure to patterns and page templates, not just individual components.
- Publish the documentation standard internally so other teams can make their own guidance readable by AI tools.
