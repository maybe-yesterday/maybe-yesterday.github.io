---
layout: post
title: "Paper Reflections"
date: 2026-01-13
categories: blog
---


## [1000 Layer Networks for Self-Supervised RL: Scaling Depth Can Enable New Goal-Reaching Capabilities](https://openreview.net/pdf?id=s0JVsx3bx1)

Deep RL are unstable when networks get too deep. 
Address by moving away from reward-based RL toward **Self-Supervised Contrastive RL**
* Instead of trying predict precise numerical reward (noisy! & prone to errors),

**Classify** whether a state & action belong to a trajectory that leads to  specifi goal, similar to LLM (representation learning). 
* This can prbbly scale!

Deeper networks
* can have jumps in performance
* are more parameter-efficient (than wide networks)
* enhances contrastive representation -> richer learned representations
* enhances exploration & expressivity in synergized way 
* allocate greater representational capacity to states near the goal
* enable "stitching" together different experiences

How?
* Residual connections
* Layer Normalization
* Swish Activation function instead of ReLU

### Goal-Conditioned RL
* agent is given specific target state (g) as part of input
* binary reward (goal reached?)
* "generalist" agent

### Contrastive RL
* actor-critic method
* l2 norm between embedding of state-action pair and goal embedding
* InfoNCE objective

### However ...
performance for temporal difference methods (like SAC) saturates at 4 & does not scale. 


