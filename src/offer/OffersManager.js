import OffersModel from "./model/OffersModel";
import {massage} from "./domain/builder/OffersDomainData.js";

export default class OffersManager {

    constructor(context, personalizedOffersJson, staticOfferFeaturesJson) {
        const offersData = massage(personalizedOffersJson, staticOfferFeaturesJson);
        this.offersModel = new OffersModel(offersData, context);
        this.context = context;
    }
}