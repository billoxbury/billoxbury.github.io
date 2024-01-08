---
title:  "Why mathematicians should care about Large Language Models"
date:   2024-01-05
categories: artificial_intelligence mathematics
blurb: >- 
    What implication does modern AI have for mathematics?
header:
  teaser: "/assets/img/2024-01-05/unicorn.png"
---

<figure>
  <img src="/assets/img/2024-01-05/unicorn.png" width="100%">
  <figcaption>"Draw a unicorn in TikZ." Successive renderings by GPT-4, from [1]. Their relevance to the discussion will be revealed, all in good time.
  </figcaption>
</figure>

This post is to review some extraordinary observations by Microsoft and DeepMind researchers regarding the apparent ability of Large Language Models (LLMs) to solve novel mathematical problems. I believe mathematicians should sit up and take notice of these examples: we need at the very least to understand them - and to ask what they might mean for the future of mathematics.

**1. A surprising example**

Let's start with a mathematics teaser - actually a version of a question from the 2022 International Mathematics Olympiad:

> Suppose $g$ is a continuous smooth function such that for every $x > 0$, there is one and only one $y > 0$ such that $g(x) + g(y) ≤ 2xy$. Can you prove that $g(x) = x^2$?

If you haven't seen this before, I invite you to give it a little thought before proceeding.

OK, thought about it enough? This an example prompt cited in a recent study of GPT-4 by Microsoft researchers [1 section 4.4]. Here is the model's response:

<figure>
  <img src="/assets/img/2024-01-05/answer.png" width="100%">
</figure>

What do we see? In principle, the language model is performing a sophisticated auto-complete - probilistic next-word selection to construct a text response. Yet the result is coherent reasoning which correctly solves the problem presented. Moreover, that problem is non-standard: it requires undergraduate-level analysis, but would be surprising and challenging to most students. 

Conceivably, this same problem occured somewhere in the training corpus used to build the language model and GPT-4 is simply regurgitating a known answer - I'll return to this possibility below. Yet this example is just one of many similarly jaw-dropping interactions with GPT-4 cited in [1]. Could they all have been in the training data?

What is going on here?

**2. It's Reinforcement Learning, stupid!**

A base LLM is a sequence-to-sequence (transformer) model built on a huge amount of text - typically 10s of billions of words - trawled from the Internet. It is built to model next-word probabilities based on long stretches of text that effectively capture semantic context. In this sense, it can be described as a very powerful 'autocomplete' capability. 

This does not tell the whole story, however, and a base LLM alone would not be able to produce the kind of performance illustrated above. In a user-facing system such as GPT-4 there is much more going on, as introduced by OpenAI in [2] and explained in the excellent article by Aerin Kim [3].

The magic that turns a base LLM into the a high-performing, all-knowing chatbot is referred to as _Reinforcement Learning from Human Feedback_ (RLHF). In my view, this rather modest terminology doesn't do justice to the engineering design - though it does reveal that the most important 'secret sauce' is human input - lots of it, of high quality and meticulously managed.

Briefly, the design consists to three machine learnt models:

1. **SFT model**. This stands for Supervised Fine Tuning, and is a further tuning of the parameters of the base LLM using 'instruction data' - which I'll describe in just a moment.
2. **Reward model**. This is a second model which assigns a score to any pair _(prompt, response)_. 
3. **Policy model**. This is a reinforcement-learnt model, which, given a text sequence, chooses a next-word (an 'action') with the goal of maximising the end-reward (as computed by the reward model).

Let's think about that for a moment. When GPT-4 responds to a user prompt, it is not simply auto-completing using next-word probabilities. What it is doing is more akin to game-playing: at each point in the game it has constructed a sequence of text (the current 'state'); it is offered a choice of actions (the next word) based on probabilities given by the SFT model; it has to choose one of these actions in order to maximise the (future) reward of the final output.

The success of the system comes from having, at each step, the best actions to choose from (thanks to the base LLM and the quality of the instruction data underlying the SFT model) and a reward signal (from 2) that accurately represents the expectations and needs of a user.

The _instruction data_ used to train the SFT model consists of human curated pairs _(prompt, response)_. The reward model, likewise, is trained on significant human input. For this, the training data consists of a large set of prompts (independent of those used for the SFT!), and selections of responses are ranked by human labellers.

According to the discussion in [2,3], this is human-generated input is not cheap, crowd-sourced data but follows detailed guidelines and is carefully choreographed. The performance of the system is critically depenedent on the quality of this data and not on the power of the LLM alone.

Back to mathematics. Examples like the one above suggest that LLMs can actually 'do' maths. What this is based on is models that are in effect compressions of data: of vast amounts of Internet data in the base LLM, but also of large amounts of human-curated data in the SFT and reward models.

The question is, can the LLM do maths that it hasn't seen before? Had the Olympiad solution at the top of this post been seen on the Internet, so that it was already present in the base LLM? Or could it have occured somewhere in the instruction data? 

**3. Can AI really discover new mathematics?**




**References**

1. Sébastien Bubeck et al, _Sparks of Artificial General Intelligence: Early experiments with GPT-4_, <a href="
https://doi.org/10.48550/arXiv.2303.12712" target="_blank">arXiv.2303.12712</a> (2023)
2. Long Ouyang et al, _Training language models to follow instructions with human feedback_, <a href="
https://doi.org/10.48550/arXiv.2203.02155" target="_blank">arXiv.2203.02155</a> (2022)
3. Aerin Kim, <a href="https://medium.com/towards-data-science/rlhf-reinforcement-learning-from-human-feedback-faa5ff4761d1" target="_blank">RLHF: Reinforcement Learning from Human Feedback</a> Medium (2023)
4. Romera-Paredes, B., Barekatain, M., Novikov, A. et al, _Mathematical discoveries from program search with large language models_ <a href="https://doi.org/10.1038/s41586-023-06924-6" target="_blank">https://doi.org/10.1038/s41586-023-06924-6</a>, Nature (2023) 

