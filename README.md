# breakpointChange
  
breakpointChange triggers a breakpointChange Event at the window object when the screensize changes and breakpoints where crossed.
It requires jQuery and was developed for boostrap templates, when some modules are active only on special screensizes.


```javascript
    $(window).on("breakpointChange", function (e) {
        if (e.newBreakpoint == "sm") {
            console.log("you are now between 0 and 1011 px screenwith");
        }
        else {
            console.log("a big screen you have, young padawan");
        }
    });
```

You can change the breakpoints with breakpointChange.breakpoints(newBreakointList) at runtime
The breakpoints must be sorted ascending. Following breakpoints are default:

```javascript
breakpoints: {
            "sm": 0,
            "md": 1011,
            "lg": 1199
        },
```

The breapointChange event contains the keys for newBreakpoint, oldBreakpoint, the originalEvent which triggert the Change 
and some jQuery event information. 

```javascript
    {
        "newBreakpoint":newBreakpoint, 
        "oldBreakpoint":overridenBreakpoint, 
        "originalEvent":e
    }
```

breakpointChange.getCurrentBreakpoint() returns the current breakpoint


