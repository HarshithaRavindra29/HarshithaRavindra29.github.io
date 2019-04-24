var various_bars = {
    "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
    "description": "Tweet",
    "data": {
        "url": "./To_viz_tweets.csv",
        "format": {
            "type": "csv"
        }
    },
    "transform": [{
        "filter": {
            "field": "date_time",
            "range": [{
                "year": 2018,
                "month": "Aug"
            }, {
                "year": 2019,
                "month": "May"
            }]
        }
    }],
    "hconcat": [{
        "mark": "bar",
        "encoding": {
            "x": {
                "field": "Name",
                "type": "nominal"
            },
            "y": {
                "aggregate": "count",
                "field": "Tweets",
                "type": "quantitative",
                "axis": {
                    "title": "Number of tweets"
                }
            },
            "color": {
                "field": "Name",
                "type": "nominal"
            }
        }
    }, {
        "mark": "bar",
        "encoding": {
            "x": {
                "field": "Name",
                "type": "nominal"
            },
            "y": {
                "aggregate": "sum",
                "field": "fav_count",
                "type": "quantitative",
                "axis": {
                    "title": "Number of tweets Favourited"
                }
            },
            "color": {
                "field": "Name",
                "type": "nominal"
            }
        }
    }, {
        "transform": [{
            "filter": {
                "field": "has link",
                "equal": "Yes"
            }
        }],
        "mark": "bar",
        "encoding": {
            "x": {
                "field": "Name",
                "type": "nominal"
            },
            "y": {
                "aggregate": "count",
                "field": "has link",
                "type": "quantitative",
                "axis": {
                    "title": "Number of Links"
                }
            },
            "color": {
                "field": "Name",
                "type": "nominal"
            }
        }
    }, {
        "transform": [{
            "calculate": "datum.lang == 'en' ? 'English' : 'Other'",
            "as": "Language"
        }],
        "mark": "bar",
        "encoding": {


            "x": {
                "field": "Language",
                "type": "nominal"
            },
            "y": {
                "aggregate": "count",
                "field": "lang",
                "type": "quantitative"
            },
            "color": {
                "field": "Name",
                "type": "nominal"
            }
        }
    }]
};
vegaEmbed('#vis2', various_bars)