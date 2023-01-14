---
title:  "A word2vec map of Wikipedia words"
date:   2019-09-01
categories: data_science
usemathjax: true
header:
    teaser: /assets/img/2019-09-01/wikimap.jpg
---

<a href="https://billox.shinyapps.io/wikiwords/" target="_blank"><img src="/assets/img/2019-09-01/wikimap.jpg" width="100%"></a>

This is an update of a little exercise, a few years ago, in making my own _word2vec_ map of Wikipedia words. 

At that time, I started with 72,000 Wikipedia words and their _word2vec_ representations in 200-dimensional space. In order to visualise that cloud of points, I made a graph by first binning the point cloud (using the word frequency) and then clustering within each bin. An individual cluster became a graph vertex, and two clusters with a word in common defined an edge.

Visualisation of the point cloud then used standard force-directed graph layouts to plot the graph, followed by drilling down into vertex subsets to explore the word sets.

This post shows an alternative method for the graph layout: since the vertices correspond to clusters of points in a vector space, we can represent them by the centroids of those clusters, and then map them into the plane by using a $t$-SNE projection of the centroids.

The plot above links to an interactive demo that shows the result. I’ve suppressed drawing of the edges because they are often long-range and less helpful to the eye. (Though they are meaningful: they represent the many words which inhabit multiple semantic communities.) This view is better at revealing natural large-scale clusters in the data — which is what we really want. For example, along the bottom edge of the plot there are four main clusters, which are roughly foodie, zoological, biochemical and medical. (And I wiled away a train journey annotating the plot above with the different semantic regions!)

The colour denotes word frequency: white for common words to red for rare words.
