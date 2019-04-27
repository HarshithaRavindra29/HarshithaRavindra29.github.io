var Main_wordcloud_bl = {
    "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
    "description": "Tweet",
    "data": {
        "url": "./word_triangle.csv",
        "format": {
            "type": "csv"
        }
    },
    "width": 600,
    "height": 400,
    "config": {
        "background": "black"
    },
    "layer": [{
        "transform": [{
            "filter": {
                "field": "numtotal",
                "gt": 40
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
                "field": "word",
                "oneOf": ["modi", "rahul", "nation", "india", "death", "people", "govt", "thank",
                    "congress", "bjp", "rafale", "deal", "wish", "http", "country", "family", "team", "effort",
                    "sector", "towards", "development", "condolences", "women", "children", "chowkidar"
                ]
            }
        }],
        "mark": {
            "type": "text",
            "align": "center",
            "baseline": "bottom",
            //"dx": 10,
            //"dy": 3
        },
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
            "color": { "value": "white" }
            /* {
                "field": "Max_used_by",
                "type": "nominal",
                "legend": null
            } */
        }
    }]
}
vegaEmbed('#vis4', Main_wordcloud_bl);