---
title:  "Does AI pose an existential threat?"
date:   2024-10-10
categories: artificial_intelligence
blurb: >- 
    Lancaster public lecture, January 2025
header:
  teaser: "/assets/img/2024-10-10/1_context/1_title/title1.jpeg"
usemathjax: true
---

<figure>
  <img src="/assets/img/2024-10-10/1_context/1_title/title1.jpeg" width="100%">
  <figcaption>
  Imagined from the title of this talk by <a href="https://openai.com/index/dall-e-3/" target="_blank">DALL-E3</a>
  </figcaption>
</figure>



<p><small>
<b>Contents:</b>
<ol>
  <li>AI today</li>
  <li>How does it work?</li>
  <li>What could go wrong?</li>
  <li>The future</li>
 </ol>
</small></p>

**1. AI today**

As I write this in late 2024, the year's Nobel Prizes have been announced for <a href="https://www.nobelprize.org/prizes/physics/2024/press-release/" target="_blank">Physics</a> and <a href="https://www.nobelprize.org/prizes/chemistry/2024/press-release/" target="_blank">Chemistry</a>. They included three pioneering figures from Artificial Intelligence: Geoffey Hinton and John Hopfield for their work on neural networks – both inspired by and contributing to physics; and Demis Hassabis, CEO of Deepmind, among whose profound achievements was using deep learning to solve the problem of protein folding. 

<figure>
  <img src="/assets/img/2024-10-10/1_context/3_nobelprizes/nobelprizes.jpg" width="100%">
  <figcaption>
  Three 2024 Nobel Prize Laureates: Geoffrey Hinton and John Hopfield (Physics) and Demis Hassabis (Chemistry).
  </figcaption>
</figure>

Their work, and that of a great many of their colleagues and fellow researchers, have revolutionised how we all interact with data and with the Internet, to the extent that Artificial Intelligence (AI) is now a recognisable part of all our lives. It has created capabilities that were previously confined to human cognition, such as interpretation (and creation) of images and language; as well as scientific applications that are well beyond human cognition:

<figure>
  <img src="/assets/img/2024-10-10/1_context/2_showcase/bemoredog.png" width="100%">
  <figcaption>
  Recognising cats vs dogs: only a few years ago this seemed an intractable problem for computers. Source: <a href="https://www.youtube.com/watch?v=ExnWRuniooY" target="_blank">Be more dog</a>
  </figcaption>
</figure>
<figure>
  <img src="/assets/img/2024-10-10/1_context/2_showcase/alphafold.png" width="100%">
  <figcaption>
  AlphaFold: predicting the folding geometry of a protein from the sequence of amino acids.
  </figcaption>
</figure>

<figure>
  <img src="/assets/img/2024-10-10/1_context/2_showcase/unicorn.png" width="100%">
  <figcaption>
  GPT-4: from rhyming text to writing code for graphics. We also see a progression to better unicorn drawings with learning from feedback.
  </figcaption>
</figure>

<figure>
  <img src="/assets/img/2024-10-10/1_context/2_showcase/gemini1.png" width="100%">
  <figcaption>
  Gemini 1.5: learning a low-resource language, Kalamang
  </figcaption>
</figure>

<figure>
  <img src="/assets/img/2024-10-10/1_context/2_showcase/gemini2.png" width="100%">
  <figcaption>
  Gemini 1.5: given a movie, recognising and interpeting scenes from text description and from a hand drawing.
    </figcaption>
</figure>

<figure>
  <img src="/assets/img/2024-10-10/1_context/2_showcase/breakout.gif" width="100%">
  <figcaption>
  An early DeepMind achievement: learning to play an Atari game by Reinforcement Learning. Here we see three generations of the learnt model.
    </figcaption>
</figure>

Despite these successes - and in part because of them - the development of AI has been accompanied by growing unease about its risks. I'll discuss what these risks are later, but for the moment let's just note the open letters from the AI research commmunity that have attracted media attention over the years - including a high-profile letter in 2023 titled _Mitigating the risk of extinction from AI should be a global priority_ and signed by many leaders in the field including Geoffrey Hinton, Yoshua Bengio and Demis Hassabis among others:

<figure>
  <img src="/assets/img/2024-10-10/1_context/4_warnings/warnings.png" width="100%">
  <figcaption>
  Some open letters from the AI community – from warnings on autonomous weapons (2016), to the rights of staff with ethical concerns (2023). As well as voices for the benefits of AI to humanity.
    </figcaption>
</figure>

The main aim of this talk is to discuss the various AI risks, including those highlighted in these calls. But first I want to try to demystify a little exactly what AI is and how it works.


**2. How does it work?**

<figure>
  <img src="/assets/img/2024-10-10/2_what_is_ai/training.jpeg" width="100%">
  <figcaption>
  “A machine learning model such as a neural network is obtained by compressing a large set of training data." Image by the author with the help of <a href="https://openai.com/index/dall-e-3/" target="_blank">DALL-E3</a>.
  </figcaption>
</figure>

<figure>
  <img src="/assets/img/2024-10-10/2_what_is_ai/2021-Alan-D-Thompson-Contents-of-GPT-3-and-GPT-Neo-Pile-v1-Rev-5.png" width="100%">
  <figcaption>
  Composition of training data for GPT-3, and of 'The Pile', a data corpus used to train a number of competing LLMs. Source: <a href="https://lifearchitect.ai/models/" target="_blank">lifearchitect.ai/models/</a> 
  </figcaption>
</figure>


**3. What could go wrong?**

I'll divide the answer to this question into four categories: social harms, malicious use, cyber vulnerabilities and unintended consequences.

**Social harms of AI**

- Demographic biases in the training data sets (Stochastic Parrots)
- Energy consumption (known and understood, so cannot be classed under 'unintended consequences'!)

**Malicious use of AI**

- Misinformation
- Deepfakes
- AI generation of malware, bioweapons etc
- Autonomous weapons

**Cyber vulnerabilities of AI**

- Adversarial attacks: fooling and poisoning
- Security and explainability go hand in hand

**Unintended consequences of AI**

All technologies can have unintended consequences - especially when scaled to billions of users - and we should always ask what the side effects might be.

Example: recommender systems designed to optimise click-through rate. Based on the assumption that user preferences were fixed; but of course Internet engagement shapes users views and preferences. The process of maximising click-through rate 'learns' that the most efficient way to do this is to make the user preferneces more predictable - resulting in the polarisation of culture and politics.

<figure>
  <img src="/assets/img/2024-10-10/3_what_can_go_wrong/4_unintended_consequences/movies_news.png" width="100%">
  <figcaption>
  An algorithmic recommender system: users are profiled for their viewing preferences, allowing the system to make recommendations on the basis of what similar users have like. Source: adapted from <a href="https://www.nvidia.com/en-us/glossary/recommendation-system/" target="_blank">NVIDIA</a> 
  </figcaption>
</figure>




<figure>
  <img src="/assets/img/2024-10-10/3_what_can_go_wrong/4_unintended_consequences/hal.png" width="100%">
  <figcaption>
  
  </figcaption>
</figure>


**4. The future**

<figure>
  <img src="/assets/img/2024-10-10/4_the_future/alien_email.png" width="100%">
  <figcaption>
  An email arrives from an alien civilisation - as imagined by Stuart Russell.
  </figcaption>
</figure>



**References**


- Nick Bostrom, <a href="https://www.amazon.co.uk/Superintelligence-Dangers-Strategies-Nick-Bostrom/dp/0198739834/" target="_blank">Superintelligence: Paths, Dangers, Strategies</a>, Oxford University Press (2014) 
- Volodymyr Mnih, et al (DeepMind), <a href="https://www.nature.com/articles/nature14236" target="_blank">Human-level control through deep reinforcement learning</a>, _Nature 518, pp 529–533_ (2015)
- <a href="https://futureoflife.org/open-letter/open-letter-autonomous-weapons-ai-robotics/" target="_blank">Autonomous Weapons Open Letter: AI & Robotics Researchers</a> (2016)
- Stuart Russell, <a href="https://www.amazon.co.uk/Human-Compatible-AI-Problem-Control/dp/0241335205" target="_blank">Human Compatible: AI and the Problem of Control</a>, Allen Lane (2019)
- Stathis Kamperis, <a href="https://ekamperi.github.io/machine%20learning/2019/08/14/energy-considerations-dnn.html" target="_blank">Energy considerations for training deep neural networks</a>, _blog_ (2019)
- Kathryn Tunyasuvunakool et al (Deepmind), <a href="https://www.nature.com/articles/s41586-021-03828-1" target="_blank">_Highly accurate protein structure prediction for the human proteome_</a>, _Nature 596, pp 590–596_ (2021)
- Leo Gao et al (EleutherAI), <a href="https://arxiv.org/abs/2101.00027" target="_blank">The Pile: An 800GB Dataset of Diverse Text for Language Modeling</a>, _arxiv.org/abs/2101.00027_ (2021) 
- Emily M. Bender, Timnit Gebru, Angelina McMillan-Major, Margaret Mitchell, <a href="https://dl.acm.org/doi/10.1145/3442188.3445922" target="_blank">On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?</a>, _FAccT '21: Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency_ (2021)
- Carole-Jean Wu et al (Facebook), <a href="https://arxiv.org/abs/2111.00364" target="_blank">Sustainable AI: Environmental Implications, Challenges and Opportunities</a> _https://arxiv.org/abs/2111.00364_ (2022)
- Sébastien Bubeck, et al (Microsoft Research), <a href="https://arxiv.org/abs/2303.12712" target="_blank">Sparks of Artificial General Intelligence: Early experiments with GPT-4</a>, _https://arxiv.org/abs/2303.12712_ (2023)
- <a href="https://futureoflife.org/open-letter/pause-giant-ai-experiments/" target="_blank">Pause Giant AI Experiments: An Open Letter</a> (March 2023)
- <a href="https://www.safe.ai/work/statement-on-ai-risk#open-letter" target="_blank">Mitigating the risk of extinction from AI should be a global priority</a>, _open letter_ (May 2023)
- <a href="https://www.bcs.org/sign-our-open-letter-on-the-future-of-ai/" target="_blank">AI open letter to UK Government and Industry</a>, _BCS The Chartered Institute for IT_ (July 2023)
- Ljubisa Bojic, <a href="https://sciencedirect.com/science/article/pii/S0016328724000661" target="_blank">AI alignment: Assessing the global impact of recommender systems</a>, _Futures_ 160 (2024)
- Gemini Team Google, <a href="https://arxiv.org/abs/2403.05530" target="_blank">Gemini 1.5: Unlocking multimodal
understanding across millions of tokens of
context</a>, _https://arxiv.org/abs/2403.05530_ (2024)
- <a href="https://righttowarn.ai/" target="_blank">A Right to Warn about Advanced Artificial Intelligence</a>, _open letter_ (June 2024)
