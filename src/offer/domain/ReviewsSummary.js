import {ProductType} from "../../helpers/Constants.js";

export default class ReviewsSummary {
    static reviewsSummaryForAllCardsOrBanks = { //temp change. Will have make han ajax call and retrieve this data.
        "10234": {
            "avgRating":  {
                "rating": 2.5,
                "scale": 5.0
            },
            "count" : 6897
        },
        "10235": {
            "avgRating":  {
                "rating": 3.5,
                "scale": 5.0
            },
            "count" : 10987
        },
        "10236": {
            "avgRating":  {
                "rating": 4.5,
                "scale": 5.0
            },
            "count" : 979
        }
    };

    constructor(id) {
        this.reviewsSummary = ReviewsSummary.reviewsSummaryForAllCardsOrBanks[id];
    }

    getAvgRating() {
        return this.reviewsSummary.avgRating.rating;
    }

    getScaleForAvgRating() {
        return this.reviewsSummary.avgRating.scale;
    }

    getCount() {
        return this.reviewsSummary.count;
    }

    getType() {
        return "ReviewsSummary";
    }

    static requiredValue(context) {
        return ProductType.CC.is(context.getProductType()) ? "cardId": "bankId";
    }

}