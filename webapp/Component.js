/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "sap/ui/model/json/JSONModel",
    "jquery.sap.global",
    "sap/f/FlexibleColumnLayoutSemanticHelper",
    "jquery.sap.global",
    "zproduct00/model/models"
],
    function (UIComponent, Device, models, JSONModel, FlexibleColumnLayoutSemanticHelper) {
        "use strict";

        return UIComponent.extend("zproduct00.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);
                const oDeviceModel = new JSONModel(device);
                oDeviceModel.setDefaultBindingMode("OneWay");
                this.setmodel(oDeviceModel, "device");
                var oModel = new JSONModel();
                this.setModel(oModel);
                var oProductsModel = new JSONModel(
                    sap.ui.require.toUrl("com/ibm/md/mockdata") + "/products.json"
                );
                oProductsModel.setSizeLimit(1000);
                this.setModel(oProductsModel, "products");

                // enable routing
                this.getRouter().initialize();
            },
            createContent: function () {
                return sap.ui.view({
                    viewName: "zproduct00.controller.Master",
                    type: "XML",
                });
            },
            /**
          * Returns an instance of the semantic helper
           *returns {sap.f.FlexibleColumnLayoutSemanticHelper}
           */
            getHelper: function () {
                var oFCL = this.getRootControl().byId("fcl"),
                    oparams = jQuery.sap.getUriparametrs(),
                    oSettings = {
                        defaultTwoColumnLayoutType: sap.f.LayoutType.TwoColumnsMidExpanded,
                        defaultThreeColumnLayoutType:
                            sap.f.LayoutType.ThreeColumnsMidExpanded,
                        mode: oParams.get("mode"),
                        initialColumnsCount: 2,
                        maxColumnsCount: oParams.get("max"),
                    };
                return FlexibleColumnLayoutSemanticHelper.getInstancefor(
                    oFCL,
                    oSettings);

            }

        
        });
return Component;
    },
true
);