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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var AjaxRequest = __webpack_require__(1);
var CountryView = __webpack_require__(2);

var app = function(){
    var countryData = new AjaxRequest('https://restcountries.eu/rest/v2');
    var countryView = new CountryView(countryData);
    countryData.get(countryView.render);
    localStorage.setItem("myCountries", JSON.stringify(countryData));
}


window.addEventListener('load',app);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var AjaxRequest = function(url){
    this.url = url;
    this.data = [];
}

AjaxRequest.prototype.get = function(callback){

    var request = new XMLHttpRequest();
    request.open("GET", this.url);
    request.onload = function(){
      if(request.status === 200){
        var jsonString = request.responseText;
        this.data = JSON.parse(jsonString);
        callback(this.data);
      }
    }.bind(this);
    request.send();

}

AjaxRequest.prototype.post = function(callback, data){
  var request = new XMLHttpRequest();
  request.open("POST", this.url);
  request.setRequestHeader("Content-Type", "application/json");
  request.onload = function(){
    if(request.status === 2000) {
      var jsonString = request.responseText;
      this.data = JSON.parse(jsonString);
      callback(this.data);
    }
  }.bind(this);

  request.send(JSON.stringify(data));

}

module.exports = AjaxRequest;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var CountryView = function() {
    var button = document.getElementById('button');
    button.addEventListener('click',this.processCLick);
  }
  
  CountryView.prototype.render = function(data){
      console.log(data);
      var selection = document.getElementById('selection');
      data.forEach(function(country, index) {
        var option = document.createElement('option');
        option.text = country.name;
        option.value = country.name;
        selection.appendChild(option);
      })
  }

  CountryView.prototype.processCLick = function(){
    var countrySelected = document.getElementById('selection');
    // var selectedValue = countrySelected.options[countrySelected.selectedIndex].text;

    var ul = document.getElementById("bucket-list-countries");
    var li = document.createElement("li")
    li.innerText = countrySelected.value;
    ul.appendChild(li);
  }
    
  module.exports = CountryView;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map