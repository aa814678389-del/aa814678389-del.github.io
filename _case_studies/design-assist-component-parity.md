---
# ─── Opener, card, and outcome strip (all of this shows on the page) ───
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

# Outcome strip: 2–4 results. The first one also shows on the home page card.
metrics:
  - value: "2"
    label: surfaces kept in parity, one for people and one for AI
  - value: "3"
    label: platforms the guidance covers (Figma, web, Luau)

# ─── Images ───
# hero: /assets/img/design-assist-component-parity/hero.jpg   # optional photo for the opener; otherwise the cover is used
cover: /assets/img/design-assist-component-parity/cover.svg
cover_alt: >-
  Diagram: design system standards become a structured spec, which an AI design
  assistant uses to produce matching Figma, web, and Luau output.
cover_width: 1200
cover_height: 750
cover_panel: true
# thumb_video: /assets/video/design-assist-component-parity/loop.webm   # optional, plays on hover/focus
---

## Context

The Foundation Design Kit (FDK) is Roblox's design system, used in Figma, on the web, and in Luau. Its reference material lives on two surfaces: a website and Figma library for people, and an AI-readable version that feeds Design Assist, Roblox's AI design tool. Designers use Design Assist to generate layouts, so the quality of its output depends on the quality of what it reads.

## Problem

An AI design tool is only as consistent as what it learns from. The FDK's guidance was written for people: helpful prose, but not structured for a machine to follow.

When a generator reads documentation like that, small gaps turn into visible drift: a component used where the guidelines say not to, or a layout that looks close to the system but isn't on it. Designers then spend time correcting generated work instead of building on it.

## Role

I own the structure of the FDK's reference material across both surfaces. I partnered with design, engineering, and content design to decide what the guidance says and how it's structured.

## Decisions

{% include decision.html title="Where to fix off-system output" options="Correct generated designs one by one|Tune the AI tool's prompts|Restructure the documentation itself" chosen="Restructure the documentation itself" why="Fixing the source fixes every future output, and the clearer structure helps people reading the docs too." rejected="Correct generated designs one by one: never scales|Tune the AI tool's prompts: brittle, and leaves the real gaps in the docs" %}

{% include decision.html title="One set of docs or two" options="Separate docs for people and for AI|One standard, two surfaces kept in parity" chosen="One standard, two surfaces kept in parity" why="The human and AI versions can never tell two different stories." rejected="Separate docs for people and for AI: they drift apart, and every fix has to be made twice" %}

## System and approach

1. **One structure for every component.** Documentation, usage rules, and patterns follow the same predictable shape, so the AI tool can parse them without reading between the lines.
2. **Two surfaces, kept in parity.** The human-facing site and Figma library and the AI-readable version come from the same standards, so a change to one is a change to both.
3. **Guidelines written for both readers.** Component architecture and WCAG 2.2 AA accessibility guidance are written so human designers and AI agents can act on them.
4. **A faster path from gap to fix.** I built an AI-powered workflow that turns design system feedback into draft pull requests, so reported gaps reach the published docs sooner.

{% include callout.html title="Why parity matters" text="If the docs people read and the guidance the AI reads disagree, designers stop trusting both. Keeping them in parity is what makes generated work safe to build on." %}

## Evidence

{% include figure.html src="/assets/img/design-assist-component-parity/parity.svg" alt="Before: the same component appears at three different sizes and shapes in Figma, web, and Luau. After: it is identical on all three." width="1200" height="700" caption="Illustrative only, not a real component: the goal is the same component, the same way, on every platform." panel="true" wide="true" %}

## Results and adoption

- Designers using Design Assist generate on-system layouts out of the box, without correcting off-system output by hand.
- One set of standards serves both the people reading the docs and the AI generating designs.
- Feedback about gaps now becomes a draft documentation update instead of a ticket waiting for someone to write it.

## What I'd do next

- Measure how often generated output stays on-system, and surface drift to component owners automatically.
- Extend the same structure from components to page templates and larger patterns.
- Share the documentation standard more widely, so other teams can make their own guidance readable by AI tools.
