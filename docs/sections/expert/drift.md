---
icon: lucide/sliders-horizontal
---

# the drift curves

<iframe style="border: 0; width: 745px; height: 625px;" src="https://d3shei3jylo2wo.cloudfront.net/src/drift/graphs.html"></iframe>

??? note "Graph Notes"
    
    The drift of each gauge's time series is quantified via (a) the Jensen-Shannon Distance $J_{dist}$, and (b) the Wasserstein Metric $W_{p}$.<br><br>
    
    The Jensen-Shannon Distance $J_{dist}$ is a measure of similarity between two distributions; the similarity between a pair of distributions increases as $J_{dist} \rightarrow 0$, $J_{dist} \in [0 \quad 1]$.<br><br>
    
    The Wasserstein Metric $W_{p}$ is akin to the cost of converting one distribution to another [<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6024256/" target="_blank">Optimal Mass Transport</a> | <a href="https://arxiv.org/pdf/1904.08994" target="_blank">From GAN to WGAN, Part 6</a>].  A rather nuanced, but important, property of the Wasserstein Metric is <a href="https://www.stat.cmu.edu/~larry/=sml/Opt.pdf" target="_blank">captured by Figure 1 of this short note about optimal transport</a>.  For identical distributions $W_{p} = 0$; $W_{p} \in [0 \quad \infty)$.<br><br>
    
    Herein, the distributions of a drift score are the data sets of two contiguous years.<br><br>


<br>
<br>

<br>
<br>

<br>
<br>

<br>
<br>
