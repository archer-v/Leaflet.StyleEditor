var leafletstyleeditor =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = undefined;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external {"commonjs":"leaflet","amd":"leaflet","root":"L"}
var external_commonjs_leaflet_amd_leaflet_root_L_ = __webpack_require__(0);

// CONCATENATED MODULE: ./src/javascript/FormElements/ColorElement.js


/**
 *  FormElement used to style the color
 */
function setupColorElement() {
  L.StyleEditor.formElements.ColorElement = L.StyleEditor.formElements.FormElement.extend({
    createContent: function () {
      this.options.colorPickerDiv = L.DomUtil.create('div', 'leaflet-styleeditor-colorpicker', this.options.uiElement);
      this._getColorRamp().forEach(this._setSelectCallback, this);
    },
    /** create of get already created colorRamp */
    _getColorRamp: function () {
      if (!this.options.colorRamp) {
        // if markers have own colorRamp use it
        if (this.options.parentForm instanceof L.StyleEditor.forms.MarkerForm && !!this.options.styleEditorOptions.markerType.options.colorRamp) {
          this.options.colorRamp = this.options.styleEditorOptions.markerType.options.colorRamp;
          // else use the default
        } else {
          this.options.colorRamp = this.options.styleEditorOptions.colorRamp;
        }
      }
      return this.options.colorRamp;
    },
    /** define what to do when color is changed */
    _setSelectCallback: function (color) {
      let elem = L.DomUtil.create('div', 'leaflet-styleeditor-color', this.options.colorPickerDiv);
      elem.style.backgroundColor = color;
      L.DomEvent.addListener(elem, 'click', this._selectColor, this);
    },
    /** set style for chosen color */
    _selectColor: function (e) {
      e.stopPropagation();
      this.setStyle(this.options.styleEditorOptions.util.rgbToHex(e.target.style.backgroundColor));

      // marker styling needs additional function calls
      if (this.options.styleEditorOptions.currentElement.target instanceof L.Marker) {
        this.options.styleEditorOptions.markerType.setNewMarker();
      }
    },
    /** decorate colorPicker element with "selected" color **/
    style: function () {
      let value = this.options.styleEditorOptions.util.getStyle(this.options.styleOption);
      let colorIndex = null;
      for (let i = 0; i < this.options.colorRamp.length; i++) {
        if (this.options.colorRamp[i] === value) {
          colorIndex = i;
          break;
        }
      }
      let colorElements = this.options.colorPickerDiv.getElementsByClassName('leaflet-styleeditor-color');
      for (let i = 0; i < colorElements.length; i++) {
        if (i === colorIndex) {
          colorElements[i].classList.add('leaflet-styleeditor-selected');
        } else {
          colorElements[i].classList.remove('leaflet-styleeditor-selected');
        }
      }
    }
  });
}
// CONCATENATED MODULE: ./src/javascript/FormElements/FormElement.js


/** FormElements are part of a Form for a specific styling option (i.e. color) */
function setupFormElement() {
  L.StyleEditor.formElements.FormElement = L.Class.extend({
    /** set options and title */
    initialize: function (options) {
      if (options) {
        L.setOptions(this, options);
      }

      // if no title is given use styling option
      if (!this.options.title && !!this.options.styleOption) {
        this.options.title = this.options.styleOption.charAt(0).toUpperCase() + this.options.styleOption.slice(1);
      }
    },
    /** create uiElement and content */
    create: function (parentUiElement) {
      this.options.uiElement = L.DomUtil.create('div', 'leaflet-styleeditor-uiElement', parentUiElement);
      this.createTitle();
      this.createContent();
    },
    /** create title */
    createTitle: function () {
      let title = L.DomUtil.create('label', 'leaflet-styleeditor-label', this.options.uiElement);
      title.innerHTML = this.options.title + ':';
    },
    /** create content (where the actual modification takes place) */
    createContent: function () {},
    /** style the FormElement and show it */
    show: function (options) {
      if (this.setOptions) {
        this.setOptions(options);
      }
      this.style();
      this.showForm();
    },
    /** show the FormElement */
    showForm: function () {
      this.options.styleEditorOptions.util.showElement(this.options.uiElement);
    },
    /** hide the FormElement */
    hide: function () {
      this.options.styleEditorOptions.util.hideElement(this.options.uiElement);
    },
    /** style the FormElement */
    style: function () {},
    /** what to do when lost focus */
    lostFocus: function () {},
    /** set style - used when the FormElement wants to change the styling option */
    setStyle: function (value) {
      let currentElement = this.options.styleEditorOptions.util.getCurrentElement();
      // check whether a layer is part of a layerGroup
      let layers = [currentElement];
      if (currentElement instanceof L.LayerGroup) {
        layers = Object.values(currentElement._layers);
      }

      // update layer (or all layers of a layerGroup)
      for (let i = 0; i < layers.length; i++) {
        let layer = layers[i];
        if (layer instanceof L.Marker) {
          this.options.styleEditorOptions.markerType.setStyle(this.options.styleOption, value);
        } else {
          let newStyle = {};
          newStyle[this.options.styleOption] = value;
          layer.setStyle(newStyle);
          layer.options[this.options.styleOption] = value;
        }

        // fire event for changed layer
        this.options.styleEditorOptions.util.fireChangeEvent(layer);
      }

      // notify form styling value has changed
      this.options.parentForm.style();
    }
  });
}
// CONCATENATED MODULE: ./src/javascript/FormElements/DashElement.js
/**
 * FormElement used for styling the dash attribute
 */

function setupDashElement() {
  L.StyleEditor.formElements.DashElement = L.StyleEditor.formElements.FormElement.extend({
    dashOptions: [{
      style: '1',
      backgroundPositionDecorator: '0px -75px'
    }, {
      style: '10, 10',
      backgroundPositionDecorator: '0px -95px'
    }, {
      style: '15, 10, 1, 10',
      backgroundPositionDecorator: '0px -115px'
    }],
    /** create the three standard dash options */
    createContent: function () {
      let uiElement = this.options.uiElement;
      for (let opt in this.dashOptions) {
        let stroke = L.DomUtil.create('div', 'leaflet-styleeditor-stroke', uiElement);
        stroke.style.backgroundPosition = this.dashOptions[opt].backgroundPositionDecorator;
        L.DomEvent.addListener(stroke, 'click', function () {
          this.setStyle(this.dashOptions[opt].style);
        }, this);
      }
    },
    /** decorate element with "selected" style **/
    style: function () {
      let value = this.options.styleEditorOptions.util.getStyle(this.options.styleOption);
      let dashIndex = null;
      for (let i = 0; i < this.dashOptions.length; i++) {
        if (this.dashOptions[i].style === value) {
          dashIndex = i;
          break;
        }
      }
      let dashElements = this.options.uiElement.getElementsByClassName('leaflet-styleeditor-stroke');
      for (let i = 0; i < dashElements.length; i++) {
        if (i === dashIndex) {
          dashElements[i].classList.add('leaflet-styleeditor-selected');
        } else {
          dashElements[i].classList.remove('leaflet-styleeditor-selected');
        }
      }
    }
  });
}
// CONCATENATED MODULE: ./src/javascript/FormElements/IconElement.js


/**
 * FormElement used for styling the icon
 */
function setupIconElement() {
  L.StyleEditor.formElements.IconElement = L.StyleEditor.formElements.FormElement.extend({
    // private classed used in the code
    _selectOptionWrapperClasses: 'leaflet-styleeditor-select-option-wrapper leaflet-styleeditor-hidden',
    _selectOptionClasses: 'leaflet-styleeditor-select-option',
    /** create the icon selectBoxes */
    createContent: function () {
      let uiElement = this.options.uiElement;
      let selectBox = L.DomUtil.create('div', 'leaflet-styleeditor-select', uiElement);
      this.options.selectBoxImage = this._createSelectInputImage(selectBox);
      L.DomEvent.addListener(selectBox, 'click', this._toggleSelectInput, this);
    },
    /** show the correct icon in the correct color if the icon or color changed */
    style: function () {
      let iconOptions = this.options.styleEditorOptions.markerType.getIconOptions();
      this._styleSelectInputImage(this.options.selectBoxImage, iconOptions.icon, iconOptions.iconColor);
      this._createColorSelect(this.options.styleEditorOptions.markerType.options.iconOptions.iconColor);
      this._hideSelectOptions();
    },
    /** if lost focus hide potentially open SelectOption */
    lostFocus: function () {
      this._hideSelectOptions();
    },
    /** create image container that hides/shows the iconSelectBox */
    _createSelectInputImage: function (parentUiElement) {
      let wrapper = L.DomUtil.create('div', 'leaflet-styleeditor-select-image-wrapper', parentUiElement);
      return L.DomUtil.create('div', 'leaflet-styleeditor-select-image', wrapper);
    },
    /** create appropriate image for color and icon */
    _styleSelectInputImage: function (image, icon, color) {
      if (!icon) {
        icon = image.getAttribute('value');
        if (!icon) {
          return;
        }
      }
      let iconOptions = this.options.styleEditorOptions.markerType.getIconOptions();
      if (color) {
        iconOptions.iconColor = color;
      }
      image.innerHTML = '';
      this.options.styleEditorOptions.markerType.createSelectHTML(image, iconOptions, icon);
      image.setAttribute('value', icon);
    },
    /** create the selectBox with the icons in the correct color */
    _createColorSelect: function (color) {
      if (!this.options.selectOptions) {
        this.options.selectOptions = {};
      }
      if (color in this.options.selectOptions) {
        return;
      }
      let uiElement = this.options.uiElement;
      let selectOptionWrapper = L.DomUtil.create('ul', this._selectOptionWrapperClasses, uiElement);
      this.options.styleEditorOptions.util.getMarkersForColor(color).forEach(function (option) {
        let selectOption = L.DomUtil.create('li', this._selectOptionClasses, selectOptionWrapper);
        let selectImage = this._createSelectInputImage(selectOption);
        this._styleSelectInputImage(selectImage, option, color);
      }, this);
      this.options.selectOptions[color] = selectOptionWrapper;
      L.DomEvent.addListener(selectOptionWrapper, 'click', function (e) {
        e.stopPropagation();
        let target = e.target;
        if (target.nodeName === 'UL') {
          return;
        }
        if (target.parentNode.className === 'leaflet-styleeditor-select-image') {
          target = target.parentNode;
        } else {
          while (target && target.className !== 'leaflet-styleeditor-select-image') {
            target = target.childNodes[0];
          }
        }
        this._selectMarker({
          'target': target
        }, this);
      }, this);
    },
    /** show/hide iconSelectBox */
    _toggleSelectInput: function (e) {
      let currentColorElement = this._getCurrentColorElement(this.options.styleEditorOptions.util.rgbToHex(this.options.styleEditorOptions.markerType.options.iconOptions.iconColor));
      let show = false;
      if (currentColorElement) {
        show = L.DomUtil.hasClass(currentColorElement, 'leaflet-styleeditor-hidden');
      }
      this._hideSelectOptions();
      if (show) {
        this.options.styleEditorOptions.util.showElement(currentColorElement);
      }
    },
    /** called when user selects a marker */
    _selectMarker: function (e) {
      let value = this._getValue(e.target);

      // update style
      this.options.selectBoxImage.setAttribute('value', value);
      this.setStyle(value);
      this._hideSelectOptions();
    },
    /** helper function to return attribute value of target */
    _getValue: function (target) {
      return target.getAttribute('value');
    },
    /** return correct selectBox depending on which color is currently chosen */
    _getCurrentColorElement: function (color) {
      if (!this.options.selectOptions[color]) {
        this._createColorSelect(color);
      }
      return this.options.selectOptions[color];
    },
    /** hide open SelectOption */
    _hideSelectOptions: function () {
      for (let selectOption in this.options.selectOptions) {
        this.options.styleEditorOptions.util.hideElement(this.options.selectOptions[selectOption]);
      }
    }
  });
}
// CONCATENATED MODULE: ./src/javascript/FormElements/OpacityElement.js


/**
 * FormElement used to style opacity
 */
function setupOpacityElement() {
  L.StyleEditor.formElements.OpacityElement = L.StyleEditor.formElements.FormElement.extend({
    /** create number input box */
    createContent: function () {
      this.options.label = L.DomUtil.create('span', 'leaflet-styleeditor-input-span', this.options.uiElement);
      let slider = this.options.slider = L.DomUtil.create('input', 'leaflet-styleeditor-input', this.options.uiElement);
      slider.type = 'range';
      slider.max = 1;
      slider.min = 0;
      slider.step = 0.01;
      slider.value = 0.5;

      // add event listeners
      L.DomEvent.addListener(slider, 'change', this._setStyle, this);
      L.DomEvent.addListener(slider, 'input', this._setStyle, this);
      L.DomEvent.addListener(slider, 'keyup', this._setStyle, this);
      L.DomEvent.addListener(slider, 'mouseup', this._setStyle, this);
    },
    /** set correct value */
    style: function () {
      this.options.slider.value = this.options.styleEditorOptions.util.getStyle(this.options.styleOption);
      this.options.label.innerText = parseInt(100 * this.options.slider.value) + '%';
    },
    /** communicate opacity value */
    _setStyle: function () {
      this.setStyle(this.options.slider.value);
    }
  });
}
// CONCATENATED MODULE: ./src/javascript/FormElements/PopupContentElement.js


/**
 * FormElement used for adding a description to marker or geometry.
 */
function setupPopupContentElement() {
  L.StyleEditor.formElements.PopupContentElement = L.StyleEditor.formElements.FormElement.extend({
    options: {
      title: 'Description'
    },
    createContent: function () {
      let uiElement = this.options.uiElement;
      let textArea = this.options.descTextAreaField = L.DomUtil.create('textarea', 'leaflet-styleeditor-input', uiElement);
      L.DomEvent.addListener(textArea, 'change', this._setStyle, this);
    },
    /** set correct value */
    style: function () {
      let selectedElement = this.options.styleEditorOptions.util.getCurrentElement();
      if (selectedElement && selectedElement.options) {
        this.options.descTextAreaField.value = selectedElement.options.popupContent || '';
      }
    },
    /** communicate popupContent value */
    _setStyle: function () {
      let currentElement = this.options.styleEditorOptions.util.getCurrentElement();
      let inputText = this.options.descTextAreaField.value;

      // check whether a layer is part of a layerGroup
      let layers = [currentElement];
      if (currentElement instanceof L.LayerGroup) {
        layers = Object.values(currentElement._layers);
      }

      // update layer (or all layers of a layerGroup)
      for (let i = 0; i < layers.length; i++) {
        let marker = layers[i];
        if (marker && marker.getPopup && marker.bindPopup) {
          let popup1 = marker.getPopup();
          if (popup1) {
            popup1.setContent(inputText);
          } else {
            marker.bindPopup(inputText);
          }
          // tmp store the text content for init next time
          marker.options = marker.options || {};
          marker.options.popupContent = inputText;
        }
      }
      this.setStyle(inputText);
    }
  });
}
// CONCATENATED MODULE: ./src/javascript/FormElements/SizeElement.js


/**
 * FormElement to set style of an icon
 */
function setupSizeElement() {
  L.StyleEditor.formElements.SizeElement = L.StyleEditor.formElements.FormElement.extend({
    /** create the 3 standard icon sizes */
    createContent: function () {
      let uiElement = this.options.uiElement;
      let select = L.DomUtil.create('div', 'leaflet-styleeditor-sizeicon sizeicon-small', uiElement);
      L.DomEvent.addListener(select, 'click', function () {
        this.setStyle(this.options.styleEditorOptions.markerType.options.size.small);
      }, this);
      select = L.DomUtil.create('div', 'leaflet-styleeditor-sizeicon sizeicon-medium', uiElement);
      L.DomEvent.addListener(select, 'click', function () {
        this.setStyle(this.options.styleEditorOptions.markerType.options.size.medium);
      }, this);
      select = L.DomUtil.create('div', 'leaflet-styleeditor-sizeicon sizeicon-large', uiElement);
      L.DomEvent.addListener(select, 'click', function () {
        this.setStyle(this.options.styleEditorOptions.markerType.options.size.large);
      }, this);
    }
  });
}
// CONCATENATED MODULE: ./src/javascript/FormElements/WeightElement.js


/**
 * FormElement used to style weight
 */
function setupWeightElement() {
  L.StyleEditor.formElements.WeightElement = L.StyleEditor.formElements.FormElement.extend({
    defaultOptions: {
      min: 0,
      max: 20
    },
    /** create number input box */
    createContent: function () {
      this.options.label = L.DomUtil.create('span', 'leaflet-styleeditor-input-span', this.options.uiElement);
      let weight = this.options.weight = L.DomUtil.create('input', 'leaflet-styleeditor-input', this.options.uiElement);
      weight.type = 'range';
      weight.min = this.defaultOptions.min;
      weight.max = this.defaultOptions.max;
      weight.step = 1;
      weight.value = 2;

      // add event listeners
      L.DomEvent.addListener(weight, 'change', this._setStyle, this);
      L.DomEvent.addListener(weight, 'input', this._setStyle, this);
      L.DomEvent.addListener(weight, 'keyup', this._setStyle, this);
      L.DomEvent.addListener(weight, 'mouseup', this._setStyle, this);
    },
    /** set correct value */
    style: function () {
      let value = this.options.styleEditorOptions.util.getStyle(this.options.styleOption) * 1;
      // limit value to min/max
      let fixedValue = value;
      fixedValue = Math.max(fixedValue, this.options.weight.min);
      fixedValue = Math.min(fixedValue, this.options.weight.max);
      this.options.weight.value = fixedValue;
      this.options.label.innerText = fixedValue;
      if (value !== fixedValue) {
        this._setStyle();
      }
    },
    /** communicate weight value */
    _setStyle: function () {
      this.setStyle(this.options.weight.value);
    },
    setOptions: function (options) {
      this.options.weight.min = options && 'min' in options ? options.min : this.defaultOptions.min;
      this.options.weight.max = options && 'max' in options ? options.max : this.defaultOptions.max;
    }
  });
}
// CONCATENATED MODULE: ./src/javascript/Form/Form.js


/**
 * Forms consist of FormElements and are shown in the StyleForm
 * There exists a MarkerForm to modify Markers and a GeometryForm to modify Geometries (i.e. rectangles...)
 * Style options based on:
 *     - path: https://leafletjs.com/reference.html#path-options
 *     - icon: https://leafletjs.com/reference.html#icon
 */
function setupForm() {
  L.StyleEditor.forms.Form = L.Class.extend({
    initialize: function (options) {
      if (options) {
        L.setOptions(this, options);
      }
      this.options.initializedElements = [];
    },
    /** create every FormElement in the parentUiElement */
    create: function (parentUiElement) {
      this.options.parentUiElement = parentUiElement;
      let formElements = this.getFormElements();
      let styleFormKeys = Object.keys(formElements);
      for (let i = 0; i < styleFormKeys.length; i++) {
        let formElement = this.getFormElementClass(styleFormKeys[i], formElements);
        if (formElement !== undefined) {
          formElement.create(parentUiElement);
          this.options.initializedElements.push(formElement);
        }
      }
    },
    /** hide the Form including its FormElements */
    hide: function () {
      this.hideFormElements();
      this.hideForm();
    },
    /** hide the FormElements */
    hideFormElements: function () {
      for (let i = 0; i < this.options.initializedElements.length; i++) {
        this.options.initializedElements[i].hide();
      }
    },
    /** hide the Form */
    hideForm: function () {
      this.options.styleEditorOptions.util.hideElement(this.options.parentUiElement);
    },
    /** make FormElements and Form visible */
    show: function (options) {
      this.preShow();
      this.showFormElements(options);
      this.showForm();
      this.style();
    },
    /** hook which is called at the beginning of the show function */
    preShow: function () {},
    /** make every FormElement visible */
    showFormElements: function (options) {
      for (let i = 0; i < this.options.initializedElements.length; i++) {
        this.showFormElement(this.options.initializedElements[i]);
      }
    },
    /** make the Form visible */
    showForm: function () {
      this.options.styleEditorOptions.util.showElement(this.options.parentUiElement);
    },
    /** inform FormElements the selected style has changed, so they can adapt */
    style: function () {
      for (let i = 0; i < this.options.initializedElements.length; i++) {
        this.options.initializedElements[i].style();
      }
    },
    /** inform Form it lost it's focus */
    lostFocus: function () {
      for (let i = 0; i < this.options.initializedElements.length; i++) {
        this.options.initializedElements[i].lostFocus();
      }
    },
    /**
     * @returns a Boolean indicating if the @param formElement should be shown
     */
    showFormElement: function (formElement, options) {
      // check wether element should be shown or not
      if (this.showFormElementForStyleOption(formElement.options.styleOption)) {
        formElement.show(options);
      } else {
        formElement.hide();
      }
    },
    /**
     * get the currently used formElements
     * either standard or the ones provided while instanciation
     */
    getFormElements: function () {
      let formElements;
      if (this.options.formOptionKey in this.options.styleEditorOptions.forms) {
        formElements = this.options.styleEditorOptions.forms[this.options.formOptionKey];
      } else {
        formElements = this.options.formElements;
      }
      return formElements;
    },
    /**
     * get the Class of the Formelement to instanciate
     * @param {*} styleOption, the styleOption to get the FormElement for
     */
    getFormElementClass: function (styleOption) {
      let formElements = this.getFormElements();
      let formElementKeys = Object.keys(formElements);
      if (formElementKeys.indexOf(styleOption) >= 0) {
        let FormElement = formElements[styleOption];
        if (FormElement) {
          if (typeof FormElement === 'boolean') {
            return this.getFormElementStandardClass(styleOption, {});
          }
          let elementOptions = {};
          // may be a dictionary
          if (typeof FormElement === 'object') {
            // FormElement options can be provided in 'options' value
            if ('options' in FormElement) {
              elementOptions = FormElement['options'];
            }
            if (!('formElement' in FormElement)) {
              return this.getFormElementStandardClass(styleOption, elementOptions);
            }
            if ('formElement' in FormElement && 'boolean' in FormElement) {
              FormElement = FormElement['formElement'];
            }
          }

          // try to instantiate FormElementOption and return StandardClass if it does not work
          try {
            let formElementInstance = new FormElement({
              styleOption: styleOption,
              parentForm: this,
              styleEditorOptions: this.options.styleEditorOptions,
              options: elementOptions
            });
            if (formElementInstance instanceof L.StyleEditor.formElements.FormElement) {
              return formElementInstance;
            }
          } catch (e) {
            // creating instance failed fallback to StandardClass
          }
        }
        // if nothing works return it
        return this.getFormElementStandardClass(styleOption, {});
      }
    },
    /**
     * check whether a FormElement should be shown
     * @param {*} styleOption, the styleOption to check
     */
    showFormElementForStyleOption(styleOption) {
      let formElements = this.getFormElements();
      if (styleOption in formElements) {
        let styleFormElement = formElements[styleOption];

        // maybe a function is given to declare when to show the FormElement
        if (typeof styleFormElement === 'function') {
          try {
            return styleFormElement(this.options.styleEditorOptions.util.getCurrentElement());
          } catch (err) {
            // the given function presumably is a constructor -> always show it
            return true;
          }
        }

        // maybe a boolean is given to indicate whether to show it
        if (typeof styleFormElement === 'boolean') {
          return styleFormElement;
        }

        // check for dictionary
        if ('boolean' in styleFormElement) {
          // in a dictionary boolean may be a function or boolean
          if (typeof styleFormElement['boolean'] === 'function') {
            return styleFormElement['boolean'](this.options.styleEditorOptions.util.getCurrentElement());
          }
          return styleFormElement['boolean'];
        }
        return true;
      }
      return false;
    },
    /**
     * get Leaflet.StyleEditor standard FormElement class for given styleOption
     * @param {*} styleOption, the styleOption to get the standard class for
     */
    getFormElementStandardClass(styleOption, elementOptions) {
      return new this.options.formElements[styleOption](Object.assign({
        styleOption: styleOption,
        parentForm: this,
        styleEditorOptions: this.options.styleEditorOptions
      }, elementOptions));
    }
  });
}
// CONCATENATED MODULE: ./src/javascript/Form/GeometryForm.js


/** Form used to enable modification of a Geometry */
function setupGeometryForm() {
  L.StyleEditor.forms.GeometryForm = L.StyleEditor.forms.Form.extend({
    options: {
      formOptionKey: 'geometry',
      formElements: {
        'color': L.StyleEditor.formElements.ColorElement,
        'opacity': L.StyleEditor.formElements.OpacityElement,
        'weight': L.StyleEditor.formElements.WeightElement,
        'dashArray': L.StyleEditor.formElements.DashElement,
        'fillColor': L.StyleEditor.formElements.ColorElement,
        'fillOpacity': L.StyleEditor.formElements.OpacityElement,
        'popupContent': L.StyleEditor.formElements.PopupContentElement
      }
    },
    /** show the fillOptions (fillColor and fillOpacity) only if the Element can be filled */
    showFormElements: function (options) {
      for (let i = 0; i < this.options.initializedElements.length; i++) {
        let option = null;
        if (options && this.options.initializedElements[i].options.styleOption in options) {
          option = options[this.options.initializedElements[i].options.styleOption];
        }
        if (this.options.initializedElements[i].options.styleOption.indexOf('fill') === 0) {
          if (this.options.styleEditorOptions.util.fillCurrentElement()) {
            this.showFormElement(this.options.initializedElements[i], option);
          } else {
            this.options.initializedElements[i].hide();
          }
        } else {
          this.showFormElement(this.options.initializedElements[i], option);
        }
      }
    }
  });
}
// CONCATENATED MODULE: ./src/javascript/Form/MarkerForm.js


/** Form used to enable modification of a Geometry */
function setupMarkerForm() {
  L.StyleEditor.forms.MarkerForm = L.StyleEditor.forms.Form.extend({
    options: {
      formOptionKey: 'marker',
      formElements: {
        'icon': L.StyleEditor.formElements.IconElement,
        'color': L.StyleEditor.formElements.ColorElement,
        'size': L.StyleEditor.formElements.SizeElement,
        'popupContent': L.StyleEditor.formElements.PopupContentElement
      }
    }
  });
}
// CONCATENATED MODULE: ./src/javascript/Marker/Marker.js


/**
 * The Base class for different markers
 */
function setupMarker() {
  L.StyleEditor.marker.Marker = L.Marker.extend({
    /** define markerForm used to style the Marker */
    markerForm: L.StyleEditor.forms.MarkerForm,
    options: {
      size: {
        'small': [20, 50],
        'medium': [30, 70],
        'large': [35, 90]
      },
      selectIconSize: [],
      selectIconClass: '',
      iconOptions: {}
    },
    /** set standard icon */
    initialize: function (options) {
      L.setOptions(this, options);
      L.setOptions(this, this.options);
      if (this.options.selectIconClass !== '' && !this.options.selectIconClass.startsWith('leaflet-styleeditor-select-image')) {
        this.options.selectIconClass = 'leaflet-styleeditor-select-image-' + this.options.selectIconClass;
      }
    },
    /** create new Marker and show it */
    setNewMarker: function () {
      let newIcon = this._createMarkerIcon();
      let currentElement = this.options.styleEditorOptions.currentElement.target;
      currentElement.setIcon(newIcon);
      if (currentElement instanceof L.LayerGroup) {
        currentElement.eachLayer(function (layer) {
          L.DomUtil.addClass(layer.getElement(), 'leaflet-styleeditor-marker-selected');
        });
      } else {
        L.DomUtil.addClass(currentElement.getElement(), 'leaflet-styleeditor-marker-selected');
      }
    },
    /** set styling options */
    setStyle: function (styleOption, value) {
      if (styleOption !== 'icon') {
        styleOption = 'icon' + styleOption.charAt(0).toUpperCase() + styleOption.slice(1);
      }
      this.setIconOptions(styleOption, value);
      this.setNewMarker();
    },
    /** create HTML used to */
    createSelectHTML: function (parentUiElement, iconOptions, icon) {},
    /** get the current iconOptions
     *  if not set set them
     */
    getIconOptions: function () {
      try {
        this.options.iconOptions = this.options.styleEditorOptions.currentElement.target.options.icon.options;
      } catch (e) {
        // if a new marker is created it may be the currentItem is still set, but is no marker
      }
      if (Object.keys(this.options.iconOptions).length > 0) {
        return this.options.iconOptions;
      }
      this.options.iconOptions.iconColor = this._getDefaultMarkerColor();
      this.options.iconOptions.iconSize = this.options.styleEditorOptions.markerType.options.size.small;
      this.options.iconOptions.icon = this.options.styleEditorOptions.util.getDefaultMarkerForColor(this.options.iconOptions.iconColor);
      this.options.iconOptions = this._ensureMarkerIcon(this.options.iconOptions);
      return this.options.iconOptions;
    },
    resetIconOptions: function () {
      Object.keys(this.getIconOptions()).forEach(key => this.setStyle(key, this.options.iconOptions[key]));
    },
    setIconOptions: function (key, value) {
      let iconOptions = this.getIconOptions();
      iconOptions[key] = value;
    },
    /** call createMarkerIcon with the correct iconOptions */
    _createMarkerIcon: function () {
      let iconOptions = this.getIconOptions();
      return this.createMarkerIcon(iconOptions);
    },
    /** check that the icon set in the iconOptions exists
     *  else set default icon
     */
    _ensureMarkerIcon: function (iconOptions) {
      let markers = this.options.styleEditorOptions.util.getMarkersForColor(iconOptions.iconColor);
      if (markers.includes(iconOptions.icon)) {
        return iconOptions;
      }
      iconOptions.icon = this.options.styleEditorOptions.util.getDefaultMarkerForColor(iconOptions.iconColor);
      return iconOptions;
    },
    /** return default marker color
     *
     * will return the first of the following which is set and supported by the markers
     * 1. styleEditorOptions.defaultMarkerColor
     * 2. styleEditorOptions.defaultColor
     * 3. first color of the marker's colorRamp which is in the styleeditor.colorRamp
     * 4. first color of the marker's colorRamp
     * */
    _getDefaultMarkerColor: function () {
      let markerTypeColorRamp = this.options.colorRamp;
      let generalColorRamp = this.options.styleEditorOptions.colorRamp;
      let intersectedColorRamp = [];
      if (typeof markerTypeColorRamp !== 'undefined' && markerTypeColorRamp !== null) {
        intersectedColorRamp = markerTypeColorRamp.filter(n => generalColorRamp.includes(n));
        if (intersectedColorRamp.length === 0) {
          intersectedColorRamp = markerTypeColorRamp;
        }
      } else {
        intersectedColorRamp = generalColorRamp;
      }
      let color = this.options.styleEditorOptions.defaultMarkerColor;
      if (color !== null && !intersectedColorRamp.includes(color)) {
        color = null;
      }
      if (color === null) {
        color = this.options.styleEditorOptions.defaultColor;
        if (color !== null && !intersectedColorRamp.includes(color)) {
          color = null;
        }
        if (color === null) {
          color = intersectedColorRamp[0];
        }
      }
      return this.options.styleEditorOptions.util.rgbToHex(color);
    },
    /** return size as keyword */
    sizeToName: function (size) {
      let keys = Object.keys(this.options.size);
      if (typeof size === 'string') {
        if (size === 's') {
          size = 'small';
        } else if (size === 'm') {
          size = 'medium';
        } else if (size === 'l') {
          size = 'large';
        }
        for (let i = 0; i < keys.length; i++) {
          if (this.options.size[keys[i]] === size) {
            return keys[i];
          }
        }
      }
      let values = Object.values(this.options.size);
      for (let i = 0; i < values.length; i++) {
        if (JSON.stringify(size) === JSON.stringify(values[i])) {
          return keys[i];
        }
      }
      return keys[0];
    },
    /** return size as [x,y] */
    sizeToPixel: function (size) {
      size = this.sizeToName(size);
      return this.options.size[size];
    }
  });
}
// CONCATENATED MODULE: ./src/javascript/Marker/DefaultMarker.js


/**
 * The "old" marker style used by L.StyleEditor
 * used the mapbox API v3
 */
function setupDefaultMarker() {
  L.StyleEditor.marker.DefaultMarker = L.StyleEditor.marker.Marker.extend({
    createMarkerIcon: function (iconOptions, iconClass) {
      if (!iconClass) {
        iconClass = '';
      }
      let iconSize = iconOptions.iconSize;
      return new L.Icon({
        iconUrl: this._getMarkerUrlForStyle(iconOptions),
        iconSize: iconOptions.iconSize,
        iconColor: iconOptions.iconColor,
        icon: iconOptions.icon,
        className: iconClass,
        iconAnchor: [iconSize[0] / 2, iconSize[1] / 2],
        popupAnchor: [0, -iconSize[1] / 2]
      });
    },
    createSelectHTML: function (parentUiElement, iconOptions, icon) {
      let tmpOptions = {};
      tmpOptions.iconSize = this.options.size.small;
      tmpOptions.icon = icon;
      tmpOptions.iconColor = iconOptions.iconColor;
      parentUiElement.innerHTML = this.createMarkerIcon(tmpOptions, this.options.selectIconClass).createIcon().outerHTML;
    },
    _getMarkerUrlForStyle: function (iconOptions) {
      return this._getMarkerUrl(iconOptions.iconSize, iconOptions.iconColor, iconOptions.icon);
    },
    _getMarkerUrl: function (size, color, icon) {
      size = this.sizeToName(size)[0];
      if (color.indexOf('#') === 0) {
        color = color.replace('#', '');
      } else {
        color = this.options.styleEditorOptions.util.rgbToHex(color, true);
      }
      let url = 'https://api.tiles.mapbox.com/v3/marker/pin-' + size;
      if (icon) {
        url += '-' + icon;
      }
      return url + '+' + color + '.png';
    },
    options: {
      selectIconClass: 'defaultmarker',
      markers: ['circle-stroked', 'circle', 'square-stroked', 'square', 'triangle-stroked', 'triangle', 'star-stroked', 'star', 'cross', 'marker-stroked', 'marker', 'religious-jewish', 'religious-christian', 'religious-muslim', 'cemetery', 'rocket', 'airport', 'heliport', 'rail', 'rail-metro', 'rail-light', 'bus', 'fuel', 'parking', 'parking-garage', 'airfield', 'roadblock', 'ferry', 'harbor', 'bicycle', 'park', 'park2', 'museum', 'lodging', 'monument', 'zoo', 'garden', 'campsite', 'theatre', 'art-gallery', 'pitch', 'soccer', 'america-football', 'tennis', 'basketball', 'baseball', 'golf', 'swimming', 'cricket', 'skiing', 'school', 'college', 'library', 'post', 'fire-station', 'town-hall', 'police', 'prison', 'embassy', 'beer', 'restaurant', 'cafe', 'shop', 'fast-food', 'bar', 'bank', 'grocery', 'cinema', 'pharmacy', 'hospital', 'danger', 'industrial', 'warehouse', 'commercial', 'building', 'place-of-worship', 'alcohol-shop', 'logging', 'oil-well', 'slaughterhouse', 'dam', 'water', 'wetland', 'disability', 'telephone', 'emergency-telephone', 'toilets', 'waste-basket', 'music', 'land-use', 'city', 'town', 'village', 'farm', 'bakery', 'dog-park', 'lighthouse', 'clothing-store', 'polling-place', 'playground', 'entrance', 'heart', 'london-underground', 'minefield', 'rail-underground', 'rail-above', 'camera', 'laundry', 'car', 'suitcase', 'hairdresser', 'chemist', 'mobilephone', 'scooter']
    }
  });
}
// CONCATENATED MODULE: ./src/javascript/Marker/GlyphiconMarker.js


/**
 * Example class showing how to implement new MarkerClasses
 * uses the glyphicons given by bootstrap
 */
function setupGlyphiconMarker() {
  L.StyleEditor.marker.GlyphiconMarker = L.StyleEditor.marker.Marker.extend({
    getMarkerHtml: function (size, color, icon) {
      let iconUrl = this._getMarkerUrl(size, color);
      return '<div class="leaflet-styleeditor-marker leaflet-styleeditor-marker-' + this.sizeToName(size)[0] + '" ' + 'style="background-image: url(' + iconUrl + ');">' + '<div class="leaflet-styleeditor-fill"></div>' + '<i class="glyphicon ' + icon + '"></i>' + '<div class="leaflet-styleeditor-fill"></div>' + '</div>';
    },
    createMarkerIcon: function (iconOptions) {
      let iconSize = iconOptions.iconSize;
      return L.divIcon({
        className: 'leaflet-styleeditor-glyphicon-marker-wrapper',
        html: this.getMarkerHtml(iconSize, iconOptions.iconColor, iconOptions.icon),
        icon: iconOptions.icon,
        iconColor: iconOptions.iconColor,
        iconSize: iconSize,
        iconAnchor: [iconSize[0] / 2, iconSize[1] / 2],
        popupAnchor: [0, -iconSize[1] / 2]
      });
    },
    setStyle: function (styleOption, value) {
      if (styleOption !== 'icon') {
        styleOption = 'icon' + styleOption.charAt(0).toUpperCase() + styleOption.slice(1);
      }
      let iconOptions = this.options.iconOptions;
      if (iconOptions[styleOption] !== value) {
        iconOptions[styleOption] = value;
        this.setNewMarker();
      }
    },
    createSelectHTML: function (parentUiElement, iconOptions, icon) {
      parentUiElement.innerHTML = this.getMarkerHtml('s', iconOptions.iconColor, icon);
    },
    _getMarkerUrlForStyle: function (iconOptions) {
      return this._getMarkerUrl(iconOptions.iconSize, iconOptions.iconColor, iconOptions.icon);
    },
    _getMarkerUrl: function (size, color, icon) {
      size = this.sizeToName(size)[0];
      if (color.indexOf('#') === 0) {
        color = color.replace('#', '');
      } else {
        color = this.options.styleEditorOptions.util.rgbToHex(color, true);
      }
      let url = 'https://api.tiles.mapbox.com/v3/marker/pin-' + size;
      return url + '+' + color + '.png';
    },
    options: {
      markers: ['glyphicon-plus', 'glyphicon-asterisk', 'glyphicon-plus', 'glyphicon-euro', 'glyphicon-minus', 'glyphicon-cloud', 'glyphicon-envelope', 'glyphicon-pencil', 'glyphicon-glass', 'glyphicon-music', 'glyphicon-search', 'glyphicon-heart', 'glyphicon-star', 'glyphicon-star-empty', 'glyphicon-user', 'glyphicon-film', 'glyphicon-th-large', 'glyphicon-th', 'glyphicon-th-list', 'glyphicon-ok', 'glyphicon-remove', 'glyphicon-zoom-in', 'glyphicon-zoom-out', 'glyphicon-off', 'glyphicon-signal', 'glyphicon-cog', 'glyphicon-trash', 'glyphicon-home', 'glyphicon-file', 'glyphicon-time', 'glyphicon-road', 'glyphicon-download-alt', 'glyphicon-download', 'glyphicon-upload', 'glyphicon-inbox', 'glyphicon-play-circle', 'glyphicon-repeat', 'glyphicon-refresh', 'glyphicon-list-alt', 'glyphicon-lock', 'glyphicon-flag', 'glyphicon-headphones', 'glyphicon-volume-off', 'glyphicon-volume-down', 'glyphicon-volume-up', 'glyphicon-qrcode', 'glyphicon-barcode', 'glyphicon-tag', 'glyphicon-tags', 'glyphicon-book', 'glyphicon-bookmark', 'glyphicon-print', 'glyphicon-camera', 'glyphicon-font', 'glyphicon-bold', 'glyphicon-italic', 'glyphicon-text-height', 'glyphicon-text-width', 'glyphicon-align-left', 'glyphicon-align-center', 'glyphicon-align-right', 'glyphicon-align-justify', 'glyphicon-list', 'glyphicon-indent-left', 'glyphicon-indent-right', 'glyphicon-facetime-video', 'glyphicon-picture', 'glyphicon-map-marker', 'glyphicon-adjust', 'glyphicon-tint', 'glyphicon-edit', 'glyphicon-share', 'glyphicon-check', 'glyphicon-move', 'glyphicon-chevron-right', 'glyphicon-plus-sign', 'glyphicon-minus-sign', 'glyphicon-remove-sign', 'glyphicon-ok-sign', 'glyphicon-question-sign', 'glyphicon-info-sign', 'glyphicon-screenshot', 'glyphicon-remove-circle', 'glyphicon-ok-circle', 'glyphicon-ban-circle', 'glyphicon-arrow-left', 'glyphicon-arrow-right', 'glyphicon-arrow-up', 'glyphicon-arrow-down', 'glyphicon-share-alt', 'glyphicon-resize-full', 'glyphicon-resize-small', 'glyphicon-exclamation-sign', 'glyphicon-gift', 'glyphicon-leaf', 'glyphicon-fire', 'glyphicon-eye-open', 'glyphicon-eye-close', 'glyphicon-warning-sign', 'glyphicon-plane', 'glyphicon-calendar', 'glyphicon-random', 'glyphicon-comment', 'glyphicon-magnet', 'glyphicon-chevron-up', 'glyphicon-chevron-down', 'glyphicon-retweet', 'glyphicon-shopping-cart', 'glyphicon-bullhorn', 'glyphicon-bell', 'glyphicon-certificate', 'glyphicon-thumbs-up', 'glyphicon-thumbs-down', 'glyphicon-hand-right', 'glyphicon-hand-left', 'glyphicon-hand-up', 'glyphicon-hand-down', 'glyphicon-circle-arrow-right', 'glyphicon-circle-arrow-left', 'glyphicon-circle-arrow-up', 'glyphicon-circle-arrow-down', 'glyphicon-globe', 'glyphicon-wrench', 'glyphicon-tasks', 'glyphicon-filter', 'glyphicon-briefcase', 'glyphicon-fullscreen', 'glyphicon-dashboard', 'glyphicon-paperclip', 'glyphicon-heart-empty', 'glyphicon-link', 'glyphicon-phone', 'glyphicon-pushpin', 'glyphicon-usd']
    }
  });
}
// CONCATENATED MODULE: ./src/javascript/StyleForm.js

function setupStyleForm() {
  L.StyleForm = L.Class.extend({
    initialize: function (options) {
      L.setOptions(this, options);
      this.createMarkerForm();
      this.createGeometryForm();
      this.addDOMEvents();
    },
    addDOMEvents: function () {
      L.DomEvent.addListener(this.options.styleEditorOptions.map, 'click', this.lostFocus, this);
      L.DomEvent.addListener(this.options.styleEditorDiv, 'click', this.lostFocus, this);
    },
    clearForm: function () {
      this.options.styleEditorOptions.markerForm.hide();
      this.options.styleEditorOptions.geometryForm.hide();
    },
    createMarkerForm: function () {
      let markerDiv = L.DomUtil.create('div', 'leaflet-styleeditor-interior-marker', this.options.styleEditorInterior);
      this.options.styleEditorOptions.markerForm.create(markerDiv);
    },
    createGeometryForm: function () {
      let markerDiv = L.DomUtil.create('div', 'leaflet-styleeditor-interior-geometry', this.options.styleEditorInterior);
      this.options.styleEditorOptions.geometryForm.create(markerDiv);
    },
    showMarkerForm: function (options) {
      this.clearForm();
      this.options.styleEditorOptions.markerForm.show(options);
    },
    showGeometryForm: function (options) {
      this.clearForm();
      this.options.styleEditorOptions.geometryForm.show(options);
    },
    fireChangeEvent: function (element) {
      this.options.styleEditorOptions.util.fireChangedEvent(element);
    },
    lostFocus: function (e) {
      let parent = e.target;
      for (let i = 0; i < 10; i++) {
        if (!parent) {
          break;
        }
        if (!!parent.className && L.DomUtil.hasClass(parent, 'leaflet-styleeditor-interior')) {
          return;
        }
        parent = parent.parentNode;
      }
      this.options.styleEditorOptions.markerForm.lostFocus();
      this.options.styleEditorOptions.geometryForm.lostFocus();
    }
  });
}
// CONCATENATED MODULE: ./src/javascript/Control.js

function setupControl() {
  L.Control.StyleEditor = L.Control.extend({
    options: {
      position: 'topleft',
      colorRamp: ['#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#34495e', '#16a085', '#27ae60', '#2980b9', '#8e44ad', '#2c3e50', '#f1c40f', '#e67e22', '#e74c3c', '#ecf0f1', '#95a5a6', '#f39c12', '#d35400', '#c0392b', '#bdc3c7', '#7f8c8d'],
      defaultColor: null,
      markerType: L.StyleEditor.marker.DefaultMarker,
      markers: null,
      defaultMarkerIcon: null,
      defaultMarkerColor: null,
      geometryForm: L.StyleEditor.forms.GeometryForm,
      ignoreLayerTypes: [],
      forms: {},
      openOnLeafletDraw: true,
      openOnLeafletEditable: true,
      showTooltip: true,
      strings: {
        cancel: 'Cancel',
        cancelTitle: 'Cancel Styling',
        tooltip: 'Click on the element you want to style',
        tooltipNext: 'Choose another element you want to style'
      },
      useGrouping: true,
      styleEditorEventPrefix: 'styleeditor:',
      // internal
      currentElement: null,
      _editLayers: [],
      _layerGroups: []
    },
    initialize: function (options) {
      if (options) {
        L.setOptions(this, options);
      }
      this.options.util = new L.StyleEditor.Util({
        styleEditorOptions: this.options
      });

      // eslint-disable-next-line new-cap
      this.options.markerType = new this.options.markerType({
        styleEditorOptions: this.options
      });
      // eslint-disable-next-line new-cap
      this.options.markerForm = new this.options.markerType.markerForm({
        styleEditorOptions: this.options
      });
      // eslint-disable-next-line new-cap
      this.options.geometryForm = new this.options.geometryForm({
        styleEditorOptions: this.options
      });
      this.getDefaultIcon = this.options.markerType._createMarkerIcon.bind(this.options.markerType);
      this.createIcon = this.options.markerType.createMarkerIcon.bind(this.options.markerType);
    },
    onAdd: function (map) {
      this.options.map = map;
      return this.createUi();
    },
    fireEvent: function (eventName, element) {
      this.options.util.fireEvent(eventName, element);
    },
    createUi: function (map) {
      if (this.options.map === undefined) {
        this.options.map = map;
      }
      let controlDiv = this.options.controlDiv = L.DomUtil.create('div', 'leaflet-control-styleeditor leaflet-control leaflet-bar');
      let controlUI = this.options.controlUI = L.DomUtil.create('a', 'leaflet-control-styleeditor-interior', controlDiv);
      controlUI.title = 'Style Editor';
      let cancel = this.options.cancelUI = L.DomUtil.create('div', 'leaflet-control-styleeditor-cancel leaflet-styleeditor-hidden', controlDiv);
      cancel.innerHTML = this.options.strings.cancel;
      cancel.title = this.options.strings.cancelTitle;
      let styleEditorDiv = this.options.styleEditorDiv = L.DomUtil.create('div', 'leaflet-styleeditor', this.options.map._container);
      this.options.styleEditorHeader = L.DomUtil.create('div', 'leaflet-styleeditor-header', styleEditorDiv);
      let styleEditorInterior = L.DomUtil.create('div', 'leaflet-styleeditor-interior', styleEditorDiv);
      this.addDomEvents();
      this.addEventListeners();
      this.addButtons();
      this.options.styleForm = new L.StyleForm({
        styleEditorDiv: styleEditorDiv,
        styleEditorInterior: styleEditorInterior,
        styleEditorOptions: this.options
      });
      return this;
    },
    addDomEvents: function () {
      L.DomEvent.disableScrollPropagation(this.options.styleEditorDiv);
      L.DomEvent.disableScrollPropagation(this.options.controlDiv);
      L.DomEvent.disableScrollPropagation(this.options.cancelUI);
      L.DomEvent.disableClickPropagation(this.options.styleEditorDiv);
      L.DomEvent.disableClickPropagation(this.options.controlDiv);
      L.DomEvent.disableClickPropagation(this.options.cancelUI);
      L.DomEvent.on(this.options.controlDiv, 'click', function () {
        this.toggle();
      }, this);
    },
    addEventListeners: function () {
      this.addLeafletDrawEvents();
      this.addLeafletEditableEvents();
    },
    addLeafletDrawEvents: function () {
      if (!this.options.openOnLeafletDraw || !L.Control.Draw) {
        return;
      }
      this.options.map.on('layeradd', this.onLayerAdd, this);
      this.options.map.on(L.Draw.Event.CREATED, this.onLayerCreated, this);
    },
    addLeafletEditableEvents: function () {
      if (!this.options.openOnLeafletEditable || !L.Editable) {
        return;
      }
      this.options.map.on('layeradd', this.onLayerAdd, this);
      this.options.map.on('editable:created', this.onLayerCreated, this);
    },
    onLayerCreated: function (layer) {
      this.removeIndicators();
      this.options.currentElement = layer.layer;
    },
    onLayerAdd: function (e) {
      if (this.options.currentElement) {
        if (e.layer === this.options.util.getCurrentElement()) {
          this.enable(e.layer);
        }
      }
    },
    onRemove: function () {
      // hide everything that may be visible
      // remove edit events for layers
      // remove tooltip
      this.disable();

      // remove events
      this.removeDomEvents();
      this.removeEventListeners();

      // remove dom elements
      L.DomUtil.remove(this.options.styleEditorDiv);
      L.DomUtil.remove(this.options.cancelUI);

      // delete dom elements
      delete this.options.styleEditorDiv;
      delete this.options.cancelUI;
    },
    removeEventListeners: function () {
      this.options.map.off('layeradd', this.onLayerAdd);
      if (L.Draw) {
        this.options.map.off(L.Draw.Event.CREATED, this.onLayerCreated);
      }
      if (L.Editable) {
        this.options.map.off('editable:created', this.onLayerCreated);
      }
    },
    removeDomEvents: function () {
      L.DomEvent.off(this.options.controlDiv, 'click', function () {
        this.toggle();
      }, this);
    },
    addButtons: function () {
      let nextBtn = L.DomUtil.create('button', 'styleeditor-nextBtn fa fa-caret-right', this.options.styleEditorHeader);
      nextBtn.title = this.options.strings.tooltipNext;
      L.DomEvent.on(nextBtn, 'click', function (e) {
        e.preventDefault(); // Prevent form submit

        this.hideEditor();

        // this.fireEvent()
        if (L.DomUtil.hasClass(this.options.controlUI, 'enabled')) {
          this.createTooltip();
        }
        e.stopPropagation();
      }, this);
    },
    toggle: function () {
      if (L.DomUtil.hasClass(this.options.controlUI, 'enabled')) {
        this.disable();
      } else {
        this.enable();
      }
    },
    enable: function (layer) {
      if (this._layerIsIgnored(layer)) {
        return;
      }
      L.DomUtil.addClass(this.options.controlUI, 'enabled');
      this.showCancelButton();
      this.createTooltip();
      if (layer !== undefined) {
        if (this.isEnabled()) {
          this.removeIndicators();
        }
        this.initChangeStyle({
          target: layer
        });
      }
    },
    isEnabled: function () {
      return L.DomUtil.hasClass(this.options.controlUI, 'enabled');
    },
    disable: function () {
      if (this.isEnabled()) {
        this.options._editLayers.forEach(this.removeEditClickEvents, this);
        this.options._editLayers = [];
        this.options._layerGroups = [];
        this.hideEditor();
        this.hideCancelButton();
        this.removeTooltip();
        L.DomUtil.removeClass(this.options.controlUI, 'enabled');
      }
    },
    addEditClickEvents: function (layer) {
      if (this._layerIsIgnored(layer)) {
        return;
      }
      if (this.options.useGrouping && layer instanceof L.LayerGroup) {
        this.options._layerGroups.push(layer);
      } else if (layer instanceof L.Marker || layer instanceof L.Path) {
        let evt = layer.on('click', this.initChangeStyle, this);
        this.options._editLayers.push(evt);
      }
    },
    removeEditClickEvents: function (layer) {
      layer.off('click', this.initChangeStyle, this);
    },
    addIndicators: function () {
      if (!this.options.currentElement) {
        return;
      }
      let currentElement = this.options.currentElement.target;
      if (currentElement instanceof L.LayerGroup) {
        currentElement.eachLayer(function (layer) {
          if (layer instanceof L.Marker && layer.getElement()) {
            L.DomUtil.addClass(layer.getElement(), 'leaflet-styleeditor-marker-selected');
          }
        });
      } else if (currentElement instanceof L.Marker) {
        if (currentElement.getElement()) {
          L.DomUtil.addClass(currentElement.getElement(), 'leaflet-styleeditor-marker-selected');
        }
      }
    },
    removeIndicators: function () {
      if (!this.options.currentElement) {
        return;
      }
      let currentElement = this.options.util.getCurrentElement();
      if (currentElement instanceof L.LayerGroup) {
        currentElement.eachLayer(function (layer) {
          if (layer.getElement()) {
            L.DomUtil.removeClass(layer.getElement(), 'leaflet-styleeditor-marker-selected');
          }
        });
      } else {
        if (currentElement.getElement()) {
          L.DomUtil.removeClass(currentElement.getElement(), 'leaflet-styleeditor-marker-selected');
        }
      }
    },
    hideEditor: function () {
      if (L.DomUtil.hasClass(this.options.styleEditorDiv, 'editor-enabled')) {
        this.removeIndicators();
        L.DomUtil.removeClass(this.options.styleEditorDiv, 'editor-enabled');
        this.fireEvent('hidden', this.options.util.getCurrentElement());
        this.options.currentElement = null;
      }
    },
    hideCancelButton: function () {
      L.DomUtil.addClass(this.options.cancelUI, 'leaflet-styleeditor-hidden');
    },
    showEditor: function () {
      let editorDiv = this.options.styleEditorDiv;
      if (!L.DomUtil.hasClass(editorDiv, 'editor-enabled')) {
        L.DomUtil.addClass(editorDiv, 'editor-enabled');
        this.fireEvent('visible');
      }
    },
    showCancelButton: function () {
      L.DomUtil.removeClass(this.options.cancelUI, 'leaflet-styleeditor-hidden');
    },
    initChangeStyle: function (e, options) {
      this.removeIndicators();
      this.options.currentElement = this.options.useGrouping ? this.getMatchingElement(e) : e;
      this.addIndicators();
      this.showEditor();
      this.removeTooltip();
      let layer = e;
      if (!(layer instanceof L.Layer)) {
        layer = e.target;
      }
      this.fireEvent('editing', layer);
      if (layer instanceof L.Marker) {
        // ensure iconOptions are set for Leaflet.Draw created Markers
        this.options.markerType.resetIconOptions();
        // marker
        this.showMarkerForm(layer, options);
      } else {
        // layer with of type L.GeoJSON or L.Path (polyline, polygon, ...)
        this.showGeometryForm(layer, options);
      }
    },
    showGeometryForm: function (layer, options) {
      this.fireEvent('geometry', layer);
      this.options.styleForm.showGeometryForm(options);
    },
    showMarkerForm: function (layer, options) {
      this.fireEvent('marker', layer);
      this.options.styleForm.showMarkerForm(options);
    },
    createTooltip: function () {
      if (!this.options.showTooltip) {
        return;
      }
      if (!this.options.tooltipWrapper) {
        this.options.tooltipWrapper = L.DomUtil.create('div', 'leaflet-styleeditor-tooltip-wrapper', this.options.map.getContainer());
      }
      if (!this.options.tooltip) {
        this.options.tooltip = L.DomUtil.create('div', 'leaflet-styleeditor-tooltip', this.options.tooltipWrapper);
      }
      this.options.tooltip.innerHTML = this.options.strings.tooltip;
    },
    getMatchingElement: function (e) {
      let group = null;
      let layer = e.target;
      for (let i = 0; i < this.options._layerGroups.length; ++i) {
        group = this.options._layerGroups[i];
        if (group && layer !== group && group.hasLayer(layer)) {
          // we use the opacity style to check for correct object
          if (!group.options || !group.options.opacity) {
            group.options = layer.options;

            // special handling for layers... we pass the setIcon function
            if (layer.setIcon) {
              group.setIcon = function (icon) {
                group.eachLayer(function (layer) {
                  if (layer instanceof L.Marker) {
                    layer.setIcon(icon);
                  }
                });
              };
            }
          }
          return this.getMatchingElement({
            target: group
          });
        }
      }
      return e;
    },
    removeTooltip: function () {
      if (this.options.tooltip && this.options.tooltip.parentNode) {
        this.options.tooltip.remove();
        this.options.tooltip = undefined;
      }
    },
    _layerIsIgnored: function (layer) {
      if (layer === undefined) {
        return false;
      }
      return this.options.ignoreLayerTypes.some(layerType => layer.styleEditor && layer.styleEditor.type.toUpperCase() === layerType.toUpperCase());
    }
  });
  L.control.styleEditor = function (options) {
    if (!options) {
      options = {};
    }
    return new L.Control.StyleEditor(options);
  };
}
// CONCATENATED MODULE: ./src/javascript/Util.js


/**
 * Helper functions used throuhgout the project
 */
function setupUtil() {
  L.StyleEditor.Util = L.Class.extend({
    initialize: function (options) {
      if (options) {
        L.setOptions(this, options);
      }
    },
    fireEvent: function (eventName, element) {
      this.options.styleEditorOptions.map.fireEvent(this.options.styleEditorOptions.styleEditorEventPrefix + eventName, element);
      // notify leaflet layer about style change
      if (element && typeof element.fireEvent === 'function') {
        element.fireEvent(this.options.styleEditorOptions.styleEditorEventPrefix + eventName, element);
      }
    },
    /** fire an event if Leaflet.StyleEditor changed something */
    fireChangeEvent: function (element) {
      this.fireEvent('changed', element);
    },
    /** hide the given element */
    hideElement: function (element) {
      if (element) {
        L.DomUtil.addClass(element, 'leaflet-styleeditor-hidden');
      }
    },
    /** convert rgb to hex of a color
     * @param {string} rgb - rgb representation of the color
     * @param {boolean} noHash - define if return value should not include hash
     */
    rgbToHex: function (rgb, noHash) {
      if (!rgb) {
        rgb = this.options.styleEditorOptions.defaultColor;
        if (rgb.indexOf('#') !== 0) {
          rgb = '#' + rgb;
        }
      }
      if (rgb.indexOf('#') === 0) {
        if (noHash) {
          rgb.replace('#', '');
        }
        return rgb;
      }
      if (rgb.indexOf('(') < 0) {
        return '#' + rgb;
      }
      let rgbArray = rgb.substring(4).replace(')', '').split(',');
      let withoutHash = this._componentToHex(parseInt(rgbArray[0], 10)) + this._componentToHex(parseInt(rgbArray[1], 10)) + this._componentToHex(parseInt(rgbArray[2], 10));
      if (noHash) {
        return withoutHash;
      }
      return '#' + withoutHash;
    },
    /** get element selected to be styled */
    getCurrentElement: function () {
      if (!this.options.styleEditorOptions.currentElement) {
        return null;
      }
      if (this.options.styleEditorOptions.currentElement.target !== undefined) {
        return this.options.styleEditorOptions.currentElement.target;
      }
      return this.options.styleEditorOptions.currentElement;
    },
    /** set which element is selected to be styled */
    setCurrentElement: function (currentElement) {
      this.options.styleEditorOptions.currentElement.target = currentElement;
    },
    /** does current element have the fill option */
    fillCurrentElement: function () {
      return this.getCurrentElement().options.fill;
    },
    /** get current style of current element */
    getStyle: function (option) {
      let currentElement = this.getCurrentElement();
      let style = currentElement.options[option];
      if (style) {
        return style;
      }
      return null;
    },
    /** set new style to current element */
    setStyle: function (option, value) {
      let currentElement = this.getCurrentElement();
      if (currentElement instanceof L.Marker) {
        this.options.styleEditorOptions.markerType.setStyle(option, value);
      } else {
        let newStyle = {};
        newStyle[option] = value;
        currentElement.setStyle(newStyle);
      }
      this.fireChangeEvent(currentElement);
    },
    /** show hidden element */
    showElement: function (element) {
      if (element) {
        L.DomUtil.removeClass(element, 'leaflet-styleeditor-hidden');
      }
    },
    /** helper function to convert color to hex */
    _componentToHex: function (color) {
      let hex = color.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    },
    /** get the markers for a specific color **/
    getMarkersForColor: function (color) {
      color = this.rgbToHex(color);
      let markers = this.options.styleEditorOptions.markerType.options.markers;
      let controlMarkers = this.options.styleEditorOptions.markers;
      if (!Array.isArray(markers)) {
        // if color is specified return specific markers
        if (Object.keys(markers).includes(color)) {
          markers = markers[color];
        } else {
          markers = markers['default'];
        }
      }
      if (controlMarkers !== null) {
        if (!Array.isArray(controlMarkers)) {
          let keys = Object.keys(controlMarkers);
          if (keys.includes(color)) {
            controlMarkers = controlMarkers[color];
          } else if (keys.includes('default')) {
            controlMarkers = controlMarkers['default'];
          } else {
            controlMarkers = markers;
          }
        }
        return markers.filter(n => controlMarkers.includes(n));
      }
      return markers;
    },
    /** get default marker for specific color **/
    getDefaultMarkerForColor: function (color) {
      color = this.rgbToHex(color);
      let markers = this.getMarkersForColor(color);
      let defMarkers = [];
      let defaultMarker = this.options.styleEditorOptions.defaultMarkerIcon;
      if (defaultMarker !== null) {
        if (typeof defaultMarker === 'string') {
          defMarkers.push(defaultMarker);
        }
        if (Object.keys(defaultMarker).includes(color)) {
          defMarkers.push(defaultMarker[color]);
        }
      }
      defaultMarker = this.options.styleEditorOptions.markerType.options.defaultMarkerIcon;
      if (defaultMarker !== undefined) {
        if (typeof defaultMarker === 'string') {
          defMarkers.push(defaultMarker);
        }
        if (Object.keys(defaultMarker).includes(color)) {
          defMarkers.push(defaultMarker[color]);
        }
      }
      defMarkers.filter(n => markers.includes(n));
      if (defMarkers.length > 0) {
        return defMarkers[0];
      }
      return markers[0];
    }
  });
}
// CONCATENATED MODULE: ./src/javascript/Leaflet.StyleEditor.js


















__webpack_require__(1);
L.StyleEditor = {
  marker: {},
  forms: {},
  formElements: {}
};
L.Marker.include({
  styleEditor: {
    type: 'Marker'
  }
});
L.Polygon.include({
  styleEditor: {
    type: 'Polygon'
  }
});
L.Polyline.include({
  styleEditor: {
    type: 'Polyline'
  }
});
L.Rectangle.include({
  styleEditor: {
    type: 'Rectangle'
  }
});
setupUtil();
setupFormElement();
setupColorElement();
setupDashElement();
setupIconElement();
setupOpacityElement();
setupPopupContentElement();
setupSizeElement();
setupWeightElement();
setupForm();
setupGeometryForm();
setupMarkerForm();
setupMarker();
setupDefaultMarker();
setupGlyphiconMarker();
setupStyleForm();
setupControl();
/* harmony default export */ var Leaflet_StyleEditor = __webpack_exports__["default"] = (L);

/***/ })
/******/ ]);