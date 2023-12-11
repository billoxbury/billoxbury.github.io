var store = [{
        "title": "Exploring a computer network from its netflow traffic I",
        "excerpt":"This blog takes a look at (part of) a data set released a few years ago by Los Alamos US National Labs [1]. There are five files in all, consisting of anonymised netflow, DNS records, authentication events, Windows process and red-team events on the lab’s internal network. In this first...","categories": ["data_science"],
        "tags": [],
        "url": "/data_science/lanl-netflow-1/",
        "teaser": "/assets/img/2018-07-01/netflow.png"
      },{
        "title": "Exploring a computer network from its netflow traffic II",
        "excerpt":"In the previous post I showed a visualisation of 10,000 computers as points in the plane, on the basis of their profiles of port and protocol usage. This second post has two motivations (and I hope they won’t trip over each other). The first is unfinished business from the first...","categories": ["data_science"],
        "tags": [],
        "url": "/data_science/lanl-netflow-2/",
        "teaser": "/assets/img/2018-08-01/lanl_drl.jpg"
      },{
        "title": "A topological trick for data visualisation",
        "excerpt":"How do hand-written digits arrange themselves in pixel space? The visualisation above (and the interactive version linked to it) illustrates the mapper construction described by Gunnar Carlsson in [1] — here applied to the well known ‘Zip’ data set consisting of 7,291 hand-written digits (a relative of MNIST - this...","categories": ["data_science"],
        "tags": [],
        "url": "/data_science/topological-trick-for-data-visualisation/",
        "teaser": "/assets/img/2019-07-01/zip2.png"
      },{
        "title": "A demo of the $t$-test",
        "excerpt":"This one was for my daughter, who at the time was learning about the $t$-test. The demo linked above shows how the two-sample (Welch) $t$-test works. The idea is that there are two random variables (or populations) $A$ and $B$, each normally distributed, and we want to test whether these...","categories": ["data_science"],
        "tags": [],
        "url": "/data_science/demo-of-the-ttest/",
        "teaser": "/assets/img/2019-08-01/ttest.png"
      },{
        "title": "Using topology to help visualise word vectors",
        "excerpt":"Vector embeddings are at the heart of image and language models for AI applications including image captioning, machine translation, question-answering and many more. Vector representations of data arise as a natural by-product of neural networks via the states of their internal layers. Vector representations are also inherently geometric, and invite...","categories": ["data_science"],
        "tags": [],
        "url": "/data_science/wikiwords/",
        "teaser": "/assets/img/2019-09-01/wikimap.jpg"
      },{
        "title": "Mean-squared error versus cross-entropy",
        "excerpt":"This post is about multinomial probability distributions $p = (p_1, \\ldots ,p_N)$ where $\\sum_i p_i = 1$. We often need to compare two such distributions using a ‘distance’ function $d(p,q)$. For example (and the motivation for this blog post was a recent conversation about this case), the error that gets...","categories": ["data_science"],
        "tags": [],
        "url": "/data_science/crossent/",
        "teaser": "/assets/img/2019-10-01/crossent.png"
      },{
        "title": "Watching a neural network learn a Markov chain",
        "excerpt":"Modern language models derive their power from big data and big compute – but also, ultimately, from the Unreasonable Effectiveness of Recurrent Neural Networks described by Andrej Karpathy (and many others) a decade or so ago. This post is more low-brow than Karpathy’s — I wanted to explore a little...","categories": ["data_science"],
        "tags": [],
        "url": "/data_science/rnn-learns-markov/",
        "teaser": "/assets/img/2019-11-01/ex3_3_5_2_3D_bystate.png"
      },{
        "title": "COP26: the climate crisis today",
        "excerpt":"This is the first of three blogs in which I’d like to share a few thoughts on the climate crisis and on the COP26 conference which launches in Glasgow this week. In the second blog I’ll say a bit about the figure of 1.5 degrees warming and what it means;...","categories": ["environment"],
        "tags": [],
        "url": "/environment/cop26-today/",
        "teaser": "/assets/img/2021-11-01/image1.png"
      },{
        "title": "COP26: why 1.5 degrees?",
        "excerpt":"In the 2015 Paris Agreement, countries of the world signed up to “keep the rise in average global temperature to well below 2°C above pre-industrial levels, and preferably limit the increase to 1.5°C”. This month’s COP26 summit is the last best chance for nations to agree plans of action to...","categories": ["environment"],
        "tags": [],
        "url": "/environment/cop26-why1pt5/",
        "teaser": "/assets/img/2021-11-02/image1.jpeg"
      },{
        "title": "COP26: seeing the wood for the trees",
        "excerpt":"The climate crisis poses an almost overwhelming challenge to humanity, and it is very easy to be pessimistic. But there are also some reasons to be hopeful. Many will have been inspired by Prince William’s Earthshot initiative, by the vision behind it and the passion and creativity of the finalists...","categories": ["environment"],
        "tags": [],
        "url": "/environment/cop26-nzs/",
        "teaser": "/assets/img/2021-11-03/woodfortrees1.jpg"
      },{
        "title": "Navigating the PLOS ONE topic tree",
        "excerpt":"PLOS ONE is a respected multidisciplinary journal publishing research from over two hundred subject areas across science, engineering, medicine, and the related social sciences and humanities. But exactly how many subject areas? At the top level (as shown in the screenshot above), these subject areas fall under eleven headings from...","categories": ["data_science"],
        "tags": [],
        "url": "/data_science/plosone-topic-tree/",
        "teaser": "/assets/img/2022-02-10/browse_topics.png"
      },{
        "title": "Language barriers in global conservation",
        "excerpt":"Wildlife tends not to respect national boundaries. Birds, in particular, as they migrate across and between continents, ignore not only borders but even the cultures and languages of the scientists who may be trying to study and protect them. And, surprise surprise, not all of the world’s science is written...","categories": ["environment"],
        "tags": [],
        "url": "/environment/language_barriers/",
        "teaser": "/assets/img/2023-02-22/birdclouds.jpg"
      },{
        "title": "How to code interactive graphics with R shiny",
        "excerpt":"My earlier blog A Topological Trick for Data Visualisation described Carlsson’s mapper construction, that offers a good graph representation of a high-dimensional point cloud. I offered a fancy interactive demo of mapper on the Zip data set of hand-written digits – shown in the graphic above and linked to it....","categories": ["data_science"],
        "tags": [],
        "url": "/data_science/coding-interactive-graphics/",
        "teaser": "/assets/img/2023-03-07/shiny-app.png"
      },{
        "title": "Zombie bots and neural bots",
        "excerpt":"We all know that neural networks are taking over the world. We see this in the deep learning revolution, in the wonders of deep reinforcement learning and of large language models. These advances combine Big Tech, Big Data and Big Bucks. But the underlying ideas are simple and very powerful,...","categories": ["artificial_intelligence"],
        "tags": [],
        "url": "/artificial_intelligence/zombie-bots-and-neural-bots/",
        "teaser": "/assets/img/2023-09-08/nbot-2.gif"
      },{
        "title": "Predicting the rank of an elliptic curve",
        "excerpt":"Of all the hype that attaches to machine learning these days, among the least trumpeted applications - but to my mind some of the most interesting - are those applications of machine learning to mathematics itself. In this post I want to talk about an application demonstrated in the paper...","categories": ["mathematics"],
        "tags": [],
        "url": "/mathematics/predicting-elliptic-curve-rank/",
        "teaser": "/assets/img/2023-10-27/tsne.png"
      },{
        "title": "Neural networks in single-celled organisms",
        "excerpt":"Source: University of Queensland We tend to think of biological intelligence as arising from animal nervous systems and brains. But consider this. The bacterium Escherichia coli pictured above is about 0.5 micron across. Thousands could sit in the cross-section of a human hair. Notably, 0.5 micron is about the same...","categories": ["artificial_intelligence"],
        "tags": [],
        "url": "/artificial_intelligence/wetware/",
        "teaser": "/assets/img/2023-11-15/ecoli.jpg"
      }]
