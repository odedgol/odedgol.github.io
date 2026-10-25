---
title: Agentic Production Intelligence
slug: agentic-production-intelligence
featured: true
order: 2
status: In development
question: What if production systems could help us understand why they fail?
summary: An evidence-first agentic investigation system for production incidents, designed to help engineers connect signals, assess impact, and decide what to do next.
technologies: [Python, Agentic AI, Observability, Distributed Systems, AWS]
---

## The question that started it

**What if production systems could help us understand why they fail?**

In a real incident, the hard part is rarely finding *a* log line. It is connecting fragments of information: errors, metrics, dependencies, recent changes, and the behavior of other services.

An engineer may have to jump between several tools before they can even form a useful hypothesis. Meanwhile, time matters, and a confident but incorrect fix can make the incident worse.

After years working with large-scale backend systems, I wanted to explore whether AI could make that investigation more systematic — **without taking control away from the engineer**.

## The idea

**Agentic Production Intelligence** is an evidence-first approach to investigating production problems.

The system is designed to gather signals from multiple sources, connect related observations, consider possible explanations, and turn the investigation into an understandable report.

The ambition is not to build an agent that blindly “fixes production.” It is to build an assistant that can help an engineer answer three questions:

1. **What changed?**
2. **What evidence points to the likely cause and impact?**
3. **What should we investigate or do next?**

## How the investigation is designed

The workflow separates collecting evidence from interpreting it and acting on it.

- **Collect signals.** Bring together relevant logs, metrics, service information, and other available context.
- **Connect the evidence.** Look for relationships between symptoms, dependencies, and recent changes.
- **Form hypotheses.** Explain possible causes and distinguish observations from assumptions.
- **Assess impact.** Describe which services or users may be affected, based on the available evidence.
- **Recommend next steps.** Give engineers concrete investigation or remediation options, with reasons and uncertainty made clear.

The resulting report should make it possible to challenge the system's conclusions, not just accept them.

## Safety is part of the architecture

Production is not the place for an agent to improvise dangerous actions.

A central design principle is that **investigation and execution are different responsibilities**. Sensitive operations require explicit human approval, and any decision to act should be based on fresh evidence rather than an outdated cached result.

The project also explores clear tool boundaries, observable workflows, and reproducible investigations — because an AI assistant used during an incident must be understandable when it gets something wrong.

## Why this problem interests me

At eBay, I worked on distributed services and data pipelines handling millions of products, where availability, throughput, monitoring, and safe changes mattered every day.

That experience shapes how I think about agentic AI. An impressive demo is not enough. The system must fit the operational realities of production software: incomplete data, changing conditions, uncertainty, and accountability.

## Where it stands

**In development.** I am building the investigation workflow and its engineering foundations incrementally. This page describes the direction and design principles, not a claim that the system already diagnoses or resolves live incidents autonomously.

As the project progresses, I plan to share its architecture, realistic incident scenarios, evaluation results, and a working demonstration.

## The bigger idea

**The best production AI assistant is not the one that acts fastest. It is the one that helps engineers make better decisions with evidence they can verify.**
