---
title:  "A topological trick for data visualisation"
date:   2019-07-01
categories: data_science
---

<a href="https://billox.shinyapps.io/zip-topological-viz/" target="_blank"><img src="/assets/img/2019-07-01/zip2.png" width="100%"></a>

How do hand-written digits arrange themselves in pixel space?

The plot above (and the interactive version linked to it) illustrates the ‘mapper’ construction described in <a href="https://www.ams.org/journals/bull/2009-46-02/S0273-0979-09-01249-X/S0273-0979-09-01249-X.pdf">Gunnar Carlsson, Topology and Data, Bull Amer Math Soc 46 (2009)</a> — here applied to the well known 'Zip' data set consisting of 7,291 hand-written digits.

The original data lives in 256-dimensional (8 x 8) pixel space. The idea of the construction is to partition the data points into overlapping bins — thought of as an ‘open cover’ — and to perform heirarchical clustering within each bin. A graph is then constructed whose vertices are the resulting clusters across all bins, and whose edges say that a pair of bins has one or more points in common. In the interactive plot you can control the resolution via two variables: the number of bins and the number of clusters extracted within each bin.

How should you choose these tuning parameters? There is a trade-off between number of clusters (i.e. the number of graph vertices) and the amount of variation of digits within each cluster. You want both of these to be low.

You can test this by choosing a random vertex – the left-panel then shows a sample of images from the cluster of data points corresponding to this vertex.

So where do the bins come from? Following the topological analogy, we pull back open intervals from the real line under a suitable ‘continuous’ function. For this function, I’ve taken local density of the point cloud — measured by counting neighbouring points within a fixed radius.

There is, however, a caveat … The curse of dimension means that local density is not very sensitive in 256 dimensions. So I’ve actually performed a dimensional reduction first (down to 6 dimensions, in fact). There are various ways one can do this — I’ve used a Fiedler embedding from the nearest-neighbour graph in pixel space (but I’m brushing that under the carpet for now).
