---
# ─── Card + "At a glance" (all of this shows on the page) ───
title: Making Design Assist output match Figma, web, and Luau
summary: >-
  I restructured the Foundation Design Kit's documentation into machine-readable
  guidance for Design Assist, so designers generate on-system layouts out of the box.
tags: [Design systems, AI-ready documentation, Standards]
role: Product designer, Foundation Design Kit
team: Partnered with design, engineering, and content design
timeline: Jan 2026 – present
featured: true
order: 1

metrics:
  - value: "2"
    label: surfaces kept in parity, one for people and one for AI
  - value: "3"
    label: platforms the guidance covers (Figma, web, Luau)

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

## Problem

An AI design tool is only as consistent as what it learns from. The Foundation Design Kit (FDK) is used in Figma, on the web, and in Luau, and its guidance was written for people: helpful prose, but not structured for a machine to follow.

When a generator reads documentation like that, small gaps turn into visible drift: a component used where the guidelines say not to, or a layout that looks close to the system but isn't on it. Designers then spend time correcting generated work instead of building on it.

## My role

I own the structure of the FDK's reference material across two surfaces:

- the human-facing FDK website and Figma library
- an AI-readable version that feeds Design Assist, Roblox's AI design tool

I partnered with design, engineering, and content design to decide what that guidance says and how it's structured.

## Decision

**Fix the source, not the output.** Correcting generated designs one at a time would never scale. Instead, we made the documentation itself machine-readable, and kept the human and AI versions in parity so they never tell two different stories.

The trade-off was up-front work: component documentation, usage rules, and patterns all had to be restructured before the tool improved. I chose that over prompt tweaks because the same restructuring also makes the docs clearer for people.

## System and approach

1. **One structure for every component.** Documentation, usage rules, and patterns follow the same predictable shape, so the AI tool can parse them without reading between the lines.
2. **Two surfaces, kept in parity.** The human-facing site and Figma library and the AI-readable version come from the same standards, so a change to one is a change to both.
3. **Guidelines written for both readers.** Component architecture and WCAG 2.2 AA accessibility guidance are written so human designers and AI agents can act on them.
4. **A faster path from gap to fix.** I built an AI-powered workflow that turns design system feedback into draft pull requests, so reported gaps reach the published docs sooner.

{% include figure.html src="/assets/img/design-assist-component-parity/parity.svg" alt="Before: the same component appears at three different sizes and shapes in Figma, web, and Luau. After: it is identical on all three." width="1200" height="700" caption="Illustrative only: the goal is the same component, the same way, on every platform." panel="true" wide="true" %}

## Results and adoption

{% include metrics.html %}

- Designers using Design Assist generate on-system layouts out of the box, without correcting off-system output by hand.
- One set of standards serves both the people reading the docs and the AI generating designs.
- Feedback about gaps now becomes a draft documentation update instead of a ticket waiting for someone to write it.

## What I'd do next

- Measure how often generated output stays on-system, and surface drift to component owners automatically.
- Extend the same structure from components to page templates and larger patterns.
- Share the documentation standard more widely, so other teams can make their own guidance readable by AI tools.
