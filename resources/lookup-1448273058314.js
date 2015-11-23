(function(window, undefined) {
  var dictionary = {
    "6451e4a9-67f9-4919-a42e-daec20fb04d1": "product-new-packages screen",
    "2bbd7f47-54fa-4276-a8a2-c4a5bb30e2b1": "my classroom screen",
    "8a4897e9-b064-4cfa-b08e-6f61f2d8ba02": "Splash screen",
    "94454e73-1d07-4e86-8424-fe2eb9318ec1": "signin screen",
    "3f9bbc07-3240-4abc-82df-92c3eb2d258b": "my classroom videos screen",
    "a2822f4c-27f6-476f-a77d-5b02e490d147": "product screen",
    "26131b85-28d4-4095-a4b4-5c055969aa2f": "home screen",
    "c096e1af-0d2c-43d8-9993-a14b5098e896": "Exams screen",
    "14f025a2-6de3-4949-83e8-689235619bc2": "public home screen",
    "12f95033-51c0-4a0b-bb64-c80c715ca252": "verify screen",
    "0944687f-100c-4ebb-90a4-8daa19d6e7bb": "product-new-info screen",
    "1432c19d-c891-4d09-9d9e-a0e9b91f9494": "signup screen",
    "5f013155-d405-48e6-8f9e-8f2f91171290": "Exams-new screen",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);