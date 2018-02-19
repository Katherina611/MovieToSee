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

"use strict";


var $section = $('.movies');
function addUser() {
    var btn = $section.find('input[type=submit]');
    var $movie = $section.find('#addMovie');
    var $description = $section.find('#addDesc');
    var $images = $section.find('#addImg');
    var $li = $section.find('li').find('span');
    var newBtn = $('<button class="button1">Oglądnąłem</button>');
    var editBtn = $('<button class="button2">Edytuj tytuł</button>');
    $li.append(newBtn);
    $li.append(editBtn);

    btn.on('click', function () {
        var movieVal = $movie.val();
        var descVAl = $description.val();
        var imgVal = $images.val();

        var $newLi = $('<li>');
        var $newSpan = $('<span>');
        var $newDecription = $('<p>');
        var $newImage = $('<img>');
        var newBtn = $('<button class="button1">Oglądnąłem</button>');
        var editBtn = $('<button class="button2">Edytuj tytuł</button>');
        $newImage.attr('src', imgVal);
        $newSpan.text(movieVal);
        $newDecription.text(descVAl);

        $section.find('ul').append($newLi);
        $newLi.append($newSpan);
        $newLi.append($newDecription);
        $newLi.append($newImage);
        $newSpan.append(newBtn);
        $newSpan.append(editBtn);
    });
}

$('body').on('click', '.button1', function () {
    $(this).parent().parent().remove();
});
$('body').on('click', '.button2', function () {
    $(this).parent().attr("contenteditable", "true");
    $(this).attr("class", "accept");
    $(this).text("Zatwierdź");
});
$('body').on('click', '.accept', function () {
    $(this).parent().attr("contenteditable", "false");
    $(this).attr("class", "button2");
    $(this).text("Edit");
});

addUser();

/***/ })
/******/ ]);
//# sourceMappingURL=out.js.map