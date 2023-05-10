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

function updateTasks() {
  _tasks_js__WEBPACK_IMPORTED_MODULE_0__["default"].setTasks(tasks);
  tasks = _tasks_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTasks();
  return tasks;
}

function addTask(description) {
  tasks = _tasks_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTasks();
  const newTask = {
    id: tasks.length + 1,
    description,
    completed: false,
  };
  tasks.push(newTask);
  updateTasks();
}

function deleteTask(id) {
  tasks = _tasks_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTasks();
  const taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    tasks.forEach((task, index) => {
      task.id = index + 1;
    });
    updateTasks();
  }
}

function editTask(id, description) {
  tasks = _tasks_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTasks();
  const task = tasks.find((task) => task.id === id);
  if (task) {
    task.description = description;
    updateTasks();
  }
}

function toggleCompleted(id) {
  tasks = _tasks_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTasks();
  const task = tasks.find((task) => task.id === id);
  task.completed = !task.completed;
  updateTasks();
}

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
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _methods_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./methods.js */ "./src/methods.js");



const tasksContainer = document.getElementById('tasks-container');
function renderTasks() {
  const tasks = (0,_methods_js__WEBPACK_IMPORTED_MODULE_1__.updateTasks)();
  tasksContainer.innerHTML = '';
  tasks.forEach((task, idx) => {
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    const textarea = document.createElement('input');
    const dotsButton = document.createElement('input');

    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('tabindex', '0');
    checkbox.setAttribute('alt', 'Check!');
    checkbox.checked = task.completed;

    textarea.setAttribute('maxlength', '255');
    textarea.value = task.description;

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
    listItem.appendChild(textarea);
    listItem.appendChild(dotsButton);
    tasksContainer.appendChild(listItem);

    textarea.addEventListener('input', () => {
      (0,_methods_js__WEBPACK_IMPORTED_MODULE_1__.editTask)(idx + 1, textarea.value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBa0M7O0FBRWxDLFlBQVksMERBQWlCOztBQUU3QjtBQUNBLEVBQUUsMERBQWlCO0FBQ25CLFVBQVUsMERBQWlCO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQSxVQUFVLDBEQUFpQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVSwwREFBaUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVLDBEQUFpQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVLDBEQUFpQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkNBQTJDLHNCQUFzQjtBQUNqRTtBQUNBLEVBQUUsMERBQWlCO0FBQ25CLFVBQVUsMERBQWlCO0FBQzNCO0FBQ0E7O0FBSUU7Ozs7Ozs7Ozs7Ozs7OztBQzVERjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUVBQWUsUUFBUTs7Ozs7O1VDdkJ2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05xQjtBQVFDOztBQUV0QjtBQUNBO0FBQ0EsZ0JBQWdCLHdEQUFXO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSxxREFBUTtBQUNkLEtBQUs7O0FBRUw7QUFDQSxNQUFNLDREQUFlO0FBQ3JCO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLE1BQU0sdURBQVU7QUFDaEI7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0EsRUFBRSx3REFBVztBQUNiO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvREFBTztBQUNYO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5jc3M/YzQwZCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tZXRob2RzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Rhc2tzLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHRhc2tzT2JqIGZyb20gJy4vdGFza3MuanMnO1xuXG5sZXQgdGFza3MgPSB0YXNrc09iai5nZXRUYXNrcygpO1xuXG5mdW5jdGlvbiB1cGRhdGVUYXNrcygpIHtcbiAgdGFza3NPYmouc2V0VGFza3ModGFza3MpO1xuICB0YXNrcyA9IHRhc2tzT2JqLmdldFRhc2tzKCk7XG4gIHJldHVybiB0YXNrcztcbn1cblxuZnVuY3Rpb24gYWRkVGFzayhkZXNjcmlwdGlvbikge1xuICB0YXNrcyA9IHRhc2tzT2JqLmdldFRhc2tzKCk7XG4gIGNvbnN0IG5ld1Rhc2sgPSB7XG4gICAgaWQ6IHRhc2tzLmxlbmd0aCArIDEsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgY29tcGxldGVkOiBmYWxzZSxcbiAgfTtcbiAgdGFza3MucHVzaChuZXdUYXNrKTtcbiAgdXBkYXRlVGFza3MoKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlVGFzayhpZCkge1xuICB0YXNrcyA9IHRhc2tzT2JqLmdldFRhc2tzKCk7XG4gIGNvbnN0IHRhc2tJbmRleCA9IHRhc2tzLmZpbmRJbmRleCgodGFzaykgPT4gdGFzay5pZCA9PT0gaWQpO1xuICBpZiAodGFza0luZGV4ICE9PSAtMSkge1xuICAgIHRhc2tzLnNwbGljZSh0YXNrSW5kZXgsIDEpO1xuICAgIHRhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgICB0YXNrLmlkID0gaW5kZXggKyAxO1xuICAgIH0pO1xuICAgIHVwZGF0ZVRhc2tzKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZWRpdFRhc2soaWQsIGRlc2NyaXB0aW9uKSB7XG4gIHRhc2tzID0gdGFza3NPYmouZ2V0VGFza3MoKTtcbiAgY29uc3QgdGFzayA9IHRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suaWQgPT09IGlkKTtcbiAgaWYgKHRhc2spIHtcbiAgICB0YXNrLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdXBkYXRlVGFza3MoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0b2dnbGVDb21wbGV0ZWQoaWQpIHtcbiAgdGFza3MgPSB0YXNrc09iai5nZXRUYXNrcygpO1xuICBjb25zdCB0YXNrID0gdGFza3MuZmluZCgodGFzaykgPT4gdGFzay5pZCA9PT0gaWQpO1xuICB0YXNrLmNvbXBsZXRlZCA9ICF0YXNrLmNvbXBsZXRlZDtcbiAgdXBkYXRlVGFza3MoKTtcbn1cblxuY29uc3QgZmlsdGVyVGFza3MgPSAoKSA9PiB7XG4gIGNvbnN0IGZpbHRlcmVkVGFza3MgPSB0YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suY29tcGxldGVkID09PSBmYWxzZSk7XG4gIGZpbHRlcmVkVGFza3MuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHsgdGFzay5pZCA9IGluZGV4ICsgMTsgfSk7XG4gIHRhc2tzID0gZmlsdGVyZWRUYXNrcztcbiAgdGFza3NPYmouc2V0VGFza3MoZmlsdGVyZWRUYXNrcyk7XG4gIHRhc2tzID0gdGFza3NPYmouZ2V0VGFza3MoKTtcbiAgdXBkYXRlVGFza3MoKTtcbn07XG5cbmV4cG9ydCB7XG4gIHVwZGF0ZVRhc2tzLCBhZGRUYXNrLCBkZWxldGVUYXNrLCBlZGl0VGFzaywgdG9nZ2xlQ29tcGxldGVkLCBmaWx0ZXJUYXNrcyxcbn07XG4iLCJsZXQgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKSA/PyBbXG4gIHtcbiAgICBpZDogMSxcbiAgICBkZXNjcmlwdGlvbjogJ3dhc2ggdGhlIGRpc2hlcycsXG4gICAgY29tcGxldGVkOiBmYWxzZSxcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIGRlc2NyaXB0aW9uOiAnQ29tcGxldGUgdGhlIHRvLWRvIGxpc3QgcHJvamVjdCcsXG4gICAgY29tcGxldGVkOiB0cnVlLFxuICB9LFxuXTtcblxuY29uc3QgdGFza3NPYmogPSB7XG4gIGdldFRhc2tzKCkge1xuICAgIHJldHVybiB0YXNrcztcbiAgfSxcbiAgc2V0VGFza3MobmV3VGFza3MpIHtcbiAgICB0YXNrcyA9IG5ld1Rhc2tzO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB0YXNrc09iajsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xuaW1wb3J0IHtcbiAgYWRkVGFzayxcbiAgZGVsZXRlVGFzayxcbiAgZWRpdFRhc2ssXG4gIHVwZGF0ZVRhc2tzLFxuICB0b2dnbGVDb21wbGV0ZWQsXG4gIGZpbHRlclRhc2tzLFxufSBmcm9tICcuL21ldGhvZHMuanMnO1xuXG5jb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrcy1jb250YWluZXInKTtcbmZ1bmN0aW9uIHJlbmRlclRhc2tzKCkge1xuICBjb25zdCB0YXNrcyA9IHVwZGF0ZVRhc2tzKCk7XG4gIHRhc2tzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICB0YXNrcy5mb3JFYWNoKCh0YXNrLCBpZHgpID0+IHtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBkb3RzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgnYWx0JywgJ0NoZWNrIScpO1xuICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0YXNrLmNvbXBsZXRlZDtcblxuICAgIHRleHRhcmVhLnNldEF0dHJpYnV0ZSgnbWF4bGVuZ3RoJywgJzI1NScpO1xuICAgIHRleHRhcmVhLnZhbHVlID0gdGFzay5kZXNjcmlwdGlvbjtcblxuICAgIGNvbnN0IGF0dHJzID0ge1xuICAgICAgdHlwZTogJ2J1dHRvbicsXG4gICAgICB0YWJpbmRleDogJy0xJyxcbiAgICAgIHZhbHVlOiAnJyxcbiAgICAgIHRpdGxlOiAnY2xpY2sgYW5kIHNvc3RhaW4gZm9yIHJlYXJyYW5nZScsXG4gICAgICBjbGFzczogJ2lucHV0LWJ0bi1kb3RzJyxcbiAgICB9O1xuXG4gICAgT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgZG90c0J1dHRvbi5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgfSk7XG5cbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQodGV4dGFyZWEpO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGRvdHNCdXR0b24pO1xuICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcblxuICAgIHRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgZWRpdFRhc2soaWR4ICsgMSwgdGV4dGFyZWEudmFsdWUpO1xuICAgIH0pO1xuXG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdG9nZ2xlQ29tcGxldGVkKGlkeCArIDEpO1xuICAgICAgcmVuZGVyVGFza3MoKTtcbiAgICB9KTtcblxuICAgIGRvdHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBkZWxldGVUYXNrKGlkeCArIDEpO1xuICAgICAgcmVuZGVyVGFza3MoKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGVhci1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZmlsdGVyVGFza3MoKTtcbiAgcmVuZGVyVGFza3MoKTtcbn0pO1xuXG5jb25zdCBpbnB1dExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtbGlzdCcpO1xuY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLWlucHV0Jyk7XG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsICgpID0+IHtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBpbnB1dExpc3QudmFsdWU7XG4gIGlmIChkZXNjcmlwdGlvbiAhPT0gJycpIHtcbiAgICBhZGRUYXNrKGRlc2NyaXB0aW9uKTtcbiAgICBpbnB1dExpc3QudmFsdWUgPSAnJztcbiAgICByZW5kZXJUYXNrcygpO1xuICB9XG59KTtcblxucmVuZGVyVGFza3MoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==