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

/***/ "./node_modules/swiper/modules/navigation.css":
/*!****************************************************!*\
  !*** ./node_modules/swiper/modules/navigation.css ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://landing/./node_modules/swiper/modules/navigation.css?");

/***/ }),

/***/ "./node_modules/swiper/modules/pagination.css":
/*!****************************************************!*\
  !*** ./node_modules/swiper/modules/pagination.css ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://landing/./node_modules/swiper/modules/pagination.css?");

/***/ }),

/***/ "./node_modules/swiper/swiper.css":
/*!****************************************!*\
  !*** ./node_modules/swiper/swiper.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://landing/./node_modules/swiper/swiper.css?");

/***/ }),

/***/ "./src/fonts.css":
/*!***********************!*\
  !*** ./src/fonts.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://landing/./src/fonts.css?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://landing/./src/styles.css?");

/***/ }),

/***/ "./src/swipper.css":
/*!*************************!*\
  !*** ./src/swipper.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://landing/./src/swipper.css?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n__webpack_require__(/*! ./fonts.css */ \"./src/fonts.css\");\n__webpack_require__(/*! ./swipper.css */ \"./src/swipper.css\");\n__webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.css\");\n__webpack_require__(/*! swiper/css/navigation */ \"./node_modules/swiper/modules/navigation.css\");\n__webpack_require__(/*! swiper/css/pagination */ \"./node_modules/swiper/modules/pagination.css\");\nconst modalData_json_1 = __importDefault(__webpack_require__(/*! ./assets/modalData.json */ \"./src/assets/modalData.json\"));\nconst modalData = modalData_json_1.default;\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    initAnimation(\".about-me\", [\".image\", \".card\"], 200);\n    initAnimation(\".about-work\", [\".step\"], 500);\n    initModalBtn();\n    initDrawerBtn();\n});\nfunction initAnimation(selector, elems, duration) {\n    const element = document.querySelector(selector);\n    const elements = [];\n    elems === null || elems === void 0 ? void 0 : elems.forEach((value) => {\n        const arr = document.querySelectorAll(value);\n        elements.push(...arr);\n    });\n    const observer = new IntersectionObserver((entries) => {\n        entries.forEach((entry) => {\n            if (entry.isIntersecting) {\n                elements.forEach((image, index) => {\n                    setTimeout(() => {\n                        image.classList.add(\"show\");\n                    }, index * duration);\n                });\n            }\n        });\n    }, { threshold: 0.1 });\n    observer.observe(element);\n}\nfunction initDrawerBtn() {\n    var _a;\n    const openDrawerButton = document.getElementById(\"openDrawerButton\");\n    const drawer = document.getElementById(\"drawer\");\n    const backdrop = document.getElementById(\"backdrop\");\n    openDrawerButton === null || openDrawerButton === void 0 ? void 0 : openDrawerButton.addEventListener(\"click\", function () {\n        drawer === null || drawer === void 0 ? void 0 : drawer.classList.add(\"open\");\n        backdrop === null || backdrop === void 0 ? void 0 : backdrop.classList.add(\"visible\");\n    });\n    drawer === null || drawer === void 0 ? void 0 : drawer.addEventListener(\"click\", function () {\n        drawer === null || drawer === void 0 ? void 0 : drawer.classList.remove(\"open\");\n        backdrop === null || backdrop === void 0 ? void 0 : backdrop.classList.remove(\"visible\");\n    });\n    (_a = document.getElementById(\"backdrop\")) === null || _a === void 0 ? void 0 : _a.addEventListener(\"click\", function () {\n        drawer === null || drawer === void 0 ? void 0 : drawer.classList.remove(\"open\");\n        backdrop === null || backdrop === void 0 ? void 0 : backdrop.classList.remove(\"visible\");\n    });\n}\nfunction initModalBtn() {\n    var _a, _b, _c;\n    (_a = document.getElementById(\"preparationBtn\")) === null || _a === void 0 ? void 0 : _a.addEventListener(\"click\", () => {\n        createModal(modalData.preparation);\n    });\n    (_b = document.getElementById(\"careBtn\")) === null || _b === void 0 ? void 0 : _b.addEventListener(\"click\", () => {\n        createModal(modalData.care);\n    });\n    (_c = document.getElementById(\"costBtn\")) === null || _c === void 0 ? void 0 : _c.addEventListener(\"click\", () => {\n        createModal(modalData.cost);\n    });\n}\nfunction createModal(section) {\n    let htmlContent = `<p>${section.content}</p>`;\n    section.steps.forEach((step, index) => {\n        htmlContent += `\n      <h3>${step.header}</h3>\n      <p>${step.description}</p>\n    `;\n    });\n    // Swal.fire({\n    //   title: section.header,\n    //   html: htmlContent,\n    //   showCloseButton: true,\n    //   confirmButtonText: \"Закрыть\",\n    //   customClass: {\n    //     popup: \"modal\",\n    //     confirmButton: \"custom-confirm-button\",\n    //   },\n    // });\n}\n\n\n//# sourceURL=webpack://landing/./src/index.ts?");

/***/ }),

/***/ "./src/assets/modalData.json":
/*!***********************************!*\
  !*** ./src/assets/modalData.json ***!
  \***********************************/
/***/ ((module) => {

eval("module.exports = /*#__PURE__*/JSON.parse('{\"preparation\":{\"header\":\"Разбираем процесс нанесения татуировки\",\"content\":\"Дорогие друзья, сегодня я хочу вам рассказать вам о захватывающем искусстве татуировки и процессе её нанесения на сеансе. Для многих это не только способ украсить свое тело, но и способ выразить свою индивидуальность и стиль.\",\"steps\":[{\"header\":\"Шаг 1: Консультация и планирование\",\"description\":\"Перед тем как приступить к нанесению татуировки, важно провести консультацию с мастером. На этом этапе вы обсудите свои идеи, предпочтения, а также уточните детали дизайна, его размер и расположение на теле. Это также отличное время для задания любых вопросов и выяснения деталей процесса.\"},{\"header\":\"Шаг 2: Подготовка\",\"description\":\"Предоставьте себе достаточно времени для отдыха и сна накануне сеанса. Отдых и хороший сон помогут вам чувствовать себя более комфортно во время процедуры. Позаботьтесь о коже: убедитесь, что область для татуировки чиста и без ран или воспалений. Ухаживайте за кожей заранее, избегая солнечных ожогов и использования солярия, за неделю можно увлажнять кожу кремом, чтобы кожа не была сухая. Гидратируйте организм и избегайте употребления алкоголя за 24 часа до процедуры. Принесите с собой воду, перекус, музыку или книгу, чтобы сделать процесс более комфортным. Не забудьте документы, на всякий случай, обязательно чтобы вам было более 18 лет.\"},{\"header\":\"Шаг 3: Нанесение татуировки\",\"description\":\"Перед началом процедуры мастер очистит и дезинфицирует область кожи, на которой будет наноситься татуировка. Затем он подготовит инструменты, используемые для нанесения, чтобы обеспечить безопасность и чистоту процесса. Сам процесс нанесения татуировки может занять разное количество времени в зависимости от сложности дизайна и его размера. Мастер будет тщательно работать, чтобы создать точный и красивый рисунок, используя специальные татуировочные машины и иглы.\"},{\"header\":\"Шаг 4: Уход после процедуры\",\"description\":\"После завершения нанесения татуировки мастер предоставит вам инструкции по уходу за ней. Обычно это включает в себя рекомендации по чистке и применению мазей для ускорения заживления. Важно следовать этим инструкциям, чтобы обеспечить правильное заживление и сохранить яркость и красоту татуировки.\"},{\"header\":\"Шаг 5: Повторные сеансы (при необходимости)\",\"description\":\"В некоторых случаях для достижения желаемого результата может потребоваться несколько сеансов. Это зависит от сложности дизайна, качества кожи и других факторов. Если ваша татуировка требует нескольких сеансов, обсудите с мастером расписание и план действий для завершения проекта.\"},{\"header\":\"Заключение\",\"description\":\"Татуировка - это уникальное искусство, которое позволяет выразить себя и свою индивидуальность. Процесс нанесения татуировки может быть увлекательным и волнующим, особенно когда вы работаете с опытным и талантливым мастером. Следуя всем рекомендациям и инструкциям, вы сможете получить прекрасную татуировку, которая будет радовать вас на протяжении многих лет. Несоблюдение любого из этих шагов может повлиять на результат и заживление татуировки. Помните, что хорошая подготовка к процедуре — залог успешного и красивого результата.\"}]},\"care\":{\"header\":\"Как ухаживать за татуировкой ?\",\"content\":\"\",\"steps\":[{\"header\":\"Классический уход:\",\"description\":\"В течение суток-двух необходимо носить и менять каждые 3-4 часа впитывающие пеленки. После снятия первого и последующих компрессов необходимо:\"},{\"header\":\"\",\"description\":\"1. Тщательно промыть тату водой с антибактериальным мылом.\"},{\"header\":\"\",\"description\":\"2. Промокнуть тату от влаги бумажным полотенцем.\"},{\"header\":\"\",\"description\":\"3. Обработать татуировку Хлоргексидином (или Мирамистином).\"},{\"header\":\"\",\"description\":\"4. Тонким слоем нанести заживляющий гель или мазь (Бепантен, Декспантенол, Доктор Про или любые специальные заживляющие мази для татуировок).\"},{\"header\":\"\",\"description\":\"5. Закрыть татуировку впитывающей пелёнкой. Края пелёнки закрепить при помощи пластыря.\"},{\"header\":\"\",\"description\":\"6. Если вы видите, что на пеленке уже ничего не отпечатывается, пеленку можно уже не носить. Далее мазать заживляющей мазью 5-7 дней.\"},{\"header\":\"\",\"description\":\"7. Самое главное – чтобы не образовывались корочки! Не тереть! Не чесать!\"},{\"header\":\"\",\"description\":\"8. Исключить бани и сауны на 10-14 дней, занятия спортом на 7 дней. Мыться можно, но не распаривать татуировку, то есть принимать обычный тёплый душ!\"},{\"header\":\"\",\"description\":\"9. В течение суток после сеанса не употреблять алкоголь!\"},{\"header\":\"\",\"description\":\"10. По истечении периода заживления при нахождении на солнце татуировку необходимо прикрывать или защищать солнцезащитным кремом со степенью защиты 50 SPF и более.\"},{\"header\":\"Уход с заживляющей плёнкой: (Suprasorb, EZ Term Defender, Kwadron и др.)\",\"description\":\"Заживляющая плёнка клеится на свежую татуировку сразу после сеанса. В течение первых двух суток возможно скопление под плёнкой сукровицы - это нормально, на 3 сутки количество жидкости уменьшится. Нельзя нарушать целостность пленки и снимать её без необходимости. Плёнку необходимо носить от 3 до 5 дней. Далее её нужно аккуратно снять, лучше это делать под душем.\"},{\"header\":\"\",\"description\":\"Для комфортного удаления плёнки необходимо поддеть край и плавно растягивать её по направлению от татуировки до отклеивания. После необходимо:\"},{\"header\":\"\",\"description\":\"1. Тщательно промыть тату водой с антибактериальным мылом.\"},{\"header\":\"\",\"description\":\"2. Промокнуть тату от влаги бумажным полотенцем.\"},{\"header\":\"\",\"description\":\"3. Обработать татуировку Хлоргексидином (или Мирамистином).\"},{\"header\":\"\",\"description\":\"4. Тонким слоем нанести заживляющий гель или мазь (Бепантен, Декспантенол, Доктор Про или любые специальные заживляющие мази для татуировок).\"},{\"header\":\"\",\"description\":\"5. Мазать татуировку 2-3 дня заживляющей мазью, после использовать обычный увлажняющий крем в течение 5-7 дней (детский крем, Бархатные Ручки и т. п.).\"},{\"header\":\"\",\"description\":\"6. Самое главное – чтобы не образовывались корочки! Не тереть! Не чесать! Исключить бани и сауны на 10-14 дней, занятия спортом на 7 дней! Мыться можно, но не распаривать татуировку, то есть принимать обычный тёплый душ! Сутки после сеанса не употреблять алкоголь!\"},{\"header\":\"\",\"description\":\"7. По истечении периода заживления при нахождении на солнце татуировку необходимо прикрывать или защищать солнцезащитным кремом со степенью защиты 50 SPF и более.\"}]},\"cost\":{\"header\":\"\",\"content\":\"Татуировки стали неотъемлемой частью современной культуры, представляя собой способ самовыражения, искусства и даже символику важных жизненных моментов. Однако многие задаются вопросом: почему стоимость татуировок настолько высока? Давайте разберемся в этом более подробно.\",\"steps\":[{\"header\":\"1. Квалификация и опыт мастера\",\"description\":\"Профессиональные тату-мастера инвестируют значительное количество времени и ресурсов в своё обучение и развитие навыков. Курсы по художественному мастерству, анатомии, гигиене и технике нанесения татуировок требуют немалых затрат. Опытные мастера обладают большим портфолио работ, что также повышает их ценность на рынке.\"},{\"header\":\"2. Качество материалов\",\"description\":\"Качество используемых чернил, игл и других расходных материалов играет ключевую роль в безопасности и долговечности татуировки. Профессионалы используют только сертифицированные материалы от проверенных производителей, что значительно влияет на итоговую стоимость услуг.\"},{\"header\":\"3. Оборудование студии\",\"description\":\"Современные студии оборудованы специальными креслами для клиентов, профессиональными машинками для нанесения татуировок и системами стерилизации инструментов. Все это оборудование необходимо поддерживать в идеальном состоянии для обеспечения безопасности клиентов.\"},{\"header\":\"4. Время работы над эскизом\",\"description\":\"Создание индивидуального эскиза под каждого клиента — это кропотливый процесс, требующий творческого подхода и времени мастера. Разработка уникального дизайна может занимать от нескольких часов и вплоть до пары-тройки дней работы.\"},{\"header\":\"Итоги\",\"description\":\"Стоимость качественной татуировки обоснована множеством факторов: от квалификации мастера до затрат на материалы высокого качества и соблюдения всех норм безопасности. Инвестируя свои средства в профессиональную работу опытного мастера, вы получаете не только красивое произведение искусства на своем теле, но также уверенность в его качестве и долговечности. Таким образом, татуировка это роскошь, как дорогая картина или ювелирное изделие, цена за качественную работу полностью оправдана вниманием к деталям со стороны мастеров-творцов этого уникального вида искусства.\"}]}}');\n\n//# sourceURL=webpack://landing/./src/assets/modalData.json?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;