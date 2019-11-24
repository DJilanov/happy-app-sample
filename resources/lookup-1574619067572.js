(function(window, undefined) {
  var dictionary = {
    "88dfb81f-8382-4755-a7fd-b9c39c41f65a": "Product view",
    "6c57dc4e-7cfd-45fe-86ad-bb405ce4cfda": "List of products",
    "95adc887-3e85-4566-95d6-d7b6077c8c85": "Login",
    "26ff0418-1394-46f5-a68e-d4da2243ae8a": "Main Screen",
    "d04d0931-a344-4d08-8262-df4d56843c80": "Camera",
    "13240af0-13c0-4cc7-93d9-902c712104a5": "New device",
    "70bb128e-46f2-4626-8d71-4815e1caf146": "Loading screen",
    "1e8a452c-0c3e-434b-9a69-9f88c989dab1": "Template 1",
    "default": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
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