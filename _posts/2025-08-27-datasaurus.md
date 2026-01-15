---
layout: post
title: "A Stunning Datasaurus"
date: 2025-08-26
mathjax: true
---

Notes from Kevin Murphy's Probablistic Machine Learning book 1, chapters 2.1 - 2.2.

### Basic Probability
* $P(A) = 1 - P(\bar{A})$
* $P(A \cup B) = P(A) + P(B) - P(A \cap B)$
* $P(A \cap B) = P(A)P(B \mid A) = P(B)P(A \mid B)$
* **Bayes' Theorem:** $P(A \mid B) = \frac{P(B \mid A)P(A)}{P(B)}$

---

### Joint and Conditional Probability
* **Joint Distribution:** $P(X, Y) = P(Y \mid X)P(X) = P(X \mid Y)P(Y)$
* **Conditional Independence:**
  * $P(X, Y \mid Z) = P(X \mid Z)P(Y \mid Z)$
  * **Chain Rule of Probability:** $P(X, Y, Z) = P(X)P(Y \mid X)P(Z \mid Y, X)$
  * $P(X \mid Y,Z) = P(X \mid Z)$ if X and Y are conditionally independent given Z.

These measures are not very good!
These all share the same low-order statistics (MAGICAL)
<img src="/assets/datasaurus_dozen.png" alt="Datasaraus dozen" style="max-width:100%; height:auto;">

---

### Transformations of Random Variables
* **Expectation:**
  * $E[aX + bY] = aE[X] + bE[Y]$
  * $E[E[X \mid Y]] = E[X]$
* **Variance:**
  * $Var(aX + b) = a^2Var(X)$
  * $Var(X+Y) = Var(X) + Var(Y)$ if X and Y are independent.
  * **Law of Total Variance:** $Var(X) = E[Var(X \mid Y)] + Var(E[X \mid Y])$

---