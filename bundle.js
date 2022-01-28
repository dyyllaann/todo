/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Assistant:wght@200;300;400;500;600;700;800&family=Berkshire+Swash:wght@200;300;400;500&family=Space+Grotesk:wght@500&family=Quicksand:wght@300;400;500&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Notes: \n * Icons in the project directory and children of the Projects/Tags folder can have better margins.\n */ \n\n@media only screen and (max-width: 600px) {\n  body {\n    padding: 0;\n  }\n\n  .header {\n    display: none;\n  }\n\n  #content {\n    height: 100vh;\n  }\n}\n\n* {\n  font-family: Assistant, Geneva, Tahoma, sans-serif;\n  font-weight: 400;\n  line-height: 1.5;\n  margin: 0;\n}\n\nbody {\n  padding: 0 0.5%;\n  background: #f6f7f9;\n}\n\nbutton {\n  margin: 5px;\n  padding: 5px 10px;\n  border: 1px solid #aaa;\n  border-radius: 10px;\n}\n\ndd {\n  color: #aaa;\n  font-size: 0.85rem;\n  display: inline-block;\n  margin: 0px 20px;\n}\n\ndt {\n  padding: 0 1rem 1rem 1rem;\n  color: rgb(77, 67, 117);\n  font-family: Helvetica, Arial;\n  font-size: 0.9rem;\n  font-weight: 500;\n  line-height: 18px;\n}\n\nh1 {\n  font-family: 'Berkshire Swash', cursive;\n  font-size: 3rem;\n  color: #fff;\n  text-shadow:\n    0 1px 0 #D1C4E9, \n    0 2px 0 #9575CD, \n    0 3px 0 #673AB7, \n    0 4px 0 #512DA8, \n    0 5px 0 #311B92,\n    \n    0 6px 1px rgba(0,0,0,.1), \n    0 0 5px rgba(0,0,0,.1), \n    0 1px 3px rgba(0,0,0,.3), \n    0 3px 5px rgba(0,0,0,.2), \n    0 5px 10px rgba(0,0,0,.25), \n    0 10px 10px rgba(0,0,0,.2), \n    0 20px 20px rgba(0,0,0,.15);\n}\n\nh3 {\n  padding: 0.5em;\n  font-size: 1rem;\n  font-weight: 500;\n  color: #3d3267;\n}\n\nli {\n  list-style-type: none;\n  padding: 0.5em;\n  font-size: 1rem;\n  font-weight: 400;\n  color: #3d3267;\n}\n\n.active {\n  background-color: rgba(0,0,0,0.15);\n}\n\n.add-button {\n  color: #aaa;\n}\n\n.calendar {\n  background-color: #fff;\n  width: 17.5vw;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.color-label {\n  margin-left: 5px;\n  margin-right: auto;\n  font-size: 0.5rem !important;\n}\n\n.complete {\n  text-decoration: line-through;\n  text-decoration-color: #7864c2;\n  color: #aaa;\n}\n\n.header {\n  padding: 0 0.5%;\n  height: 10vh;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  text-align: center;\n}\n\n.icon-right {\n  font-size: 0.9rem !important;\n  margin-left: auto;\n}\n\n.main > li {\n  font-weight: 600;\n  border: 1px #eee solid;\n  border-radius: 10px;\n  background-color: #fff;\n  padding: 10px;\n  margin: 2px 0;\n}\n\n.main > li:hover {\n    background-color: #fdfdfd;\n}\n\n.main-container {\n  flex: 2;\n  margin: 0 5vw;\n}\n\n.material-icons.material-icons-outlined {\n  width: 18px;\n  height: 18px;\n  text-align: center;\n}\n\n.material-icons-outlined {\n  margin-right: 10px;\n  font-size: 18px;\n}\n\n.material-icons {\n  font-size: 18px;\n  margin-right: 7.5px;\n}\n\n.project {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n\n.project-title {\n  width: 100%;\n}\n\n.timegrid {\n  font-size: 0.75rem;\n  padding-bottom: 2.5vh;\n  color: #3d3267;\n  border-top: solid #eee 1px;\n}\n\n#add-new-project {\n  margin-left: 20.5px;\n}\n#calendarTable {\n  position: relative;\n  display: flex;\n  flex-direction: column; \n  height: 75vh;\n  width: 15vw;\n  overflow-y: auto;\n}\n\n#content {\n  box-shadow: 0 4px 8px 0 rgba( 0, 0, 0, 0.4 );\n  backdrop-filter: blur( 15px );\n  -webkit-backdrop-filter: blur( 15px );\n  background-color: #f7f8fa;\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  border-radius: 10px;\n}\n\n#content > * {\n  height: 85vh;\n}\n\n#current-time {\n  position: absolute;\n  background-color: #6444db;\n  width: 100%;\n  height: 2px;\n}\n\n#down-arrow, #left-arrow {\n  margin-left: auto;\n}\n\n#input-title {\n  width: 98%;\n  padding: 1%;\n  outline: none;\n  border: 1px solid #aaa;\n  border-radius: 10px;\n}\n\n#profile {\n  color: coral;\n  font-size: 3.5rem;\n  display: flex;\n  justify-content: center;\n  padding: 10px;\n}\n\n#projects-container {\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n#projects-container > li {\n  display: flex;\n}\n\n#projects-container > li > * {\n  margin: auto;\n}\n\n#projects-container > li > div {\n  display: block;\n  margin-left: auto !important;\n}\n\n#sidebar {\n  width: 17.5vw;\n  background-color: #fff;\n  border-top-left-radius: 10px;\n  border-bottom-left-radius: 10px;\n  min-height: 100%;\n}\n\n#sidebar > li, h3 {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n}\n\n/* #tags:last-child {\n  margin-left: auto;\n} */\n\n#tags {\n  color: #D1C4E9;\n  cursor: default;\n}\n\n#tags > span {\n  transform: rotate(90deg);\n}\n\n#task-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 500;\n  color: #aaa;\n  cursor: pointer;\n  background-color: #f7f8fa;\n  border: 1px #eee solid;\n  transition: border 0.25s ease-in, color 0.25s ease-in;\n}\n\n#task-button:hover {\n  border: 1px #6444db solid;\n  color: #6444db;\n}\n\n#user-input {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n::placeholder {\n  font-style: italic;\n}\n\n.task-button-active {\n  background-color: #fff;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Assistant:wght@200;300;400;500;600;700;800&family=Berkshire+Swash:wght@200;300;400;500&family=Space+Grotesk:wght@500&family=Quicksand:wght@300;400;500&display=swap');\n\n/* Notes: \n * Icons in the project directory and children of the Projects/Tags folder can have better margins.\n */ \n\n@media only screen and (max-width: 600px) {\n  body {\n    padding: 0;\n  }\n\n  .header {\n    display: none;\n  }\n\n  #content {\n    height: 100vh;\n  }\n}\n\n* {\n  font-family: Assistant, Geneva, Tahoma, sans-serif;\n  font-weight: 400;\n  line-height: 1.5;\n  margin: 0;\n}\n\nbody {\n  padding: 0 0.5%;\n  background: #f6f7f9;\n}\n\nbutton {\n  margin: 5px;\n  padding: 5px 10px;\n  border: 1px solid #aaa;\n  border-radius: 10px;\n}\n\ndd {\n  color: #aaa;\n  font-size: 0.85rem;\n  display: inline-block;\n  margin: 0px 20px;\n}\n\ndt {\n  padding: 0 1rem 1rem 1rem;\n  color: rgb(77, 67, 117);\n  font-family: Helvetica, Arial;\n  font-size: 0.9rem;\n  font-weight: 500;\n  line-height: 18px;\n}\n\nh1 {\n  font-family: 'Berkshire Swash', cursive;\n  font-size: 3rem;\n  color: #fff;\n  text-shadow:\n    0 1px 0 #D1C4E9, \n    0 2px 0 #9575CD, \n    0 3px 0 #673AB7, \n    0 4px 0 #512DA8, \n    0 5px 0 #311B92,\n    \n    0 6px 1px rgba(0,0,0,.1), \n    0 0 5px rgba(0,0,0,.1), \n    0 1px 3px rgba(0,0,0,.3), \n    0 3px 5px rgba(0,0,0,.2), \n    0 5px 10px rgba(0,0,0,.25), \n    0 10px 10px rgba(0,0,0,.2), \n    0 20px 20px rgba(0,0,0,.15);\n}\n\nh3 {\n  padding: 0.5em;\n  font-size: 1rem;\n  font-weight: 500;\n  color: #3d3267;\n}\n\nli {\n  list-style-type: none;\n  padding: 0.5em;\n  font-size: 1rem;\n  font-weight: 400;\n  color: #3d3267;\n}\n\n.active {\n  background-color: rgba(0,0,0,0.15);\n}\n\n.add-button {\n  color: #aaa;\n}\n\n.calendar {\n  background-color: #fff;\n  width: 17.5vw;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.color-label {\n  margin-left: 5px;\n  margin-right: auto;\n  font-size: 0.5rem !important;\n}\n\n.complete {\n  text-decoration: line-through;\n  text-decoration-color: #7864c2;\n  color: #aaa;\n}\n\n.header {\n  padding: 0 0.5%;\n  height: 10vh;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  text-align: center;\n}\n\n.icon-right {\n  font-size: 0.9rem !important;\n  margin-left: auto;\n}\n\n.main > li {\n  font-weight: 600;\n  border: 1px #eee solid;\n  border-radius: 10px;\n  background-color: #fff;\n  padding: 10px;\n  margin: 2px 0;\n}\n\n.main > li:hover {\n    background-color: #fdfdfd;\n}\n\n.main-container {\n  flex: 2;\n  margin: 0 5vw;\n}\n\n.material-icons.material-icons-outlined {\n  width: 18px;\n  height: 18px;\n  text-align: center;\n}\n\n.material-icons-outlined {\n  margin-right: 10px;\n  font-size: 18px;\n}\n\n.material-icons {\n  font-size: 18px;\n  margin-right: 7.5px;\n}\n\n.project {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n\n.project-title {\n  width: 100%;\n}\n\n.timegrid {\n  font-size: 0.75rem;\n  padding-bottom: 2.5vh;\n  color: #3d3267;\n  border-top: solid #eee 1px;\n}\n\n#add-new-project {\n  margin-left: 20.5px;\n}\n#calendarTable {\n  position: relative;\n  display: flex;\n  flex-direction: column; \n  height: 75vh;\n  width: 15vw;\n  overflow-y: auto;\n}\n\n#content {\n  box-shadow: 0 4px 8px 0 rgba( 0, 0, 0, 0.4 );\n  backdrop-filter: blur( 15px );\n  -webkit-backdrop-filter: blur( 15px );\n  background-color: #f7f8fa;\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  border-radius: 10px;\n}\n\n#content > * {\n  height: 85vh;\n}\n\n#current-time {\n  position: absolute;\n  background-color: #6444db;\n  width: 100%;\n  height: 2px;\n}\n\n#down-arrow, #left-arrow {\n  margin-left: auto;\n}\n\n#input-title {\n  width: 98%;\n  padding: 1%;\n  outline: none;\n  border: 1px solid #aaa;\n  border-radius: 10px;\n}\n\n#profile {\n  color: coral;\n  font-size: 3.5rem;\n  display: flex;\n  justify-content: center;\n  padding: 10px;\n}\n\n#projects-container {\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n#projects-container > li {\n  display: flex;\n}\n\n#projects-container > li > * {\n  margin: auto;\n}\n\n#projects-container > li > div {\n  display: block;\n  margin-left: auto !important;\n}\n\n#sidebar {\n  width: 17.5vw;\n  background-color: #fff;\n  border-top-left-radius: 10px;\n  border-bottom-left-radius: 10px;\n  min-height: 100%;\n}\n\n#sidebar > li, h3 {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n}\n\n/* #tags:last-child {\n  margin-left: auto;\n} */\n\n#tags {\n  color: #D1C4E9;\n  cursor: default;\n}\n\n#tags > span {\n  transform: rotate(90deg);\n}\n\n#task-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 500;\n  color: #aaa;\n  cursor: pointer;\n  background-color: #f7f8fa;\n  border: 1px #eee solid;\n  transition: border 0.25s ease-in, color 0.25s ease-in;\n}\n\n#task-button:hover {\n  border: 1px #6444db solid;\n  color: #6444db;\n}\n\n#user-input {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n::placeholder {\n  font-style: italic;\n}\n\n.task-button-active {\n  background-color: #fff;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Project-logic.js":
/*!******************************!*\
  !*** ./src/Project-logic.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
function Project(project, dueDate) {
  this.project = project;
  this.todos = [];
  this.dueDate = dueDate;
  this.id = crypto.randomUUID();
}

/***/ }),

/***/ "./src/Storage.js":
/*!************************!*\
  !*** ./src/Storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Storage)
/* harmony export */ });
/* harmony import */ var _Project_logic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project-logic.js */ "./src/Project-logic.js");
/* harmony import */ var _Todo_logic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todo-logic.js */ "./src/Todo-logic.js");



// Set data const
function createDefaultItems() {
  // Create empty array
  localStorage.setItem("projects", JSON.stringify([]));

  // Set default Projects
  Storage().set(new _Project_logic_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Todo List 1"));

  // Set default Task
  var testItem1 = new _Todo_logic_js__WEBPACK_IMPORTED_MODULE_1__["default"]("Welcome to TaskEasy!");
  testItem1.details.push(
    // "www.dylanjames.is",
    "www.github.com/dyyllaann",
    "← Check out the creator"
  );

  Storage().addTask(testItem1, 0);
}

function Storage() {
  const init = function () {
    if (get() == null) {
      return createDefaultItems();
    }
  }

  const getActive = function () {
    return JSON.parse(localStorage.getItem("active")) || 0;
  }

  const setActive = function (active) {
    const projects = JSON.parse(localStorage.getItem("projects"));
    // Why would I do it this way?
    for (var i in projects) {
      if (active.id == projects[i].id) {
        return localStorage.setItem("active", JSON.stringify(i));
      }
    }
    return localStorage.setItem("active", 0);
  }

  const get = function () {
    return JSON.parse(localStorage.getItem("projects" || 0));
  }

  const set = function (project) {
    this.get().push(project);
    return localStorage.setItem("projects", JSON.stringify(a));
  }

  const addProject = function (project) {
    const projects = JSON.parse(localStorage.getItem("projects"));
    projects.push(project);
    return localStorage.setItem("projects", JSON.stringify(projects));
  }

  const deleteProject = function (project) {
    let array = JSON.parse(localStorage.getItem("projects"));
    array = array.filter(function (obj) {
      return obj.id !== project.id;
    });
    return localStorage.setItem("projects", JSON.stringify(array));
  }

  const addTask = function (task) {
    const array = JSON.parse(localStorage.getItem("projects"));
    array[getActive()].todos.push(task);
    return localStorage.setItem("projects", JSON.stringify(array));
  }

  const deleteTask = function (task) {
    const array = JSON.parse(localStorage.getItem("projects"));
    array[getActive()].todos = array[getActive()].todos.filter(function (obj) {
      return obj.id !== task;
    });
    return localStorage.setItem("projects", JSON.stringify(array));
  }

  const inspect = function () {
    console.log(this.get());
  }

  const clear = function () {
    return localStorage.clear();
  }

  return { init, get, set, getActive, setActive, addProject, deleteProject, addTask, deleteTask, inspect, clear };
}

/***/ }),

/***/ "./src/Todo-logic.js":
/*!***************************!*\
  !*** ./src/Todo-logic.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Item)
/* harmony export */ });
function Item(title, dueDate) {
  this.title = title;
  this.details = [];
  this.dueDate = dueDate;
  this.id = crypto.randomUUID();
}

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _Todo_logic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todo-logic.js */ "./src/Todo-logic.js");
/* harmony import */ var _Storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Storage.js */ "./src/Storage.js");



// .remove() monkey patch
Element.prototype.remove = function () {
  this.parentElement.removeChild(this);
};
NodeList.prototype.remove = HTMLCollection.prototype.remove = function () {
  for (let i = this.length - 1; i >= 0; i--) {
    if (this[i] && this[i].parentElement) {
      this[i].parentElement.removeChild(this[i]);
    }
  }
};

// Create storage object
(0,_Storage_js__WEBPACK_IMPORTED_MODULE_1__["default"])().init();

function createUserInput() {
  const userInputDiv = document.createElement("div");
  userInputDiv.classList.add("main");
  userInputDiv.id = "user-input-container";

  const userInputLi = document.createElement("li");
  userInputLi.id = "user-input";
  
  const inputTitle = document.createElement("input");
  inputTitle.type = "text";
  inputTitle.id = "input-title";
  inputTitle.placeholder = "Enter task name...";
  userInputLi.appendChild(inputTitle);

  const buttonDiv = document.createElement("div");
  
  const inputCancel = document.createElement("button");
  inputCancel.innerText = "Cancel";
  inputCancel.onclick = function () {
    removeUserInput();
  };
  buttonDiv.appendChild(inputCancel);

  const inputSave = document.createElement("button");
  inputSave.id = "input-save";
  inputSave.innerText = "Save";

  inputSave.onclick = function () {
    if (inputTitle && inputTitle.value) {
      (0,_Storage_js__WEBPACK_IMPORTED_MODULE_1__["default"])().addTask(new _Todo_logic_js__WEBPACK_IMPORTED_MODULE_0__["default"](inputTitle.value));
      app().refresh();
      removeUserInput();
    };
  };
  buttonDiv.appendChild(inputSave);
  
  userInputLi.appendChild(buttonDiv);

  // Add keyup events
  inputTitle.addEventListener("keyup", function (event) {
    const inputSave = document.getElementById("input-save"); 
    const inputCancel = document.getElementById("input-cancel");
    if (event.keyCode === 13) {
      event.preventDefault();
      inputSave.click();
    } else if (event.keyCode === 27) {
      event.preventDefault();
      inputCancel.click();
    }
  });
    
  userInputDiv.appendChild(userInputLi);
  
  main.children[3].insertAdjacentElement("afterBegin", userInputDiv);
}

function removeUserInput() {
  document.getElementById("user-input-container").remove();
}

function createMain() {
  // Create main TASKS section
  const mainContainer = document.createElement("div");
  mainContainer.classList.add("main-container");
  mainContainer.id = "main";
  content.appendChild(mainContainer);

  // Add "Tasks" title DIV
  const titleDiv = document.createElement("div");
  titleDiv.classList.add("main");
  {
    const mainTitle = document.createElement("h3");
    mainTitle.innerText = "Tasks";
    titleDiv.appendChild(mainTitle);
  }
  mainContainer.appendChild(titleDiv);

  // Add default message
  const defaultMessage = document.createElement("h3");
  defaultMessage.id = "defaultMessage";
  defaultMessage.innerText = "No tasks found. Click 'Add Task' to create one now.";
  defaultMessage.style.display = "none";
  mainContainer.appendChild(defaultMessage);

  // Add taskList section
  const taskList = document.createElement("div");
  taskList.classList.add("main");
  taskList.id = "task-list";
  mainContainer.appendChild(taskList);

  // Add "Add Task" button div
  const taskButtonDiv = document.createElement("div");
  taskButtonDiv.classList.add("main");
  {
    // Create button
    const addTaskButton = document.createElement("li");
    addTaskButton.id = "task-button";
    addTaskButton.innerText = "Add Task";
    addTaskButton.onclick = function () {
      createUserInput();
    };
    taskButtonDiv.appendChild(addTaskButton);

    // Add icon
    addTaskButton.insertAdjacentHTML(
      "afterbegin",
      '<i class="material-icons-outlined">add_task</i>'
    );
  }
  mainContainer.appendChild(taskButtonDiv);
}

function addListItem(item) {
  // Get taskList
  const taskList = document.getElementById("task-list");

  // Create li
  const li = document.createElement("li");

  // Create dl
  const dl = document.createElement("dl");

  li.appendChild(dl);

  // Create dt
  const dt = document.createElement("dt");
  dt.innerText = item.title;

  // Add "complete" onclick function
  dt.onclick = function() {
    (0,_Storage_js__WEBPACK_IMPORTED_MODULE_1__["default"])().deleteTask(item.id);
    this.className += "complete";
    setTimeout( () => { app().refresh(); }, 1000);    
  };

  dl.appendChild(dt);

  // Create dd (details) (if any)
  for (const detail in item.details) {
    const dd = document.createElement("dd");
    dd.innerText = item.details[detail];
    dl.appendChild(dd);
  }

  taskList.appendChild(li);
}

function app() {
  const init = function () {
    createMain();
    this.populate(0);
  };

  const populate = function (current) {
    const tasks = (0,_Storage_js__WEBPACK_IMPORTED_MODULE_1__["default"])().get()[current].todos;
    const defaultMessage = document.getElementById("defaultMessage");

    for (const item in tasks) {
      addListItem(tasks[item]);
    }

    if (tasks.length == 0) {
      defaultMessage.style.display = "block";
    } else {
      defaultMessage.style.display = "none";
    }
  }

  const clear = function (parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

  const refresh = function () {
    // Set const variables
    const current = (0,_Storage_js__WEBPACK_IMPORTED_MODULE_1__["default"])().getActive();
    const taskList = document.getElementById("task-list");

    this.clear(taskList); // Clear #task-list content
    this.populate(current); // Populate 
  }

  return { init, clear, populate, refresh };
}

/***/ }),

/***/ "./src/calendar.js":
/*!*************************!*\
  !*** ./src/calendar.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ calendar)
/* harmony export */ });
function calendar() {
  // Create sidebar CALENDAR section
  var calendar = document.createElement("div");
  calendar.classList.add("calendar");
  calendar.id = "calendar";
  content.appendChild(calendar);

  // Set date
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d = new Date();
  const dateString = `${
    months[d.getMonth()]
  } ${d.getDate()}, ${d.getFullYear()}`;

  // Print date to DIV
  var date = document.createElement("h3");
  date.innerText = dateString;
  calendar.appendChild(date);

  // Print times of day
  var tableDiv = document.createElement("div");
  {
    var table = document.createElement("table");
    table.id = "calendarTable";
    // Print each hour of day
    for (var start = 0; start < 24; start++) {
      var hour = new Date();
      hour.setHours(start);

      // Determine whether AM or PM
      var ampm;
      if (start < 12) {
        ampm = "am";
      } else {
        ampm = "pm";
      }

      var tr = document.createElement("tr");
      tr.classList.add("timegrid");
      if (hour.getHours() % 12 == 0) {
        tr.innerText = `12${ampm}`;
      } else {
        tr.innerText = `${hour.getHours() % 12}${ampm}`;
      }
      table.appendChild(tr);
    }
    const currentTime = document.createElement("div");
    currentTime.id = "current-time";
    currentTime.style.left = "30px";
    table.appendChild(currentTime);
    tableDiv.appendChild(table);
  }
  calendar.appendChild(tableDiv);

  // Create 'current-time' time marker
  const currentTime = document.getElementById("current-time");
  let currentHours = new Date().getHours();
  let currentMinutes = new Date().getMinutes();
  let hourPosition = (table.scrollHeight / 24 * currentHours);
  let minutePosition = (table.scrollHeight / 24 / 60 * currentMinutes);
  currentTime.style.top = `${hourPosition + minutePosition}px`;

  // Automatically scroll near current time
  if (hour.getHours() > 12) {
    table.scrollTop = table.scrollHeight;
  }
}

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ header)
/* harmony export */ });
function header() {
  document.body.insertAdjacentHTML(
      "afterbegin",
      '\
      <div class="header">\
        <div class="header-left">\
        </div>\
        <div class="header-center">\
          <h1 id="header-center" style="white-space: pre-wrap;">TaskEasy</h1>\
        </div>\
        <div class="header-right">\
          <!-- Add buttons to initiate auth sequence and sign out -->\
          <!-- <div class="g-signin2" data-onsuccess="onSignIn"></div> -->\
          <button id="authorize_button" style="display: none;">Sign In</button>\
          <button id="signout_button" style="display: none">Sign Out</button>\
        </div>\
      </div>\
    '
    );
}

/***/ }),

/***/ "./src/project-directory.js":
/*!**********************************!*\
  !*** ./src/project-directory.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sidebar)
/* harmony export */ });
/* harmony import */ var _Storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Storage.js */ "./src/Storage.js");
/* harmony import */ var _Project_logic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project-logic.js */ "./src/Project-logic.js");
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.js */ "./src/app.js");




function createSidebar() {
  // Create content left sidebar
  var sidebar = document.createElement("div");
  sidebar.id = "sidebar";
  content.appendChild(sidebar);

  var profile = document.createElement("div");
  profile.classList.add("material-icons");
  profile.innerText = "account_circle";
  profile.id = "profile";
  sidebar.appendChild(profile);

  // Add sidebar TAGS section
  var tagTitle = document.createElement("h3");
  tagTitle.innerText = "Tags";
  tagTitle.id = "tags";
  tagTitle.insertAdjacentHTML(
    "afterbegin",
    '<span class="material-icons">tag</span>'
  );
  tagTitle.insertAdjacentHTML(
    "beforeend",
    '<span class="material-icons-outlined" id="left-arrow">expand_more</span>'
  );
  sidebar.appendChild(tagTitle);

  // Add sidebar PROJECTS section
  var projectTitle = document.createElement("h3");
  projectTitle.innerText = "Projects";
  projectTitle.id = "projects";
  projectTitle.insertAdjacentHTML(
    "afterbegin",
    '<span class="material-icons">folder</span>'
  );
  projectTitle.insertAdjacentHTML(
    "beforeend",
    '<span class="material-icons-outlined" id="down-arrow">expand_more</span>'
  );
  sidebar.appendChild(projectTitle);

  // Add sidebar PROJECTS div
  var projectsContainer = document.createElement("div");
  projectsContainer.id = "projects-container";
  sidebar.appendChild(projectsContainer);

  // Add "Add New" button
  var addNew = document.createElement("li");
  addNew.classList.add("add-button");
  addNew.id = "add-new-project";
  addNew.innerText = 'Add New';
  addNew.onclick = function () {
    createProjectInput();
  };
  sidebar.appendChild(addNew);
}

function createProjectInput() {
  const projectInput = document.createElement("div");
  projectInput.classList.add("project-input");
  projectInput.id = "project-input-container";
  {
		const projectInputLi = document.createElement("li");
		projectInputLi.id = "projectInput-input";

    const inputTitle = document.createElement("input");
    inputTitle.type = "text";
    inputTitle.value = null;
    inputTitle.id = "project-input-title";
    inputTitle.placeholder = "Enter project name...";
    projectInputLi.appendChild(inputTitle);
	
    const buttonDiv = document.createElement("div");
			
    const inputCancel = document.createElement("button");
    inputCancel.innerText = "Cancel";
    inputCancel.id = "project-input-cancel";
    inputCancel.onclick = function () {
      document.getElementById("project-input-container").remove();
    };
    buttonDiv.appendChild(inputCancel);
			
    var inputSave = document.createElement("button");
    inputSave.innerText = "Save";
    inputSave.id = "project-input-save";
    inputSave.onclick = function () {
      // const projectTitle = document.getElementById("project-input-title");

      if (inputTitle && inputTitle.value) {
				// Add the project to Storage()
				(0,_Storage_js__WEBPACK_IMPORTED_MODULE_0__["default"])().addProject(new _Project_logic_js__WEBPACK_IMPORTED_MODULE_1__["default"](inputTitle.value));

				// Remove user input field (Alternative: toggle user-input-container visible/hidden)
				document.getElementById("project-input-container").remove();

				// Refresh sidebar
				sidebar().refresh();

				// Simulate click
				const projects = document.getElementsByClassName("project");
				projects[projects.length - 1].click();
			} else return;
    };
    buttonDiv.appendChild(inputSave);
			

    // Add keyup events
    inputTitle.addEventListener("keyup", function (event) {
      const inputSave = document.getElementById("project-input-save");
      const inputCancel = document.getElementById("project-input-cancel");
      if (event.keyCode === 13) {
        event.preventDefault();
        inputSave.click();
      } else if (event.keyCode === 27) {
        event.preventDefault();
        inputCancel.click();
      }
    });

    projectInputLi.appendChild(buttonDiv);

		projectInput.appendChild(projectInputLi);
	}
  const projects = document.getElementById("projects-container");
  projects.appendChild(projectInput);
}

function addProjectItem(item) {
  // set constant variables
  const projectsContainer = document.getElementById("projects-container");
  const projectData = (0,_Storage_js__WEBPACK_IMPORTED_MODULE_0__["default"])().get();

  // Create h3 element
  const project = document.createElement("h3");
  project.id = projectData[item].id;
  project.innerText = projectData[item].project;
  project.classList.add("project");
  project.insertAdjacentHTML(
    "afterbegin",
    '<span class="material-icons icon-left color-label">circle</span>'
  );
  project.insertAdjacentHTML(
    "beforeend",
    '<span class="material-icons-outlined icon-right delete-project-btn">clear</span>'
  );
  projectsContainer.appendChild(project);
}

function addEventListeners() {
  // Set constant variables
	const projects = document.getElementsByClassName("project");
  const deleteProject = document.getElementsByClassName("delete-project-btn");

	for (var i = 0; i < projects.length; i++) {
		projects[i].addEventListener("click", function () {
        // Toggle "active" class
        const active = document.getElementsByClassName("active")[0]; // Set const to first element containing "active" class
        active.className = active.className.replace(" active", ""); 
        this.className += " active";

        // Set Storage().setActive() to this
        (0,_Storage_js__WEBPACK_IMPORTED_MODULE_0__["default"])().setActive(this);

        // Refresh main #task-list with active contents
        (0,_app_js__WEBPACK_IMPORTED_MODULE_2__["default"])().refresh((0,_Storage_js__WEBPACK_IMPORTED_MODULE_0__["default"])().getActive());
    });
	}

  for (var i = 0; i < deleteProject.length; i++) {
    deleteProject[i].addEventListener("click", function(e) {
			// Delete this item in Storage()
			(0,_Storage_js__WEBPACK_IMPORTED_MODULE_0__["default"])().deleteProject(this.parentElement);

			// Refresh sidebar
			sidebar().refresh();

			return e.stopPropagation();
		});
  }
}

function addNavListener() {
  const arrow = document.getElementById("down-arrow");
  const projectsContainer = document.getElementById("projects-container");
  const addNewProject = document.getElementById("add-new-project");
  let expanded = true;

  arrow.addEventListener("click", function () {
    if (expanded == true) {
      arrow.style.transform = "rotate(90deg)";
      projectsContainer.style.display = "none";
      addNewProject.style.display = "none";
      return (expanded = false);
    } else {
      arrow.style.transform = "rotate(0deg)";
      projectsContainer.style.display = "block";
      addNewProject.style.display = "block";
      return (expanded = true);
    }
  });
}

function sidebar() {
  const init = function() {
    // Set constant variables
    const projects = document.getElementsByClassName("project");

    // Create sidebar
    createSidebar();

    // Populate sidebar
    this.populate();

    // Add event listeners
    addEventListeners();
    addNavListener();

    // Set initial project as active by default
    projects[0].classList.add("active");
    (0,_Storage_js__WEBPACK_IMPORTED_MODULE_0__["default"])().setActive(0);
  }

  const select = function() {

  }

  const clear = function(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

  const refresh = function() {
		const projectsContainer = document.getElementById("projects-container");
		const projects = document.getElementsByClassName("project");

    this.clear(projectsContainer);
		this.populate();

    const active = projects.length-1;
		projects[active].classList.add("active");
		(0,_Storage_js__WEBPACK_IMPORTED_MODULE_0__["default"])().setActive(active);
    addEventListeners();

    // This doesn't work for some reason.
    (0,_app_js__WEBPACK_IMPORTED_MODULE_2__["default"])().refresh((0,_Storage_js__WEBPACK_IMPORTED_MODULE_0__["default"])().getActive());
	}

  const deleteProject = function() {
    return (0,_Storage_js__WEBPACK_IMPORTED_MODULE_0__["default"])().deleteProject(this);
  }

  const populate = function() {
    for (var item in (0,_Storage_js__WEBPACK_IMPORTED_MODULE_0__["default"])().get()) {
      addProjectItem(item);
    }
  }

  return { init, select, clear, refresh, deleteProject, populate };
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ "./src/header.js");
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.js */ "./src/app.js");
/* harmony import */ var _calendar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendar.js */ "./src/calendar.js");
/* harmony import */ var _project_directory_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-directory.js */ "./src/project-directory.js");
// import stylesheets


// import scripts





(0,_header_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_project_directory_js__WEBPACK_IMPORTED_MODULE_4__["default"])().init();
(0,_app_js__WEBPACK_IMPORTED_MODULE_2__["default"])().init();
(0,_calendar_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxpQkFBaUIsT0FBTyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtB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Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNxQjs7QUFFckI7QUFDaUM7QUFDTjtBQUNVO0FBQ1E7O0FBRTdDLHNEQUFNO0FBQ04saUVBQU87QUFDUCxtREFBRztBQUNILHdEQUFRLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvUHJvamVjdC1sb2dpYy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL1N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9Ub2RvLWxvZ2ljLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvYXBwLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvY2FsZW5kYXIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wcm9qZWN0LWRpcmVjdG9yeS5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QXNzaXN0YW50OndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwJmZhbWlseT1CZXJrc2hpcmUrU3dhc2g6d2dodEAyMDA7MzAwOzQwMDs1MDAmZmFtaWx5PVNwYWNlK0dyb3Rlc2s6d2dodEA1MDAmZmFtaWx5PVF1aWNrc2FuZDp3Z2h0QDMwMDs0MDA7NTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIE5vdGVzOiBcXG4gKiBJY29ucyBpbiB0aGUgcHJvamVjdCBkaXJlY3RvcnkgYW5kIGNoaWxkcmVuIG9mIHRoZSBQcm9qZWN0cy9UYWdzIGZvbGRlciBjYW4gaGF2ZSBiZXR0ZXIgbWFyZ2lucy5cXG4gKi8gXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgYm9keSB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxuXFxuICAuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gICNjb250ZW50IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gIH1cXG59XFxuXFxuKiB7XFxuICBmb250LWZhbWlseTogQXNzaXN0YW50LCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHBhZGRpbmc6IDAgMC41JTtcXG4gIGJhY2tncm91bmQ6ICNmNmY3Zjk7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBtYXJnaW46IDVweDtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbmRkIHtcXG4gIGNvbG9yOiAjYWFhO1xcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luOiAwcHggMjBweDtcXG59XFxuXFxuZHQge1xcbiAgcGFkZGluZzogMCAxcmVtIDFyZW0gMXJlbTtcXG4gIGNvbG9yOiByZ2IoNzcsIDY3LCAxMTcpO1xcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgQXJpYWw7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsaW5lLWhlaWdodDogMThweDtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1mYW1pbHk6ICdCZXJrc2hpcmUgU3dhc2gnLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LXNoYWRvdzpcXG4gICAgMCAxcHggMCAjRDFDNEU5LCBcXG4gICAgMCAycHggMCAjOTU3NUNELCBcXG4gICAgMCAzcHggMCAjNjczQUI3LCBcXG4gICAgMCA0cHggMCAjNTEyREE4LCBcXG4gICAgMCA1cHggMCAjMzExQjkyLFxcbiAgICBcXG4gICAgMCA2cHggMXB4IHJnYmEoMCwwLDAsLjEpLCBcXG4gICAgMCAwIDVweCByZ2JhKDAsMCwwLC4xKSwgXFxuICAgIDAgMXB4IDNweCByZ2JhKDAsMCwwLC4zKSwgXFxuICAgIDAgM3B4IDVweCByZ2JhKDAsMCwwLC4yKSwgXFxuICAgIDAgNXB4IDEwcHggcmdiYSgwLDAsMCwuMjUpLCBcXG4gICAgMCAxMHB4IDEwcHggcmdiYSgwLDAsMCwuMiksIFxcbiAgICAwIDIwcHggMjBweCByZ2JhKDAsMCwwLC4xNSk7XFxufVxcblxcbmgzIHtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiAjM2QzMjY3O1xcbn1cXG5cXG5saSB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBjb2xvcjogIzNkMzI2NztcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMTUpO1xcbn1cXG5cXG4uYWRkLWJ1dHRvbiB7XFxuICBjb2xvcjogI2FhYTtcXG59XFxuXFxuLmNhbGVuZGFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICB3aWR0aDogMTcuNXZ3O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNvbG9yLWxhYmVsIHtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBmb250LXNpemU6IDAuNXJlbSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uY29tcGxldGUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICM3ODY0YzI7XFxuICBjb2xvcjogI2FhYTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBwYWRkaW5nOiAwIDAuNSU7XFxuICBoZWlnaHQ6IDEwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmljb24tcmlnaHQge1xcbiAgZm9udC1zaXplOiAwLjlyZW0gIWltcG9ydGFudDtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4ubWFpbiA+IGxpIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBib3JkZXI6IDFweCAjZWVlIHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWFyZ2luOiAycHggMDtcXG59XFxuXFxuLm1haW4gPiBsaTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGZkZmQ7XFxufVxcblxcbi5tYWluLWNvbnRhaW5lciB7XFxuICBmbGV4OiAyO1xcbiAgbWFyZ2luOiAwIDV2dztcXG59XFxuXFxuLm1hdGVyaWFsLWljb25zLm1hdGVyaWFsLWljb25zLW91dGxpbmVkIHtcXG4gIHdpZHRoOiAxOHB4O1xcbiAgaGVpZ2h0OiAxOHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4ubWF0ZXJpYWwtaWNvbnMge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA3LjVweDtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LXRpdGxlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGltZWdyaWQge1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDIuNXZoO1xcbiAgY29sb3I6ICMzZDMyNjc7XFxuICBib3JkZXItdG9wOiBzb2xpZCAjZWVlIDFweDtcXG59XFxuXFxuI2FkZC1uZXctcHJvamVjdCB7XFxuICBtYXJnaW4tbGVmdDogMjAuNXB4O1xcbn1cXG4jY2FsZW5kYXJUYWJsZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXFxuICBoZWlnaHQ6IDc1dmg7XFxuICB3aWR0aDogMTV2dztcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoIDAsIDAsIDAsIDAuNCApO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCAxNXB4ICk7XFxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggMTVweCApO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjhmYTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4jY29udGVudCA+ICoge1xcbiAgaGVpZ2h0OiA4NXZoO1xcbn1cXG5cXG4jY3VycmVudC10aW1lIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NDQ0ZGI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMnB4O1xcbn1cXG5cXG4jZG93bi1hcnJvdywgI2xlZnQtYXJyb3cge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbiNpbnB1dC10aXRsZSB7XFxuICB3aWR0aDogOTglO1xcbiAgcGFkZGluZzogMSU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbiNwcm9maWxlIHtcXG4gIGNvbG9yOiBjb3JhbDtcXG4gIGZvbnQtc2l6ZTogMy41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuI3Byb2plY3RzLWNvbnRhaW5lciB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbiNwcm9qZWN0cy1jb250YWluZXIgPiBsaSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jcHJvamVjdHMtY29udGFpbmVyID4gbGkgPiAqIHtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuI3Byb2plY3RzLWNvbnRhaW5lciA+IGxpID4gZGl2IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgd2lkdGg6IDE3LjV2dztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNzaWRlYmFyID4gbGksIGgzIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiAjdGFnczpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn0gKi9cXG5cXG4jdGFncyB7XFxuICBjb2xvcjogI0QxQzRFOTtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuI3RhZ3MgPiBzcGFuIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuI3Rhc2stYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY29sb3I6ICNhYWE7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmOGZhO1xcbiAgYm9yZGVyOiAxcHggI2VlZSBzb2xpZDtcXG4gIHRyYW5zaXRpb246IGJvcmRlciAwLjI1cyBlYXNlLWluLCBjb2xvciAwLjI1cyBlYXNlLWluO1xcbn1cXG5cXG4jdGFzay1idXR0b246aG92ZXIge1xcbiAgYm9yZGVyOiAxcHggIzY0NDRkYiBzb2xpZDtcXG4gIGNvbG9yOiAjNjQ0NGRiO1xcbn1cXG5cXG4jdXNlci1pbnB1dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG46OnBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLnRhc2stYnV0dG9uLWFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBOztFQUVFOztBQUVGO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFLGtEQUFrRDtFQUNsRCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHVDQUF1QztFQUN2QyxlQUFlO0VBQ2YsV0FBVztFQUNYOzs7Ozs7Ozs7Ozs7OytCQWE2QjtBQUMvQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxx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dXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFzc2lzdGFudDp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDA7NzAwOzgwMCZmYW1pbHk9QmVya3NoaXJlK1N3YXNoOndnaHRAMjAwOzMwMDs0MDA7NTAwJmZhbWlseT1TcGFjZStHcm90ZXNrOndnaHRANTAwJmZhbWlseT1RdWlja3NhbmQ6d2dodEAzMDA7NDAwOzUwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4vKiBOb3RlczogXFxuICogSWNvbnMgaW4gdGhlIHByb2plY3QgZGlyZWN0b3J5IGFuZCBjaGlsZHJlbiBvZiB0aGUgUHJvamVjdHMvVGFncyBmb2xkZXIgY2FuIGhhdmUgYmV0dGVyIG1hcmdpbnMuXFxuICovIFxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIGJvZHkge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcblxcbiAgLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAjY29udGVudCB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICB9XFxufVxcblxcbioge1xcbiAgZm9udC1mYW1pbHk6IEFzc2lzdGFudCwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keSB7XFxuICBwYWRkaW5nOiAwIDAuNSU7XFxuICBiYWNrZ3JvdW5kOiAjZjZmN2Y5O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgbWFyZ2luOiA1cHg7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG5kZCB7XFxuICBjb2xvcjogI2FhYTtcXG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbjogMHB4IDIwcHg7XFxufVxcblxcbmR0IHtcXG4gIHBhZGRpbmc6IDAgMXJlbSAxcmVtIDFyZW07XFxuICBjb2xvcjogcmdiKDc3LCA2NywgMTE3KTtcXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtZmFtaWx5OiAnQmVya3NoaXJlIFN3YXNoJywgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1zaGFkb3c6XFxuICAgIDAgMXB4IDAgI0QxQzRFOSwgXFxuICAgIDAgMnB4IDAgIzk1NzVDRCwgXFxuICAgIDAgM3B4IDAgIzY3M0FCNywgXFxuICAgIDAgNHB4IDAgIzUxMkRBOCwgXFxuICAgIDAgNXB4IDAgIzMxMUI5MixcXG4gICAgXFxuICAgIDAgNnB4IDFweCByZ2JhKDAsMCwwLC4xKSwgXFxuICAgIDAgMCA1cHggcmdiYSgwLDAsMCwuMSksIFxcbiAgICAwIDFweCAzcHggcmdiYSgwLDAsMCwuMyksIFxcbiAgICAwIDNweCA1cHggcmdiYSgwLDAsMCwuMiksIFxcbiAgICAwIDVweCAxMHB4IHJnYmEoMCwwLDAsLjI1KSwgXFxuICAgIDAgMTBweCAxMHB4IHJnYmEoMCwwLDAsLjIpLCBcXG4gICAgMCAyMHB4IDIwcHggcmdiYSgwLDAsMCwuMTUpO1xcbn1cXG5cXG5oMyB7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjogIzNkMzI2NztcXG59XFxuXFxubGkge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgcGFkZGluZzogMC41ZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgY29sb3I6ICMzZDMyNjc7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjE1KTtcXG59XFxuXFxuLmFkZC1idXR0b24ge1xcbiAgY29sb3I6ICNhYWE7XFxufVxcblxcbi5jYWxlbmRhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgd2lkdGg6IDE3LjV2dztcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jb2xvci1sYWJlbCB7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgZm9udC1zaXplOiAwLjVyZW0gIWltcG9ydGFudDtcXG59XFxuXFxuLmNvbXBsZXRlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjNzg2NGMyO1xcbiAgY29sb3I6ICNhYWE7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgcGFkZGluZzogMCAwLjUlO1xcbiAgaGVpZ2h0OiAxMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5pY29uLXJpZ2h0IHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtICFpbXBvcnRhbnQ7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLm1haW4gPiBsaSB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgYm9yZGVyOiAxcHggI2VlZSBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbjogMnB4IDA7XFxufVxcblxcbi5tYWluID4gbGk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZGZkO1xcbn1cXG5cXG4ubWFpbi1jb250YWluZXIge1xcbiAgZmxleDogMjtcXG4gIG1hcmdpbjogMCA1dnc7XFxufVxcblxcbi5tYXRlcmlhbC1pY29ucy5tYXRlcmlhbC1pY29ucy1vdXRsaW5lZCB7XFxuICB3aWR0aDogMThweDtcXG4gIGhlaWdodDogMThweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1hdGVyaWFsLWljb25zLW91dGxpbmVkIHtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLm1hdGVyaWFsLWljb25zIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIG1hcmdpbi1yaWdodDogNy41cHg7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRpbWVncmlkIHtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAyLjV2aDtcXG4gIGNvbG9yOiAjM2QzMjY3O1xcbiAgYm9yZGVyLXRvcDogc29saWQgI2VlZSAxcHg7XFxufVxcblxcbiNhZGQtbmV3LXByb2plY3Qge1xcbiAgbWFyZ2luLWxlZnQ6IDIwLjVweDtcXG59XFxuI2NhbGVuZGFyVGFibGUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxcbiAgaGVpZ2h0OiA3NXZoO1xcbiAgd2lkdGg6IDE1dnc7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKCAwLCAwLCAwLCAwLjQgKTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggMTVweCApO1xcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDE1cHggKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y4ZmE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuI2NvbnRlbnQgPiAqIHtcXG4gIGhlaWdodDogODV2aDtcXG59XFxuXFxuI2N1cnJlbnQtdGltZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ0NGRiO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDJweDtcXG59XFxuXFxuI2Rvd24tYXJyb3csICNsZWZ0LWFycm93IHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4jaW5wdXQtdGl0bGUge1xcbiAgd2lkdGg6IDk4JTtcXG4gIHBhZGRpbmc6IDElO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4jcHJvZmlsZSB7XFxuICBjb2xvcjogY29yYWw7XFxuICBmb250LXNpemU6IDMuNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbiNwcm9qZWN0cy1jb250YWluZXIge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4jcHJvamVjdHMtY29udGFpbmVyID4gbGkge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3Byb2plY3RzLWNvbnRhaW5lciA+IGxpID4gKiB7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbiNwcm9qZWN0cy1jb250YWluZXIgPiBsaSA+IGRpdiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XFxufVxcblxcbiNzaWRlYmFyIHtcXG4gIHdpZHRoOiAxNy41dnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jc2lkZWJhciA+IGxpLCBoMyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogI3RhZ3M6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59ICovXFxuXFxuI3RhZ3Mge1xcbiAgY29sb3I6ICNEMUM0RTk7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbiN0YWdzID4gc3BhbiB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcbiN0YXNrLWJ1dHRvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiAjYWFhO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjhmYTtcXG4gIGJvcmRlcjogMXB4ICNlZWUgc29saWQ7XFxuICB0cmFuc2l0aW9uOiBib3JkZXIgMC4yNXMgZWFzZS1pbiwgY29sb3IgMC4yNXMgZWFzZS1pbjtcXG59XFxuXFxuI3Rhc2stYnV0dG9uOmhvdmVyIHtcXG4gIGJvcmRlcjogMXB4ICM2NDQ0ZGIgc29saWQ7XFxuICBjb2xvcjogIzY0NDRkYjtcXG59XFxuXFxuI3VzZXItaW5wdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuOjpwbGFjZWhvbGRlciB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi50YXNrLWJ1dHRvbi1hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0KHByb2plY3QsIGR1ZURhdGUpIHtcbiAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgdGhpcy50b2RvcyA9IFtdO1xuICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICB0aGlzLmlkID0gY3J5cHRvLnJhbmRvbVVVSUQoKTtcbn0iLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9Qcm9qZWN0LWxvZ2ljLmpzXCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9Ub2RvLWxvZ2ljLmpzXCI7XG5cbi8vIFNldCBkYXRhIGNvbnN0XG5mdW5jdGlvbiBjcmVhdGVEZWZhdWx0SXRlbXMoKSB7XG4gIC8vIENyZWF0ZSBlbXB0eSBhcnJheVxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KFtdKSk7XG5cbiAgLy8gU2V0IGRlZmF1bHQgUHJvamVjdHNcbiAgU3RvcmFnZSgpLnNldChuZXcgUHJvamVjdChcIlRvZG8gTGlzdCAxXCIpKTtcblxuICAvLyBTZXQgZGVmYXVsdCBUYXNrXG4gIHZhciB0ZXN0SXRlbTEgPSBuZXcgSXRlbShcIldlbGNvbWUgdG8gVGFza0Vhc3khXCIpO1xuICB0ZXN0SXRlbTEuZGV0YWlscy5wdXNoKFxuICAgIC8vIFwid3d3LmR5bGFuamFtZXMuaXNcIixcbiAgICBcInd3dy5naXRodWIuY29tL2R5eWxsYWFublwiLFxuICAgIFwi4oaQIENoZWNrIG91dCB0aGUgY3JlYXRvclwiXG4gICk7XG5cbiAgU3RvcmFnZSgpLmFkZFRhc2sodGVzdEl0ZW0xLCAwKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RvcmFnZSgpIHtcbiAgY29uc3QgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZ2V0KCkgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGNyZWF0ZURlZmF1bHRJdGVtcygpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGdldEFjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFjdGl2ZVwiKSkgfHwgMDtcbiAgfVxuXG4gIGNvbnN0IHNldEFjdGl2ZSA9IGZ1bmN0aW9uIChhY3RpdmUpIHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XG4gICAgLy8gV2h5IHdvdWxkIEkgZG8gaXQgdGhpcyB3YXk/XG4gICAgZm9yICh2YXIgaSBpbiBwcm9qZWN0cykge1xuICAgICAgaWYgKGFjdGl2ZS5pZCA9PSBwcm9qZWN0c1tpXS5pZCkge1xuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhY3RpdmVcIiwgSlNPTi5zdHJpbmdpZnkoaSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhY3RpdmVcIiwgMCk7XG4gIH1cblxuICBjb25zdCBnZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiIHx8IFwiW11cIikpO1xuICB9XG5cbiAgY29uc3Qgc2V0ID0gZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgICB0aGlzLmdldCgpLnB1c2gocHJvamVjdCk7XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkoYSkpO1xuICB9XG5cbiAgY29uc3QgYWRkUHJvamVjdCA9IGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gICAgY29uc3QgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xuICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbiAgfVxuXG4gIGNvbnN0IGRlbGV0ZVByb2plY3QgPSBmdW5jdGlvbiAocHJvamVjdCkge1xuICAgIGxldCBhcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XG4gICAgYXJyYXkgPSBhcnJheS5maWx0ZXIoZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIG9iai5pZCAhPT0gcHJvamVjdC5pZDtcbiAgICB9KTtcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShhcnJheSkpO1xuICB9XG5cbiAgY29uc3QgYWRkVGFzayA9IGZ1bmN0aW9uICh0YXNrKSB7XG4gICAgY29uc3QgYXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xuICAgIGFycmF5W2dldEFjdGl2ZSgpXS50b2Rvcy5wdXNoKHRhc2spO1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KGFycmF5KSk7XG4gIH1cblxuICBjb25zdCBkZWxldGVUYXNrID0gZnVuY3Rpb24gKHRhc2spIHtcbiAgICBjb25zdCBhcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XG4gICAgYXJyYXlbZ2V0QWN0aXZlKCldLnRvZG9zID0gYXJyYXlbZ2V0QWN0aXZlKCldLnRvZG9zLmZpbHRlcihmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gb2JqLmlkICE9PSB0YXNrO1xuICAgIH0pO1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KGFycmF5KSk7XG4gIH1cblxuICBjb25zdCBpbnNwZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZ2V0KCkpO1xuICB9XG5cbiAgY29uc3QgY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICB9XG5cbiAgcmV0dXJuIHsgaW5pdCwgZ2V0LCBzZXQsIGdldEFjdGl2ZSwgc2V0QWN0aXZlLCBhZGRQcm9qZWN0LCBkZWxldGVQcm9qZWN0LCBhZGRUYXNrLCBkZWxldGVUYXNrLCBpbnNwZWN0LCBjbGVhciB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEl0ZW0odGl0bGUsIGR1ZURhdGUpIHtcbiAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICB0aGlzLmRldGFpbHMgPSBbXTtcbiAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgdGhpcy5pZCA9IGNyeXB0by5yYW5kb21VVUlEKCk7XG59IiwiaW1wb3J0IEl0ZW0gZnJvbSBcIi4vVG9kby1sb2dpYy5qc1wiO1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSBcIi4vU3RvcmFnZS5qc1wiO1xuXG4vLyAucmVtb3ZlKCkgbW9ua2V5IHBhdGNoXG5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzKTtcbn07XG5Ob2RlTGlzdC5wcm90b3R5cGUucmVtb3ZlID0gSFRNTENvbGxlY3Rpb24ucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yIChsZXQgaSA9IHRoaXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBpZiAodGhpc1tpXSAmJiB0aGlzW2ldLnBhcmVudEVsZW1lbnQpIHtcbiAgICAgIHRoaXNbaV0ucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzW2ldKTtcbiAgICB9XG4gIH1cbn07XG5cbi8vIENyZWF0ZSBzdG9yYWdlIG9iamVjdFxuU3RvcmFnZSgpLmluaXQoKTtcblxuZnVuY3Rpb24gY3JlYXRlVXNlcklucHV0KCkge1xuICBjb25zdCB1c2VySW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB1c2VySW5wdXREaXYuY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG4gIHVzZXJJbnB1dERpdi5pZCA9IFwidXNlci1pbnB1dC1jb250YWluZXJcIjtcblxuICBjb25zdCB1c2VySW5wdXRMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgdXNlcklucHV0TGkuaWQgPSBcInVzZXItaW5wdXRcIjtcbiAgXG4gIGNvbnN0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlucHV0VGl0bGUudHlwZSA9IFwidGV4dFwiO1xuICBpbnB1dFRpdGxlLmlkID0gXCJpbnB1dC10aXRsZVwiO1xuICBpbnB1dFRpdGxlLnBsYWNlaG9sZGVyID0gXCJFbnRlciB0YXNrIG5hbWUuLi5cIjtcbiAgdXNlcklucHV0TGkuYXBwZW5kQ2hpbGQoaW5wdXRUaXRsZSk7XG5cbiAgY29uc3QgYnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgXG4gIGNvbnN0IGlucHV0Q2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgaW5wdXRDYW5jZWwuaW5uZXJUZXh0ID0gXCJDYW5jZWxcIjtcbiAgaW5wdXRDYW5jZWwub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICByZW1vdmVVc2VySW5wdXQoKTtcbiAgfTtcbiAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKGlucHV0Q2FuY2VsKTtcblxuICBjb25zdCBpbnB1dFNhdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBpbnB1dFNhdmUuaWQgPSBcImlucHV0LXNhdmVcIjtcbiAgaW5wdXRTYXZlLmlubmVyVGV4dCA9IFwiU2F2ZVwiO1xuXG4gIGlucHV0U2F2ZS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChpbnB1dFRpdGxlICYmIGlucHV0VGl0bGUudmFsdWUpIHtcbiAgICAgIFN0b3JhZ2UoKS5hZGRUYXNrKG5ldyBJdGVtKGlucHV0VGl0bGUudmFsdWUpKTtcbiAgICAgIGFwcCgpLnJlZnJlc2goKTtcbiAgICAgIHJlbW92ZVVzZXJJbnB1dCgpO1xuICAgIH07XG4gIH07XG4gIGJ1dHRvbkRpdi5hcHBlbmRDaGlsZChpbnB1dFNhdmUpO1xuICBcbiAgdXNlcklucHV0TGkuYXBwZW5kQ2hpbGQoYnV0dG9uRGl2KTtcblxuICAvLyBBZGQga2V5dXAgZXZlbnRzXG4gIGlucHV0VGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGNvbnN0IGlucHV0U2F2ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtc2F2ZVwiKTsgXG4gICAgY29uc3QgaW5wdXRDYW5jZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWNhbmNlbFwiKTtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpbnB1dFNhdmUuY2xpY2soKTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IDI3KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaW5wdXRDYW5jZWwuY2xpY2soKTtcbiAgICB9XG4gIH0pO1xuICAgIFxuICB1c2VySW5wdXREaXYuYXBwZW5kQ2hpbGQodXNlcklucHV0TGkpO1xuICBcbiAgbWFpbi5jaGlsZHJlblszXS5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlckJlZ2luXCIsIHVzZXJJbnB1dERpdik7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVVzZXJJbnB1dCgpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VyLWlucHV0LWNvbnRhaW5lclwiKS5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcbiAgLy8gQ3JlYXRlIG1haW4gVEFTS1Mgc2VjdGlvblxuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb250YWluZXJcIik7XG4gIG1haW5Db250YWluZXIuaWQgPSBcIm1haW5cIjtcbiAgY29udGVudC5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKTtcblxuICAvLyBBZGQgXCJUYXNrc1wiIHRpdGxlIERJVlxuICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuICB7XG4gICAgY29uc3QgbWFpblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIG1haW5UaXRsZS5pbm5lclRleHQgPSBcIlRhc2tzXCI7XG4gICAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQobWFpblRpdGxlKTtcbiAgfVxuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcblxuICAvLyBBZGQgZGVmYXVsdCBtZXNzYWdlXG4gIGNvbnN0IGRlZmF1bHRNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBkZWZhdWx0TWVzc2FnZS5pZCA9IFwiZGVmYXVsdE1lc3NhZ2VcIjtcbiAgZGVmYXVsdE1lc3NhZ2UuaW5uZXJUZXh0ID0gXCJObyB0YXNrcyBmb3VuZC4gQ2xpY2sgJ0FkZCBUYXNrJyB0byBjcmVhdGUgb25lIG5vdy5cIjtcbiAgZGVmYXVsdE1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlZmF1bHRNZXNzYWdlKTtcblxuICAvLyBBZGQgdGFza0xpc3Qgc2VjdGlvblxuICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhc2tMaXN0LmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuICB0YXNrTGlzdC5pZCA9IFwidGFzay1saXN0XCI7XG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQodGFza0xpc3QpO1xuXG4gIC8vIEFkZCBcIkFkZCBUYXNrXCIgYnV0dG9uIGRpdlxuICBjb25zdCB0YXNrQnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFza0J1dHRvbkRpdi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcbiAge1xuICAgIC8vIENyZWF0ZSBidXR0b25cbiAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGFkZFRhc2tCdXR0b24uaWQgPSBcInRhc2stYnV0dG9uXCI7XG4gICAgYWRkVGFza0J1dHRvbi5pbm5lclRleHQgPSBcIkFkZCBUYXNrXCI7XG4gICAgYWRkVGFza0J1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgY3JlYXRlVXNlcklucHV0KCk7XG4gICAgfTtcbiAgICB0YXNrQnV0dG9uRGl2LmFwcGVuZENoaWxkKGFkZFRhc2tCdXR0b24pO1xuXG4gICAgLy8gQWRkIGljb25cbiAgICBhZGRUYXNrQnV0dG9uLmluc2VydEFkamFjZW50SFRNTChcbiAgICAgIFwiYWZ0ZXJiZWdpblwiLFxuICAgICAgJzxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWRcIj5hZGRfdGFzazwvaT4nXG4gICAgKTtcbiAgfVxuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tCdXR0b25EaXYpO1xufVxuXG5mdW5jdGlvbiBhZGRMaXN0SXRlbShpdGVtKSB7XG4gIC8vIEdldCB0YXNrTGlzdFxuICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1saXN0XCIpO1xuXG4gIC8vIENyZWF0ZSBsaVxuICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblxuICAvLyBDcmVhdGUgZGxcbiAgY29uc3QgZGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGxcIik7XG5cbiAgbGkuYXBwZW5kQ2hpbGQoZGwpO1xuXG4gIC8vIENyZWF0ZSBkdFxuICBjb25zdCBkdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkdFwiKTtcbiAgZHQuaW5uZXJUZXh0ID0gaXRlbS50aXRsZTtcblxuICAvLyBBZGQgXCJjb21wbGV0ZVwiIG9uY2xpY2sgZnVuY3Rpb25cbiAgZHQub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgIFN0b3JhZ2UoKS5kZWxldGVUYXNrKGl0ZW0uaWQpO1xuICAgIHRoaXMuY2xhc3NOYW1lICs9IFwiY29tcGxldGVcIjtcbiAgICBzZXRUaW1lb3V0KCAoKSA9PiB7IGFwcCgpLnJlZnJlc2goKTsgfSwgMTAwMCk7ICAgIFxuICB9O1xuXG4gIGRsLmFwcGVuZENoaWxkKGR0KTtcblxuICAvLyBDcmVhdGUgZGQgKGRldGFpbHMpIChpZiBhbnkpXG4gIGZvciAoY29uc3QgZGV0YWlsIGluIGl0ZW0uZGV0YWlscykge1xuICAgIGNvbnN0IGRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRkXCIpO1xuICAgIGRkLmlubmVyVGV4dCA9IGl0ZW0uZGV0YWlsc1tkZXRhaWxdO1xuICAgIGRsLmFwcGVuZENoaWxkKGRkKTtcbiAgfVxuXG4gIHRhc2tMaXN0LmFwcGVuZENoaWxkKGxpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXBwKCkge1xuICBjb25zdCBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIGNyZWF0ZU1haW4oKTtcbiAgICB0aGlzLnBvcHVsYXRlKDApO1xuICB9O1xuXG4gIGNvbnN0IHBvcHVsYXRlID0gZnVuY3Rpb24gKGN1cnJlbnQpIHtcbiAgICBjb25zdCB0YXNrcyA9IFN0b3JhZ2UoKS5nZXQoKVtjdXJyZW50XS50b2RvcztcbiAgICBjb25zdCBkZWZhdWx0TWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVmYXVsdE1lc3NhZ2VcIik7XG5cbiAgICBmb3IgKGNvbnN0IGl0ZW0gaW4gdGFza3MpIHtcbiAgICAgIGFkZExpc3RJdGVtKHRhc2tzW2l0ZW1dKTtcbiAgICB9XG5cbiAgICBpZiAodGFza3MubGVuZ3RoID09IDApIHtcbiAgICAgIGRlZmF1bHRNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlZmF1bHRNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG4gIH1cblxuICBjb25zdCBjbGVhciA9IGZ1bmN0aW9uIChwYXJlbnQpIHtcbiAgICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgcmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBTZXQgY29uc3QgdmFyaWFibGVzXG4gICAgY29uc3QgY3VycmVudCA9IFN0b3JhZ2UoKS5nZXRBY3RpdmUoKTtcbiAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1saXN0XCIpO1xuXG4gICAgdGhpcy5jbGVhcih0YXNrTGlzdCk7IC8vIENsZWFyICN0YXNrLWxpc3QgY29udGVudFxuICAgIHRoaXMucG9wdWxhdGUoY3VycmVudCk7IC8vIFBvcHVsYXRlIFxuICB9XG5cbiAgcmV0dXJuIHsgaW5pdCwgY2xlYXIsIHBvcHVsYXRlLCByZWZyZXNoIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FsZW5kYXIoKSB7XG4gIC8vIENyZWF0ZSBzaWRlYmFyIENBTEVOREFSIHNlY3Rpb25cbiAgdmFyIGNhbGVuZGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2FsZW5kYXIuY2xhc3NMaXN0LmFkZChcImNhbGVuZGFyXCIpO1xuICBjYWxlbmRhci5pZCA9IFwiY2FsZW5kYXJcIjtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjYWxlbmRhcik7XG5cbiAgLy8gU2V0IGRhdGVcbiAgY29uc3QgbW9udGhzID0gW1xuICAgIFwiSmFudWFyeVwiLFxuICAgIFwiRmVicnVhcnlcIixcbiAgICBcIk1hcmNoXCIsXG4gICAgXCJBcHJpbFwiLFxuICAgIFwiTWF5XCIsXG4gICAgXCJKdW5lXCIsXG4gICAgXCJKdWx5XCIsXG4gICAgXCJBdWd1c3RcIixcbiAgICBcIlNlcHRlbWJlclwiLFxuICAgIFwiT2N0b2JlclwiLFxuICAgIFwiTm92ZW1iZXJcIixcbiAgICBcIkRlY2VtYmVyXCIsXG4gIF07XG4gIGNvbnN0IGQgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBkYXRlU3RyaW5nID0gYCR7XG4gICAgbW9udGhzW2QuZ2V0TW9udGgoKV1cbiAgfSAke2QuZ2V0RGF0ZSgpfSwgJHtkLmdldEZ1bGxZZWFyKCl9YDtcblxuICAvLyBQcmludCBkYXRlIHRvIERJVlxuICB2YXIgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgZGF0ZS5pbm5lclRleHQgPSBkYXRlU3RyaW5nO1xuICBjYWxlbmRhci5hcHBlbmRDaGlsZChkYXRlKTtcblxuICAvLyBQcmludCB0aW1lcyBvZiBkYXlcbiAgdmFyIHRhYmxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAge1xuICAgIHZhciB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcbiAgICB0YWJsZS5pZCA9IFwiY2FsZW5kYXJUYWJsZVwiO1xuICAgIC8vIFByaW50IGVhY2ggaG91ciBvZiBkYXlcbiAgICBmb3IgKHZhciBzdGFydCA9IDA7IHN0YXJ0IDwgMjQ7IHN0YXJ0KyspIHtcbiAgICAgIHZhciBob3VyID0gbmV3IERhdGUoKTtcbiAgICAgIGhvdXIuc2V0SG91cnMoc3RhcnQpO1xuXG4gICAgICAvLyBEZXRlcm1pbmUgd2hldGhlciBBTSBvciBQTVxuICAgICAgdmFyIGFtcG07XG4gICAgICBpZiAoc3RhcnQgPCAxMikge1xuICAgICAgICBhbXBtID0gXCJhbVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYW1wbSA9IFwicG1cIjtcbiAgICAgIH1cblxuICAgICAgdmFyIHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgICAgdHIuY2xhc3NMaXN0LmFkZChcInRpbWVncmlkXCIpO1xuICAgICAgaWYgKGhvdXIuZ2V0SG91cnMoKSAlIDEyID09IDApIHtcbiAgICAgICAgdHIuaW5uZXJUZXh0ID0gYDEyJHthbXBtfWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0ci5pbm5lclRleHQgPSBgJHtob3VyLmdldEhvdXJzKCkgJSAxMn0ke2FtcG19YDtcbiAgICAgIH1cbiAgICAgIHRhYmxlLmFwcGVuZENoaWxkKHRyKTtcbiAgICB9XG4gICAgY29uc3QgY3VycmVudFRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGN1cnJlbnRUaW1lLmlkID0gXCJjdXJyZW50LXRpbWVcIjtcbiAgICBjdXJyZW50VGltZS5zdHlsZS5sZWZ0ID0gXCIzMHB4XCI7XG4gICAgdGFibGUuYXBwZW5kQ2hpbGQoY3VycmVudFRpbWUpO1xuICAgIHRhYmxlRGl2LmFwcGVuZENoaWxkKHRhYmxlKTtcbiAgfVxuICBjYWxlbmRhci5hcHBlbmRDaGlsZCh0YWJsZURpdik7XG5cbiAgLy8gQ3JlYXRlICdjdXJyZW50LXRpbWUnIHRpbWUgbWFya2VyXG4gIGNvbnN0IGN1cnJlbnRUaW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50LXRpbWVcIik7XG4gIGxldCBjdXJyZW50SG91cnMgPSBuZXcgRGF0ZSgpLmdldEhvdXJzKCk7XG4gIGxldCBjdXJyZW50TWludXRlcyA9IG5ldyBEYXRlKCkuZ2V0TWludXRlcygpO1xuICBsZXQgaG91clBvc2l0aW9uID0gKHRhYmxlLnNjcm9sbEhlaWdodCAvIDI0ICogY3VycmVudEhvdXJzKTtcbiAgbGV0IG1pbnV0ZVBvc2l0aW9uID0gKHRhYmxlLnNjcm9sbEhlaWdodCAvIDI0IC8gNjAgKiBjdXJyZW50TWludXRlcyk7XG4gIGN1cnJlbnRUaW1lLnN0eWxlLnRvcCA9IGAke2hvdXJQb3NpdGlvbiArIG1pbnV0ZVBvc2l0aW9ufXB4YDtcblxuICAvLyBBdXRvbWF0aWNhbGx5IHNjcm9sbCBuZWFyIGN1cnJlbnQgdGltZVxuICBpZiAoaG91ci5nZXRIb3VycygpID4gMTIpIHtcbiAgICB0YWJsZS5zY3JvbGxUb3AgPSB0YWJsZS5zY3JvbGxIZWlnaHQ7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoZWFkZXIoKSB7XG4gIGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgXCJhZnRlcmJlZ2luXCIsXG4gICAgICAnXFxcbiAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cXFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWxlZnRcIj5cXFxuICAgICAgICA8L2Rpdj5cXFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWNlbnRlclwiPlxcXG4gICAgICAgICAgPGgxIGlkPVwiaGVhZGVyLWNlbnRlclwiIHN0eWxlPVwid2hpdGUtc3BhY2U6IHByZS13cmFwO1wiPlRhc2tFYXN5PC9oMT5cXFxuICAgICAgICA8L2Rpdj5cXFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLXJpZ2h0XCI+XFxcbiAgICAgICAgICA8IS0tIEFkZCBidXR0b25zIHRvIGluaXRpYXRlIGF1dGggc2VxdWVuY2UgYW5kIHNpZ24gb3V0IC0tPlxcXG4gICAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVwiZy1zaWduaW4yXCIgZGF0YS1vbnN1Y2Nlc3M9XCJvblNpZ25JblwiPjwvZGl2PiAtLT5cXFxuICAgICAgICAgIDxidXR0b24gaWQ9XCJhdXRob3JpemVfYnV0dG9uXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPlNpZ24gSW48L2J1dHRvbj5cXFxuICAgICAgICAgIDxidXR0b24gaWQ9XCJzaWdub3V0X2J1dHRvblwiIHN0eWxlPVwiZGlzcGxheTogbm9uZVwiPlNpZ24gT3V0PC9idXR0b24+XFxcbiAgICAgICAgPC9kaXY+XFxcbiAgICAgIDwvZGl2PlxcXG4gICAgJ1xuICAgICk7XG59IiwiaW1wb3J0IFN0b3JhZ2UgZnJvbSBcIi4vU3RvcmFnZS5qc1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vUHJvamVjdC1sb2dpYy5qc1wiO1xuaW1wb3J0IGFwcCBmcm9tIFwiLi9hcHAuanNcIjtcblxuZnVuY3Rpb24gY3JlYXRlU2lkZWJhcigpIHtcbiAgLy8gQ3JlYXRlIGNvbnRlbnQgbGVmdCBzaWRlYmFyXG4gIHZhciBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2lkZWJhci5pZCA9IFwic2lkZWJhclwiO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHNpZGViYXIpO1xuXG4gIHZhciBwcm9maWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvZmlsZS5jbGFzc0xpc3QuYWRkKFwibWF0ZXJpYWwtaWNvbnNcIik7XG4gIHByb2ZpbGUuaW5uZXJUZXh0ID0gXCJhY2NvdW50X2NpcmNsZVwiO1xuICBwcm9maWxlLmlkID0gXCJwcm9maWxlXCI7XG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvZmlsZSk7XG5cbiAgLy8gQWRkIHNpZGViYXIgVEFHUyBzZWN0aW9uXG4gIHZhciB0YWdUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgdGFnVGl0bGUuaW5uZXJUZXh0ID0gXCJUYWdzXCI7XG4gIHRhZ1RpdGxlLmlkID0gXCJ0YWdzXCI7XG4gIHRhZ1RpdGxlLmluc2VydEFkamFjZW50SFRNTChcbiAgICBcImFmdGVyYmVnaW5cIixcbiAgICAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPnRhZzwvc3Bhbj4nXG4gICk7XG4gIHRhZ1RpdGxlLmluc2VydEFkamFjZW50SFRNTChcbiAgICBcImJlZm9yZWVuZFwiLFxuICAgICc8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCIgaWQ9XCJsZWZ0LWFycm93XCI+ZXhwYW5kX21vcmU8L3NwYW4+J1xuICApO1xuICBzaWRlYmFyLmFwcGVuZENoaWxkKHRhZ1RpdGxlKTtcblxuICAvLyBBZGQgc2lkZWJhciBQUk9KRUNUUyBzZWN0aW9uXG4gIHZhciBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIHByb2plY3RUaXRsZS5pbm5lclRleHQgPSBcIlByb2plY3RzXCI7XG4gIHByb2plY3RUaXRsZS5pZCA9IFwicHJvamVjdHNcIjtcbiAgcHJvamVjdFRpdGxlLmluc2VydEFkamFjZW50SFRNTChcbiAgICBcImFmdGVyYmVnaW5cIixcbiAgICAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmZvbGRlcjwvc3Bhbj4nXG4gICk7XG4gIHByb2plY3RUaXRsZS5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgXCJiZWZvcmVlbmRcIixcbiAgICAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiIGlkPVwiZG93bi1hcnJvd1wiPmV4cGFuZF9tb3JlPC9zcGFuPidcbiAgKTtcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuXG4gIC8vIEFkZCBzaWRlYmFyIFBST0pFQ1RTIGRpdlxuICB2YXIgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0c0NvbnRhaW5lci5pZCA9IFwicHJvamVjdHMtY29udGFpbmVyXCI7XG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdHNDb250YWluZXIpO1xuXG4gIC8vIEFkZCBcIkFkZCBOZXdcIiBidXR0b25cbiAgdmFyIGFkZE5ldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgYWRkTmV3LmNsYXNzTGlzdC5hZGQoXCJhZGQtYnV0dG9uXCIpO1xuICBhZGROZXcuaWQgPSBcImFkZC1uZXctcHJvamVjdFwiO1xuICBhZGROZXcuaW5uZXJUZXh0ID0gJ0FkZCBOZXcnO1xuICBhZGROZXcub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICBjcmVhdGVQcm9qZWN0SW5wdXQoKTtcbiAgfTtcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChhZGROZXcpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0SW5wdXQoKSB7XG4gIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3RJbnB1dC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pbnB1dFwiKTtcbiAgcHJvamVjdElucHV0LmlkID0gXCJwcm9qZWN0LWlucHV0LWNvbnRhaW5lclwiO1xuICB7XG5cdFx0Y29uc3QgcHJvamVjdElucHV0TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cdFx0cHJvamVjdElucHV0TGkuaWQgPSBcInByb2plY3RJbnB1dC1pbnB1dFwiO1xuXG4gICAgY29uc3QgaW5wdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dFRpdGxlLnR5cGUgPSBcInRleHRcIjtcbiAgICBpbnB1dFRpdGxlLnZhbHVlID0gbnVsbDtcbiAgICBpbnB1dFRpdGxlLmlkID0gXCJwcm9qZWN0LWlucHV0LXRpdGxlXCI7XG4gICAgaW5wdXRUaXRsZS5wbGFjZWhvbGRlciA9IFwiRW50ZXIgcHJvamVjdCBuYW1lLi4uXCI7XG4gICAgcHJvamVjdElucHV0TGkuYXBwZW5kQ2hpbGQoaW5wdXRUaXRsZSk7XG5cdFxuICAgIGNvbnN0IGJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRcbiAgICBjb25zdCBpbnB1dENhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgaW5wdXRDYW5jZWwuaW5uZXJUZXh0ID0gXCJDYW5jZWxcIjtcbiAgICBpbnB1dENhbmNlbC5pZCA9IFwicHJvamVjdC1pbnB1dC1jYW5jZWxcIjtcbiAgICBpbnB1dENhbmNlbC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWlucHV0LWNvbnRhaW5lclwiKS5yZW1vdmUoKTtcbiAgICB9O1xuICAgIGJ1dHRvbkRpdi5hcHBlbmRDaGlsZChpbnB1dENhbmNlbCk7XG5cdFx0XHRcbiAgICB2YXIgaW5wdXRTYXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBpbnB1dFNhdmUuaW5uZXJUZXh0ID0gXCJTYXZlXCI7XG4gICAgaW5wdXRTYXZlLmlkID0gXCJwcm9qZWN0LWlucHV0LXNhdmVcIjtcbiAgICBpbnB1dFNhdmUub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1pbnB1dC10aXRsZVwiKTtcblxuICAgICAgaWYgKGlucHV0VGl0bGUgJiYgaW5wdXRUaXRsZS52YWx1ZSkge1xuXHRcdFx0XHQvLyBBZGQgdGhlIHByb2plY3QgdG8gU3RvcmFnZSgpXG5cdFx0XHRcdFN0b3JhZ2UoKS5hZGRQcm9qZWN0KG5ldyBQcm9qZWN0KGlucHV0VGl0bGUudmFsdWUpKTtcblxuXHRcdFx0XHQvLyBSZW1vdmUgdXNlciBpbnB1dCBmaWVsZCAoQWx0ZXJuYXRpdmU6IHRvZ2dsZSB1c2VyLWlucHV0LWNvbnRhaW5lciB2aXNpYmxlL2hpZGRlbilcblx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWlucHV0LWNvbnRhaW5lclwiKS5yZW1vdmUoKTtcblxuXHRcdFx0XHQvLyBSZWZyZXNoIHNpZGViYXJcblx0XHRcdFx0c2lkZWJhcigpLnJlZnJlc2goKTtcblxuXHRcdFx0XHQvLyBTaW11bGF0ZSBjbGlja1xuXHRcdFx0XHRjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0XCIpO1xuXHRcdFx0XHRwcm9qZWN0c1twcm9qZWN0cy5sZW5ndGggLSAxXS5jbGljaygpO1xuXHRcdFx0fSBlbHNlIHJldHVybjtcbiAgICB9O1xuICAgIGJ1dHRvbkRpdi5hcHBlbmRDaGlsZChpbnB1dFNhdmUpO1xuXHRcdFx0XG5cbiAgICAvLyBBZGQga2V5dXAgZXZlbnRzXG4gICAgaW5wdXRUaXRsZS5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBjb25zdCBpbnB1dFNhdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtaW5wdXQtc2F2ZVwiKTtcbiAgICAgIGNvbnN0IGlucHV0Q2FuY2VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWlucHV0LWNhbmNlbFwiKTtcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpbnB1dFNhdmUuY2xpY2soKTtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaW5wdXRDYW5jZWwuY2xpY2soKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHByb2plY3RJbnB1dExpLmFwcGVuZENoaWxkKGJ1dHRvbkRpdik7XG5cblx0XHRwcm9qZWN0SW5wdXQuYXBwZW5kQ2hpbGQocHJvamVjdElucHV0TGkpO1xuXHR9XG4gIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy1jb250YWluZXJcIik7XG4gIHByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3RJbnB1dCk7XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RJdGVtKGl0ZW0pIHtcbiAgLy8gc2V0IGNvbnN0YW50IHZhcmlhYmxlc1xuICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtY29udGFpbmVyXCIpO1xuICBjb25zdCBwcm9qZWN0RGF0YSA9IFN0b3JhZ2UoKS5nZXQoKTtcblxuICAvLyBDcmVhdGUgaDMgZWxlbWVudFxuICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBwcm9qZWN0LmlkID0gcHJvamVjdERhdGFbaXRlbV0uaWQ7XG4gIHByb2plY3QuaW5uZXJUZXh0ID0gcHJvamVjdERhdGFbaXRlbV0ucHJvamVjdDtcbiAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcbiAgcHJvamVjdC5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgXCJhZnRlcmJlZ2luXCIsXG4gICAgJzxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgaWNvbi1sZWZ0IGNvbG9yLWxhYmVsXCI+Y2lyY2xlPC9zcGFuPidcbiAgKTtcbiAgcHJvamVjdC5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgXCJiZWZvcmVlbmRcIixcbiAgICAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBpY29uLXJpZ2h0IGRlbGV0ZS1wcm9qZWN0LWJ0blwiPmNsZWFyPC9zcGFuPidcbiAgKTtcbiAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAvLyBTZXQgY29uc3RhbnQgdmFyaWFibGVzXG5cdGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3RcIik7XG4gIGNvbnN0IGRlbGV0ZVByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZGVsZXRlLXByb2plY3QtYnRuXCIpO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcblx0XHRwcm9qZWN0c1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBUb2dnbGUgXCJhY3RpdmVcIiBjbGFzc1xuICAgICAgICBjb25zdCBhY3RpdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWN0aXZlXCIpWzBdOyAvLyBTZXQgY29uc3QgdG8gZmlyc3QgZWxlbWVudCBjb250YWluaW5nIFwiYWN0aXZlXCIgY2xhc3NcbiAgICAgICAgYWN0aXZlLmNsYXNzTmFtZSA9IGFjdGl2ZS5jbGFzc05hbWUucmVwbGFjZShcIiBhY3RpdmVcIiwgXCJcIik7IFxuICAgICAgICB0aGlzLmNsYXNzTmFtZSArPSBcIiBhY3RpdmVcIjtcblxuICAgICAgICAvLyBTZXQgU3RvcmFnZSgpLnNldEFjdGl2ZSgpIHRvIHRoaXNcbiAgICAgICAgU3RvcmFnZSgpLnNldEFjdGl2ZSh0aGlzKTtcblxuICAgICAgICAvLyBSZWZyZXNoIG1haW4gI3Rhc2stbGlzdCB3aXRoIGFjdGl2ZSBjb250ZW50c1xuICAgICAgICBhcHAoKS5yZWZyZXNoKFN0b3JhZ2UoKS5nZXRBY3RpdmUoKSk7XG4gICAgfSk7XG5cdH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGRlbGV0ZVByb2plY3QubGVuZ3RoOyBpKyspIHtcbiAgICBkZWxldGVQcm9qZWN0W2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG5cdFx0XHQvLyBEZWxldGUgdGhpcyBpdGVtIGluIFN0b3JhZ2UoKVxuXHRcdFx0U3RvcmFnZSgpLmRlbGV0ZVByb2plY3QodGhpcy5wYXJlbnRFbGVtZW50KTtcblxuXHRcdFx0Ly8gUmVmcmVzaCBzaWRlYmFyXG5cdFx0XHRzaWRlYmFyKCkucmVmcmVzaCgpO1xuXG5cdFx0XHRyZXR1cm4gZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGROYXZMaXN0ZW5lcigpIHtcbiAgY29uc3QgYXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRvd24tYXJyb3dcIik7XG4gIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy1jb250YWluZXJcIik7XG4gIGNvbnN0IGFkZE5ld1Byb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1uZXctcHJvamVjdFwiKTtcbiAgbGV0IGV4cGFuZGVkID0gdHJ1ZTtcblxuICBhcnJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmIChleHBhbmRlZCA9PSB0cnVlKSB7XG4gICAgICBhcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZSg5MGRlZylcIjtcbiAgICAgIHByb2plY3RzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIGFkZE5ld1Byb2plY3Quc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgcmV0dXJuIChleHBhbmRlZCA9IGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXJyb3cuc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoMGRlZylcIjtcbiAgICAgIHByb2plY3RzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICBhZGROZXdQcm9qZWN0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICByZXR1cm4gKGV4cGFuZGVkID0gdHJ1ZSk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2lkZWJhcigpIHtcbiAgY29uc3QgaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIFNldCBjb25zdGFudCB2YXJpYWJsZXNcbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0XCIpO1xuXG4gICAgLy8gQ3JlYXRlIHNpZGViYXJcbiAgICBjcmVhdGVTaWRlYmFyKCk7XG5cbiAgICAvLyBQb3B1bGF0ZSBzaWRlYmFyXG4gICAgdGhpcy5wb3B1bGF0ZSgpO1xuXG4gICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyc1xuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgYWRkTmF2TGlzdGVuZXIoKTtcblxuICAgIC8vIFNldCBpbml0aWFsIHByb2plY3QgYXMgYWN0aXZlIGJ5IGRlZmF1bHRcbiAgICBwcm9qZWN0c1swXS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIFN0b3JhZ2UoKS5zZXRBY3RpdmUoMCk7XG4gIH1cblxuICBjb25zdCBzZWxlY3QgPSBmdW5jdGlvbigpIHtcblxuICB9XG5cbiAgY29uc3QgY2xlYXIgPSBmdW5jdGlvbihwYXJlbnQpIHtcbiAgICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgcmVmcmVzaCA9IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy1jb250YWluZXJcIik7XG5cdFx0Y29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVjdFwiKTtcblxuICAgIHRoaXMuY2xlYXIocHJvamVjdHNDb250YWluZXIpO1xuXHRcdHRoaXMucG9wdWxhdGUoKTtcblxuICAgIGNvbnN0IGFjdGl2ZSA9IHByb2plY3RzLmxlbmd0aC0xO1xuXHRcdHByb2plY3RzW2FjdGl2ZV0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblx0XHRTdG9yYWdlKCkuc2V0QWN0aXZlKGFjdGl2ZSk7XG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgIC8vIFRoaXMgZG9lc24ndCB3b3JrIGZvciBzb21lIHJlYXNvbi5cbiAgICBhcHAoKS5yZWZyZXNoKFN0b3JhZ2UoKS5nZXRBY3RpdmUoKSk7XG5cdH1cblxuICBjb25zdCBkZWxldGVQcm9qZWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFN0b3JhZ2UoKS5kZWxldGVQcm9qZWN0KHRoaXMpO1xuICB9XG5cbiAgY29uc3QgcG9wdWxhdGUgPSBmdW5jdGlvbigpIHtcbiAgICBmb3IgKHZhciBpdGVtIGluIFN0b3JhZ2UoKS5nZXQoKSkge1xuICAgICAgYWRkUHJvamVjdEl0ZW0oaXRlbSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHsgaW5pdCwgc2VsZWN0LCBjbGVhciwgcmVmcmVzaCwgZGVsZXRlUHJvamVjdCwgcG9wdWxhdGUgfTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gaW1wb3J0IHN0eWxlc2hlZXRzXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG4vLyBpbXBvcnQgc2NyaXB0c1xuaW1wb3J0IGhlYWRlciBmcm9tIFwiLi9oZWFkZXIuanNcIjtcbmltcG9ydCBhcHAgZnJvbSBcIi4vYXBwLmpzXCI7XG5pbXBvcnQgY2FsZW5kYXIgZnJvbSBcIi4vY2FsZW5kYXIuanNcIjtcbmltcG9ydCBzaWRlYmFyIGZyb20gXCIuL3Byb2plY3QtZGlyZWN0b3J5LmpzXCI7XG5cbmhlYWRlcigpO1xuc2lkZWJhcigpLmluaXQoKTtcbmFwcCgpLmluaXQoKTtcbmNhbGVuZGFyKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9