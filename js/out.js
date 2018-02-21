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

        //rozwiazanie z gwiazdkami//
        var $stars = $('<div class="stars"></div>');
        var $newStar1 = $('<span class="star1">★</span>');
        var $newStar2 = $('<span class="star2">★</span>');
        var $newStar3 = $('<span class="star3">★</span>');
        var $newStar4 = $('<span class="star4">★</span>');
        var $newStar5 = $('<span class="star5">★</span>');
        $stars.append($newStar1);
        $stars.append($newStar2);
        $stars.append($newStar3);
        $stars.append($newStar4);
        $stars.append($newStar5);

        $section.find('ul').append($newLi);
        $newLi.append($newSpan);
        $newLi.append($newDecription);
        $newLi.append($newImage);
        $newLi.append($stars);
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
$('body').on('click', '.star1', function () {
    if ($(this).hasClass('star1')) {
        $(this).css('color', "orange");
        $(this).next().css('color', "grey");
        $(this).next().next().css('color', "grey");
        $(this).next().next().next().css('color', "grey");
        $(this).next().next().next().next().css('color', "grey");
    }
});
$('body').on('click', '.star2', function () {
    if ($(this).hasClass('star2')) {
        $(this).css('color', "orange");
        $(this).prev().css('color', "orange");
        $(this).next().css('color', "grey");
        $(this).next().next().css('color', "grey");
        $(this).next().next().next().css('color', "grey");
    }
});
$('body').on('click', '.star3', function () {
    if ($(this).hasClass('star3')) {
        $(this).css('color', "orange");
        $(this).prev().css('color', "orange");
        $(this).prev().prev().css('color', "orange");
        $(this).next().css('color', "grey");
        $(this).next().next().css('color', "grey");
    }
});
$('body').on('click', '.star4', function () {
    if ($(this).hasClass('star4')) {
        $(this).css('color', "orange");
        $(this).prev().css('color', "orange");
        $(this).prev().prev().css('color', "orange");
        $(this).prev().prev().prev().css('color', "orange");
        $(this).next().css('color', "grey");
    }
});
$('body').on('click', '.star5', function () {
    if ($(this).hasClass('star5')) {
        $(this).css('color', "orange");
        $(this).prev().css('color', "orange");
        $(this).prev().prev().css('color', "orange");
        $(this).prev().prev().prev().css('color', "orange");
        $(this).prev().prev().prev().prev().css('color', "orange");
    }
});

addUser();

/***/ })
/******/ ]);
//# sourceMappingURL=out.js.map