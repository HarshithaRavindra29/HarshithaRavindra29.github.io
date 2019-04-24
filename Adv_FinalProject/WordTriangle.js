var Main_wordcloud = {
    "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
    "description": "Tweet",
    "data": {
        "url": "./word_triangle.csv",
        "format": {
            "type": "csv"
        }
    },
    "width": 600,
    "height": 450,
    "config": {
        "background": "white"
    },
    "layer": [{
        "transform": [{
            "filter": {
                "field": "numtotal",
                "gt": 70
            }
        }],

        "mark": {
            "type": "circle",
            "opacity": 0.4
        },
        "encoding": {
            "x": {
                "field": "X",
                "type": "quantitative",
                "axis": {
                    "title": null,
                    "grid": false,
                    "labels": false,
                    "ticks": false
                }
            },
            "y": {

                "field": "Y",
                "type": "quantitative",
                "axis": {
                    "title": null,
                    "grid": false,
                    "labels": false,
                    "ticks": false
                }
            },
            "color": {
                "field": "color_coded",
                "type": "nominal",
                "legend": null
            },
            "size": {
                "field": "size",
                "type": "quantitative",
                "scale": {
                    "range": [0, 3000]

                },
                "legend": null
                    /*{
                        "title": "Total tweets",
                        "field": "numtotal"
                    },*/
            },
            "tooltip": [{
                "field": "word",
                "type": "nominal"
            }, {
                "field": "numtotal",
                "type": "quantitative",
                "title": "Total"
            }, {
                "field": "numNaMo",
                "type": "quantitative",
                "title": "NaMo"
            }, {
                "field": "numRaGa",
                "type": "quantitative",
                "title": "RaGa"
            }, {
                "field": "numDidi",
                "type": "quantitative",
                "title": "Didi"
            }],
        }
    }, {
        "transform": [{
            "filter": {
                "field": "numtotal",
                "gt": 150
            }
        }],
        "mark": "text",
        "encoding": {
            "x": {
                "field": "X",
                "type": "quantitative"
            },
            "y": {

                "field": "Y",
                "type": "quantitative"
            },
            "text": {
                "field": "word",
                "type": "nominal",
                // bold , limit not working
                "fontWeight": 700,
                "limit": 1
            },
            "color": {
                "field": "Max_used_by",
                "type": "nominal",
                "legend": null
            }
        }
    }]
}
vegaEmbed('#vis3', Main_wordcloud);