/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createPost: () => (/* binding */ createPost),\n/* harmony export */   fetchComments: () => (/* binding */ fetchComments),\n/* harmony export */   fetchPosts: () => (/* binding */ fetchPosts)\n/* harmony export */ });\nconst BASE_URL = 'https://jsonplaceholder.typicode.com';\nasync function fetchPosts() {\n  let limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;\n  const response = await fetch(`${BASE_URL}/posts?_limit=${limit}`);\n  if (!response.ok) {\n    throw new Error('Failed to load posts');\n  }\n  return response.json();\n}\nasync function createPost(title, body) {\n  const response = await fetch(`${BASE_URL}/posts`, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify({\n      title,\n      body,\n      userId: 1\n    })\n  });\n  if (!response.ok) {\n    throw new Error('Network response was not ok');\n  }\n  return response.json();\n}\nasync function fetchComments(postId) {\n  let limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;\n  const response = await fetch(`${BASE_URL}/posts/${postId}/comments?_limit=${limit}`);\n  if (!response.ok) {\n    throw new Error('Failed to load comments');\n  }\n  return response.json();\n}\n\n//# sourceURL=webpack://frontendpro/./src/api.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCommentElement: () => (/* binding */ createCommentElement),\n/* harmony export */   createPostElement: () => (/* binding */ createPostElement)\n/* harmony export */ });\nfunction createPostElement(post) {\n  const postEl = document.createElement('div');\n  postEl.className = 'post-card';\n  postEl.innerHTML = `\n        <h3>${post.title}</h3>\n        <p>${post.body}</p>\n        <button class=\"load-comments\" data-post-id=\"${post.id}\">Download comments</button>\n        <div class=\"comments\" id=\"comments-${post.id}\"></div>\n    `;\n  return postEl;\n}\nfunction createCommentElement(comment) {\n  const commentEl = document.createElement('div');\n  commentEl.className = 'comment';\n  commentEl.innerHTML = `<strong>${comment.name}</strong> (${comment.email}):<br>${comment.body}`;\n  return commentEl;\n}\n\n//# sourceURL=webpack://frontendpro/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.js */ \"./src/api.js\");\n/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./script.js */ \"./src/script.js\");\n/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui.js */ \"./src/ui.js\");\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scss/styles.scss */ \"./src/scss/styles.scss\");\n\n\n\n\n\n\n//# sourceURL=webpack://frontendpro/./src/index.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui.js */ \"./src/ui.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  (0,_ui_js__WEBPACK_IMPORTED_MODULE_0__.loadPosts)();\n  (0,_ui_js__WEBPACK_IMPORTED_MODULE_0__.setupEventListeners)();\n});\n\n//# sourceURL=webpack://frontendpro/./src/script.js?");

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://frontendpro/./src/scss/styles.scss?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadPosts: () => (/* binding */ loadPosts),\n/* harmony export */   setupEventListeners: () => (/* binding */ setupEventListeners)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/api.js\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n\n\nconst postsContainer = document.getElementById('posts');\nconst postForm = document.getElementById('postForm');\nconst titleInput = document.getElementById('title');\nconst bodyInput = document.getElementById('body');\nasync function loadPosts() {\n  try {\n    const posts = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.fetchPosts)();\n    posts.forEach(post => {\n      const postEl = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.createPostElement)(post);\n      postsContainer.appendChild(postEl);\n    });\n  } catch (error) {\n    console.error('Error loading posts:', error);\n  }\n}\nfunction setupEventListeners() {\n  postForm.addEventListener('submit', async e => {\n    e.preventDefault();\n    const title = titleInput.value.trim();\n    const body = bodyInput.value.trim();\n    if (title && body) {\n      try {\n        const newPost = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.createPost)(title, body);\n        console.log('The post has been created:', newPost);\n        const postEl = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.createPostElement)(newPost);\n        postsContainer.prepend(postEl);\n        titleInput.value = '';\n        bodyInput.value = '';\n      } catch (error) {\n        console.error('Error creating post:', error);\n      }\n    }\n  });\n  postsContainer.addEventListener('click', async e => {\n    if (e.target.classList.contains('load-comments')) {\n      const postId = e.target.dataset.postId;\n      const button = e.target;\n      try {\n        const comments = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.fetchComments)(postId);\n        const commentsDiv = document.getElementById(`comments-${postId}`);\n        if (commentsDiv.children.length > 0) return;\n        comments.forEach(comment => {\n          const commentEl = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.createCommentElement)(comment);\n          commentsDiv.appendChild(commentEl);\n        });\n        button.disabled = true;\n      } catch (error) {\n        console.error('Error loading comments:', error);\n      }\n    }\n  });\n}\n\n//# sourceURL=webpack://frontendpro/./src/ui.js?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;