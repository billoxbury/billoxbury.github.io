---
title:  "How to code interactive graphics with R shiny"
date:   2023-03-07
categories: data_science
blurb: >- 
    Behind the scenes of the blog 'A Topological Trick for Data Visualisation'
header:
  teaser: "/assets/img/2023-03-07/shiny-app.png"
---

<a href="https://billox.shinyapps.io/zip-topological-viz/" target="_blank"><img src="/assets/img/2023-03-07/shiny-app.png" width="100%"></a>

My earlier blog <a href="https://billoxbury.github.io/data_science/topological-trick-for-data-visualisation/" target="_blank">A Topological Trick for Data Visualisation</a> described Carlsson's <i>mapper</i> construction, that offers a good graph representation of a high-dimensional point cloud. I offered a fancy interactive demo of <i>mapper</i> on the Zip data set of hand-written digits – shown in the graphic above and linked to it. 

In that blog, I focussed on the mathematical idea behind <i>mapper</i> and said nothing about how the demo worked. In this blog, I want to say a little bit about the <a href="https://shiny.rstudio.com/" target="_blank">R shiny</a> code behind the demo, in order to make it a bit more reproducible for interested readers.

For those already familiar with R, <i>shiny</i> provides a very easy way to build interactive graphics using the R language. There are lots of good tutorials to be found, so all I'll say by way of introduction is that a <i>shiny</i> application is basically defined by two functions <i>shinyUI()</i> and <i>shinyServer()</i>, usually saved in their own source files <i>UI.R</i> and <i>server.R</i>. A first example to look at is <a href="https://shiny.rstudio.com/gallery/example-01-hello.html" target="_blank">Hello Shiny!</a>.

So, with that said, the UI code for the fancy <i>mapper</i> demo is simply the following:

{% highlight R %}

shinyUI(fluidPage(
  
  titlePanel("A topological trick for data visualisation"),
  sidebarLayout(
    position = "right",
    sidebarPanel(
      sliderInput("nbins", 
                  label = "Resolution (nr bins):",
                  min = 1, max = 50, value = 10),
      sliderInput("klevel", 
                  label = "Resolution (heirarchical cluster k):",
                  min = 1, max = 20, value = 10),
      numericInput("obsvertex", 
                   label = "Sample vertex:", 
                   value = 1),
      plotOutput("digitview")
      ),
    mainPanel(  
      plotOutput("graphview")
      )
    )
  )
)

{% endhighlight %}

This says that there's a side panel with some controls plus a plot output <i>"digitview"</i>, and a main panel with another plot output <i>"graphview"</i>. These two plot outputs will be defined in the server file, which we'll look at in a moment. 

Besides these two outputs, we also see three <i>"input"</i>s in the sidebarpanel. These define variables (for example <i>input$nbins</i>) that are picked up from the UI and used by the server function. This repeats the pattern you see in the <a href="https://shiny.rstudio.com/gallery/example-01-hello.html" target="_blank">Hello Shiny!</a> app.

So next, the server file:

{% highlight R %}

source("helpers.R")  # stores some functions needed below

load(data)           # the Zip data

shinyServer(

  function(input, output) {
        
    # build clusters:
    cluster.set <- reactive({
      make.clusters(data, 
                    input$nbins, 
                    input$klevel)
    })
    mg <- reactive({
      mapper.graph(cluster.set())
    })
    
    # outputs:
    output$graphview <- renderPlot({
      show.graph(mg(), 
                cluster.set(), 
                v = input$obsvertex)
    })
    output$digitview <- renderPlot({
      show.digits(cluster.set(), 
                  input$obsvertex)
    })
  }
)

{% endhighlight %}

Again, the structure is simple. Starting at the bottom of this code, the two outputs <i>"digitview"</i> and  <i>"graphview"</i> are defined. Each of these calls <i>renderPlot()</i>, which gives a reactive version of some plotting code for passing to the server output that gets picked up by the UI. 

For the two cases, the plotting code is defined by functions <i>show.graph()</i> and <i>show.digits()</i> – which I've defined in a source file <i>'helpers.R'</i>, and I'll come to in a moment.

These two functions depend on the data clusters, and the graph structure on these clusters, as I've described conceptually in the <a href="https://billoxbury.github.io/data_science/topological-trick-for-data-visualisation/" target="_blank">previous blog</a>. And they depend on these via the user inputs <i>nbins, klevel, obsvertex</i>. These variables change in response to the UI controls, so the functions <i>mg(), cluster.set()</i> are defined to be 'reactive' – that is, to link in real time to the input variables.

At this point you can see that the work of implementing the construction I described in the <a href="https://billoxbury.github.io/data_science/topological-trick-for-data-visualisation/" target="_blank">previous blog</a> is wrapped up in the functions <i>make.clusters()</i>, <i>mapper.graph()</i>, <i>show.graph()</i> and <i>show.digits()</i>. I won't go into all of these in gory detail. The reader should get the idea of the first two from the previous blog.

But I will say a bit about <i>show.graph()</i>, as this uses the excellent library <a href="https://igraph.org/" target="_blank">igraph</a> and the reader may or may not be familiar with this. 


{% highlight R %}

show.graph <- function(g, cset, v=-1){
  
  # connected components of igraph object g
  cc <- clusters(g)

  # edge parameters
  E(g)$color <- "grey"
  E(g)$width <- 1
  E(g)$arrow.mode <- 0
  E(g)$curved <- FALSE

  # vertex - size by cluster size
  V(g)$label.cex <-  0.3*(1 + log(sapply(cset, length)))
  V(g)$size <- 6 * V(g)$label.cex

  # vertex label by most common digit in the cluster
  V(g)$label <- ""
  V(g)$label <- sapply(V(g), function(v){ 
    tmp <- y[cset[[v]]];
    names(sort(-table(tmp)))[1]
  })
  
  # vertex - colour by connected component
  V(g)$color <- "white"
  V(g)$frame.color <- cc$membership 
  V(g)$label.color <- cc$membership 
  
  # highlight the selected base vertex
  if(v > 0){ V(g)$color[v] <- "orange" }
  
  # output igraph plot
  plot(g)
}

{% endhighlight %}


The function takes inputs a graph <i>g</i> (an <i>igraph</i> object), a cluster set (of vertex indices) <i>cset</i> and a selected vertex <i>v</i> (set as -1, or 'none' by default). It outputs a plot that looks like:


<img src="/assets/img/2023-03-07/zip2.png" width="100%">