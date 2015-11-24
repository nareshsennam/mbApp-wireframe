(function(window, undefined) {
  var dictionary = {
    "1432c19d-c891-4d09-9d9e-a0e9b91f9494": "signup screen",
    "54590d27-6cc1-402a-afff-00858538a1d3": "mentorship screen",
    "12f95033-51c0-4a0b-bb64-c80c715ca252": "verify screen",
    "8474dd47-6463-4948-972e-ceec482b8022": "mycalendar list style screen",
    "a2822f4c-27f6-476f-a77d-5b02e490d147": "product screen",
    "26131b85-28d4-4095-a4b4-5c055969aa2f": "home screen",
    "c096e1af-0d2c-43d8-9993-a14b5098e896": "Exams screen",
    "0944687f-100c-4ebb-90a4-8daa19d6e7bb": "product-new-info screen",
    "3f9bbc07-3240-4abc-82df-92c3eb2d258b": "my classroom videos screen",
    "c1fbfdf1-17e3-4b89-b798-76076a16bfb7": "mentorship bookslot screen",
    "0d622147-bce1-49d3-b52e-e2a795eafc73": "mycalendar screen",
    "75065a45-6fcf-4334-990f-ec79f0888fb5": "mentorship bookslot popup screen",
    "14f025a2-6de3-4949-83e8-689235619bc2": "public home screen",
    "6683ac94-d925-42f2-933a-e8efccaa5d97": "my classroom studyplan screen",
    "94454e73-1d07-4e86-8424-fe2eb9318ec1": "signin screen",
    "8a4897e9-b064-4cfa-b08e-6f61f2d8ba02": "Splash screen",
    "6451e4a9-67f9-4919-a42e-daec20fb04d1": "product-new-packages screen",
    "2bbd7f47-54fa-4276-a8a2-c4a5bb30e2b1": "my classroom screen",
    "5f013155-d405-48e6-8f9e-8f2f91171290": "Exams-new screen",
    "80aaf071-0ae0-4558-ab79-2229a8520378": "request studyplan screen",
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