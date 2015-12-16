jQuery("#simulation")
  .on("click", ".s-6451e4a9-67f9-4919-a42e-daec20fb04d1 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/26131b85-28d4-4095-a4b4-5c055969aa2f"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/0944687f-100c-4ebb-90a4-8daa19d6e7bb"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("click", ".s-6451e4a9-67f9-4919-a42e-daec20fb04d1 .toggle", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-checkbox-on-light_9")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimSetValue",
                    "parameter": {
                      "target": "#s-checkbox-on-light_9",
                      "value": ""
                    },
                    "exectype": "serial",
                    "delay": 0
                  },
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-6451e4a9-67f9-4919-a42e-daec20fb04d1 #s-checkbox-on-light_9": {
                        "attributes": {
                          "font-size": "10.0pt",
                          "font-family": "materialdesignjim-Regular,Arial"
                        }
                      }
                    },{
                      "#s-6451e4a9-67f9-4919-a42e-daec20fb04d1 #s-checkbox-on-light_9 .valign": {
                        "attributes": {
                          "vertical-align": "middle",
                          "text-align": "left"
                        }
                      }
                    },{
                      "#s-6451e4a9-67f9-4919-a42e-daec20fb04d1 #s-checkbox-on-light_9 span": {
                        "attributes": {
                          "color": "#8AD9D2",
                          "text-align": "left",
                          "text-decoration": "none",
                          "font-family": "materialdesignjim-Regular,Arial",
                          "font-size": "10.0pt"
                        }
                      }
                    } ],
                    "exectype": "serial",
                    "delay": 0
                  }
                ]
              }
            ],
            "exectype": "serial",
            "delay": 0
          }
        ];
        jEvent.launchCases(cases);
      }
    }
  });