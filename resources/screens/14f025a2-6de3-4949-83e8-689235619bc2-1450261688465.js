jQuery("#simulation")
  .on("click", ".s-14f025a2-6de3-4949-83e8-689235619bc2 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_32")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/911f21cc-97c3-4364-bc25-d878bf9b6839"
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
    } else if(jFirer.is("#s-Image_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/14f025a2-6de3-4949-83e8-689235619bc2"
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
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f7234ca8-e4ef-4ff1-b979-3a24e829d1ca"
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
    } else if(jFirer.is("#s-Label_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_12": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_12 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_12 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_13": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_13 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_13 span": {
                      "attributes": {
                        "color": "#AFEAF2",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_14": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_14 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_14 span": {
                      "attributes": {
                        "color": "#AFEAF2",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Line_6",
                    "top": {
                      "type": "movetoposition",
                      "value": "47"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "0"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_15": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_15 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_15 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_12": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_12 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_12 span": {
                      "attributes": {
                        "color": "#AFEAF2",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_13": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_13 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_13 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_14": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_14 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_14 span": {
                      "attributes": {
                        "color": "#AFEAF2",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_15": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_15 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_15 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Line_6",
                    "top": {
                      "type": "movetoposition",
                      "value": "47"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "120"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5f013155-d405-48e6-8f9e-8f2f91171290"
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
    } else if(jFirer.is("#s-Label_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_13": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_13 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_13 span": {
                      "attributes": {
                        "color": "#AFEAF2",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_12": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_12 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_12 span": {
                      "attributes": {
                        "color": "#AFEAF2",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_14": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_14 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_14 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_15": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_15 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_15 span": {
                      "attributes": {
                        "color": "#6EFECD",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Line_6",
                    "top": {
                      "type": "movetoposition",
                      "value": "47"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "240"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
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
    } else if(jFirer.is("#s-Label_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_13": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_13 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_13 span": {
                      "attributes": {
                        "color": "#AFEAF2",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_12": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_12 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_12 span": {
                      "attributes": {
                        "color": "#AFEAF2",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_15": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_15 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_15 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Line_6",
                    "top": {
                      "type": "movetoposition",
                      "value": "47"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "350"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_16": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_16 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_16 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_17": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_17 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_17 span": {
                      "attributes": {
                        "color": "#AFEAF2",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Line_7",
                    "top": {
                      "type": "movetoposition",
                      "value": "47"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "0"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_18": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_18 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_18 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_16": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_16 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_16 span": {
                      "attributes": {
                        "color": "#AFEAF2",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_17": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_17 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_17 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_18": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_18 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_18 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Line_7",
                    "top": {
                      "type": "movetoposition",
                      "value": "47"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "120"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5f013155-d405-48e6-8f9e-8f2f91171290"
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
    } else if(jFirer.is("#s-Label_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_17": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_17 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_17 span": {
                      "attributes": {
                        "color": "#AFEAF2",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_16": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_16 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_16 span": {
                      "attributes": {
                        "color": "#AFEAF2",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_18": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_18 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_18 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Line_7",
                    "top": {
                      "type": "movetoposition",
                      "value": "47"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "350"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
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
    } else if(jFirer.is("#s-Label_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_17": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_17 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_17 span": {
                      "attributes": {
                        "color": "#AFEAF2",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_16": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_16 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_16 span": {
                      "attributes": {
                        "color": "#AFEAF2",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_19": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_19 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_19 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Line_7",
                    "top": {
                      "type": "movetoposition",
                      "value": "47"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "350"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
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
    } else if(jFirer.is("#s-Label_20")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_17": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_17 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_17 span": {
                      "attributes": {
                        "color": "#AFEAF2",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_16": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_16 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_16 span": {
                      "attributes": {
                        "color": "#AFEAF2",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_20": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_20 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_20 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Line_7",
                    "top": {
                      "type": "movetoposition",
                      "value": "47"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "350"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/3cbe4ee2-c2e5-49ec-8f44-d8455214c46d"
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
    } else if(jFirer.is("#s-Label_21")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_17": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_17 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_17 span": {
                      "attributes": {
                        "color": "#AFEAF2",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_16": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_16 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_16 span": {
                      "attributes": {
                        "color": "#AFEAF2",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_21": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_21 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_21 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Line_7",
                    "top": {
                      "type": "movetoposition",
                      "value": "47"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "350"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 200
                    }
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
  .on("pageload", ".s-14f025a2-6de3-4949-83e8-689235619bc2 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_12": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_12 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_12 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_16": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_16 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-14f025a2-6de3-4949-83e8-689235619bc2 #s-Label_16 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
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
      event.data = data;
      jEvent.launchCases(cases);
    }
  });