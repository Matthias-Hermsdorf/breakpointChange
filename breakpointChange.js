/*
*
*   breakpointChange triggers a breakpointChange Event at the window when the Screensize changes and breakpoints where crossed
*   you can change the breakpointChange.breakpoints json at runtime
*   the breakpoints must be sorted ascending
*
*   the breapointChangeEvent contains the keys for newBreakpoint and oldBreakpoint and the originalEvent which triggert the Change
*
*   breakpointChange.getCurrentBreakpoint() returns the current breakpoint
 */

var breakpointChange;

(function ($) {
    "use strict";
    var that = {

        breakpoints: {
            "sm": 0,
            "md": 1011,
            "lg": 1199
        },

        oldBreakpoint:"",


        init: function () {
            $(window).on("resize orientationchange focus", function (e) { that.resize(e);} );

            // init it
            that.oldBreakpoint = breakpointChange.getCurrentBreakpoint();
        },

        resize: function (e) {

            var overridenBreakpoint = that.oldBreakpoint;
            var newBreakpoint = that.getCurrentBreakpoint(e.currentTarget.innerWidth);

            if (that.oldBreakpoint != newBreakpoint) {
                that.oldBreakpoint = newBreakpoint;

                var newEvent = jQuery.Event( "breakpointChange", {"newBreakpoint":newBreakpoint, "oldBreakpoint":overridenBreakpoint, "originalEvent":e} );
                $(window).trigger(newEvent);

            }
        },

        getCurrentBreakpoint: function (width) {

            // for public breakpointChange.getCurrentBreakpoint() and for init take the current width
            if (!width) {
                width = window.innerWidth;
            }

            var newBreakpoint;

            for (var key in that.breakpoints) {
                if ( that.breakpoints.hasOwnProperty(key)) {
                    if ( width > that.breakpoints[key]) {
                        newBreakpoint = key;
                    }
                }
            }

            return newBreakpoint;
        }
    };


    $(window).ready(function () {
        that.init();
    });

    breakpointChange = that;

}(jQuery));