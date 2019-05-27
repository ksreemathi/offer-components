import React from "react";
import ReactDOM from "react-dom";

import OfferTableView from "./offer/views/OfferTableView";
import OffersModel from "./offer/model/OffersModel";
import OffersManager from "./offer/OffersManager";

import Context from "./helpers/Context";

export function createContext(data) {
    return new Context(data);
}

export function createOffersManager({offersData, context}) {
  return new OffersManager(offersData, context);
}

export function launchOfferTable(offersManager, renderIntoElementWithId) {
    ReactDOM.render(
        <OfferTableView offersManager = {offersManager}/>,
        document.getElementById(renderIntoElementWithId)
    );
}