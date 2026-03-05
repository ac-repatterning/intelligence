---
icon: lucide/octagon-alert
---

#  risk

Herein, we consider risk vis-à-vis <i>weighted rates of change</i> of river levels.  The artefacts outline the weighted rates of change of river levels within the vicinity of a gauge point.  Per gauge station, the <a href="https://d3shei3jylo2wo.cloudfront.net/src/caution/curves.html" onclick="window.open('https://d3shei3jylo2wo.cloudfront.net/src/caution/curves.html', 'newwindow', 'width=1325,height=695'); return false;">weighted rates of change curves</a> illustrate weighted rates of change over time.

<br>

## artefacts

### GRAPHS & TABLES

**During a weather warning period beware** of the values towards the right-hand-side of each graph; especially the latest (mm/hr) values.

* **increases**: These have the highest positive-weighted-rate-of-change values. The higher a gauge station's weighted-river-level-change value is <span style="color: #808080;">- within a 15-minute or 1-hour period -</span> the greater the risk of a problem in the vicinity.<br><br> <span style="margin-left: 85px;"> :fontawesome-brands-think-peaks:{ .lg .middle } &nbsp; <a href="https://d3shei3jylo2wo.cloudfront.net/src/caution/graphs-increases.html" onclick="window.open('https://d3shei3jylo2wo.cloudfront.net/src/caution/graphs-increases.html', 'newwindow', 'width=1325,height=695'); return false;">increases</a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; :fontawesome-solid-table-cells:{ .lg .middle } &nbsp; <a href="https://d3shei3jylo2wo.cloudfront.net/src/caution/cells-increases.html" onclick="window.open('https://d3shei3jylo2wo.cloudfront.net/src/caution/cells-increases.html', 'newwindow', 'width=1325,height=695'); return false;">table</a></span><br><br>
  
* **decreases**: These indicate negative-weighted-rate-of-change values. Do high negative values indicate a problem?<br><br> <span style="margin-left: 85px;"> :fontawesome-brands-think-peaks:{ .lg .middle } &nbsp; <a href="https://d3shei3jylo2wo.cloudfront.net/src/caution/graphs-decreases.html" onclick="window.open('https://d3shei3jylo2wo.cloudfront.net/src/caution/graphs-decreases.html', 'newwindow', 'width=1325,height=695'); return false;">decreases</a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; :fontawesome-solid-table-cells:{ .lg .middle } &nbsp; <a href="https://d3shei3jylo2wo.cloudfront.net/src/caution/cells-decreases.html" onclick="window.open('https://d3shei3jylo2wo.cloudfront.net/src/caution/cells-decreases.html', 'newwindow', 'width=1325,height=695'); return false;">table</a></span>

<br>

??? note "Extra Notes"
    
    **Graphs:**<br>Hovering over a legend-catchment-name will bring the catchment's gauge station points into focus. To disable a catchment's points, click on its legend name.
    
    **Weighted Rate of Change Values:**<br>Per gauge station series, weighted-rate-of-change values are calculated for contiguous 1-hour-blocks across a specified time span; currently $\approx 9$ days.  During a 9-day time span there are approximately<br><br>

    <ul>
      <li>$9 \: days \times 24 \: hours \times 1^{-1} = 216 \: $ &Larr; 1-hour-blocks</li>
    </ul>

    The graphs illustrate the maximum & latest weighted-rate-of-change value per gauge station, vis-à-vis blocks and time span; the unit of measure is millimetres/hour (mm/hr).

<br>

### MAPS
 
Within these maps the <i>N</i> catchments that have the highest positive latest-millimetres-per-hour values are displayed by default, more can be enabled/disabled via the control.  The maps have different backgrounds, as their names indicate; everything else is the same.  **Note**, black gauge station markers denote positive latest-millimetres-per-hour values, wine gauge station markers denote the converse.

<div class="grid cards" markdown>

-   :fontawesome-solid-earth-europe:{ .lg .middle } __VML SPM RASTER ORDNANCE SURVEY__

    ---

    <a data-preview href="https://d3shei3jylo2wo.cloudfront.net/warehouse/caution/maps/vml-spm-f-raster-ordnance-survey.html" onclick="window.open('https://d3shei3jylo2wo.cloudfront.net/warehouse/caution/maps/vml-spm-f-raster-ordnance-survey.html', 'newwindow', 'width=1325,height=695'); return false;">A VML SPM Raster Ordnance Survey Map Background</a>


-   :fontawesome-solid-earth-europe:{ .lg .middle } __ESRI__

    ---

    <a href="https://d3shei3jylo2wo.cloudfront.net/warehouse/caution/maps/esri.html" onclick="window.open('https://d3shei3jylo2wo.cloudfront.net/warehouse/caution/maps/esri.html', 'newwindow', 'width=1325,height=695'); return false;">An ESRI Map Background</a>

-   :fontawesome-solid-earth-europe:{ .lg .middle } __OPEN STREET__

    ---

    <a data-preview href="https://d3shei3jylo2wo.cloudfront.net/warehouse/caution/maps/open-street-map.html" onclick="window.open('https://d3shei3jylo2wo.cloudfront.net/warehouse/caution/maps/open-street-map.html', 'newwindow', 'width=1325,height=695'); return false;">An Open Street Map Background</a>


-   :fontawesome-solid-earth-europe:{ .lg .middle } __MM SPM ORDNANCE SURVEY__

    ---

    <a data-preview href="https://d3shei3jylo2wo.cloudfront.net/warehouse/caution/maps/mm-spm-ordnance-survey.html" onclick="window.open('https://d3shei3jylo2wo.cloudfront.net/warehouse/caution/maps/mm-spm-ordnance-survey.html', 'newwindow', 'width=1325,height=695'); return false;">A MM SPM Ordnance Survey Map Background</a>

</div>

<br>
<br>

## Weighted Rates of Change

Let

$$\mathcal{l}_{t}, \: \mathcal{l}_{t - \tau}, \: \mathcal{l}_{t - 2\tau}, \: \mathcal{l}_{t - 3\tau}, \: \ldots$$


represent the time series of a gauge's river level measures, separated by $\tau$ hours, and unit of measure &Rarr; millimetres. Then the weighted-rate-of-change, w.r.t. each $\tau$ hours interval, is


$$r_{t - i\tau} = \frac{1}{\tau} \bigl(\mathcal{l}_{t - i\tau} - \mathcal{l}_{t - (i + 1)\tau}\bigr) \times \frac{1}{\mathcal{l}_{t - (i + 1)\tau}} \bigl(\mathcal{l}_{t - i\tau} - \mathcal{l}_{t - (i + 1)\tau}\bigr) $$

wherein

* $i = 0, 1, 2, 3, \ldots$
* $t\:$ is a/the current time point.
* $r_{t - i\tau}\:$ is the rate of change at time point $t - i\tau$, and its unit of measure is millimetres/hour.

Noting that

$$\frac{1}{\mathcal{l}_{t - (i + 1)\tau}} \bigl(\mathcal{l}_{t - i\tau} - \mathcal{l}_{t - (i + 1)\tau}\bigr)$$

determines the relative river level change w.r.t. consecutive river level values, i.e., values that are $\tau$ hours apart.


<br>
<br>

<br>
<br>

<br>
<br>

<br>
<br>
