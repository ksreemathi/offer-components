import React from "react";
import ReactDOM from "react-dom";

import OfferTableView from "./offer/views/OfferTableView";
import OffersModel from "./offer/model/OffersModel";
import OffersManager from "./offer/OffersManager";

export function createOffersManager(offersData) {
  return new OffersManager(offersData);
}

export function launchOfferTable(offersManager, renderIntoElementWithId) {
    const columns = ["Bank", "InterestRate", "ProcessingFee", "LoanAmount", "Tenure"];
    const columnHeadings = ["Bank", "Interest Rate", "Processing Fee", "Loan Amount", "Tenure"];

    ReactDOM.render(
        <OfferTableView offersManager = {offersManager} columns = {columns} columnHeadings = {columnHeadings}/>,
        document.getElementById(renderIntoElementWithId)
    );
}