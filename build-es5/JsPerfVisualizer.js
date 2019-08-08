"use strict";

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function webpackUniversalModuleDefinition(root, factory) {
  if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && (typeof module === "undefined" ? "undefined" : _typeof(module)) === 'object') module.exports = factory();else if (typeof define === 'function' && define.amd) define([], factory);else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') exports["JsPerfVisualizer"] = factory();else root["JsPerfVisualizer"] = factory();
})(window, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/


        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // create a fake namespace object

      /******/
      // mode & 1: value is a module id, require it

      /******/
      // mode & 2: merge all properties of value into the ns

      /******/
      // mode & 4: return value when already ns object

      /******/
      // mode & 8|1: behave like require

      /******/


      __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/

        if (mode & 8) return value;
        /******/

        if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
        /******/

        var ns = Object.create(null);
        /******/

        __webpack_require__.r(ns);
        /******/


        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/

        if (mode & 2 && typeof value != 'string') for (var key in value) {
          __webpack_require__.d(ns, key, function (key) {
            return value[key];
          }.bind(null, key));
        }
        /******/

        return ns;
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = 11);
      /******/
    }(
    /************************************************************************/

    /******/
    [
    /* 0 */

    /***/
    function (module, exports, __webpack_require__) {
      (function webpackUniversalModuleDefinition(root, factory) {
        if (true) module.exports = factory();else {}
      })(window, function () {
        return (
          /******/
          function (modules) {
            // webpackBootstrap

            /******/
            // The module cache

            /******/
            var installedModules = {};
            /******/

            /******/
            // The require function

            /******/

            function __webpack_require__(moduleId) {
              /******/

              /******/
              // Check if module is in cache

              /******/
              if (installedModules[moduleId]) {
                /******/
                return installedModules[moduleId].exports;
                /******/
              }
              /******/
              // Create a new module (and put it into the cache)

              /******/


              var module = installedModules[moduleId] = {
                /******/
                i: moduleId,

                /******/
                l: false,

                /******/
                exports: {}
                /******/

              };
              /******/

              /******/
              // Execute the module function

              /******/

              modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
              /******/

              /******/
              // Flag the module as loaded

              /******/

              module.l = true;
              /******/

              /******/
              // Return the exports of the module

              /******/

              return module.exports;
              /******/
            }
            /******/

            /******/

            /******/
            // expose the modules object (__webpack_modules__)

            /******/


            __webpack_require__.m = modules;
            /******/

            /******/
            // expose the module cache

            /******/

            __webpack_require__.c = installedModules;
            /******/

            /******/
            // define getter function for harmony exports

            /******/

            __webpack_require__.d = function (exports, name, getter) {
              /******/
              if (!__webpack_require__.o(exports, name)) {
                /******/
                Object.defineProperty(exports, name, {
                  enumerable: true,
                  get: getter
                });
                /******/
              }
              /******/

            };
            /******/

            /******/
            // define __esModule on exports

            /******/


            __webpack_require__.r = function (exports) {
              /******/
              if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                /******/
                Object.defineProperty(exports, Symbol.toStringTag, {
                  value: 'Module'
                });
                /******/
              }
              /******/


              Object.defineProperty(exports, '__esModule', {
                value: true
              });
              /******/
            };
            /******/

            /******/
            // create a fake namespace object

            /******/
            // mode & 1: value is a module id, require it

            /******/
            // mode & 2: merge all properties of value into the ns

            /******/
            // mode & 4: return value when already ns object

            /******/
            // mode & 8|1: behave like require

            /******/


            __webpack_require__.t = function (value, mode) {
              /******/
              if (mode & 1) value = __webpack_require__(value);
              /******/

              if (mode & 8) return value;
              /******/

              if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
              /******/

              var ns = Object.create(null);
              /******/

              __webpack_require__.r(ns);
              /******/


              Object.defineProperty(ns, 'default', {
                enumerable: true,
                value: value
              });
              /******/

              if (mode & 2 && typeof value != 'string') for (var key in value) {
                __webpack_require__.d(ns, key, function (key) {
                  return value[key];
                }.bind(null, key));
              }
              /******/

              return ns;
              /******/
            };
            /******/

            /******/
            // getDefaultExport function for compatibility with non-harmony modules

            /******/


            __webpack_require__.n = function (module) {
              /******/
              var getter = module && module.__esModule ?
              /******/
              function getDefault() {
                return module['default'];
              } :
              /******/
              function getModuleExports() {
                return module;
              };
              /******/

              __webpack_require__.d(getter, 'a', getter);
              /******/


              return getter;
              /******/
            };
            /******/

            /******/
            // Object.prototype.hasOwnProperty.call

            /******/


            __webpack_require__.o = function (object, property) {
              return Object.prototype.hasOwnProperty.call(object, property);
            };
            /******/

            /******/
            // __webpack_public_path__

            /******/


            __webpack_require__.p = "";
            /******/

            /******/

            /******/
            // Load entry module and return exports

            /******/

            return __webpack_require__(__webpack_require__.s = "./src/GameGUI.js");
            /******/
          }(
          /************************************************************************/

          /******/
          {
            /***/
            "./src/Component.js":
            /*!**************************!*\
              !*** ./src/Component.js ***!
              \**************************/

            /*! exports provided: Component, default */

            /***/
            function srcComponentJs(module, __webpack_exports__, __webpack_require__) {
              "use strict";

              __webpack_require__.r(__webpack_exports__);
              /* harmony export (binding) */


              __webpack_require__.d(__webpack_exports__, "Component", function () {
                return Component;
              });

              var Component =
              /*#__PURE__*/
              function () {
                function Component(option) {
                  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

                  _classCallCheck(this, Component);

                  this.option = option;
                  this.config = config;
                  this.id = typeof config.id !== 'undefined' ? config.id : this.uid();
                  this.type = this.getTypeOfComp(this);
                  this.dom = this.createDomElement(this.type, this.id);
                  this.listObjCompChild = {};
                  this.html = '';
                  this.ctrChild = -1;
                  this.state = {};
                  this.isStateUpdated = false;
                  this.dataFromParentAsStringPrev = undefined;
                }

                _createClass(Component, [{
                  key: "createDomElement",
                  value: function createDomElement(type, id) {
                    var domElement = document.createElement('div');
                    domElement.classList.add(this.camelCaseToNakeCase(type));
                    domElement.setAttribute('id', id);
                    return domElement;
                  }
                }, {
                  key: "renderToHtmlAndDomify",
                  value: function renderToHtmlAndDomify(dataFromParent) {
                    // Skip if Data Passed in from Parent Comp. is the same
                    // or if State has changed
                    if (this.html !== '') {
                      var renderBecauseDataPassedInChanged = this.isRenderBecauseDataPassedInChanged(dataFromParent);

                      if (!renderBecauseDataPassedInChanged && !this.isStateUpdated) {
                        return false;
                      }
                    } // Render to HTML String


                    this.ctrChild = -1;
                    var htmlNewRender = this.render(dataFromParent);
                    this.isStateUpdated = false;
                    this.ctrChild = -1; // Skip ReDomify if Comp Shallow Render looks the same

                    if (htmlNewRender === this.html) {
                      return false;
                    }

                    this.html = htmlNewRender; // DOMify HTML String

                    this.dom.innerHTML = this.html; // Do predefined bindings automatically right after DOM is ready

                    this.doBind(); // Run Life Cycle Method if defined on Comp Instance

                    if (typeof this.afterRender !== 'undefined') {
                      this.afterRender();
                    } // Inject Child Comps if any


                    this.replacePlaceholderAll(this.dom);
                    return true;
                  }
                }, {
                  key: "isRenderBecauseDataPassedInChanged",
                  value: function isRenderBecauseDataPassedInChanged(dataFromParent) {
                    // Scenario 1)  prev === undefined && passed === undefined --> DON'T RENDER
                    if (typeof this.dataFromParentAsStringPrev === 'undefined' && typeof dataFromParent === 'undefined') {
                      return false;
                    } // Scenario 2)  prev !== undefined && passed === undefined --> RENDER


                    if (typeof this.dataFromParentAsStringPrev !== 'undefined' && typeof dataFromParent === 'undefined') {
                      this.dataFromParentAsStringPrev = dataFromParent;
                      return true;
                    } // Scenario 3)  prev === undefined && passed !== undefined --> COMPARE


                    if (typeof this.dataFromParentAsStringPrev === 'undefined' && typeof dataFromParent !== 'undefined') {
                      var dataFromParentAsString = JSON.stringify(dataFromParent); // Compare / same       --> DON'T RENDER

                      if (this.dataFromParentAsStringPrev === dataFromParentAsString) {
                        return false; // Compare / different  --> RENDER
                      } else {
                        this.dataFromParentAsStringPrev = dataFromParentAsString;
                        return true;
                      }
                    } // Scenario 4)  prev !== undefined && passed !== undefined --> COMPARE


                    if (typeof this.dataFromParentAsStringPrev !== 'undefined' && typeof dataFromParent !== 'undefined') {
                      var _dataFromParentAsString = JSON.stringify(dataFromParent); // Compare / same       --> DON'T RENDER


                      if (this.dataFromParentAsStringPrev === _dataFromParentAsString) {
                        return false; // Compare / different  --> RENDER
                      } else {
                        this.dataFromParentAsStringPrev = _dataFromParentAsString;
                        return true;
                      }
                    }

                    console.error('Something unexpected happened o_0?');
                    debugger;
                  }
                }, {
                  key: "replacePlaceholderAll",
                  value: function replacePlaceholderAll() {
                    // Get a list of all Placeholder Child Component
                    var nodeListPlaceholder = this.dom.querySelectorAll('.comp-placeholder'); // Iterate over all Placeholder Child Comps and replace them with Comp DOM

                    for (var indexNodeListPlaceholder = 0; indexNodeListPlaceholder < nodeListPlaceholder.length; indexNodeListPlaceholder++) {
                      var dPlaceholder = nodeListPlaceholder[indexNodeListPlaceholder];
                      var compChild = this.listObjCompChild[indexNodeListPlaceholder];
                      compChild.dom = dPlaceholder.insertAdjacentElement('beforebegin', compChild.dom);
                      dPlaceholder.parentNode.removeChild(dPlaceholder);
                    }
                  }
                }, {
                  key: "include",
                  value: function include(ClassComp, dataFromParent, config) {
                    // If Smart Comp (Class)
                    if (ClassComp.prototype instanceof Component) {
                      this.ctrChild++;
                      var nameComp = ClassComp.name;
                      var compChild = this.listObjCompChild[this.ctrChild]; // Create new instance of Comp only if it hasn't been created yet

                      if (typeof compChild === 'undefined') {
                        compChild = this.listObjCompChild[this.ctrChild] = new ClassComp(this.option, config); // Hook up Game GUI Methods: scheduler, indexComp
                        // Note: make sure you dont bind this, you need scheduler to resolve to ui framework,
                        //       and not to comp instance.
                        //       These hooked up methods wont be called at constructon time,
                        //       therefore there is no problem hooking them up after Comp Instantiation.

                        compChild.scheduleRendering = this.scheduleRendering;
                        compChild.indexComp = this.indexComp; // Index Comp right after its created and even before its rendered.
                        // Note: The rendering of Root Comp will trigger the indexing of all Sub Comps.

                        this.indexComp(compChild);
                      }

                      compChild.renderToHtmlAndDomify(dataFromParent);
                      return "<div class=\"comp-placeholder\" type=\"".concat(nameComp, "\" ctr-child=\"").concat(this.ctrChild, "\"></div>"); // If Dumb Comp (Function)
                    } else {
                      return ClassComp(dataFromParent, this.option);
                    }
                  }
                }, {
                  key: "doBind",
                  value: function doBind() {
                    // ui-click | Do click handler bindings automatically right after rendering
                    // Note: Binding happens before Child Comps are injected so Encapsulation is unharmed
                    var listNodeBtn = this.dom.querySelectorAll('[ui-click]');

                    for (var indexListNodeBtn = 0; indexListNodeBtn < listNodeBtn.length; indexListNodeBtn++) {
                      var nodeBtn = listNodeBtn[indexListNodeBtn];
                      var handler = nodeBtn.getAttribute('ui-click');

                      if (typeof this[handler] === 'undefined') {
                        console.warn("UI: click handler called \"".concat(handler, "\" can't be found on the Component."));
                        continue;
                      }

                      nodeBtn.addEventListener('click', this[handler].bind(this), false);
                    }
                  }
                }, {
                  key: "getState",
                  value: function getState() {
                    return this.state;
                  }
                }, {
                  key: "setState",
                  value: function setState(stateNew) {
                    this.state = stateNew;
                    this.isStateUpdated = true;

                    if (typeof this.scheduleRendering !== 'undefined') {
                      this.scheduleRendering(this);
                    }
                  }
                }, {
                  key: "camelCaseToNakeCase",
                  // # Utility
                  // # #######
                  value: function camelCaseToNakeCase(str) {
                    return str.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
                  }
                }, {
                  key: "uid",
                  value: function uid() {
                    return Date.now() + '' + Math.round(Math.random() * 100000);
                  }
                }, {
                  key: "getTypeOfComp",
                  value: function getTypeOfComp(comp) {
                    // Issue: Babel transpiles MyCompName to MyCompName_ImportedCompName. We are filtering this off here.
                    //        If we ignored this, the code wouldn't be compilable.
                    var type = Object.getPrototypeOf(comp).constructor.name;
                    var listTypePart = type.split('_');
                    return listTypePart[listTypePart.length - 1];
                  }
                }]);

                return Component;
              }();
              /* harmony default export */


              __webpack_exports__["default"] = Component;
              /***/
            },

            /***/
            "./src/GameGUI.js":
            /*!************************!*\
              !*** ./src/GameGUI.js ***!
              \************************/

            /*! exports provided: GameGUI, default, Component */

            /***/
            function srcGameGUIJs(module, __webpack_exports__, __webpack_require__) {
              "use strict";

              __webpack_require__.r(__webpack_exports__);
              /* harmony export (binding) */


              __webpack_require__.d(__webpack_exports__, "GameGUI", function () {
                return GameGUI;
              });
              /* harmony import */


              var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              /*! ./Component */
              "./src/Component.js");
              /* harmony reexport (safe) */


              __webpack_require__.d(__webpack_exports__, "Component", function () {
                return _Component__WEBPACK_IMPORTED_MODULE_0__["Component"];
              });

              var GameGUI =
              /*#__PURE__*/
              function () {
                function GameGUI(RootComp, selectorGuiRoot, option) {
                  _classCallCheck(this, GameGUI);

                  // Reg Root Comp automatically if requirements are fulfilled
                  // Note: don't run it by default, you may want to control the steps.
                  if (typeof RootComp === 'undefined' || typeof selectorGuiRoot === 'undefined') {
                    return;
                  }

                  this.init(option);
                  this.regRootComp(RootComp, selectorGuiRoot); // Call the very first render ASAP
                  // Note:  Otherwise you might see a brief flash
                  //        Running render in the constructor means, all includes will be called recursively,
                  //        therefore all Comp / SubC omp Instantiation will happen sequentially when Game GUI is Instantiated.
                  //        That said, all Comps are indexed and ready to be accessed right after Game GUI Instantiation.

                  this.render();
                }

                _createClass(GameGUI, [{
                  key: "init",
                  value: function init() {
                    var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                    this.optionDefault = {
                      fps: 60
                    };
                    this.option = _objectSpread({}, this.optionDefault, {}, option);
                    this.isRenderingDue = false;
                    this.listObjIdRenderingScheduled = {}; // Indexed list of all rendered Comps

                    this.listObjTypeComp = {};
                    this.listObjIdComp = {}; // Note: Don't worry about calling render 60 times a sec,
                    // render method start with "if(!this.isRenderingDue ) return;"

                    this.tokenUiRender;

                    if (typeof interval !== 'undefined') {
                      this.tokenUiRender = interval.setInterval(this.render.bind(this), Math.floor(1000 / this.option.fps));
                    } else {
                      this.tokenUiRender = setInterval(this.render.bind(this), Math.floor(1000 / this.option.fps));
                    }
                  }
                }, {
                  key: "regRootComp",
                  value: function regRootComp(RootComp, selectorGuiRoot) {
                    // Get UI Root
                    this.domRoot = document.querySelector(selectorGuiRoot); // Skip if root DOM Element doesn't exist

                    if (this.domRoot === null) {
                      throw 'ERROR: DOM Root can\'t be found by using the provided selector: ' + selectorGuiRoot;
                    } // Instantiate Root Comp


                    this.rootComp = new RootComp(this.option); // Hook up Game GUI Methods: scheduler, indexComp
                    // Note: we dont want to pass in scheduler into comps, we want to keep comp constructor clean,
                    //       therefore we do it here manually for Root Comp, and child comps are managed the same way.

                    this.rootComp.scheduleRendering = this.scheduleRendering.bind(this);
                    this.rootComp.indexComp = this.indexComp.bind(this); // Index Root Comp
                    // Root Comp is an Instance of Component, therefore it is indexed the same way as every other Comp Inst.

                    this.indexComp(this.rootComp); // Schedule render the very first time

                    this.rootComp.scheduleRendering(this.rootComp); // Inject Root Comp into DOM

                    this.domRoot.insertAdjacentElement('afterbegin', this.rootComp.dom);
                  }
                }, {
                  key: "scheduleRendering",
                  value: function scheduleRendering(comp) {
                    this.isRenderingDue = true;
                    this.listObjIdRenderingScheduled[comp.id] = comp;
                  }
                }, {
                  key: "render",
                  value: function render() {
                    // Skipp rendering if there was no change
                    if (!this.isRenderingDue) {
                      return;
                    } // this.rootComp.renderToHtmlAndDomify();


                    for (var idComp in this.listObjIdRenderingScheduled) {
                      var comp = this.listObjIdRenderingScheduled[idComp];
                      var dataFromParentPrev = typeof comp.dataFromParentAsStringPrev !== 'undefined' ? JSON.parse(comp.dataFromParentAsStringPrev) : undefined;
                      comp.renderToHtmlAndDomify(dataFromParentPrev);
                      delete this.listObjIdRenderingScheduled[idComp];
                    }

                    this.isRenderingDue = false;
                  }
                }, {
                  key: "indexComp",
                  value: function indexComp(comp) {
                    // Index Comps by Type
                    this.listObjTypeComp[comp.type] = this.listObjTypeComp[comp.type] || [];
                    this.listObjTypeComp[comp.type].push(comp); // Check for Duplicate Comp ID

                    if (this.listObjIdComp[comp.id]) {
                      throw "Duplicate Comp ID is not allowed. Comp Type \"".concat(comp.type, "\", ID in question: ").concat(comp.id);
                    } // Index Comps by ID


                    this.listObjIdComp[comp.id] = comp;
                  }
                }, {
                  key: "getCompByType",
                  value: function getCompByType(type) {
                    return this.listObjTypeComp[type];
                  }
                }, {
                  key: "getCompById",
                  value: function getCompById(id) {
                    return this.listObjIdComp[id];
                  }
                }]);

                return GameGUI;
              }();
              /* harmony default export */


              __webpack_exports__["default"] = GameGUI;
              /***/
            }
            /******/

          })
        );
      });
      /***/

    },
    /* 1 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      /*
        MIT License http://www.opensource.org/licenses/mit-license.php
        Author Tobias Koppers @sokra
      */
      // css base code, injected by the css-loader
      // eslint-disable-next-line func-names

      module.exports = function (useSourceMap) {
        var list = []; // return the list of modules as css string

        list.toString = function toString() {
          return this.map(function (item) {
            var content = cssWithMappingToString(item, useSourceMap);

            if (item[2]) {
              return "@media ".concat(item[2], "{").concat(content, "}");
            }

            return content;
          }).join('');
        }; // import a list of modules into the list
        // eslint-disable-next-line func-names


        list.i = function (modules, mediaQuery) {
          if (typeof modules === 'string') {
            // eslint-disable-next-line no-param-reassign
            modules = [[null, modules, '']];
          }

          var alreadyImportedModules = {};

          for (var i = 0; i < this.length; i++) {
            // eslint-disable-next-line prefer-destructuring
            var id = this[i][0];

            if (id != null) {
              alreadyImportedModules[id] = true;
            }
          }

          for (var _i = 0; _i < modules.length; _i++) {
            var item = modules[_i]; // skip already imported module
            // this implementation is not 100% perfect for weird media query combinations
            // when a module is imported multiple times with different media queries.
            // I hope this will never occur (Hey this way we have smaller bundles)

            if (item[0] == null || !alreadyImportedModules[item[0]]) {
              if (mediaQuery && !item[2]) {
                item[2] = mediaQuery;
              } else if (mediaQuery) {
                item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
              }

              list.push(item);
            }
          }
        };

        return list;
      };

      function cssWithMappingToString(item, useSourceMap) {
        var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

        var cssMapping = item[3];

        if (!cssMapping) {
          return content;
        }

        if (useSourceMap && typeof btoa === 'function') {
          var sourceMapping = toComment(cssMapping);
          var sourceURLs = cssMapping.sources.map(function (source) {
            return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
          });
          return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
        }

        return [content].join('\n');
      } // Adapted from convert-source-map (MIT)


      function toComment(sourceMap) {
        // eslint-disable-next-line no-undef
        var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
        var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
        return "/*# ".concat(data, " */");
      }
      /***/

    },
    /* 2 */

    /***/
    function (module, exports, __webpack_require__) {
      /*
      	MIT License http://www.opensource.org/licenses/mit-license.php
      	Author Tobias Koppers @sokra
      */
      var stylesInDom = {};

      var memoize = function memoize(fn) {
        var memo;
        return function () {
          if (typeof memo === "undefined") memo = fn.apply(this, arguments);
          return memo;
        };
      };

      var isOldIE = memoize(function () {
        // Test for IE <= 9 as proposed by Browserhacks
        // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
        // Tests for existence of standard globals is to allow style-loader
        // to operate correctly into non-standard environments
        // @see https://github.com/webpack-contrib/style-loader/issues/177
        return window && document && document.all && !window.atob;
      });

      var getTarget = function getTarget(target, parent) {
        if (parent) {
          return parent.querySelector(target);
        }

        return document.querySelector(target);
      };

      var getElement = function (fn) {
        var memo = {};
        return function (target, parent) {
          // If passing function in options, then use it for resolve "head" element.
          // Useful for Shadow Root style i.e
          // {
          //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
          // }
          if (typeof target === 'function') {
            return target();
          }

          if (typeof memo[target] === "undefined") {
            var styleTarget = getTarget.call(this, target, parent); // Special case to return head of iframe instead of iframe itself

            if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
              try {
                // This will throw an exception if access to iframe is blocked
                // due to cross-origin restrictions
                styleTarget = styleTarget.contentDocument.head;
              } catch (e) {
                styleTarget = null;
              }
            }

            memo[target] = styleTarget;
          }

          return memo[target];
        };
      }();

      var singleton = null;
      var singletonCounter = 0;
      var stylesInsertedAtTop = [];

      var fixUrls = __webpack_require__(6);

      module.exports = function (list, options) {
        if (typeof DEBUG !== "undefined" && DEBUG) {
          if ((typeof document === "undefined" ? "undefined" : _typeof(document)) !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
        }

        options = options || {};
        options.attrs = _typeof(options.attrs) === "object" ? options.attrs : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
        // tags it will allow on a page

        if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE(); // By default, add <style> tags to the <head> element

        if (!options.insertInto) options.insertInto = "head"; // By default, add <style> tags to the bottom of the target

        if (!options.insertAt) options.insertAt = "bottom";
        var styles = listToStyles(list, options);
        addStylesToDom(styles, options);
        return function update(newList) {
          var mayRemove = [];

          for (var i = 0; i < styles.length; i++) {
            var item = styles[i];
            var domStyle = stylesInDom[item.id];
            domStyle.refs--;
            mayRemove.push(domStyle);
          }

          if (newList) {
            var newStyles = listToStyles(newList, options);
            addStylesToDom(newStyles, options);
          }

          for (var i = 0; i < mayRemove.length; i++) {
            var domStyle = mayRemove[i];

            if (domStyle.refs === 0) {
              for (var j = 0; j < domStyle.parts.length; j++) {
                domStyle.parts[j]();
              }

              delete stylesInDom[domStyle.id];
            }
          }
        };
      };

      function addStylesToDom(styles, options) {
        for (var i = 0; i < styles.length; i++) {
          var item = styles[i];
          var domStyle = stylesInDom[item.id];

          if (domStyle) {
            domStyle.refs++;

            for (var j = 0; j < domStyle.parts.length; j++) {
              domStyle.parts[j](item.parts[j]);
            }

            for (; j < item.parts.length; j++) {
              domStyle.parts.push(addStyle(item.parts[j], options));
            }
          } else {
            var parts = [];

            for (var j = 0; j < item.parts.length; j++) {
              parts.push(addStyle(item.parts[j], options));
            }

            stylesInDom[item.id] = {
              id: item.id,
              refs: 1,
              parts: parts
            };
          }
        }
      }

      function listToStyles(list, options) {
        var styles = [];
        var newStyles = {};

        for (var i = 0; i < list.length; i++) {
          var item = list[i];
          var id = options.base ? item[0] + options.base : item[0];
          var css = item[1];
          var media = item[2];
          var sourceMap = item[3];
          var part = {
            css: css,
            media: media,
            sourceMap: sourceMap
          };
          if (!newStyles[id]) styles.push(newStyles[id] = {
            id: id,
            parts: [part]
          });else newStyles[id].parts.push(part);
        }

        return styles;
      }

      function insertStyleElement(options, style) {
        var target = getElement(options.insertInto);

        if (!target) {
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        }

        var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

        if (options.insertAt === "top") {
          if (!lastStyleElementInsertedAtTop) {
            target.insertBefore(style, target.firstChild);
          } else if (lastStyleElementInsertedAtTop.nextSibling) {
            target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
          } else {
            target.appendChild(style);
          }

          stylesInsertedAtTop.push(style);
        } else if (options.insertAt === "bottom") {
          target.appendChild(style);
        } else if (_typeof(options.insertAt) === "object" && options.insertAt.before) {
          var nextSibling = getElement(options.insertAt.before, target);
          target.insertBefore(style, nextSibling);
        } else {
          throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
        }
      }

      function removeStyleElement(style) {
        if (style.parentNode === null) return false;
        style.parentNode.removeChild(style);
        var idx = stylesInsertedAtTop.indexOf(style);

        if (idx >= 0) {
          stylesInsertedAtTop.splice(idx, 1);
        }
      }

      function createStyleElement(options) {
        var style = document.createElement("style");

        if (options.attrs.type === undefined) {
          options.attrs.type = "text/css";
        }

        if (options.attrs.nonce === undefined) {
          var nonce = getNonce();

          if (nonce) {
            options.attrs.nonce = nonce;
          }
        }

        addAttrs(style, options.attrs);
        insertStyleElement(options, style);
        return style;
      }

      function createLinkElement(options) {
        var link = document.createElement("link");

        if (options.attrs.type === undefined) {
          options.attrs.type = "text/css";
        }

        options.attrs.rel = "stylesheet";
        addAttrs(link, options.attrs);
        insertStyleElement(options, link);
        return link;
      }

      function addAttrs(el, attrs) {
        Object.keys(attrs).forEach(function (key) {
          el.setAttribute(key, attrs[key]);
        });
      }

      function getNonce() {
        if (false) {}

        return __webpack_require__.nc;
      }

      function addStyle(obj, options) {
        var style, update, remove, result; // If a transform function was defined, run it on the css

        if (options.transform && obj.css) {
          result = typeof options.transform === 'function' ? options.transform(obj.css) : options.transform["default"](obj.css);

          if (result) {
            // If transform returns a value, use that instead of the original css.
            // This allows running runtime transformations on the css.
            obj.css = result;
          } else {
            // If the transform function returns a falsy value, don't add this css.
            // This allows conditional loading of css
            return function () {// noop
            };
          }
        }

        if (options.singleton) {
          var styleIndex = singletonCounter++;
          style = singleton || (singleton = createStyleElement(options));
          update = applyToSingletonTag.bind(null, style, styleIndex, false);
          remove = applyToSingletonTag.bind(null, style, styleIndex, true);
        } else if (obj.sourceMap && typeof URL === "function" && typeof URL.createObjectURL === "function" && typeof URL.revokeObjectURL === "function" && typeof Blob === "function" && typeof btoa === "function") {
          style = createLinkElement(options);
          update = updateLink.bind(null, style, options);

          remove = function remove() {
            removeStyleElement(style);
            if (style.href) URL.revokeObjectURL(style.href);
          };
        } else {
          style = createStyleElement(options);
          update = applyToTag.bind(null, style);

          remove = function remove() {
            removeStyleElement(style);
          };
        }

        update(obj);
        return function updateStyle(newObj) {
          if (newObj) {
            if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
              return;
            }

            update(obj = newObj);
          } else {
            remove();
          }
        };
      }

      var replaceText = function () {
        var textStore = [];
        return function (index, replacement) {
          textStore[index] = replacement;
          return textStore.filter(Boolean).join('\n');
        };
      }();

      function applyToSingletonTag(style, index, remove, obj) {
        var css = remove ? "" : obj.css;

        if (style.styleSheet) {
          style.styleSheet.cssText = replaceText(index, css);
        } else {
          var cssNode = document.createTextNode(css);
          var childNodes = style.childNodes;
          if (childNodes[index]) style.removeChild(childNodes[index]);

          if (childNodes.length) {
            style.insertBefore(cssNode, childNodes[index]);
          } else {
            style.appendChild(cssNode);
          }
        }
      }

      function applyToTag(style, obj) {
        var css = obj.css;
        var media = obj.media;

        if (media) {
          style.setAttribute("media", media);
        }

        if (style.styleSheet) {
          style.styleSheet.cssText = css;
        } else {
          while (style.firstChild) {
            style.removeChild(style.firstChild);
          }

          style.appendChild(document.createTextNode(css));
        }
      }

      function updateLink(link, options, obj) {
        var css = obj.css;
        var sourceMap = obj.sourceMap;
        /*
        	If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
        	and there is no publicPath defined then lets turn convertToAbsoluteUrls
        	on by default.  Otherwise default to the convertToAbsoluteUrls option
        	directly
        */

        var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

        if (options.convertToAbsoluteUrls || autoFixUrls) {
          css = fixUrls(css);
        }

        if (sourceMap) {
          // http://stackoverflow.com/a/26603875
          css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
        }

        var blob = new Blob([css], {
          type: "text/css"
        });
        var oldSrc = link.href;
        link.href = URL.createObjectURL(blob);
        if (oldSrc) URL.revokeObjectURL(oldSrc);
      }
      /***/

    },
    /* 3 */

    /***/
    function (module, exports) {
      /**
       * Hack in support for Function.name for browsers that don't support it.
       * IE, I'm looking at you.
       * Source: https://matt.scharley.me/2012/03/monkey-patch-name-ie.html
       **/
      if (Function.prototype.name === undefined && Object.defineProperty !== undefined) {
        Object.defineProperty(Function.prototype, 'name', {
          get: function get() {
            var funcNameRegex = /function\s([^(]{1,})\(/;
            var results = funcNameRegex.exec(this.toString());
            return results && results.length > 1 ? results[1].trim() : "";
          },
          set: function set(value) {}
        });
      }
      /***/

    },
    /* 4 */

    /***/
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(5);

      if (typeof content === 'string') content = [[module.i, content, '']];
      var transform;
      var insertInto;
      var options = {
        "hmr": true
      };
      options.transform = transform;
      options.insertInto = undefined;

      var update = __webpack_require__(2)(content, options);

      if (content.locals) module.exports = content.locals;

      if (false) {}
      /***/

    },
    /* 5 */

    /***/
    function (module, exports, __webpack_require__) {
      exports = module.exports = __webpack_require__(1)(false); // Module

      exports.push([module.i, "#js-perf-visualizer-root {\n  position: absolute;\n  left: 0;\n  top: 0;\n  box-sizing: border-box; }\n\n#graph-root {\n  background: gray;\n  width: 500px;\n  height: 100px; }\n", ""]);
      /***/
    },
    /* 6 */

    /***/
    function (module, exports) {
      /**
       * When source maps are enabled, `style-loader` uses a link element with a data-uri to
       * embed the css on the page. This breaks all relative urls because now they are relative to a
       * bundle instead of the current page.
       *
       * One solution is to only use full urls, but that may be impossible.
       *
       * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
       *
       * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
       *
       */
      module.exports = function (css) {
        // get current location
        var location = typeof window !== "undefined" && window.location;

        if (!location) {
          throw new Error("fixUrls requires window.location");
        } // blank or null?


        if (!css || typeof css !== "string") {
          return css;
        }

        var baseUrl = location.protocol + "//" + location.host;
        var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/"); // convert each url(...)

        /*
        This regular expression is just a way to recursively match brackets within
        a string.
        	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
           (  = Start a capturing group
             (?:  = Start a non-capturing group
                 [^)(]  = Match anything that isn't a parentheses
                 |  = OR
                 \(  = Match a start parentheses
                     (?:  = Start another non-capturing groups
                         [^)(]+  = Match anything that isn't a parentheses
                         |  = OR
                         \(  = Match a start parentheses
                             [^)(]*  = Match anything that isn't a parentheses
                         \)  = Match a end parentheses
                     )  = End Group
                     *\) = Match anything and then a close parens
                 )  = Close non-capturing group
                 *  = Match anything
              )  = Close capturing group
         \)  = Match a close parens
        	 /gi  = Get all matches, not the first.  Be case insensitive.
         */

        var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
          // strip quotes (if they exist)
          var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
            return $1;
          }).replace(/^'(.*)'$/, function (o, $1) {
            return $1;
          }); // already a full url? no change

          if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
            return fullMatch;
          } // convert the url to a full url


          var newUrl;

          if (unquotedOrigUrl.indexOf("//") === 0) {
            //TODO: should we add protocol?
            newUrl = unquotedOrigUrl;
          } else if (unquotedOrigUrl.indexOf("/") === 0) {
            // path should be relative to the base url
            newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
          } else {
            // path should be relative to current directory
            newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
          } // send back the fixed url(...)


          return "url(" + JSON.stringify(newUrl) + ")";
        }); // send back the fixed css

        return fixedCss;
      };
      /***/

    },
    /* 7 */

    /***/
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(8);

      if (typeof content === 'string') content = [[module.i, content, '']];
      var transform;
      var insertInto;
      var options = {
        "hmr": true
      };
      options.transform = transform;
      options.insertInto = undefined;

      var update = __webpack_require__(2)(content, options);

      if (content.locals) module.exports = content.locals;

      if (false) {}
      /***/

    },
    /* 8 */

    /***/
    function (module, exports, __webpack_require__) {
      exports = module.exports = __webpack_require__(1)(false); // Module

      exports.push([module.i, ".comp-fps {\n  font-family: consolas, Verdana;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  padding-bottom: 1px;\n  padding-right: 6px;\n  color: white; }\n  .comp-fps .red {\n    color: red; }\n\n.comp-btn-pause-play {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  margin: 6px;\n  background: white;\n  color: gray;\n  width: 24px;\n  height: 24px;\n  border-radius: 12px;\n  text-align: center;\n  vertical-align: middle; }\n\n.comp-graph {\n  position: relative;\n  cursor: pointer; }\n", ""]);
      /***/
    },
    /* 9 */

    /***/
    function (module, exports, __webpack_require__) {
      var content = __webpack_require__(10);

      if (typeof content === 'string') content = [[module.i, content, '']];
      var transform;
      var insertInto;
      var options = {
        "hmr": true
      };
      options.transform = transform;
      options.insertInto = undefined;

      var update = __webpack_require__(2)(content, options);

      if (content.locals) module.exports = content.locals;

      if (false) {}
      /***/

    },
    /* 10 */

    /***/
    function (module, exports, __webpack_require__) {
      exports = module.exports = __webpack_require__(1)(false); // Module

      exports.push([module.i, ".comp-log {\n  background: antiquewhite;\n  max-height: 300px;\n  overflow-y: scroll; }\n  .comp-log .log, .comp-log .mark {\n    font-family: Consolas, Verdana;\n    font-size: 14px;\n    padding: 2px 5px; }\n    .comp-log .log.bg-error-a, .comp-log .mark.bg-error-a {\n      background: #d20000;\n      color: white; }\n    .comp-log .log.bg-error-b, .comp-log .mark.bg-error-b {\n      background: #ee0000;\n      color: white; }\n    .comp-log .log.bg-warn-a, .comp-log .mark.bg-warn-a {\n      background: orange;\n      color: white; }\n    .comp-log .log.bg-warn-b, .comp-log .mark.bg-warn-b {\n      background: darkorange;\n      color: white; }\n    .comp-log .log.bg-log-a, .comp-log .mark.bg-log-a {\n      background: aliceblue;\n      color: darkblue; }\n      .comp-log .log.bg-log-a .dot, .comp-log .mark.bg-log-a .dot {\n        background: darkblue; }\n    .comp-log .log.bg-log-b, .comp-log .mark.bg-log-b {\n      background: #dee6ed;\n      color: darkblue; }\n      .comp-log .log.bg-log-b .dot, .comp-log .mark.bg-log-b .dot {\n        background: darkblue; }\n    .comp-log .log .dot, .comp-log .mark .dot {\n      display: inline-block;\n      background: white;\n      width: 8px;\n      height: 8px;\n      border-radius: 4px; }\n  .comp-log .indentation {\n    display: inline-block;\n    width: 25px;\n    text-align: right;\n    padding-right: 6px; }\n", ""]);
      /***/
    },
    /* 11 */

    /***/
    function (module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__); // EXTERNAL MODULE: ./src/polyfill/functionName.js


      var functionName = __webpack_require__(3); // EXTERNAL MODULE: ./node_modules/game-gui/dist/GameGUI.js


      var GameGUI = __webpack_require__(0);

      var GameGUI_default =
      /*#__PURE__*/
      __webpack_require__.n(GameGUI); // EXTERNAL MODULE: ./src/comp/CompRoot.scss


      var comp_CompRoot = __webpack_require__(4); // EXTERNAL MODULE: ./src/comp/CompGraph.scss


      var comp_CompGraph = __webpack_require__(7); // CONCATENATED MODULE: ./src/lib/Graph.js


      var Graph = function Graph(selector, heightPercentageLine) {
        this.init = function (selector) {
          this.selector = selector;
          this.dPasteDiffPackageHistory = document.querySelector(this.selector); // Skip if Dome element is not ready yet

          if (this.dPasteDiffPackageHistory === null) {
            return;
          }

          this.context = this.dPasteDiffPackageHistory.getContext("2d");
          this.heightPercentageLine = heightPercentageLine;
        };

        this.update = function (listData) {
          // Skip if Dome element is not ready yet
          if (this.dPasteDiffPackageHistory === null) {
            this.init(this.selector);
            return;
          }

          this.context.clearRect(0, 0, this.dPasteDiffPackageHistory.width, this.dPasteDiffPackageHistory.height);
          var pasteDiffPackagemax = Math.max.apply(null, listData);
          var heightMax = pasteDiffPackagemax <= this.heightPercentageLine ? this.heightPercentageLine * 1.2 : pasteDiffPackagemax * 1.2;
          var unitHeight = this.dPasteDiffPackageHistory.height / heightMax; // Draw percentage line

          this.context.strokeStyle = "#FF0000";
          this.line(0, this.dPasteDiffPackageHistory.height - this.heightPercentageLine * unitHeight, this.dPasteDiffPackageHistory.width, this.dPasteDiffPackageHistory.height - this.heightPercentageLine * unitHeight);
          this.context.strokeStyle = "#000000";
          var withUnit = this.dPasteDiffPackageHistory.width / (listData.length - 1);
          var xPrev = 0,
              yPrev = 0;

          for (var indexListPasteDiffPackage = 0; indexListPasteDiffPackage < listData.length; indexListPasteDiffPackage++) {
            var pasteDiffPackage = listData[indexListPasteDiffPackage];
            var x2 = indexListPasteDiffPackage * withUnit,
                y2 = this.dPasteDiffPackageHistory.height - pasteDiffPackage * unitHeight,
                x1 = xPrev,
                y1 = yPrev;
            this.line(x1, y1, x2, y2);
            xPrev = x2;
            yPrev = y2;
          }
        };

        this.line = function (x1, y1, x2, y2) {
          this.context.lineCap = "round";
          this.context.beginPath();
          this.context.moveTo(x1 || 0, y1 || 0);
          this.context.lineTo(x2 || 0, y2 || 0);
          this.context.stroke();
          this.context.closePath();
        };

        this.init(selector);
      };
      /* harmony default export */


      var lib_Graph = Graph; // CONCATENATED MODULE: ./src/comp/CompGraph.js

      var CompGraph_CompGraph =
      /*#__PURE__*/
      function (_GameGUI$Component) {
        _inherits(CompGraph_CompGraph, _GameGUI$Component);

        function CompGraph_CompGraph(option, config) {
          var _this;

          _classCallCheck(this, CompGraph_CompGraph);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(CompGraph_CompGraph).call(this, option, config));
          _this.isDraggingActive = false;
          _this.pageXLast;
          _this.pageYLast;
          _this.dataDefault = {
            positionX: 0,
            positionY: 0
          };

          var dataLoaded = _this.loadData();

          _this.positionX = dataLoaded.positionX;
          _this.positionY = dataLoaded.positionY;

          _this.position(_this.positionY, _this.positionX);

          return _this;
        }

        _createClass(CompGraph_CompGraph, [{
          key: "render",
          value: function render() {
            return "\n      <canvas id=\"graph-root\"></canvas>\n      ".concat(this.include(CompGraph_CompFps), "\n      ").concat(this.include(CompGraph_CompBtnPausePlay), "\n    ");
          }
        }, {
          key: "afterRender",
          value: function afterRender() {
            this.dom.addEventListener('mousedown', this.handlerMouseDown.bind(this));
            this.dom.addEventListener('mousemove', this.handlerMouseMove.bind(this));
            this.dom.addEventListener('mouseup', this.handlerMouseUp.bind(this));
            this.graph = new lib_Graph('#graph-root', this.option.jsPerfVisualizer.config.fpsWarningLevel);
          }
        }, {
          key: "handlerMouseDown",
          value: function handlerMouseDown(evt) {
            this.isDraggingActive = true;
            console.log('Mouse Down');
            this.pageXLast = evt.pageX;
            this.pageYLast = evt.pageY;
          }
        }, {
          key: "handlerMouseMove",
          value: function handlerMouseMove(evt) {
            // Skip if inactive
            if (!this.isDraggingActive) return;
            this.pageXLast = this.pageXLast || evt.pageX;
            var pageXdiff = evt.pageX - this.pageXLast;
            this.pageXLast = evt.pageX;
            this.pageYLast = this.pageYLast || evt.pageY;
            var pageYdiff = evt.pageY - this.pageYLast;
            this.pageYLast = evt.pageY;
            var dJsPerfVisualizerRoot = document.getElementById('js-perf-visualizer-root');
            var topOrigin = dJsPerfVisualizerRoot.style.top.replace('px', '');
            topOrigin = topOrigin || 0;
            var leftOrigin = dJsPerfVisualizerRoot.style.left.replace('px', '');
            leftOrigin = leftOrigin || 0;
            this.positionX = parseInt(leftOrigin) + pageXdiff;
            this.positionY = parseInt(topOrigin) + pageYdiff;
            this.position(this.positionY, this.positionX);
          }
        }, {
          key: "position",
          value: function position(top, left) {
            var dJsPerfVisualizerRoot = document.getElementById('js-perf-visualizer-root');
            dJsPerfVisualizerRoot.style.top = top + 'px';
            dJsPerfVisualizerRoot.style.left = left + 'px';
          }
        }, {
          key: "handlerMouseUp",
          value: function handlerMouseUp() {
            this.isDraggingActive = false;
            this.saveData();
          }
        }, {
          key: "saveData",
          value: function saveData() {
            localStorage.compGraph = JSON.stringify({
              positionX: this.positionX,
              positionY: this.positionY
            });
          }
        }, {
          key: "loadData",
          value: function loadData() {
            // Return Default Data if nothing saved;
            if (!localStorage.compGraph) {
              // Return a copy of default data
              return JSON.parse(JSON.stringify(this.dataDefault));
            }

            return JSON.parse(localStorage.compGraph);
          }
        }]);

        return CompGraph_CompGraph;
      }(GameGUI["Component"]);

      var CompGraph_CompFps =
      /*#__PURE__*/
      function (_GameGUI$Component2) {
        _inherits(CompGraph_CompFps, _GameGUI$Component2);

        function CompGraph_CompFps(option, config) {
          var _this2;

          _classCallCheck(this, CompGraph_CompFps);

          _this2 = _possibleConstructorReturn(this, _getPrototypeOf(CompGraph_CompFps).call(this, option, config));

          _this2.setState({
            fpsCurrent: 0
          });

          return _this2;
        }

        _createClass(CompGraph_CompFps, [{
          key: "render",
          value: function render() {
            var fpsCurrent = this.getState().fpsCurrent;
            return "\n      <span class=\"".concat(fpsCurrent < this.option.jsPerfVisualizer.config.fpsWarningLevel ? 'red' : '', "\">\n        ").concat(this.option.jsPerfVisualizer.config.fpsTarget, "/").concat(fpsCurrent, "\n      </span>\n    ");
          }
        }]);

        return CompGraph_CompFps;
      }(GameGUI["Component"]);

      var CompGraph_CompBtnPausePlay =
      /*#__PURE__*/
      function (_GameGUI$Component3) {
        _inherits(CompGraph_CompBtnPausePlay, _GameGUI$Component3);

        function CompGraph_CompBtnPausePlay(option, config) {
          var _this3;

          _classCallCheck(this, CompGraph_CompBtnPausePlay);

          _this3 = _possibleConstructorReturn(this, _getPrototypeOf(CompGraph_CompBtnPausePlay).call(this, option, config));

          _this3.setState({
            isPaused: _this3.option.jsPerfVisualizer.isPaused
          });

          return _this3;
        }

        _createClass(CompGraph_CompBtnPausePlay, [{
          key: "render",
          value: function render() {
            var btnPlay = '&#x23f5;';
            var btnPause = '&#x23f8;';
            return "\n      <div ui-click=\"handlerClick\">\n        ".concat(this.getState().isPaused ? btnPlay : btnPause, "\n      </div>\n    ");
          }
        }, {
          key: "handlerClick",
          value: function handlerClick() {
            this.option.jsPerfVisualizer.isPaused = !this.option.jsPerfVisualizer.isPaused;
            this.setState({
              isPaused: this.option.jsPerfVisualizer.isPaused
            });
          }
        }]);

        return CompGraph_CompBtnPausePlay;
      }(GameGUI["Component"]);
      /* harmony default export */


      var src_comp_CompGraph = CompGraph_CompGraph; // EXTERNAL MODULE: ./src/comp/CompLog.scss

      var comp_CompLog = __webpack_require__(9); // CONCATENATED MODULE: ./src/comp/CompLog.js


      var dumbCompFpsWarnLevel = function dumbCompFpsWarnLevel(item, classBg) {
        return "\n    <div class=\"log ".concat(classBg, "\">\n      Lagg \n       Time: ").concat(CompLog_CompLog.formatTime(item.timeFromInit), "\n       Duration: ").concat(CompLog_CompLog.formatTime(item.duration), "\n       FPS: ").concat(item.fpsCurrent, "\n       LID: ").concat(item.idEvtLoop, " \n    </div>\n  ");
      };

      var dumbCompIndentation = function dumbCompIndentation(indentLevel) {
        if (indentLevel === 0) return '';
        var html = '<span style="display: inline-block;">';

        for (var i = 0; i < indentLevel; i++) {
          html += '<span  class="indentation">|</span>';
        }

        html += '</span>';
        return html;
      };

      var dumbCompMark = function dumbCompMark(mark, classBg) {
        return "\n  <div class=\"mark ".concat(classBg, "\">\n    ").concat(dumbCompIndentation(mark.indentLevel), "<span class=\"dot\"></span> \n    ").concat(!isUndef(mark.timeFromInit) ? 'Time: ' + CompLog_CompLog.formatTime(mark.timeFromInit) : '', " \n    ").concat(!isUndef(mark.duration) ? 'Duration: ' + CompLog_CompLog.formatTime(mark.duration) : '', "\n    LID: ").concat(mark.idEvtLoopStart, "/").concat(mark.idEvtLoopStop, "\n    | \"").concat(mark.text, "\"\n  </div>\n");
      };

      var CompLog_CompLog =
      /*#__PURE__*/
      function (_GameGUI$Component4) {
        _inherits(CompLog_CompLog, _GameGUI$Component4);

        function CompLog_CompLog(option, config) {
          var _this4;

          _classCallCheck(this, CompLog_CompLog);

          _this4 = _possibleConstructorReturn(this, _getPrototypeOf(CompLog_CompLog).call(this, option, config)); // this.option = option;

          _this4.setState({
            listLog: []
          });

          return _this4;
        }

        _createClass(CompLog_CompLog, [{
          key: "render",
          value: function render() {
            var _this5 = this;

            var idEvtLoopPrev = -1;
            var ctrIdEvtLoopDifference = 0;
            var fpsLast;
            return "\n      ".concat(this.getState().listLog.map(function (item) {
              var idEvtLoop = item.idEvtLoop || item.idEvtLoopStop;

              if (idEvtLoopPrev !== idEvtLoop) {
                ctrIdEvtLoopDifference++;
              }

              idEvtLoopPrev = idEvtLoop;
              fpsLast = typeof item.fpsCurrent !== 'undefined' ? item.fpsCurrent : fpsLast;

              var classBg = _this5.calcBgClass(fpsLast, ctrIdEvtLoopDifference % 2);

              switch (item.type) {
                case 'fpsWarnLevel':
                  return dumbCompFpsWarnLevel(item, classBg);

                case 'mark':
                  return dumbCompMark(item, classBg);
              }
            }).join(''), " \n    ");
          }
        }, {
          key: "calcBgClass",
          value: function calcBgClass(fps, isIdEvtLoopDifferent) {
            var classBg = 'bg';

            if (fps < 0) {
              classBg += '-error';
            } else if (fps < this.option.jsPerfVisualizer.config.fpsWarningLevel) {
              classBg += '-warn';
            } else {
              classBg += '-log';
            }

            if (isIdEvtLoopDifferent) {
              classBg += '-a';
            } else {
              classBg += '-b';
            }

            return classBg;
          }
        }], [{
          key: "formatTime",
          value: function formatTime(time) {
            return time < 1000 ? time + 'ms' : Math.round(time / 1000 * 100) / 100 + 's';
          }
        }]);

        return CompLog_CompLog;
      }(GameGUI["Component"]); // Utility


      function isUndef(item) {
        return typeof item === 'undefined';
      }
      /* harmony default export */


      var src_comp_CompLog = CompLog_CompLog; // CONCATENATED MODULE: ./src/comp/CompRoot.js

      var CompRoot_CompRoot =
      /*#__PURE__*/
      function (_GameGUI$Component5) {
        _inherits(CompRoot_CompRoot, _GameGUI$Component5);

        function CompRoot_CompRoot() {
          _classCallCheck(this, CompRoot_CompRoot);

          return _possibleConstructorReturn(this, _getPrototypeOf(CompRoot_CompRoot).apply(this, arguments));
        }

        _createClass(CompRoot_CompRoot, [{
          key: "render",
          value: function render() {
            return "\n      ".concat(this.include(src_comp_CompGraph), "\n      ").concat(this.include(src_comp_CompLog), "\n    ");
          }
        }]);

        return CompRoot_CompRoot;
      }(GameGUI["Component"]);
      /* harmony default export */


      var src_comp_CompRoot = CompRoot_CompRoot; // CONCATENATED MODULE: ./src/Mark.js

      var Mark =
      /*#__PURE__*/
      function () {
        function Mark(jsPerfVisualizer) {
          _classCallCheck(this, Mark);

          console.log('Mark ins initializing..');
          this.jsPerfVisualizer = jsPerfVisualizer;
          this.timestampInit = this.jsPerfVisualizer.timestampInit;
          this.listObjMarkStart = {};
          this.markLatest = undefined;
          this.ctr = -1;
        }

        _createClass(Mark, [{
          key: "start",
          value: function start(markText) {
            if (this.listObjMarkStart[markText]) {
              console.error("Error: JS Perf Visualizer / Mark: mark already exists: ".concat(markText));
              return;
            }

            var timestampNow = Date.now();
            this.listObjMarkStart[markText] = {
              type: 'mark',
              ctr: ++this.ctr,
              idEvtLoopStart: this.jsPerfVisualizer.idEvtLoop,
              idEvtLoopStop: undefined,
              timestampStart: timestampNow,
              timeFromInit: timestampNow - this.timestampInit,
              timestampStop: undefined,
              duration: undefined,
              text: markText,
              indentLevel: 0
            };
            this.markLatest = this.listObjMarkStart[markText];
          }
        }, {
          key: "stop",
          value: function stop(markText) {
            if (!this.listObjMarkStart[markText]) {
              console.error("Error: JS Perf Visualizer / Mark: Cant stop mark (\"".concat(markText, "\") because there is not start mark (\"").concat(markText, "\") registered yet."));
              return;
            }

            var mark = this.listObjMarkStart[markText];
            mark.timestampStop = Date.now();
            mark.timeFromInit = mark.timestampStop - this.timestampInit;
            mark.duration = mark.timestampStop - mark.timestampStart;
            mark.idEvtLoopStop = this.jsPerfVisualizer.idEvtLoop;
            mark.indentLevel = Object.keys(this.listObjMarkStart).length - 1;
            this.jsPerfVisualizer.log(mark);
            delete this.listObjMarkStart[markText];
            delete this.markLatest;
          }
        }, {
          key: "getLatest",
          value: function getLatest() {
            if (!this.markLatest) {
              return;
            }

            return JSON.parse(JSON.stringify(this.markLatest));
          }
        }]);

        return Mark;
      }();
      /* harmony default export */


      var src_Mark = Mark; // CONCATENATED MODULE: ./src/index.js

      var src_JsPerfVisualizer =
      /*#__PURE__*/
      function () {
        function src_JsPerfVisualizer(configOverwrite) {
          _classCallCheck(this, src_JsPerfVisualizer);

          this.config = _objectSpread({
            fpsTarget: 60,
            fpsWarningLevel: 30
          }, configOverwrite);
          this.idEvtLoop = 0;
          this.isPaused = false;
          this.timestampInit = Date.now();
          this.timestampLast = this.timestampInit;
          this.listDiff = [];
          this.listLog = [];
          this.mark = new src_Mark(this); // Kick of tracking ASAP

          this.initTracking();

          if (document.body) {
            this.initGraph();
          } else {
            document.addEventListener('DOMContentLoaded', this.initGraph.bind(this));
          }
        }

        _createClass(src_JsPerfVisualizer, [{
          key: "initGraph",
          value: function initGraph() {
            console.log('Graph is getting initialized..');
            document.body.insertAdjacentHTML('afterBegin', '<div id="js-perf-visualizer-root"></div>');
            this.gui = new GameGUI_default.a(src_comp_CompRoot, '#js-perf-visualizer-root', {
              jsPerfVisualizer: this
            });
          }
        }, {
          key: "initTracking",
          value: function initTracking() {
            if (!this.isPaused) {
              var timestampNow = Date.now();
              var diff = timestampNow - this.timestampLast;
              var fpsCurrent = 2 * this.config.fpsTarget - diff;
              var duration = diff - this.config.fpsTarget;
              this.listDiff.push(fpsCurrent);

              if (fpsCurrent < this.config.fpsWarningLevel) {
                this.log({
                  type: 'fpsWarnLevel',
                  idEvtLoop: this.idEvtLoop,
                  timeFromInit: timestampNow - this.timestampInit,
                  fpsCurrent: fpsCurrent,
                  duration: duration
                });
              } // Update UI


              this.uiUpdateGraphAndFps(fpsCurrent);
              this.timestampLast = timestampNow;
              this.idEvtLoop++;
            }

            setTimeout(this.initTracking.bind(this), this.config.fpsTarget);
          }
        }, {
          key: "log",
          value: function log(item) {
            this.listLog.unshift(item);

            if (1000 / this.config.fpsTarget * 9 < this.listDiff.length) {
              this.listDiff.shift();
            } // UI update


            if (!this.gui) return;
            var compLog = this.gui.getCompByType('CompLog')[0];
            compLog.setState({
              listLog: this.listLog
            });
          }
        }, {
          key: "uiUpdateGraphAndFps",
          value: function uiUpdateGraphAndFps(fpsCurrent) {
            if (!this.gui) return; // Update Graph

            var compGraph = this.gui.getCompByType('CompGraph')[0];
            compGraph.graph.update(this.listDiff);
            var compFps = this.gui.getCompByType('CompFps')[0];
            compFps.setState({
              fpsCurrent: fpsCurrent
            });
          }
        }]);

        return src_JsPerfVisualizer;
      }();
      /* harmony default export */


      var src = __webpack_exports__["default"] = src_JsPerfVisualizer;
      /***/
    }])
  );
});