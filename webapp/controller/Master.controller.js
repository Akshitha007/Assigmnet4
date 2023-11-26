sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/Sorter",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel,Filter,FilterOperator,Sorter,MessageBox) {
        "use strict";

        return Controller.extend("zproduct00.controller.Master", {
            onInit: function () {
                this.oRouter = this.getOwnerComponent().getRouter();
                this._bDescendingSort = false;
            },
            onListItemPress:function(oEvent){
                var oNextUIState = this.getOwnerComponent().getHelper()
            }
        });
    });
