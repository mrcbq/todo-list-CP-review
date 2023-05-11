/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/methods.js":
/*!************************!*\
  !*** ./src/methods.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "editTask": () => (/* binding */ editTask),
/* harmony export */   "filterTasks": () => (/* binding */ filterTasks),
/* harmony export */   "toggleCompleted": () => (/* binding */ toggleCompleted),
/* harmony export */   "updateTasks": () => (/* binding */ updateTasks)
/* harmony export */ });
/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks.js */ "./src/tasks.js");


let tasks = _tasks_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTasks();

const updateTasks = () => {
  _tasks_js__WEBPACK_IMPORTED_MODULE_0__["default"].setTasks(tasks);
  tasks = _tasks_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTasks();
  return tasks;
};

const addTask = (description) => {
  tasks = _tasks_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTasks();
  const newTask = {
    id: tasks.length + 1,
    description,
    completed: false,
  };
  tasks.push(newTask);
  updateTasks();
};

const deleteTask = (id) => {
  tasks = _tasks_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTasks();
  const taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    tasks.forEach((task, index) => {
      task.id = index + 1;
    });
    updateTasks();
  }
};

const editTask = (id, description) => {
  tasks = _tasks_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTasks();
  const task = tasks.find((task) => task.id === id);
  if (task) {
    task.description = description;
    updateTasks();
  }
};

const toggleCompleted = (id) => {
  tasks = _tasks_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTasks();
  const task = tasks.find((task) => task.id === id);
  task.completed = !task.completed;
  updateTasks();
};

const filterTasks = () => {
  const filteredTasks = tasks.filter((task) => task.completed === false);
  filteredTasks.forEach((task, index) => { task.id = index + 1; });
  tasks = filteredTasks;
  _tasks_js__WEBPACK_IMPORTED_MODULE_0__["default"].setTasks(filteredTasks);
  tasks = _tasks_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTasks();
  updateTasks();
};




/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let tasks = JSON.parse(localStorage.getItem('tasks')) ?? [
  {
    id: 1,
    description: 'wash the dishes',
    completed: false,
  },
  {
    id: 2,
    description: 'Complete the to-do list project',
    completed: true,
  },
];

const tasksObj = {
  getTasks() {
    return tasks;
  },
  setTasks(newTasks) {
    tasks = newTasks;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tasksObj);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderTasks)
/* harmony export */ });
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _methods_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./methods.js */ "./src/methods.js");



const tasksContainer = document.getElementById('tasks-container');
function renderTasks() {
  const tasks = (0,_methods_js__WEBPACK_IMPORTED_MODULE_1__.updateTasks)();
  tasksContainer.innerHTML = '';
  tasks.forEach((task, idx) => {
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    const input = document.createElement('input');
    const dotsButton = document.createElement('input');

    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('tabindex', '0');
    checkbox.setAttribute('alt', 'Check!');
    checkbox.checked = task.completed;

    input.setAttribute('maxlength', '255');
    input.value = task.description;

    const attrs = {
      type: 'button',
      tabindex: '-1',
      value: '',
      title: 'click and sostain for rearrange',
      class: 'input-btn-dots',
    };

    Object.entries(attrs).forEach(([key, value]) => {
      dotsButton.setAttribute(key, value);
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(input);
    listItem.appendChild(dotsButton);
    tasksContainer.appendChild(listItem);

    input.addEventListener('input', () => {
      (0,_methods_js__WEBPACK_IMPORTED_MODULE_1__.editTask)(idx + 1, input.value);
    });

    checkbox.addEventListener('change', () => {
      (0,_methods_js__WEBPACK_IMPORTED_MODULE_1__.toggleCompleted)(idx + 1);
      renderTasks();
    });

    dotsButton.addEventListener('click', () => {
      (0,_methods_js__WEBPACK_IMPORTED_MODULE_1__.deleteTask)(idx + 1);
      renderTasks();
    });
  });
}

document.getElementById('clear-btn').addEventListener('click', () => {
  (0,_methods_js__WEBPACK_IMPORTED_MODULE_1__.filterTasks)();
  renderTasks();
});

const inputList = document.getElementById('input-list');
const form = document.getElementById('form-input');
form.addEventListener('submit', () => {
  const description = inputList.value;
  if (description !== '') {
    (0,_methods_js__WEBPACK_IMPORTED_MODULE_1__.addTask)(description);
    inputList.value = '';
    renderTasks();
  }
});

renderTasks();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBa0M7O0FBRWxDLFlBQVksMERBQWlCOztBQUU3QjtBQUNBLEVBQUUsMERBQWlCO0FBQ25CLFVBQVUsMERBQWlCO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQSxVQUFVLDBEQUFpQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVSwwREFBaUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVLDBEQUFpQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVLDBEQUFpQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkNBQTJDLHNCQUFzQjtBQUNqRTtBQUNBLEVBQUUsMERBQWlCO0FBQ25CLFVBQVUsMERBQWlCO0FBQzNCO0FBQ0E7O0FBSUU7Ozs7Ozs7Ozs7Ozs7OztBQzVERjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUVBQWUsUUFBUTs7Ozs7O1VDdkJ2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ05xQjtBQVFDOztBQUV0QjtBQUNlO0FBQ2YsZ0JBQWdCLHdEQUFXO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSxxREFBUTtBQUNkLEtBQUs7O0FBRUw7QUFDQSxNQUFNLDREQUFlO0FBQ3JCO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLE1BQU0sdURBQVU7QUFDaEI7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0EsRUFBRSx3REFBVztBQUNiO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvREFBTztBQUNYO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5jc3M/YzQwZCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tZXRob2RzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Rhc2tzLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHRhc2tzT2JqIGZyb20gJy4vdGFza3MuanMnO1xuXG5sZXQgdGFza3MgPSB0YXNrc09iai5nZXRUYXNrcygpO1xuXG5jb25zdCB1cGRhdGVUYXNrcyA9ICgpID0+IHtcbiAgdGFza3NPYmouc2V0VGFza3ModGFza3MpO1xuICB0YXNrcyA9IHRhc2tzT2JqLmdldFRhc2tzKCk7XG4gIHJldHVybiB0YXNrcztcbn07XG5cbmNvbnN0IGFkZFRhc2sgPSAoZGVzY3JpcHRpb24pID0+IHtcbiAgdGFza3MgPSB0YXNrc09iai5nZXRUYXNrcygpO1xuICBjb25zdCBuZXdUYXNrID0ge1xuICAgIGlkOiB0YXNrcy5sZW5ndGggKyAxLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gIH07XG4gIHRhc2tzLnB1c2gobmV3VGFzayk7XG4gIHVwZGF0ZVRhc2tzKCk7XG59O1xuXG5jb25zdCBkZWxldGVUYXNrID0gKGlkKSA9PiB7XG4gIHRhc2tzID0gdGFza3NPYmouZ2V0VGFza3MoKTtcbiAgY29uc3QgdGFza0luZGV4ID0gdGFza3MuZmluZEluZGV4KCh0YXNrKSA9PiB0YXNrLmlkID09PSBpZCk7XG4gIGlmICh0YXNrSW5kZXggIT09IC0xKSB7XG4gICAgdGFza3Muc3BsaWNlKHRhc2tJbmRleCwgMSk7XG4gICAgdGFza3MuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcbiAgICAgIHRhc2suaWQgPSBpbmRleCArIDE7XG4gICAgfSk7XG4gICAgdXBkYXRlVGFza3MoKTtcbiAgfVxufTtcblxuY29uc3QgZWRpdFRhc2sgPSAoaWQsIGRlc2NyaXB0aW9uKSA9PiB7XG4gIHRhc2tzID0gdGFza3NPYmouZ2V0VGFza3MoKTtcbiAgY29uc3QgdGFzayA9IHRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suaWQgPT09IGlkKTtcbiAgaWYgKHRhc2spIHtcbiAgICB0YXNrLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdXBkYXRlVGFza3MoKTtcbiAgfVxufTtcblxuY29uc3QgdG9nZ2xlQ29tcGxldGVkID0gKGlkKSA9PiB7XG4gIHRhc2tzID0gdGFza3NPYmouZ2V0VGFza3MoKTtcbiAgY29uc3QgdGFzayA9IHRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suaWQgPT09IGlkKTtcbiAgdGFzay5jb21wbGV0ZWQgPSAhdGFzay5jb21wbGV0ZWQ7XG4gIHVwZGF0ZVRhc2tzKCk7XG59O1xuXG5jb25zdCBmaWx0ZXJUYXNrcyA9ICgpID0+IHtcbiAgY29uc3QgZmlsdGVyZWRUYXNrcyA9IHRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5jb21wbGV0ZWQgPT09IGZhbHNlKTtcbiAgZmlsdGVyZWRUYXNrcy5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4geyB0YXNrLmlkID0gaW5kZXggKyAxOyB9KTtcbiAgdGFza3MgPSBmaWx0ZXJlZFRhc2tzO1xuICB0YXNrc09iai5zZXRUYXNrcyhmaWx0ZXJlZFRhc2tzKTtcbiAgdGFza3MgPSB0YXNrc09iai5nZXRUYXNrcygpO1xuICB1cGRhdGVUYXNrcygpO1xufTtcblxuZXhwb3J0IHtcbiAgdXBkYXRlVGFza3MsIGFkZFRhc2ssIGRlbGV0ZVRhc2ssIGVkaXRUYXNrLCB0b2dnbGVDb21wbGV0ZWQsIGZpbHRlclRhc2tzLFxufTtcbiIsImxldCB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpID8/IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIGRlc2NyaXB0aW9uOiAnd2FzaCB0aGUgZGlzaGVzJyxcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgZGVzY3JpcHRpb246ICdDb21wbGV0ZSB0aGUgdG8tZG8gbGlzdCBwcm9qZWN0JyxcbiAgICBjb21wbGV0ZWQ6IHRydWUsXG4gIH0sXG5dO1xuXG5jb25zdCB0YXNrc09iaiA9IHtcbiAgZ2V0VGFza3MoKSB7XG4gICAgcmV0dXJuIHRhc2tzO1xuICB9LFxuICBzZXRUYXNrcyhuZXdUYXNrcykge1xuICAgIHRhc2tzID0gbmV3VGFza3M7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRhc2tzT2JqOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5pbXBvcnQge1xuICBhZGRUYXNrLFxuICBkZWxldGVUYXNrLFxuICBlZGl0VGFzayxcbiAgdXBkYXRlVGFza3MsXG4gIHRvZ2dsZUNvbXBsZXRlZCxcbiAgZmlsdGVyVGFza3MsXG59IGZyb20gJy4vbWV0aG9kcy5qcyc7XG5cbmNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tzLWNvbnRhaW5lcicpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyVGFza3MoKSB7XG4gIGNvbnN0IHRhc2tzID0gdXBkYXRlVGFza3MoKTtcbiAgdGFza3NDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gIHRhc2tzLmZvckVhY2goKHRhc2ssIGlkeCkgPT4ge1xuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IGRvdHNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCdhbHQnLCAnQ2hlY2shJyk7XG4gICAgY2hlY2tib3guY2hlY2tlZCA9IHRhc2suY29tcGxldGVkO1xuXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCAnMjU1Jyk7XG4gICAgaW5wdXQudmFsdWUgPSB0YXNrLmRlc2NyaXB0aW9uO1xuXG4gICAgY29uc3QgYXR0cnMgPSB7XG4gICAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICAgIHRhYmluZGV4OiAnLTEnLFxuICAgICAgdmFsdWU6ICcnLFxuICAgICAgdGl0bGU6ICdjbGljayBhbmQgc29zdGFpbiBmb3IgcmVhcnJhbmdlJyxcbiAgICAgIGNsYXNzOiAnaW5wdXQtYnRuLWRvdHMnLFxuICAgIH07XG5cbiAgICBPYmplY3QuZW50cmllcyhhdHRycykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICBkb3RzQnV0dG9uLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICB9KTtcblxuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoZG90c0J1dHRvbik7XG4gICAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICBlZGl0VGFzayhpZHggKyAxLCBpbnB1dC52YWx1ZSk7XG4gICAgfSk7XG5cbiAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0b2dnbGVDb21wbGV0ZWQoaWR4ICsgMSk7XG4gICAgICByZW5kZXJUYXNrcygpO1xuICAgIH0pO1xuXG4gICAgZG90c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGRlbGV0ZVRhc2soaWR4ICsgMSk7XG4gICAgICByZW5kZXJUYXNrcygpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsZWFyLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBmaWx0ZXJUYXNrcygpO1xuICByZW5kZXJUYXNrcygpO1xufSk7XG5cbmNvbnN0IGlucHV0TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1saXN0Jyk7XG5jb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0taW5wdXQnKTtcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKCkgPT4ge1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGlucHV0TGlzdC52YWx1ZTtcbiAgaWYgKGRlc2NyaXB0aW9uICE9PSAnJykge1xuICAgIGFkZFRhc2soZGVzY3JpcHRpb24pO1xuICAgIGlucHV0TGlzdC52YWx1ZSA9ICcnO1xuICAgIHJlbmRlclRhc2tzKCk7XG4gIH1cbn0pO1xuXG5yZW5kZXJUYXNrcygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9