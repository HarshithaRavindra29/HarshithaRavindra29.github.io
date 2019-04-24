var tweet_month_count = {
    "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
    "description": "Tweet",
    "data": {
        "url": "./To_viz_tweets.csv",
        "format": {
            "type": "csv"
        }
    },
    "width": 300,
    "height": 150,
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
            "type": "temporal"

        },
        "y": {
            "aggregate": "count",
            "field": "Tweets",
            "type": "quantitative",
            //  "stack": "center"
        },
        "color": {
            "field": "Name",
            "type": "nominal"
        }
    }
}
vegaEmbed('#vis', tweet_month_count);