---
title: TruthLens
slug: truthlens
featured: true
order: 1
status: In development
question: Can we trust an AI answer just because it sounds convincing?
summary: An evidence-first AI evaluation project that makes the reasoning behind an answer's reliability visible.
technologies: [Python, LLMs, Evaluation, RAG, Testing]
---

## The question that started it

**Can we trust an AI answer just because it sounds convincing?**

Large language models are remarkably good at producing confident, fluent answers. But fluency is not evidence. A plausible response can omit a crucial detail, mix facts with assumptions, or cite material that does not support its claims.

I wanted to explore a harder question than *“Does the answer sound right?”*: **How can we show what is supported, what is uncertain, and why?**

That question became **TruthLens**.

## The idea

TruthLens is an evidence-first AI evaluation project. Instead of treating an LLM response as the final product, it treats the response as something to investigate.

The goal is to break evaluation into understandable steps: identify what an answer claims, examine the available evidence, assess whether that evidence supports the claims, and present the findings in a report a human can inspect.

An evaluation should not end with an unexplained score. It should help someone understand *what happened*.

## What I'm exploring

- **Claim-level assessment.** Looking beyond an overall verdict to the specific statements an answer makes.
- **Evidence and faithfulness.** Separating a well-written answer from one genuinely supported by its sources.
- **Reproducible evaluation.** Using defined test cases and recorded results so changes can be compared rather than guessed at.
- **Model behavior.** Comparing answer and evaluation models, including where the evaluator itself makes mistakes.
- **Readable reports.** Making questions, assessments, evidence, and limitations visible instead of hiding everything behind a single number.

## Engineering approach

I am building this as a Python engineering project, with explicit evaluation steps, tests, and a separation between the evaluation logic and the user-facing report.

One of the most interesting lessons is that **the evaluator also needs evaluation**. A system that judges AI answers can be wrong about extracted claims or evidence support. Measuring those errors is part of building something useful.

## Where it stands

**In development.** The project has an evaluation workflow and ongoing experiments, but I am still improving the reporting experience, validation, and overall usability.

As the work matures, this page will include a real walkthrough, measured results, examples of successful and unsuccessful evaluations, and a demo.

## Why it matters to me

I have spent years building production systems where reliability must be demonstrated, not assumed. TruthLens is my attempt to bring that same engineering mindset to AI.

**A convincing answer is a starting point. Evidence is what earns trust.**
