(function(window, undefined) {
  var dictionary = {
    "9e386aa8-656e-4630-8b82-e78f3b685493": "QR",
    "4d106711-bd40-480a-b01e-4774e30ed78c": "Main Screen",
    "6c57dc4e-7cfd-45fe-86ad-bb405ce4cfda": "Expected repairs",
    "4153d8bd-22ea-4b0b-811a-a8cc70a4ceb1": "All products",
    "13240af0-13c0-4cc7-93d9-902c712104a5": "New device",
    "87a2045a-eba6-412b-ac80-a3a19fc50a4f": "Inventory camera",
    "5b8ae02e-09b3-4f7e-ba32-e220412eb430": "Device usability",
    "70bb128e-46f2-4626-8d71-4815e1caf146": "Loading screen",
    "afc0c54a-74f9-405a-88ba-cc6550a454bc": "Mountly repairs",
    "0753223c-98c8-408f-8d48-c995cf61e5fa": "View product alert",
    "c7b4759c-4725-46bd-8f61-101c7f5b601f": "Repair camera",
    "ae8b2c19-2212-4cfe-b7fc-863a2e478e64": "Inventory",
    "a78632eb-fc15-4eb1-a883-94b15ff54b8f": "View product message",
    "95adc887-3e85-4566-95d6-d7b6077c8c85": "Login",
    "88dfb81f-8382-4755-a7fd-b9c39c41f65a": "Product view",
    "7a4e4b28-6029-44e2-8d58-afc7eaa47916": "Repairs by months",
    "920cd32c-d16d-4fe6-b445-148afcfaf7e5": "Galery",
    "411088f4-eda5-4b42-8a29-3afc48503026": "Statistics camera",
    "76daaa3a-8bf7-4ff7-bdf1-d7d1db9ebc53": "Statistics",
    "d04d0931-a344-4d08-8262-df4d56843c80": "Camera",
    "f51250c9-f8db-4dfb-b88c-954024739358": "Chat",
    "8249be74-3a2c-42a4-bd22-27be2244f83a": "Request repair",
    "61e9b4b6-e4b8-46d2-84a6-b0e1973c7fa7": "Repair history",
    "ba32d0c8-5516-4168-adc0-361480a3b6c2": "Delayed repairs",
    "d452fd31-7569-427c-852a-3fa21f65c799": "View repair",
    "43a6f81a-5c90-47ab-8525-1f8a1c7d362a": "Compare repairs",
    "4f20b5af-e352-4f0d-93b2-918dbd0cb7c1": "Edit device",
    "8122a80f-497f-4de0-80a4-fe810e03a7f9": "Service",
    "45eb01c5-d9da-42a2-a08d-d3137260019b": "Current Repairs",
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