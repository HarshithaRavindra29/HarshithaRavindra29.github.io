var tweet_month_count = {
    "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
    "description": "Tweet",
    "data": {
        "url": "./To_viz_tweets.csv",
        "format": {
            "type": "csv"
        }
    },
    "hconcat": [{
            "width": 600,
            "height": 300,
            "mark": "line",
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
            "encoding": {
                "x": {
                    "timeUnit": "yearmonth",
                    "field": "date_time",
                    "type": "temporal",
                    "axis": {
                        "title": "Period"
                    }

                },
                "y": {
                    "aggregate": "count",
                    "field": "Tweets",
                    "type": "quantitative",
                    "axis": {
                        "title": "Number of Tweets"
                    }
                },
                "color": {
                    "field": "Name",
                    "type": "nominal"
                }
            }
        },
        {
            "width": 100,
            "height": 300,
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
                        "title": "Total Favourited"
                    }
                },
                "color": {
                    "field": "Name",
                    "type": "nominal"
                }
            }
        },
    ]
}
vegaEmbed('#vis', tweet_month_count);