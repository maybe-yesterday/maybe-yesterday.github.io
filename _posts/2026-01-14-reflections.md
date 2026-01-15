---
layout: post
title: "Paper Reflections"
date: 2026-01-14
mathjax: true
---

[INTERNALIZING WORLD MODELS VIA SELF-PLAY FINETUNING FOR AGENTIC RL](https://arxiv.org/abs/2510.15047)

### Basis
LLMs as agents struggle significantly in out-of-distribution (OOD) scenarios and fail to scale effectively with standard RL.
* **The Symptom:** $Pass@k$ drops markedly during training while $Pass@1$ might marginally improve.
* **The Diagnosis:** This divergence indicates brittle exploration and limited generalization—the model overfits to a single successful trajectory (exploitation) rather than understanding the environment's underlying dynamics.
* **Theoretical Grounding:** This aligns with the "Superficial Alignment Hypothesis" (e.g., [LIMA](https://arxiv.org/abs/2305.11206)), which suggests RL/Post-training effectively acts as a style transfer mechanism rather than teaching new fundamental reasoning or world knowledge.

### How to solve
LLM agents need an **internal world model** to ground their reasoning. Instead of just mapping $State \to Action$, they must explicitly model:
1. **State Representation ($E$):** $s_t \to z_t$ (compressing observations into structured concepts).
2. **Transition Modeling ($T$):** $(z_t, a_t) \to z_{t+1}$ (predicting dynamics).

### Self Play Agent (SPA)
The core insight is **Exploration before Exploitation**. The agent should form a robust internal world model via exploratory self-play before optimizing for a specific reward.

#### 1. State Estimation (Perplexity as Curiosity)
The agent needs to distinguish between "familiar" and "novel" states to guide exploration.
* **Mechanism:** Use the model's own perplexity on the state description as a proxy for epistemic uncertainty.
* **Math:** If we denote the state text as tokens $x_{1:L}$, the novelty score $N(s)$ is proportional to the negative log-likelihood:
  $$
  N(s) \approx -\frac{1}{L} \sum_{i=1}^{L} \log P(x_i | x_{<i}; \theta)
  $$
  High perplexity $\to$ High Novelty $\to$ Trigger Exploration.

#### 2. Transition Modeling (Dynamics Training)
The agent learns to predict the next state, effectively learning the transition kernel of the environment.
* **Training Objective:** Supervised Fine-Tuning (SFT) on trajectories collected via self-play.
* **Loss Function:** The model minimizes the negative log-likelihood of the *predicted* next state $s_{t+1}$ given the current history $h_t$ and action $a_t$:
  $$
  \mathcal{L}_{\text{world}} = - \mathbb{E}_{\tau \sim \pi_{\text{explore}}} \left[ \sum_{t} \log P(s_{t+1} | s_t, a_t; \theta) \right]
  $$
* **Constraint:** By training on actual environmental rollouts, the model is constrained to the **feasible manifold** of states, reducing hallucinations during planning.

### Two stages
1. **World Model Acquisition (Cold Start):**
   * **Phase:** Self-Play SFT.
   * **Activity:** Agent interacts with the environment purely to generate data $(s_t, a_t, s_{t+1})$.
   * **Outcome:** It minimizes $\mathcal{L}_{\text{world}}$ to internalize the physics/rules of the OOD environment.

2. **Policy Optimization:**
   * **Phase:** RL (e.g., PPO/DPO).
   * **Activity:** The agent uses its frozen (or slowly updating) world model to **simulate** future states before acting.
   * **Benefit:** This simulation step ($s_t \xrightarrow{internal} \hat{s}_{t+1} \dots$) allows the policy to reason about long-term consequences without requiring millions of expensive real-world interactions.

### Summary
Standard RL overfits to specific solution paths ($Pass@1 \uparrow, Pass@k \downarrow$). **SPA** forces the agent to learn the environment's rules first ($Pass@k \uparrow$), turning "learning nothing" into "learning how the world works."