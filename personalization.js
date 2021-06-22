sap.ui.define(['jquery.sap.global'],
    function (jQuery) {

        "use strict";

        var PersoService = {
            oData: {
                _persoSchemaVersion: "1.0",
                aColumns: [
                    {
                        id: "demoApp-table-nameColumnTitle",
                        order: 0,
                        text: "{i18n>tableNameColumnTitle}",
                        visible: true
                    },
                    {
                        id: "demoApp-table-namePlaneType",
                        order: 1,
                        text: "{i18n>tablePlaneType}",
                        visible: true
                    },
                    {
                        id: "demoApp-table-nameMaximumSeats",
                        order: 2,
                        text: "{i18n>tableMaximumSeats}",
                        visible: true
                    },
                    {
                        id: "demoApp-table-nameOccupiedSeats",
                        order: 3,
                        text: "{i18n>tableOccupiedSeats}",
                        visible: true
                    },
                    {
                        id: "demoApp-table-Fecha",
                        order: 4,
                        text: "{i18n>tableFecha}",
                        visible: true
                    },
                    {
                        id: "demoApp-table-unitNumberColumnTitle",
                        order: 5,
                        text: "{i18n>tableUnitNumberColumnTitle}",
                        visible: true
                    }
                ]
            },
           
            getPersData: function () {
                var oDeferred = new jQuery.Deferred();
                if (!this._oBundle) {
                    this._oBundle = this.oData;
                }
                oDeferred.resolve(this._oBundle);
                // setTimeout(function() {
                // 	oDeferred.resolve(this._oBundle);
                // }.bind(this), 2000);
                return oDeferred.promise();
            },
            setPersData: function (oBundle) {
                var oDeferred = new jQuery.Deferred();
                this._oBundle = oBundle;
                oDeferred.resolve();
                return oDeferred.promise();
            },
            getResetPersData: function () {
                var oDeferred = new jQuery.Deferred();
                // oDeferred.resolve(this.oData);
                setTimeout(function () {
                    oDeferred.resolve(this.oData);
                }.bind(this), 2000);

                return oDeferred.promise();
            },

            resetPersData: function () {
                var oDeferred = new jQuery.Deferred();
                //set personalization
                this._oBundle = this.oData;
                //reset personalization, i.e. display table as defined
                //this._oBundle = null;
                oDeferred.resolve();
                // setTimeout(function() {
                // 	this._oBundle = this.oResetData;
                // 	oDeferred.resolve();
                // }.bind(this), 2000);
                return oDeferred.promise();
            },
        };
        return PersoService;
    });