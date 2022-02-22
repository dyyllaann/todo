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
  console.log(`createDefaultItems(): Storage().get() = ${Storage().get()}`);

  // Create empty array
  localStorage.setItem("projects", JSON.stringify([]));

  // Set default Projects
  Storage().set(new _Project_logic_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Todo List 1", "12-12-2021"));

  // Set default Task
  var testItem1 = new _Todo_logic_js__WEBPACK_IMPORTED_MODULE_1__["default"]("Welcome to TaskEasy!");
  testItem1.details.push(
    "www.dylanjames.is",
    "www.github.com/dylanjames",
    "← Check out the creator"
  );

  Storage().addTask(testItem1, 0);
}

function Storage() {
  const init = (function () {
    // Load default if never initiated before. 
    //
    // this.get() is an empty array.
    // this.setActive();
    // console.log(this.get()); // Proves that this.get() contains an empty array.
    // if (this.get().length == 0) {
    //   return createDefaultItems();
    // }
  });

  const getActive = function () {
    return JSON.parse(localStorage.getItem("active") || 0);
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
    return JSON.parse(localStorage.getItem("projects")) || []; // Returns "projects" or empty array
  }

  const set = function (project) {
    this.get().push(project);
    return localStorage.setItem("projects", JSON.stringify(this.get()));
  }

  const addProject = function (project) {
    const projects = JSON.parse(localStorage.getItem("projects")) || [];
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
    const array = JSON.parse(localStorage.getItem("projects")) || [];
    // console.log(array);
    if (array.length < 1) {
      return console.log("There isn't an array here!");
    } else {
      array[this.getActive()].todos.push(task);
    }
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

  return { init, get, set, getActive, setActive, addProject, deleteProject, addTask, deleteTask, inspect, clear};
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
  
  main.children[2].insertAdjacentElement("afterBegin", userInputDiv);
}

function removeUserInput() {
  document.getElementById("user-input-container").remove();
}

function createMain() {
  // Create main tasks container
  const mainContainer = document.createElement("div");
  mainContainer.classList.add("main-container");
  mainContainer.id = "main";
  content.appendChild(mainContainer);

  // Add tasks title DIV (hidden)
  const titleDiv = document.createElement("div");
  titleDiv.classList.add("main");
  titleDiv.id = "task-list-title";
  const mainTitle = document.createElement("h3");
  mainTitle.innerText = "Tasks";
  titleDiv.appendChild(mainTitle);
  mainContainer.appendChild(titleDiv);

  // Add default message (hidden)
  const defaultMessage = document.createElement("h3");
  defaultMessage.id = "defaultMessage";
  defaultMessage.innerText = "No tasks found. Click 'Add Task' to create one now.";
  defaultMessage.style.display = "none";
  titleDiv.appendChild(defaultMessage);

  // Add taskList section
  const taskList = document.createElement("div");
  taskList.classList.add("main");
  taskList.id = "task-list";
  mainContainer.appendChild(taskList);

  // Add "Add Task" button div
  const taskButtonDiv = document.createElement("div");
  taskButtonDiv.classList.add("main");
  taskButtonDiv.id = "task-button-div";
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
    if ((0,_Storage_js__WEBPACK_IMPORTED_MODULE_1__["default"])().get()) {
      this.populate(0);
    }
  };

  const populate = function (current) {
    const main = document.getElementById("main")

    if ((0,_Storage_js__WEBPACK_IMPORTED_MODULE_1__["default"])().get().length < 1) {
      main.style.visibility = "hidden";
    } else { main.style.visibility = "visible"}

    if ((0,_Storage_js__WEBPACK_IMPORTED_MODULE_1__["default"])().get()[current]) {
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
	};

  const clear = function (parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

  const refresh = function () {
		// Set const variables
		const current = (0,_Storage_js__WEBPACK_IMPORTED_MODULE_1__["default"])().getActive();
		const taskList = document.getElementById("task-list");

		// Clear #task-list content
		this.clear(taskList);

		if (current) {
			this.populate(current); // Populate
		}
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

    // If a project exists, set initial project as active by default
    if (projects.length > 0) {
      projects[0].classList.add("active");
      (0,_Storage_js__WEBPACK_IMPORTED_MODULE_0__["default"])().setActive(0);
    }
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

    if (projects.length > 0) {
			const active = projects.length - 1;
			projects[active].classList.add("active");
			(0,_Storage_js__WEBPACK_IMPORTED_MODULE_0__["default"])().setActive(active);
			addEventListeners();

			// This doesn't work for some reason. Or does it?
		}
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
/* harmony import */ var _Storage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Storage.js */ "./src/Storage.js");
// import stylesheets


// import scripts






(0,_Storage_js__WEBPACK_IMPORTED_MODULE_5__["default"])().clear();
(0,_Storage_js__WEBPACK_IMPORTED_MODULE_5__["default"])().init();

(0,_header_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_project_directory_js__WEBPACK_IMPORTED_MODULE_4__["default"])().init();
(0,_app_js__WEBPACK_IMPORTED_MODULE_2__["default"])().init();
(0,_calendar_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxpQkFBaUIsT0FBTyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtB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RUEsV0FBVztBQUNYOzs7Ozs7VUMxUUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDcUI7O0FBRXJCO0FBQ2lDO0FBQ047QUFDVTtBQUNRO0FBQ1Y7O0FBRW5DLHVEQUFPO0FBQ1AsdURBQU87O0FBRVAsc0RBQU07QUFDTixpRUFBTztBQUNQLG1EQUFHO0FBQ0gsd0RBQVEsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9Qcm9qZWN0LWxvZ2ljLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL1RvZG8tbG9naWMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jYWxlbmRhci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Byb2plY3QtZGlyZWN0b3J5LmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Bc3Npc3RhbnQ6d2dodEAyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMDs4MDAmZmFtaWx5PUJlcmtzaGlyZStTd2FzaDp3Z2h0QDIwMDszMDA7NDAwOzUwMCZmYW1pbHk9U3BhY2UrR3JvdGVzazp3Z2h0QDUwMCZmYW1pbHk9UXVpY2tzYW5kOndnaHRAMzAwOzQwMDs1MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogTm90ZXM6IFxcbiAqIEljb25zIGluIHRoZSBwcm9qZWN0IGRpcmVjdG9yeSBhbmQgY2hpbGRyZW4gb2YgdGhlIFByb2plY3RzL1RhZ3MgZm9sZGVyIGNhbiBoYXZlIGJldHRlciBtYXJnaW5zLlxcbiAqLyBcXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICBib2R5IHtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG5cXG4gIC5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgI2NvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgfVxcbn1cXG5cXG4qIHtcXG4gIGZvbnQtZmFtaWx5OiBBc3Npc3RhbnQsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgcGFkZGluZzogMCAwLjUlO1xcbiAgYmFja2dyb3VuZDogI2Y2ZjdmOTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIG1hcmdpbjogNXB4O1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuZGQge1xcbiAgY29sb3I6ICNhYWE7XFxuICBmb250LXNpemU6IDAuODVyZW07XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW46IDBweCAyMHB4O1xcbn1cXG5cXG5kdCB7XFxuICBwYWRkaW5nOiAwIDFyZW0gMXJlbSAxcmVtO1xcbiAgY29sb3I6IHJnYig3NywgNjcsIDExNyk7XFxuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBBcmlhbDtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcbn1cXG5cXG5oMSB7XFxuICBmb250LWZhbWlseTogJ0JlcmtzaGlyZSBTd2FzaCcsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtc2hhZG93OlxcbiAgICAwIDFweCAwICNEMUM0RTksIFxcbiAgICAwIDJweCAwICM5NTc1Q0QsIFxcbiAgICAwIDNweCAwICM2NzNBQjcsIFxcbiAgICAwIDRweCAwICM1MTJEQTgsIFxcbiAgICAwIDVweCAwICMzMTFCOTIsXFxuICAgIFxcbiAgICAwIDZweCAxcHggcmdiYSgwLDAsMCwuMSksIFxcbiAgICAwIDAgNXB4IHJnYmEoMCwwLDAsLjEpLCBcXG4gICAgMCAxcHggM3B4IHJnYmEoMCwwLDAsLjMpLCBcXG4gICAgMCAzcHggNXB4IHJnYmEoMCwwLDAsLjIpLCBcXG4gICAgMCA1cHggMTBweCByZ2JhKDAsMCwwLC4yNSksIFxcbiAgICAwIDEwcHggMTBweCByZ2JhKDAsMCwwLC4yKSwgXFxuICAgIDAgMjBweCAyMHB4IHJnYmEoMCwwLDAsLjE1KTtcXG59XFxuXFxuaDMge1xcbiAgcGFkZGluZzogMC41ZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY29sb3I6ICMzZDMyNjc7XFxufVxcblxcbmxpIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGNvbG9yOiAjM2QzMjY3O1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4xNSk7XFxufVxcblxcbi5hZGQtYnV0dG9uIHtcXG4gIGNvbG9yOiAjYWFhO1xcbn1cXG5cXG4uY2FsZW5kYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHdpZHRoOiAxNy41dnc7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY29sb3ItbGFiZWwge1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIGZvbnQtc2l6ZTogMC41cmVtICFpbXBvcnRhbnQ7XFxufVxcblxcbi5jb21wbGV0ZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogIzc4NjRjMjtcXG4gIGNvbG9yOiAjYWFhO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIHBhZGRpbmc6IDAgMC41JTtcXG4gIGhlaWdodDogMTB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaWNvbi1yaWdodCB7XFxuICBmb250LXNpemU6IDAuOXJlbSAhaW1wb3J0YW50O1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5tYWluID4gbGkge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGJvcmRlcjogMXB4ICNlZWUgc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW46IDJweCAwO1xcbn1cXG5cXG4ubWFpbiA+IGxpOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmRmZDtcXG59XFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG4gIGZsZXg6IDI7XFxuICBtYXJnaW46IDAgNXZ3O1xcbn1cXG5cXG4ubWF0ZXJpYWwtaWNvbnMubWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQge1xcbiAgd2lkdGg6IDE4cHg7XFxuICBoZWlnaHQ6IDE4cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tYXRlcmlhbC1pY29ucy1vdXRsaW5lZCB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5tYXRlcmlhbC1pY29ucyB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDcuNXB4O1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3QtdGl0bGUge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi50aW1lZ3JpZCB7XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMi41dmg7XFxuICBjb2xvcjogIzNkMzI2NztcXG4gIGJvcmRlci10b3A6IHNvbGlkICNlZWUgMXB4O1xcbn1cXG5cXG4jYWRkLW5ldy1wcm9qZWN0IHtcXG4gIG1hcmdpbi1sZWZ0OiAyMC41cHg7XFxufVxcbiNjYWxlbmRhclRhYmxlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcXG4gIGhlaWdodDogNzV2aDtcXG4gIHdpZHRoOiAxNXZ3O1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSggMCwgMCwgMCwgMC40ICk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDE1cHggKTtcXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCAxNXB4ICk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmOGZhO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbiNjb250ZW50ID4gKiB7XFxuICBoZWlnaHQ6IDg1dmg7XFxufVxcblxcbiNjdXJyZW50LXRpbWUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0NDRkYjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAycHg7XFxufVxcblxcbiNkb3duLWFycm93LCAjbGVmdC1hcnJvdyB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuI2lucHV0LXRpdGxlIHtcXG4gIHdpZHRoOiA5OCU7XFxuICBwYWRkaW5nOiAxJTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuI3Byb2ZpbGUge1xcbiAgY29sb3I6IGNvcmFsO1xcbiAgZm9udC1zaXplOiAzLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4jcHJvamVjdHMtY29udGFpbmVyIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuI3Byb2plY3RzLWNvbnRhaW5lciA+IGxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNwcm9qZWN0cy1jb250YWluZXIgPiBsaSA+ICoge1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4jcHJvamVjdHMtY29udGFpbmVyID4gbGkgPiBkaXYge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuICB3aWR0aDogMTcuNXZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuXFxuI3NpZGViYXIgPiBsaSwgaDMge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qICN0YWdzOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufSAqL1xcblxcbiN0YWdzIHtcXG4gIGNvbG9yOiAjRDFDNEU5O1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4jdGFncyA+IHNwYW4ge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG4jdGFzay1idXR0b24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjogI2FhYTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y4ZmE7XFxuICBib3JkZXI6IDFweCAjZWVlIHNvbGlkO1xcbiAgdHJhbnNpdGlvbjogYm9yZGVyIDAuMjVzIGVhc2UtaW4sIGNvbG9yIDAuMjVzIGVhc2UtaW47XFxufVxcblxcbiN0YXNrLWJ1dHRvbjpob3ZlciB7XFxuICBib3JkZXI6IDFweCAjNjQ0NGRiIHNvbGlkO1xcbiAgY29sb3I6ICM2NDQ0ZGI7XFxufVxcblxcbiN1c2VyLWlucHV0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbjo6cGxhY2Vob2xkZXIge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4udGFzay1idXR0b24tYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7O0VBRUU7O0FBRUY7RUFDRTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0Usa0RBQWtEO0VBQ2xELGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5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aEIsV0FBVztFQUNYLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHFEQUFxRDtBQUN2RDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QXNzaXN0YW50OndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwJmZhbWlseT1CZXJrc2hpcmUrU3dhc2g6d2dodEAyMDA7MzAwOzQwMDs1MDAmZmFtaWx5PVNwYWNlK0dyb3Rlc2s6d2dodEA1MDAmZmFtaWx5PVF1aWNrc2FuZDp3Z2h0QDMwMDs0MDA7NTAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbi8qIE5vdGVzOiBcXG4gKiBJY29ucyBpbiB0aGUgcHJvamVjdCBkaXJlY3RvcnkgYW5kIGNoaWxkcmVuIG9mIHRoZSBQcm9qZWN0cy9UYWdzIGZvbGRlciBjYW4gaGF2ZSBiZXR0ZXIgbWFyZ2lucy5cXG4gKi8gXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgYm9keSB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxuXFxuICAuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gICNjb250ZW50IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gIH1cXG59XFxuXFxuKiB7XFxuICBmb250LWZhbWlseTogQXNzaXN0YW50LCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHBhZGRpbmc6IDAgMC41JTtcXG4gIGJhY2tncm91bmQ6ICNmNmY3Zjk7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBtYXJnaW46IDVweDtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbmRkIHtcXG4gIGNvbG9yOiAjYWFhO1xcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luOiAwcHggMjBweDtcXG59XFxuXFxuZHQge1xcbiAgcGFkZGluZzogMCAxcmVtIDFyZW0gMXJlbTtcXG4gIGNvbG9yOiByZ2IoNzcsIDY3LCAxMTcpO1xcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgQXJpYWw7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsaW5lLWhlaWdodDogMThweDtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1mYW1pbHk6ICdCZXJrc2hpcmUgU3dhc2gnLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LXNoYWRvdzpcXG4gICAgMCAxcHggMCAjRDFDNEU5LCBcXG4gICAgMCAycHggMCAjOTU3NUNELCBcXG4gICAgMCAzcHggMCAjNjczQUI3LCBcXG4gICAgMCA0cHggMCAjNTEyREE4LCBcXG4gICAgMCA1cHggMCAjMzExQjkyLFxcbiAgICBcXG4gICAgMCA2cHggMXB4IHJnYmEoMCwwLDAsLjEpLCBcXG4gICAgMCAwIDVweCByZ2JhKDAsMCwwLC4xKSwgXFxuICAgIDAgMXB4IDNweCByZ2JhKDAsMCwwLC4zKSwgXFxuICAgIDAgM3B4IDVweCByZ2JhKDAsMCwwLC4yKSwgXFxuICAgIDAgNXB4IDEwcHggcmdiYSgwLDAsMCwuMjUpLCBcXG4gICAgMCAxMHB4IDEwcHggcmdiYSgwLDAsMCwuMiksIFxcbiAgICAwIDIwcHggMjBweCByZ2JhKDAsMCwwLC4xNSk7XFxufVxcblxcbmgzIHtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiAjM2QzMjY3O1xcbn1cXG5cXG5saSB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBjb2xvcjogIzNkMzI2NztcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMTUpO1xcbn1cXG5cXG4uYWRkLWJ1dHRvbiB7XFxuICBjb2xvcjogI2FhYTtcXG59XFxuXFxuLmNhbGVuZGFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICB3aWR0aDogMTcuNXZ3O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNvbG9yLWxhYmVsIHtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBmb250LXNpemU6IDAuNXJlbSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uY29tcGxldGUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICM3ODY0YzI7XFxuICBjb2xvcjogI2FhYTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBwYWRkaW5nOiAwIDAuNSU7XFxuICBoZWlnaHQ6IDEwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmljb24tcmlnaHQge1xcbiAgZm9udC1zaXplOiAwLjlyZW0gIWltcG9ydGFudDtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4ubWFpbiA+IGxpIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBib3JkZXI6IDFweCAjZWVlIHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWFyZ2luOiAycHggMDtcXG59XFxuXFxuLm1haW4gPiBsaTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGZkZmQ7XFxufVxcblxcbi5tYWluLWNvbnRhaW5lciB7XFxuICBmbGV4OiAyO1xcbiAgbWFyZ2luOiAwIDV2dztcXG59XFxuXFxuLm1hdGVyaWFsLWljb25zLm1hdGVyaWFsLWljb25zLW91dGxpbmVkIHtcXG4gIHdpZHRoOiAxOHB4O1xcbiAgaGVpZ2h0OiAxOHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4ubWF0ZXJpYWwtaWNvbnMge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA3LjVweDtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LXRpdGxlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGltZWdyaWQge1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDIuNXZoO1xcbiAgY29sb3I6ICMzZDMyNjc7XFxuICBib3JkZXItdG9wOiBzb2xpZCAjZWVlIDFweDtcXG59XFxuXFxuI2FkZC1uZXctcHJvamVjdCB7XFxuICBtYXJnaW4tbGVmdDogMjAuNXB4O1xcbn1cXG4jY2FsZW5kYXJUYWJsZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXFxuICBoZWlnaHQ6IDc1dmg7XFxuICB3aWR0aDogMTV2dztcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoIDAsIDAsIDAsIDAuNCApO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCAxNXB4ICk7XFxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggMTVweCApO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjhmYTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4jY29udGVudCA+ICoge1xcbiAgaGVpZ2h0OiA4NXZoO1xcbn1cXG5cXG4jY3VycmVudC10aW1lIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NDQ0ZGI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMnB4O1xcbn1cXG5cXG4jZG93bi1hcnJvdywgI2xlZnQtYXJyb3cge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbiNpbnB1dC10aXRsZSB7XFxuICB3aWR0aDogOTglO1xcbiAgcGFkZGluZzogMSU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbiNwcm9maWxlIHtcXG4gIGNvbG9yOiBjb3JhbDtcXG4gIGZvbnQtc2l6ZTogMy41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuI3Byb2plY3RzLWNvbnRhaW5lciB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbiNwcm9qZWN0cy1jb250YWluZXIgPiBsaSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jcHJvamVjdHMtY29udGFpbmVyID4gbGkgPiAqIHtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuI3Byb2plY3RzLWNvbnRhaW5lciA+IGxpID4gZGl2IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgd2lkdGg6IDE3LjV2dztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNzaWRlYmFyID4gbGksIGgzIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiAjdGFnczpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn0gKi9cXG5cXG4jdGFncyB7XFxuICBjb2xvcjogI0QxQzRFOTtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuI3RhZ3MgPiBzcGFuIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuI3Rhc2stYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY29sb3I6ICNhYWE7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmOGZhO1xcbiAgYm9yZGVyOiAxcHggI2VlZSBzb2xpZDtcXG4gIHRyYW5zaXRpb246IGJvcmRlciAwLjI1cyBlYXNlLWluLCBjb2xvciAwLjI1cyBlYXNlLWluO1xcbn1cXG5cXG4jdGFzay1idXR0b246aG92ZXIge1xcbiAgYm9yZGVyOiAxcHggIzY0NDRkYiBzb2xpZDtcXG4gIGNvbG9yOiAjNjQ0NGRiO1xcbn1cXG5cXG4jdXNlci1pbnB1dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG46OnBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLnRhc2stYnV0dG9uLWFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3QocHJvamVjdCwgZHVlRGF0ZSkge1xuICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICB0aGlzLnRvZG9zID0gW107XG4gIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gIHRoaXMuaWQgPSBjcnlwdG8ucmFuZG9tVVVJRCgpO1xufSIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL1Byb2plY3QtbG9naWMuanNcIjtcbmltcG9ydCBJdGVtIGZyb20gXCIuL1RvZG8tbG9naWMuanNcIjtcblxuLy8gU2V0IGRhdGEgY29uc3RcbmZ1bmN0aW9uIGNyZWF0ZURlZmF1bHRJdGVtcygpIHtcbiAgY29uc29sZS5sb2coYGNyZWF0ZURlZmF1bHRJdGVtcygpOiBTdG9yYWdlKCkuZ2V0KCkgPSAke1N0b3JhZ2UoKS5nZXQoKX1gKTtcblxuICAvLyBDcmVhdGUgZW1wdHkgYXJyYXlcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShbXSkpO1xuXG4gIC8vIFNldCBkZWZhdWx0IFByb2plY3RzXG4gIFN0b3JhZ2UoKS5zZXQobmV3IFByb2plY3QoXCJUb2RvIExpc3QgMVwiLCBcIjEyLTEyLTIwMjFcIikpO1xuXG4gIC8vIFNldCBkZWZhdWx0IFRhc2tcbiAgdmFyIHRlc3RJdGVtMSA9IG5ldyBJdGVtKFwiV2VsY29tZSB0byBUYXNrRWFzeSFcIik7XG4gIHRlc3RJdGVtMS5kZXRhaWxzLnB1c2goXG4gICAgXCJ3d3cuZHlsYW5qYW1lcy5pc1wiLFxuICAgIFwid3d3LmdpdGh1Yi5jb20vZHlsYW5qYW1lc1wiLFxuICAgIFwi4oaQIENoZWNrIG91dCB0aGUgY3JlYXRvclwiXG4gICk7XG5cbiAgU3RvcmFnZSgpLmFkZFRhc2sodGVzdEl0ZW0xLCAwKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RvcmFnZSgpIHtcbiAgY29uc3QgaW5pdCA9IChmdW5jdGlvbiAoKSB7XG4gICAgLy8gTG9hZCBkZWZhdWx0IGlmIG5ldmVyIGluaXRpYXRlZCBiZWZvcmUuIFxuICAgIC8vXG4gICAgLy8gdGhpcy5nZXQoKSBpcyBhbiBlbXB0eSBhcnJheS5cbiAgICAvLyB0aGlzLnNldEFjdGl2ZSgpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZ2V0KCkpOyAvLyBQcm92ZXMgdGhhdCB0aGlzLmdldCgpIGNvbnRhaW5zIGFuIGVtcHR5IGFycmF5LlxuICAgIC8vIGlmICh0aGlzLmdldCgpLmxlbmd0aCA9PSAwKSB7XG4gICAgLy8gICByZXR1cm4gY3JlYXRlRGVmYXVsdEl0ZW1zKCk7XG4gICAgLy8gfVxuICB9KTtcblxuICBjb25zdCBnZXRBY3RpdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY3RpdmVcIikgfHwgMCk7XG4gIH1cblxuICBjb25zdCBzZXRBY3RpdmUgPSBmdW5jdGlvbiAoYWN0aXZlKSB7XG4gICAgY29uc3QgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xuICAgIC8vIFdoeSB3b3VsZCBJIGRvIGl0IHRoaXMgd2F5P1xuICAgIGZvciAodmFyIGkgaW4gcHJvamVjdHMpIHtcbiAgICAgIGlmIChhY3RpdmUuaWQgPT0gcHJvamVjdHNbaV0uaWQpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWN0aXZlXCIsIEpTT04uc3RyaW5naWZ5KGkpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWN0aXZlXCIsIDApO1xuICB9XG5cbiAgY29uc3QgZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHx8IFtdOyAvLyBSZXR1cm5zIFwicHJvamVjdHNcIiBvciBlbXB0eSBhcnJheVxuICB9XG5cbiAgY29uc3Qgc2V0ID0gZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgICB0aGlzLmdldCgpLnB1c2gocHJvamVjdCk7XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5nZXQoKSkpO1xuICB9XG5cbiAgY29uc3QgYWRkUHJvamVjdCA9IGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gICAgY29uc3QgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHx8IFtdO1xuICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbiAgfVxuXG4gIGNvbnN0IGRlbGV0ZVByb2plY3QgPSBmdW5jdGlvbiAocHJvamVjdCkge1xuICAgIGxldCBhcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XG4gICAgYXJyYXkgPSBhcnJheS5maWx0ZXIoZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIG9iai5pZCAhPT0gcHJvamVjdC5pZDtcbiAgICB9KTtcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShhcnJheSkpO1xuICB9XG5cbiAgY29uc3QgYWRkVGFzayA9IGZ1bmN0aW9uICh0YXNrKSB7XG4gICAgY29uc3QgYXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHx8IFtdO1xuICAgIC8vIGNvbnNvbGUubG9nKGFycmF5KTtcbiAgICBpZiAoYXJyYXkubGVuZ3RoIDwgMSkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFwiVGhlcmUgaXNuJ3QgYW4gYXJyYXkgaGVyZSFcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFycmF5W3RoaXMuZ2V0QWN0aXZlKCldLnRvZG9zLnB1c2godGFzayk7XG4gICAgfVxuICAgIHJldHVybiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KGFycmF5KSk7XG4gIH1cblxuICBjb25zdCBkZWxldGVUYXNrID0gZnVuY3Rpb24gKHRhc2spIHtcbiAgICBjb25zdCBhcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XG4gICAgYXJyYXlbZ2V0QWN0aXZlKCldLnRvZG9zID0gYXJyYXlbZ2V0QWN0aXZlKCldLnRvZG9zLmZpbHRlcihmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gb2JqLmlkICE9PSB0YXNrO1xuICAgIH0pO1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KGFycmF5KSk7XG4gIH1cblxuICBjb25zdCBpbnNwZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZ2V0KCkpO1xuICB9XG5cbiAgY29uc3QgY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICB9XG5cbiAgcmV0dXJuIHsgaW5pdCwgZ2V0LCBzZXQsIGdldEFjdGl2ZSwgc2V0QWN0aXZlLCBhZGRQcm9qZWN0LCBkZWxldGVQcm9qZWN0LCBhZGRUYXNrLCBkZWxldGVUYXNrLCBpbnNwZWN0LCBjbGVhcn07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSXRlbSh0aXRsZSwgZHVlRGF0ZSkge1xuICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gIHRoaXMuZGV0YWlscyA9IFtdO1xuICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICB0aGlzLmlkID0gY3J5cHRvLnJhbmRvbVVVSUQoKTtcbn0iLCJpbXBvcnQgSXRlbSBmcm9tIFwiLi9Ub2RvLWxvZ2ljLmpzXCI7XG5pbXBvcnQgU3RvcmFnZSBmcm9tIFwiLi9TdG9yYWdlLmpzXCI7XG5cbi8vIC5yZW1vdmUoKSBtb25rZXkgcGF0Y2hcbkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMpO1xufTtcbk5vZGVMaXN0LnByb3RvdHlwZS5yZW1vdmUgPSBIVE1MQ29sbGVjdGlvbi5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKGxldCBpID0gdGhpcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGlmICh0aGlzW2ldICYmIHRoaXNbaV0ucGFyZW50RWxlbWVudCkge1xuICAgICAgdGhpc1tpXS5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXNbaV0pO1xuICAgIH1cbiAgfVxufTtcblxuZnVuY3Rpb24gY3JlYXRlVXNlcklucHV0KCkge1xuICBjb25zdCB1c2VySW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB1c2VySW5wdXREaXYuY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG4gIHVzZXJJbnB1dERpdi5pZCA9IFwidXNlci1pbnB1dC1jb250YWluZXJcIjtcblxuICBjb25zdCB1c2VySW5wdXRMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgdXNlcklucHV0TGkuaWQgPSBcInVzZXItaW5wdXRcIjtcbiAgXG4gIGNvbnN0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlucHV0VGl0bGUudHlwZSA9IFwidGV4dFwiO1xuICBpbnB1dFRpdGxlLmlkID0gXCJpbnB1dC10aXRsZVwiO1xuICBpbnB1dFRpdGxlLnBsYWNlaG9sZGVyID0gXCJFbnRlciB0YXNrIG5hbWUuLi5cIjtcbiAgdXNlcklucHV0TGkuYXBwZW5kQ2hpbGQoaW5wdXRUaXRsZSk7XG5cbiAgY29uc3QgYnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgXG4gIGNvbnN0IGlucHV0Q2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgaW5wdXRDYW5jZWwuaW5uZXJUZXh0ID0gXCJDYW5jZWxcIjtcbiAgaW5wdXRDYW5jZWwub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICByZW1vdmVVc2VySW5wdXQoKTtcbiAgfTtcbiAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKGlucHV0Q2FuY2VsKTtcblxuICBjb25zdCBpbnB1dFNhdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBpbnB1dFNhdmUuaWQgPSBcImlucHV0LXNhdmVcIjtcbiAgaW5wdXRTYXZlLmlubmVyVGV4dCA9IFwiU2F2ZVwiO1xuXG4gIGlucHV0U2F2ZS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChpbnB1dFRpdGxlICYmIGlucHV0VGl0bGUudmFsdWUpIHtcbiAgICAgIFN0b3JhZ2UoKS5hZGRUYXNrKG5ldyBJdGVtKGlucHV0VGl0bGUudmFsdWUpKTtcbiAgICAgIGFwcCgpLnJlZnJlc2goKTtcbiAgICAgIHJlbW92ZVVzZXJJbnB1dCgpO1xuICAgIH07XG4gIH07XG4gIGJ1dHRvbkRpdi5hcHBlbmRDaGlsZChpbnB1dFNhdmUpO1xuICBcbiAgdXNlcklucHV0TGkuYXBwZW5kQ2hpbGQoYnV0dG9uRGl2KTtcblxuICAvLyBBZGQga2V5dXAgZXZlbnRzXG4gIGlucHV0VGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGNvbnN0IGlucHV0U2F2ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtc2F2ZVwiKTsgXG4gICAgY29uc3QgaW5wdXRDYW5jZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWNhbmNlbFwiKTtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpbnB1dFNhdmUuY2xpY2soKTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IDI3KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaW5wdXRDYW5jZWwuY2xpY2soKTtcbiAgICB9XG4gIH0pO1xuICAgIFxuICB1c2VySW5wdXREaXYuYXBwZW5kQ2hpbGQodXNlcklucHV0TGkpO1xuICBcbiAgbWFpbi5jaGlsZHJlblsyXS5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlckJlZ2luXCIsIHVzZXJJbnB1dERpdik7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVVzZXJJbnB1dCgpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VyLWlucHV0LWNvbnRhaW5lclwiKS5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcbiAgLy8gQ3JlYXRlIG1haW4gdGFza3MgY29udGFpbmVyXG4gIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRhaW5lclwiKTtcbiAgbWFpbkNvbnRhaW5lci5pZCA9IFwibWFpblwiO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG1haW5Db250YWluZXIpO1xuXG4gIC8vIEFkZCB0YXNrcyB0aXRsZSBESVYgKGhpZGRlbilcbiAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcbiAgdGl0bGVEaXYuaWQgPSBcInRhc2stbGlzdC10aXRsZVwiO1xuICBjb25zdCBtYWluVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIG1haW5UaXRsZS5pbm5lclRleHQgPSBcIlRhc2tzXCI7XG4gIHRpdGxlRGl2LmFwcGVuZENoaWxkKG1haW5UaXRsZSk7XG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xuXG4gIC8vIEFkZCBkZWZhdWx0IG1lc3NhZ2UgKGhpZGRlbilcbiAgY29uc3QgZGVmYXVsdE1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGRlZmF1bHRNZXNzYWdlLmlkID0gXCJkZWZhdWx0TWVzc2FnZVwiO1xuICBkZWZhdWx0TWVzc2FnZS5pbm5lclRleHQgPSBcIk5vIHRhc2tzIGZvdW5kLiBDbGljayAnQWRkIFRhc2snIHRvIGNyZWF0ZSBvbmUgbm93LlwiO1xuICBkZWZhdWx0TWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIHRpdGxlRGl2LmFwcGVuZENoaWxkKGRlZmF1bHRNZXNzYWdlKTtcblxuICAvLyBBZGQgdGFza0xpc3Qgc2VjdGlvblxuICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhc2tMaXN0LmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuICB0YXNrTGlzdC5pZCA9IFwidGFzay1saXN0XCI7XG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQodGFza0xpc3QpO1xuXG4gIC8vIEFkZCBcIkFkZCBUYXNrXCIgYnV0dG9uIGRpdlxuICBjb25zdCB0YXNrQnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFza0J1dHRvbkRpdi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcbiAgdGFza0J1dHRvbkRpdi5pZCA9IFwidGFzay1idXR0b24tZGl2XCI7XG4gIHtcbiAgICAvLyBDcmVhdGUgYnV0dG9uXG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBhZGRUYXNrQnV0dG9uLmlkID0gXCJ0YXNrLWJ1dHRvblwiO1xuICAgIGFkZFRhc2tCdXR0b24uaW5uZXJUZXh0ID0gXCJBZGQgVGFza1wiO1xuICAgIGFkZFRhc2tCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNyZWF0ZVVzZXJJbnB1dCgpO1xuICAgIH07XG4gICAgdGFza0J1dHRvbkRpdi5hcHBlbmRDaGlsZChhZGRUYXNrQnV0dG9uKTtcblxuICAgIC8vIEFkZCBpY29uXG4gICAgYWRkVGFza0J1dHRvbi5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICBcImFmdGVyYmVnaW5cIixcbiAgICAgICc8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCI+YWRkX3Rhc2s8L2k+J1xuICAgICk7XG4gIH1cbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQnV0dG9uRGl2KTtcbn1cblxuZnVuY3Rpb24gYWRkTGlzdEl0ZW0oaXRlbSkge1xuICAvLyBHZXQgdGFza0xpc3RcbiAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stbGlzdFwiKTtcblxuICAvLyBDcmVhdGUgbGlcbiAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cbiAgLy8gQ3JlYXRlIGRsXG4gIGNvbnN0IGRsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRsXCIpO1xuXG4gIGxpLmFwcGVuZENoaWxkKGRsKTtcblxuICAvLyBDcmVhdGUgZHRcbiAgY29uc3QgZHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZHRcIik7XG4gIGR0LmlubmVyVGV4dCA9IGl0ZW0udGl0bGU7XG5cbiAgLy8gQWRkIFwiY29tcGxldGVcIiBvbmNsaWNrIGZ1bmN0aW9uXG4gIGR0Lm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICBTdG9yYWdlKCkuZGVsZXRlVGFzayhpdGVtLmlkKTtcbiAgICB0aGlzLmNsYXNzTmFtZSArPSBcImNvbXBsZXRlXCI7XG4gICAgc2V0VGltZW91dCggKCkgPT4geyBhcHAoKS5yZWZyZXNoKCk7IH0sIDEwMDApOyAgICBcbiAgfTtcblxuICBkbC5hcHBlbmRDaGlsZChkdCk7XG5cbiAgLy8gQ3JlYXRlIGRkIChkZXRhaWxzKSAoaWYgYW55KVxuICBmb3IgKGNvbnN0IGRldGFpbCBpbiBpdGVtLmRldGFpbHMpIHtcbiAgICBjb25zdCBkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkZFwiKTtcbiAgICBkZC5pbm5lclRleHQgPSBpdGVtLmRldGFpbHNbZGV0YWlsXTtcbiAgICBkbC5hcHBlbmRDaGlsZChkZCk7XG4gIH1cblxuICB0YXNrTGlzdC5hcHBlbmRDaGlsZChsaSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwcCgpIHtcbiAgY29uc3QgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjcmVhdGVNYWluKCk7XG4gICAgaWYgKFN0b3JhZ2UoKS5nZXQoKSkge1xuICAgICAgdGhpcy5wb3B1bGF0ZSgwKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcG9wdWxhdGUgPSBmdW5jdGlvbiAoY3VycmVudCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIilcblxuICAgIGlmIChTdG9yYWdlKCkuZ2V0KCkubGVuZ3RoIDwgMSkge1xuICAgICAgbWFpbi5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICB9IGVsc2UgeyBtYWluLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIn1cblxuICAgIGlmIChTdG9yYWdlKCkuZ2V0KClbY3VycmVudF0pIHtcbiAgICAgIGNvbnN0IHRhc2tzID0gU3RvcmFnZSgpLmdldCgpW2N1cnJlbnRdLnRvZG9zO1xuICAgICAgY29uc3QgZGVmYXVsdE1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlZmF1bHRNZXNzYWdlXCIpO1xuXG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gaW4gdGFza3MpIHtcbiAgICAgICAgYWRkTGlzdEl0ZW0odGFza3NbaXRlbV0pO1xuICAgICAgfVxuXG4gICAgICBpZiAodGFza3MubGVuZ3RoID09IDApIHtcbiAgICAgICAgZGVmYXVsdE1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlZmF1bHRNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH1cbiAgICB9XG5cdH07XG5cbiAgY29uc3QgY2xlYXIgPSBmdW5jdGlvbiAocGFyZW50KSB7XG4gICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHJlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gU2V0IGNvbnN0IHZhcmlhYmxlc1xuXHRcdGNvbnN0IGN1cnJlbnQgPSBTdG9yYWdlKCkuZ2V0QWN0aXZlKCk7XG5cdFx0Y29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stbGlzdFwiKTtcblxuXHRcdC8vIENsZWFyICN0YXNrLWxpc3QgY29udGVudFxuXHRcdHRoaXMuY2xlYXIodGFza0xpc3QpO1xuXG5cdFx0aWYgKGN1cnJlbnQpIHtcblx0XHRcdHRoaXMucG9wdWxhdGUoY3VycmVudCk7IC8vIFBvcHVsYXRlXG5cdFx0fVxuXHR9XG5cbiAgcmV0dXJuIHsgaW5pdCwgY2xlYXIsIHBvcHVsYXRlLCByZWZyZXNoIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FsZW5kYXIoKSB7XG4gIC8vIENyZWF0ZSBzaWRlYmFyIENBTEVOREFSIHNlY3Rpb25cbiAgdmFyIGNhbGVuZGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2FsZW5kYXIuY2xhc3NMaXN0LmFkZChcImNhbGVuZGFyXCIpO1xuICBjYWxlbmRhci5pZCA9IFwiY2FsZW5kYXJcIjtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjYWxlbmRhcik7XG5cbiAgLy8gU2V0IGRhdGVcbiAgY29uc3QgbW9udGhzID0gW1xuICAgIFwiSmFudWFyeVwiLFxuICAgIFwiRmVicnVhcnlcIixcbiAgICBcIk1hcmNoXCIsXG4gICAgXCJBcHJpbFwiLFxuICAgIFwiTWF5XCIsXG4gICAgXCJKdW5lXCIsXG4gICAgXCJKdWx5XCIsXG4gICAgXCJBdWd1c3RcIixcbiAgICBcIlNlcHRlbWJlclwiLFxuICAgIFwiT2N0b2JlclwiLFxuICAgIFwiTm92ZW1iZXJcIixcbiAgICBcIkRlY2VtYmVyXCIsXG4gIF07XG4gIGNvbnN0IGQgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBkYXRlU3RyaW5nID0gYCR7XG4gICAgbW9udGhzW2QuZ2V0TW9udGgoKV1cbiAgfSAke2QuZ2V0RGF0ZSgpfSwgJHtkLmdldEZ1bGxZZWFyKCl9YDtcblxuICAvLyBQcmludCBkYXRlIHRvIERJVlxuICB2YXIgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgZGF0ZS5pbm5lclRleHQgPSBkYXRlU3RyaW5nO1xuICBjYWxlbmRhci5hcHBlbmRDaGlsZChkYXRlKTtcblxuICAvLyBQcmludCB0aW1lcyBvZiBkYXlcbiAgdmFyIHRhYmxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAge1xuICAgIHZhciB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcbiAgICB0YWJsZS5pZCA9IFwiY2FsZW5kYXJUYWJsZVwiO1xuICAgIC8vIFByaW50IGVhY2ggaG91ciBvZiBkYXlcbiAgICBmb3IgKHZhciBzdGFydCA9IDA7IHN0YXJ0IDwgMjQ7IHN0YXJ0KyspIHtcbiAgICAgIHZhciBob3VyID0gbmV3IERhdGUoKTtcbiAgICAgIGhvdXIuc2V0SG91cnMoc3RhcnQpO1xuXG4gICAgICAvLyBEZXRlcm1pbmUgd2hldGhlciBBTSBvciBQTVxuICAgICAgdmFyIGFtcG07XG4gICAgICBpZiAoc3RhcnQgPCAxMikge1xuICAgICAgICBhbXBtID0gXCJhbVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYW1wbSA9IFwicG1cIjtcbiAgICAgIH1cblxuICAgICAgdmFyIHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgICAgdHIuY2xhc3NMaXN0LmFkZChcInRpbWVncmlkXCIpO1xuICAgICAgaWYgKGhvdXIuZ2V0SG91cnMoKSAlIDEyID09IDApIHtcbiAgICAgICAgdHIuaW5uZXJUZXh0ID0gYDEyJHthbXBtfWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0ci5pbm5lclRleHQgPSBgJHtob3VyLmdldEhvdXJzKCkgJSAxMn0ke2FtcG19YDtcbiAgICAgIH1cbiAgICAgIHRhYmxlLmFwcGVuZENoaWxkKHRyKTtcbiAgICB9XG4gICAgY29uc3QgY3VycmVudFRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGN1cnJlbnRUaW1lLmlkID0gXCJjdXJyZW50LXRpbWVcIjtcbiAgICBjdXJyZW50VGltZS5zdHlsZS5sZWZ0ID0gXCIzMHB4XCI7XG4gICAgdGFibGUuYXBwZW5kQ2hpbGQoY3VycmVudFRpbWUpO1xuICAgIHRhYmxlRGl2LmFwcGVuZENoaWxkKHRhYmxlKTtcbiAgfVxuICBjYWxlbmRhci5hcHBlbmRDaGlsZCh0YWJsZURpdik7XG5cbiAgLy8gQ3JlYXRlICdjdXJyZW50LXRpbWUnIHRpbWUgbWFya2VyXG4gIGNvbnN0IGN1cnJlbnRUaW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50LXRpbWVcIik7XG4gIGxldCBjdXJyZW50SG91cnMgPSBuZXcgRGF0ZSgpLmdldEhvdXJzKCk7XG4gIGxldCBjdXJyZW50TWludXRlcyA9IG5ldyBEYXRlKCkuZ2V0TWludXRlcygpO1xuICBsZXQgaG91clBvc2l0aW9uID0gKHRhYmxlLnNjcm9sbEhlaWdodCAvIDI0ICogY3VycmVudEhvdXJzKTtcbiAgbGV0IG1pbnV0ZVBvc2l0aW9uID0gKHRhYmxlLnNjcm9sbEhlaWdodCAvIDI0IC8gNjAgKiBjdXJyZW50TWludXRlcyk7XG4gIGN1cnJlbnRUaW1lLnN0eWxlLnRvcCA9IGAke2hvdXJQb3NpdGlvbiArIG1pbnV0ZVBvc2l0aW9ufXB4YDtcblxuICAvLyBBdXRvbWF0aWNhbGx5IHNjcm9sbCBuZWFyIGN1cnJlbnQgdGltZVxuICBpZiAoaG91ci5nZXRIb3VycygpID4gMTIpIHtcbiAgICB0YWJsZS5zY3JvbGxUb3AgPSB0YWJsZS5zY3JvbGxIZWlnaHQ7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoZWFkZXIoKSB7XG4gIGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgXCJhZnRlcmJlZ2luXCIsXG4gICAgICAnXFxcbiAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cXFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWxlZnRcIj5cXFxuICAgICAgICA8L2Rpdj5cXFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWNlbnRlclwiPlxcXG4gICAgICAgICAgPGgxIGlkPVwiaGVhZGVyLWNlbnRlclwiIHN0eWxlPVwid2hpdGUtc3BhY2U6IHByZS13cmFwO1wiPlRhc2tFYXN5PC9oMT5cXFxuICAgICAgICA8L2Rpdj5cXFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLXJpZ2h0XCI+XFxcbiAgICAgICAgICA8IS0tIEFkZCBidXR0b25zIHRvIGluaXRpYXRlIGF1dGggc2VxdWVuY2UgYW5kIHNpZ24gb3V0IC0tPlxcXG4gICAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVwiZy1zaWduaW4yXCIgZGF0YS1vbnN1Y2Nlc3M9XCJvblNpZ25JblwiPjwvZGl2PiAtLT5cXFxuICAgICAgICAgIDxidXR0b24gaWQ9XCJhdXRob3JpemVfYnV0dG9uXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPlNpZ24gSW48L2J1dHRvbj5cXFxuICAgICAgICAgIDxidXR0b24gaWQ9XCJzaWdub3V0X2J1dHRvblwiIHN0eWxlPVwiZGlzcGxheTogbm9uZVwiPlNpZ24gT3V0PC9idXR0b24+XFxcbiAgICAgICAgPC9kaXY+XFxcbiAgICAgIDwvZGl2PlxcXG4gICAgJ1xuICAgICk7XG59IiwiaW1wb3J0IFN0b3JhZ2UgZnJvbSBcIi4vU3RvcmFnZS5qc1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vUHJvamVjdC1sb2dpYy5qc1wiO1xuaW1wb3J0IGFwcCBmcm9tIFwiLi9hcHAuanNcIjtcblxuZnVuY3Rpb24gY3JlYXRlU2lkZWJhcigpIHtcbiAgLy8gQ3JlYXRlIGNvbnRlbnQgbGVmdCBzaWRlYmFyXG4gIHZhciBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2lkZWJhci5pZCA9IFwic2lkZWJhclwiO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHNpZGViYXIpO1xuXG4gIHZhciBwcm9maWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvZmlsZS5jbGFzc0xpc3QuYWRkKFwibWF0ZXJpYWwtaWNvbnNcIik7XG4gIHByb2ZpbGUuaW5uZXJUZXh0ID0gXCJhY2NvdW50X2NpcmNsZVwiO1xuICBwcm9maWxlLmlkID0gXCJwcm9maWxlXCI7XG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvZmlsZSk7XG5cbiAgLy8gQWRkIHNpZGViYXIgVEFHUyBzZWN0aW9uXG4gIHZhciB0YWdUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgdGFnVGl0bGUuaW5uZXJUZXh0ID0gXCJUYWdzXCI7XG4gIHRhZ1RpdGxlLmlkID0gXCJ0YWdzXCI7XG4gIHRhZ1RpdGxlLmluc2VydEFkamFjZW50SFRNTChcbiAgICBcImFmdGVyYmVnaW5cIixcbiAgICAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPnRhZzwvc3Bhbj4nXG4gICk7XG4gIHRhZ1RpdGxlLmluc2VydEFkamFjZW50SFRNTChcbiAgICBcImJlZm9yZWVuZFwiLFxuICAgICc8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCIgaWQ9XCJsZWZ0LWFycm93XCI+ZXhwYW5kX21vcmU8L3NwYW4+J1xuICApO1xuICBzaWRlYmFyLmFwcGVuZENoaWxkKHRhZ1RpdGxlKTtcblxuICAvLyBBZGQgc2lkZWJhciBQUk9KRUNUUyBzZWN0aW9uXG4gIHZhciBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIHByb2plY3RUaXRsZS5pbm5lclRleHQgPSBcIlByb2plY3RzXCI7XG4gIHByb2plY3RUaXRsZS5pZCA9IFwicHJvamVjdHNcIjtcbiAgcHJvamVjdFRpdGxlLmluc2VydEFkamFjZW50SFRNTChcbiAgICBcImFmdGVyYmVnaW5cIixcbiAgICAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmZvbGRlcjwvc3Bhbj4nXG4gICk7XG4gIHByb2plY3RUaXRsZS5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgXCJiZWZvcmVlbmRcIixcbiAgICAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiIGlkPVwiZG93bi1hcnJvd1wiPmV4cGFuZF9tb3JlPC9zcGFuPidcbiAgKTtcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuXG4gIC8vIEFkZCBzaWRlYmFyIFBST0pFQ1RTIGRpdlxuICB2YXIgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0c0NvbnRhaW5lci5pZCA9IFwicHJvamVjdHMtY29udGFpbmVyXCI7XG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdHNDb250YWluZXIpO1xuXG4gIC8vIEFkZCBcIkFkZCBOZXdcIiBidXR0b25cbiAgdmFyIGFkZE5ldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgYWRkTmV3LmNsYXNzTGlzdC5hZGQoXCJhZGQtYnV0dG9uXCIpO1xuICBhZGROZXcuaWQgPSBcImFkZC1uZXctcHJvamVjdFwiO1xuICBhZGROZXcuaW5uZXJUZXh0ID0gJ0FkZCBOZXcnO1xuICBhZGROZXcub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICBjcmVhdGVQcm9qZWN0SW5wdXQoKTtcbiAgfTtcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChhZGROZXcpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0SW5wdXQoKSB7XG4gIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3RJbnB1dC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pbnB1dFwiKTtcbiAgcHJvamVjdElucHV0LmlkID0gXCJwcm9qZWN0LWlucHV0LWNvbnRhaW5lclwiO1xuICB7XG5cdFx0Y29uc3QgcHJvamVjdElucHV0TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cdFx0cHJvamVjdElucHV0TGkuaWQgPSBcInByb2plY3RJbnB1dC1pbnB1dFwiO1xuXG4gICAgY29uc3QgaW5wdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dFRpdGxlLnR5cGUgPSBcInRleHRcIjtcbiAgICBpbnB1dFRpdGxlLnZhbHVlID0gbnVsbDtcbiAgICBpbnB1dFRpdGxlLmlkID0gXCJwcm9qZWN0LWlucHV0LXRpdGxlXCI7XG4gICAgaW5wdXRUaXRsZS5wbGFjZWhvbGRlciA9IFwiRW50ZXIgcHJvamVjdCBuYW1lLi4uXCI7XG4gICAgcHJvamVjdElucHV0TGkuYXBwZW5kQ2hpbGQoaW5wdXRUaXRsZSk7XG5cdFxuICAgIGNvbnN0IGJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRcbiAgICBjb25zdCBpbnB1dENhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgaW5wdXRDYW5jZWwuaW5uZXJUZXh0ID0gXCJDYW5jZWxcIjtcbiAgICBpbnB1dENhbmNlbC5pZCA9IFwicHJvamVjdC1pbnB1dC1jYW5jZWxcIjtcbiAgICBpbnB1dENhbmNlbC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWlucHV0LWNvbnRhaW5lclwiKS5yZW1vdmUoKTtcbiAgICB9O1xuICAgIGJ1dHRvbkRpdi5hcHBlbmRDaGlsZChpbnB1dENhbmNlbCk7XG5cdFx0XHRcbiAgICB2YXIgaW5wdXRTYXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBpbnB1dFNhdmUuaW5uZXJUZXh0ID0gXCJTYXZlXCI7XG4gICAgaW5wdXRTYXZlLmlkID0gXCJwcm9qZWN0LWlucHV0LXNhdmVcIjtcbiAgICBpbnB1dFNhdmUub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1pbnB1dC10aXRsZVwiKTtcblxuICAgICAgaWYgKGlucHV0VGl0bGUgJiYgaW5wdXRUaXRsZS52YWx1ZSkge1xuXHRcdFx0XHQvLyBBZGQgdGhlIHByb2plY3QgdG8gU3RvcmFnZSgpXG5cdFx0XHRcdFN0b3JhZ2UoKS5hZGRQcm9qZWN0KG5ldyBQcm9qZWN0KGlucHV0VGl0bGUudmFsdWUpKTtcblxuXHRcdFx0XHQvLyBSZW1vdmUgdXNlciBpbnB1dCBmaWVsZCAoQWx0ZXJuYXRpdmU6IHRvZ2dsZSB1c2VyLWlucHV0LWNvbnRhaW5lciB2aXNpYmxlL2hpZGRlbilcblx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWlucHV0LWNvbnRhaW5lclwiKS5yZW1vdmUoKTtcblxuXHRcdFx0XHQvLyBSZWZyZXNoIHNpZGViYXJcblx0XHRcdFx0c2lkZWJhcigpLnJlZnJlc2goKTtcblxuXHRcdFx0XHQvLyBTaW11bGF0ZSBjbGlja1xuXHRcdFx0XHRjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0XCIpO1xuXHRcdFx0XHRwcm9qZWN0c1twcm9qZWN0cy5sZW5ndGggLSAxXS5jbGljaygpO1xuXHRcdFx0fSBlbHNlIHJldHVybjtcbiAgICB9O1xuICAgIGJ1dHRvbkRpdi5hcHBlbmRDaGlsZChpbnB1dFNhdmUpO1xuXHRcdFx0XG5cbiAgICAvLyBBZGQga2V5dXAgZXZlbnRzXG4gICAgaW5wdXRUaXRsZS5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBjb25zdCBpbnB1dFNhdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtaW5wdXQtc2F2ZVwiKTtcbiAgICAgIGNvbnN0IGlucHV0Q2FuY2VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWlucHV0LWNhbmNlbFwiKTtcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpbnB1dFNhdmUuY2xpY2soKTtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaW5wdXRDYW5jZWwuY2xpY2soKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHByb2plY3RJbnB1dExpLmFwcGVuZENoaWxkKGJ1dHRvbkRpdik7XG5cblx0XHRwcm9qZWN0SW5wdXQuYXBwZW5kQ2hpbGQocHJvamVjdElucHV0TGkpO1xuXHR9XG4gIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy1jb250YWluZXJcIik7XG4gIHByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3RJbnB1dCk7XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RJdGVtKGl0ZW0pIHtcbiAgLy8gc2V0IGNvbnN0YW50IHZhcmlhYmxlc1xuICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtY29udGFpbmVyXCIpO1xuICBjb25zdCBwcm9qZWN0RGF0YSA9IFN0b3JhZ2UoKS5nZXQoKTtcblxuICAvLyBDcmVhdGUgaDMgZWxlbWVudFxuICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBwcm9qZWN0LmlkID0gcHJvamVjdERhdGFbaXRlbV0uaWQ7XG4gIHByb2plY3QuaW5uZXJUZXh0ID0gcHJvamVjdERhdGFbaXRlbV0ucHJvamVjdDtcbiAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcbiAgcHJvamVjdC5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgXCJhZnRlcmJlZ2luXCIsXG4gICAgJzxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgaWNvbi1sZWZ0IGNvbG9yLWxhYmVsXCI+Y2lyY2xlPC9zcGFuPidcbiAgKTtcbiAgcHJvamVjdC5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgXCJiZWZvcmVlbmRcIixcbiAgICAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZCBpY29uLXJpZ2h0IGRlbGV0ZS1wcm9qZWN0LWJ0blwiPmNsZWFyPC9zcGFuPidcbiAgKTtcbiAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAvLyBTZXQgY29uc3RhbnQgdmFyaWFibGVzXG5cdGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3RcIik7XG4gIGNvbnN0IGRlbGV0ZVByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZGVsZXRlLXByb2plY3QtYnRuXCIpO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcblx0XHRwcm9qZWN0c1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBUb2dnbGUgXCJhY3RpdmVcIiBjbGFzc1xuICAgICAgICBjb25zdCBhY3RpdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWN0aXZlXCIpWzBdOyAvLyBTZXQgY29uc3QgdG8gZmlyc3QgZWxlbWVudCBjb250YWluaW5nIFwiYWN0aXZlXCIgY2xhc3NcbiAgICAgICAgYWN0aXZlLmNsYXNzTmFtZSA9IGFjdGl2ZS5jbGFzc05hbWUucmVwbGFjZShcIiBhY3RpdmVcIiwgXCJcIik7IFxuICAgICAgICB0aGlzLmNsYXNzTmFtZSArPSBcIiBhY3RpdmVcIjtcblxuICAgICAgICAvLyBTZXQgU3RvcmFnZSgpLnNldEFjdGl2ZSgpIHRvIHRoaXNcbiAgICAgICAgU3RvcmFnZSgpLnNldEFjdGl2ZSh0aGlzKTtcblxuICAgICAgICAvLyBSZWZyZXNoIG1haW4gI3Rhc2stbGlzdCB3aXRoIGFjdGl2ZSBjb250ZW50c1xuICAgICAgICBhcHAoKS5yZWZyZXNoKFN0b3JhZ2UoKS5nZXRBY3RpdmUoKSk7XG4gICAgfSk7XG5cdH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGRlbGV0ZVByb2plY3QubGVuZ3RoOyBpKyspIHtcbiAgICBkZWxldGVQcm9qZWN0W2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG5cdFx0XHQvLyBEZWxldGUgdGhpcyBpdGVtIGluIFN0b3JhZ2UoKVxuXHRcdFx0U3RvcmFnZSgpLmRlbGV0ZVByb2plY3QodGhpcy5wYXJlbnRFbGVtZW50KTtcblxuXHRcdFx0Ly8gUmVmcmVzaCBzaWRlYmFyXG5cdFx0XHRzaWRlYmFyKCkucmVmcmVzaCgpO1xuXG5cdFx0XHRyZXR1cm4gZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGROYXZMaXN0ZW5lcigpIHtcbiAgY29uc3QgYXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRvd24tYXJyb3dcIik7XG4gIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy1jb250YWluZXJcIik7XG4gIGNvbnN0IGFkZE5ld1Byb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1uZXctcHJvamVjdFwiKTtcbiAgbGV0IGV4cGFuZGVkID0gdHJ1ZTtcblxuICBhcnJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmIChleHBhbmRlZCA9PSB0cnVlKSB7XG4gICAgICBhcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZSg5MGRlZylcIjtcbiAgICAgIHByb2plY3RzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIGFkZE5ld1Byb2plY3Quc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgcmV0dXJuIChleHBhbmRlZCA9IGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXJyb3cuc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoMGRlZylcIjtcbiAgICAgIHByb2plY3RzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICBhZGROZXdQcm9qZWN0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICByZXR1cm4gKGV4cGFuZGVkID0gdHJ1ZSk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2lkZWJhcigpIHtcbiAgY29uc3QgaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIFNldCBjb25zdGFudCB2YXJpYWJsZXNcbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0XCIpO1xuXG4gICAgLy8gQ3JlYXRlIHNpZGViYXJcbiAgICBjcmVhdGVTaWRlYmFyKCk7XG5cbiAgICAvLyBQb3B1bGF0ZSBzaWRlYmFyXG4gICAgdGhpcy5wb3B1bGF0ZSgpO1xuXG4gICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyc1xuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgYWRkTmF2TGlzdGVuZXIoKTtcblxuICAgIC8vIElmIGEgcHJvamVjdCBleGlzdHMsIHNldCBpbml0aWFsIHByb2plY3QgYXMgYWN0aXZlIGJ5IGRlZmF1bHRcbiAgICBpZiAocHJvamVjdHMubGVuZ3RoID4gMCkge1xuICAgICAgcHJvamVjdHNbMF0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgIFN0b3JhZ2UoKS5zZXRBY3RpdmUoMCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2VsZWN0ID0gZnVuY3Rpb24oKSB7XG5cbiAgfVxuXG4gIGNvbnN0IGNsZWFyID0gZnVuY3Rpb24ocGFyZW50KSB7XG4gICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHJlZnJlc2ggPSBmdW5jdGlvbigpIHtcblx0XHRjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtY29udGFpbmVyXCIpO1xuXHRcdGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3RcIik7XG5cbiAgICB0aGlzLmNsZWFyKHByb2plY3RzQ29udGFpbmVyKTtcblx0XHR0aGlzLnBvcHVsYXRlKCk7XG5cbiAgICBpZiAocHJvamVjdHMubGVuZ3RoID4gMCkge1xuXHRcdFx0Y29uc3QgYWN0aXZlID0gcHJvamVjdHMubGVuZ3RoIC0gMTtcblx0XHRcdHByb2plY3RzW2FjdGl2ZV0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblx0XHRcdFN0b3JhZ2UoKS5zZXRBY3RpdmUoYWN0aXZlKTtcblx0XHRcdGFkZEV2ZW50TGlzdGVuZXJzKCk7XG5cblx0XHRcdC8vIFRoaXMgZG9lc24ndCB3b3JrIGZvciBzb21lIHJlYXNvbi4gT3IgZG9lcyBpdD9cblx0XHR9XG4gICAgYXBwKCkucmVmcmVzaChTdG9yYWdlKCkuZ2V0QWN0aXZlKCkpO1xuXHR9XG5cbiAgY29uc3QgZGVsZXRlUHJvamVjdCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBTdG9yYWdlKCkuZGVsZXRlUHJvamVjdCh0aGlzKTtcbiAgfVxuXG4gIGNvbnN0IHBvcHVsYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgZm9yICh2YXIgaXRlbSBpbiBTdG9yYWdlKCkuZ2V0KCkpIHtcbiAgICAgIGFkZFByb2plY3RJdGVtKGl0ZW0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IGluaXQsIHNlbGVjdCwgY2xlYXIsIHJlZnJlc2gsIGRlbGV0ZVByb2plY3QsIHBvcHVsYXRlIH07XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGltcG9ydCBzdHlsZXNoZWV0c1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuLy8gaW1wb3J0IHNjcmlwdHNcbmltcG9ydCBoZWFkZXIgZnJvbSBcIi4vaGVhZGVyLmpzXCI7XG5pbXBvcnQgYXBwIGZyb20gXCIuL2FwcC5qc1wiO1xuaW1wb3J0IGNhbGVuZGFyIGZyb20gXCIuL2NhbGVuZGFyLmpzXCI7XG5pbXBvcnQgc2lkZWJhciBmcm9tIFwiLi9wcm9qZWN0LWRpcmVjdG9yeS5qc1wiO1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSBcIi4vU3RvcmFnZS5qc1wiO1xuXG5TdG9yYWdlKCkuY2xlYXIoKTtcblN0b3JhZ2UoKS5pbml0KCk7XG5cbmhlYWRlcigpO1xuc2lkZWJhcigpLmluaXQoKTtcbmFwcCgpLmluaXQoKTtcbmNhbGVuZGFyKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9