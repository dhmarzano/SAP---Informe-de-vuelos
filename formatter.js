sap.ui.define([	"sap/ui/core/library" ], function (coreLibrary) {
    "use strict";
    
    // shortcut for sap.ui.core.ValueState
	var ValueState = coreLibrary.ValueState;
    
    return {
		/**
		 * Rounds the number unit value to 2 digits
		 * @public
		 * @param {string} sValue the number string to be rounded
		 * @returns {string} sValue with 2 digits rounded
		 */
        numberUnit: function (sValue) {
            if (!sValue) {
                return "";
            }
            return parseFloat(sValue).toFixed(2);
        },
        date: function (sValue) {
            var today = new Date(),
                dd = today.getDate(),
                mm = today.getMonth() + 1,
                yyyy = today.getFullYear();
            return sValue = (dd + '.' + mm + '.' + yyyy);
        },
        quantityState: function (iValue) {
            if (iValue === 0) {
                return ValueState.Error;
            } else if (iValue > 100) {
                return ValueState.Warning;
            } else {
                return ValueState.Success;
            }
        }
    };

});