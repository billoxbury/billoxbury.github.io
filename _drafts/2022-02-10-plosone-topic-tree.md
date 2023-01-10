---
title:  "Navigating the PLOS ONE topic tree"
date:   2022-02-10
categories: data_science
usemathjax: true

gallery1:
  - image_path: /assets/img/2022-02-10/compsci_count.png
  - image_path: /assets/img/2022-02-10/compsci_topics.png
---

<img src="/assets/img/2022-02-10/browse_topics.png" width="100%">

PLOS ONE is a respected multidisciplinary journal publishing research from

> over two hundred subject areas across science, engineering, medicine, and the related social sciences and humanities. 

But exactly **how many** subject areas?

At the top level (as shown in the screenshot above), these subject areas fall under eleven headings from _Biology and life sciences_ to _Social sciences_. For each of these headings – such as _Computer and information sciences_ below - we are told the number of articles (in this case 32,397) and can browse further subheadings: 

{% include gallery id="gallery1" %}

This post is about a pleasant exercise I set myself, to scan the entire tree of PLOS ONE topics, asking: 

1. how does one extract and represent this tree?
2. are the article counts per topic _consistent_ e.g. in the sense that each count is the sum of the counts at the leaves of the corresponding subtree?

Visually, the result of the analysis is plots such as the following (the topic trees of some of the top-level headings):

<embed
    src="/assets/img/2022-02-10/seven_trees.pdf"
    type="application/pdf"
    frameBorder="0"
    scrolling="auto"
    height="100%"
    width="100%"
>

<br>
The starting task was to crawl the PLOS ONE pages. To do this, we initialise a data frame (I'll use Python-like pseudocode throughout - most of this exercise was actually done in R):


{% highlight python %}

topic_tree_df = DataFrame('node' = 1,
                          'parent' = 1, 
                          'topic' = "",
                          'parent_topic' = "", 
                          'count' = None)

{% endhighlight %}

... and perform the following breadth-first search:

{% highlight python %}

browse_url = "https://journals.plos.org/plosone/browse/"
index = 1

while index <= nrow(topic_tree_df):
  this_topic = topic_tree_df[index, 'topic']
  url = browse_url + this_topic
  topic_tree_df[index, 'count'] = find_count(url)    # read HTML
  next_batch = find_children(url)                      # read HTML    
  for child in next_batch:
    topic_tree_df.add_row('node' = row.index
                          'parent' = index, 
                          'topic' = child,
                          'parent_topic' = this_topic
                          'count' = None
                          )
  index += 1

{% endhighlight %}

In this code, the functions <tt>find_count()</tt> and <tt>find_children()</tt> parse the HTML of the currently visited topic page and extracts the count and subtopics respectively. (For this I use the library _rvest_ in R.)

The code generates a data frame with (as of 9 Feb 2022) a total of 16,721 rows (topics). From this data frame we can read off any tree statistics - for example the node count by depth:

<img src="/assets/img/2022-02-10/count_by_depth.png" width="100%">

To illustrate the data frame, the following slice is the part of the tree below node 49, <i>sports_science</i>. (This is an example of a _clade_: a subtree that exactly consists of one node and all its descendants:)

<img src="/assets/img/2022-02-10/sports_tree0.png" width="100%">

<img src="/assets/img/2022-02-10/sports_tree1.jpg" width="100%">

The first thing to note is that the article counts (as read off from the PLOS ONE topic pages) are not in any sense consistent! (Question 2 at the top of this post.)



{% highlight python %}

def newickR(tree_df, j):
    out = ""
    if exist children(j):
        out = "("                           # open bracket
        for i in children(tree_df, j):      # insert commas-separated child strings
            out += newickR(tree_df, i) + ','
        if out[-1] == ',':                  # remove final comma
            out = out[:-1]
        out += ')'                          # close bracket
    out += tree_df[j,'topic']               # append parent string
    return out

{% endhighlight %}

blah, blah, blah ...

{% highlight python %}

> newickR(node_df, 0)
  '(sports,((aerobic_exercise,strength_training)exercise)sports_and_exercise_medicine)sports_science'

{% endhighlight %}
