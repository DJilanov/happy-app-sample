(function(window, undefined) {
  var dictionary = {
    "13240af0-13c0-4cc7-93d9-902c712104a5": "New device",
    "45eb01c5-d9da-42a2-a08d-d3137260019b": "Second List of Products",
    "70bb128e-46f2-4626-8d71-4815e1caf146": "Loading screen",
    "0753223c-98c8-408f-8d48-c995cf61e5fa": "View product alert",
    "26ff0418-1394-46f5-a68e-d4da2243ae8a": "Main Screen",
    "88dfb81f-8382-4755-a7fd-b9c39c41f65a": "Product view",
    "d04d0931-a344-4d08-8262-df4d56843c80": "Camera",
    "4f20b5af-e352-4f0d-93b2-918dbd0cb7c1": "Edit device",
    "95adc887-3e85-4566-95d6-d7b6077c8c85": "Login",
    "a78632eb-fc15-4eb1-a883-94b15ff54b8f": "View product message",
    "6c57dc4e-7cfd-45fe-86ad-bb405ce4cfda": "List of products",
    "f51250c9-f8db-4dfb-b88c-954024739358": "Chat",
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