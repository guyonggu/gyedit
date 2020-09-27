webpackHotUpdate_N_E("pages/examples/[example]",{

/***/ "../src/withMarkdown.ts":
/*!******************************!*\
  !*** ../src/withMarkdown.ts ***!
  \******************************/
/*! exports provided: withMarkdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"withMarkdown\", function() { return withMarkdown; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"../node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slate */ \"../node_modules/slate/dist/index.es.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ \"../src/util.ts\");\n\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\nvar SHORTCUTS = {\n  '*': 'ul-item',\n  '-': 'ul-item',\n  '+': 'ul-item',\n  '>': 'block-quote',\n  '#': 'heading-one',\n  '##': 'heading-two',\n  '###': 'heading-three',\n  '####': 'heading-four',\n  '#####': 'heading-five',\n  '######': 'heading-six'\n};\nvar withMarkdown = function withMarkdown(editor) {\n  var deleteBackward = editor.deleteBackward,\n      insertText = editor.insertText,\n      insertBreak = editor.insertBreak,\n      deleteFragment = editor.deleteFragment;\n\n  var insertBreak2 = function insertBreak2() {\n    var handled = false;\n    var selection = editor.selection;\n\n    if (!selection || slate__WEBPACK_IMPORTED_MODULE_1__[\"Range\"].isExpanded(selection)) {\n      insertBreak();\n      return;\n    }\n\n    var block = slate__WEBPACK_IMPORTED_MODULE_1__[\"Editor\"].above(editor, {\n      match: function match(n) {\n        return slate__WEBPACK_IMPORTED_MODULE_1__[\"Editor\"].isBlock(editor, n);\n      }\n    });\n\n    if (!block || slate__WEBPACK_IMPORTED_MODULE_1__[\"Editor\"].isEditor(block[0])) {\n      insertBreak();\n      return;\n    }\n\n    var parent = slate__WEBPACK_IMPORTED_MODULE_1__[\"Editor\"].parent(editor, block[1]);\n\n    if (!parent || slate__WEBPACK_IMPORTED_MODULE_1__[\"Editor\"].isEditor(parent[0])) {\n      insertBreak();\n      return;\n    }\n\n    var text = slate__WEBPACK_IMPORTED_MODULE_1__[\"Editor\"].string(editor, block[1]);\n\n    if (text) {\n      insertBreak();\n      return;\n    }\n\n    var blockPath = block[1];\n    var indent = 0;\n\n    if (typeof parent[0].indent === \"number\") {\n      indent = parent[0].indent > 1 ? parent[0].indent - 1 : 0;\n    }\n\n    slate__WEBPACK_IMPORTED_MODULE_1__[\"Transforms\"].setNodes(editor, {\n      type: 'paragraph',\n      indent: indent\n    }, {\n      at: blockPath\n    }); // if it is the last child\n\n    if (blockPath[blockPath.length - 1] === parent[0].children.length - 1) {\n      slate__WEBPACK_IMPORTED_MODULE_1__[\"Transforms\"].liftNodes(editor, {\n        at: blockPath\n      });\n      return;\n    }\n  };\n\n  editor.insertBreak = function () {\n    insertBreak2();\n    Object(_util__WEBPACK_IMPORTED_MODULE_2__[\"fixList\"])(editor);\n  };\n\n  editor.insertText = function (text) {\n    var selection = editor.selection;\n\n    if (text !== ' ' || !selection || !slate__WEBPACK_IMPORTED_MODULE_1__[\"Range\"].isCollapsed(selection)) {\n      insertText(text);\n      return;\n    }\n\n    var anchor = selection.anchor;\n    var block = slate__WEBPACK_IMPORTED_MODULE_1__[\"Editor\"].above(editor, {\n      match: function match(n) {\n        return slate__WEBPACK_IMPORTED_MODULE_1__[\"Editor\"].isBlock(editor, n);\n      }\n    });\n    var path = block ? block[1] : [];\n    var start = slate__WEBPACK_IMPORTED_MODULE_1__[\"Editor\"].start(editor, path);\n    var range = {\n      anchor: anchor,\n      focus: start\n    };\n    var beforeText = slate__WEBPACK_IMPORTED_MODULE_1__[\"Editor\"].string(editor, range);\n    var tabs = 0;\n\n    var _iterator = _createForOfIteratorHelper(beforeText),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var c = _step.value;\n\n        if (c === '\\t') {\n          tabs++;\n        }\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n\n    beforeText = beforeText.substr(tabs);\n    var blockType = block[0].type;\n    var inList = typeof blockType === 'string' ? blockType === 'list-item' : false;\n    var type = SHORTCUTS[beforeText];\n\n    if (!type && /^[1-9]\\d*\\./.test(beforeText)) {\n      type = 'ol-item';\n    }\n\n    var list;\n\n    switch (type) {\n      case 'ul-item':\n        if (inList) {\n          insertText(text);\n          break;\n        }\n\n        slate__WEBPACK_IMPORTED_MODULE_1__[\"Transforms\"].select(editor, range);\n        slate__WEBPACK_IMPORTED_MODULE_1__[\"Transforms\"][\"delete\"](editor);\n        slate__WEBPACK_IMPORTED_MODULE_1__[\"Transforms\"].setNodes(editor, {\n          type: 'list-item'\n        }, {\n          match: function match(n) {\n            return slate__WEBPACK_IMPORTED_MODULE_1__[\"Editor\"].isBlock(editor, n);\n          }\n        });\n        list = {\n          type: 'bulleted-list',\n          indent: tabs,\n          children: []\n        };\n        slate__WEBPACK_IMPORTED_MODULE_1__[\"Transforms\"].wrapNodes(editor, list, {\n          match: function match(n) {\n            return n.type === 'list-item';\n          }\n        });\n        Object(_util__WEBPACK_IMPORTED_MODULE_2__[\"fixList\"])(editor);\n        break;\n\n      case 'ol-item':\n        if (inList) {\n          insertText(text);\n          break;\n        }\n\n        var found = beforeText.match(/^([\\t]*)\\d+\\./);\n        slate__WEBPACK_IMPORTED_MODULE_1__[\"Transforms\"].select(editor, range);\n        slate__WEBPACK_IMPORTED_MODULE_1__[\"Transforms\"][\"delete\"](editor);\n        slate__WEBPACK_IMPORTED_MODULE_1__[\"Transforms\"].setNodes(editor, {\n          type: 'list-item'\n        }, {\n          match: function match(n) {\n            return slate__WEBPACK_IMPORTED_MODULE_1__[\"Editor\"].isBlock(editor, n);\n          }\n        });\n        list = {\n          type: 'numbered-list',\n          indent: tabs,\n          children: []\n        };\n        slate__WEBPACK_IMPORTED_MODULE_1__[\"Transforms\"].wrapNodes(editor, list, {\n          match: function match(n) {\n            return n.type === 'list-item';\n          }\n        });\n        Object(_util__WEBPACK_IMPORTED_MODULE_2__[\"fixList\"])(editor);\n        break;\n\n      case 'block-quote':\n        if (inList || blockType !== 'paragraph') {\n          insertText(text);\n          break;\n        }\n\n        var parent = slate__WEBPACK_IMPORTED_MODULE_1__[\"Editor\"].above(editor, {\n          match: function match(n) {\n            return n.type === 'block-quote';\n          }\n        });\n\n        if (parent) {\n          insertText(text);\n          break;\n        }\n\n        slate__WEBPACK_IMPORTED_MODULE_1__[\"Transforms\"].select(editor, range);\n        slate__WEBPACK_IMPORTED_MODULE_1__[\"Transforms\"][\"delete\"](editor);\n        slate__WEBPACK_IMPORTED_MODULE_1__[\"Transforms\"].wrapNodes(editor, {\n          type: 'block-quote',\n          children: []\n        }, {\n          match: function match(n) {\n            return n.type === 'paragraph';\n          }\n        });\n        break;\n\n      default:\n        insertText(text);\n    }\n\n    return;\n  };\n\n  var deleteBackward2 = function deleteBackward2(unit) {\n    console.log(\"editor.deleteBackward:\", unit);\n    var selection = editor.selection;\n\n    if (!selection || slate__WEBPACK_IMPORTED_MODULE_1__[\"Range\"].isExpanded(selection)) {\n      deleteBackward(unit);\n      return;\n    }\n\n    var match = slate__WEBPACK_IMPORTED_MODULE_1__[\"Editor\"].above(editor, {\n      match: function match(n) {\n        return slate__WEBPACK_IMPORTED_MODULE_1__[\"Editor\"].isBlock(editor, n);\n      }\n    });\n\n    if (!match || slate__WEBPACK_IMPORTED_MODULE_1__[\"Editor\"].isEditor(match[0])) {\n      deleteBackward(unit);\n      return;\n    }\n\n    var _ref = match,\n        _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, 2),\n        block = _ref2[0],\n        path = _ref2[1];\n\n    var start = slate__WEBPACK_IMPORTED_MODULE_1__[\"Editor\"].start(editor, path);\n\n    if (slate__WEBPACK_IMPORTED_MODULE_1__[\"Point\"].equals(selection.anchor, start)) {\n      if (block.type === 'list-item') {\n        var _ref3 = slate__WEBPACK_IMPORTED_MODULE_1__[\"Editor\"].parent(editor, path),\n            _ref4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref3, 1),\n            listNode = _ref4[0];\n\n        if (listNode && listNode.indent > 0) {\n          slate__WEBPACK_IMPORTED_MODULE_1__[\"Editor\"].withoutNormalizing(editor, function () {\n            slate__WEBPACK_IMPORTED_MODULE_1__[\"Transforms\"].wrapNodes(editor, {\n              type: listNode.type,\n              indent: listNode.indent - 1,\n              children: []\n            }, {\n              at: path\n            });\n            slate__WEBPACK_IMPORTED_MODULE_1__[\"Transforms\"].liftNodes(editor, {\n              at: path\n            });\n          });\n        } else {\n          slate__WEBPACK_IMPORTED_MODULE_1__[\"Transforms\"].setNodes(editor, {\n            type: 'paragraph'\n          });\n          slate__WEBPACK_IMPORTED_MODULE_1__[\"Transforms\"].unwrapNodes(editor, {\n            match: function match(n) {\n              return typeof n.type === 'string' && n.type.endsWith('-list');\n            },\n            split: true\n          }); // deleteBackward(unit)\n        }\n      } else if (block.type === 'paragraph') {\n        if (block.indent && block.indent > 0) {\n          slate__WEBPACK_IMPORTED_MODULE_1__[\"Transforms\"].setNodes(editor, {\n            indent: block.indent - 1\n          }, {\n            at: path\n          });\n          return;\n        } else {\n          deleteBackward(unit);\n        }\n      } else {\n        slate__WEBPACK_IMPORTED_MODULE_1__[\"Transforms\"].setNodes(editor, {\n          type: 'paragraph'\n        });\n      }\n\n      return;\n    } // end if at start\n\n\n    deleteBackward(unit);\n  };\n\n  editor.deleteBackward = function (unit) {\n    console.log(\"editor.deleteBackward:\", unit);\n    deleteBackward2(unit);\n    Object(_util__WEBPACK_IMPORTED_MODULE_2__[\"fixList\"])(editor);\n  };\n\n  editor.deleteFragment = function () {\n    console.log(\"editor.deleteFragment:\");\n    deleteFragment();\n  };\n\n  return editor;\n};\n\nvar beforeTextInBlock = function beforeTextInBlock(editor) {\n  var selection = editor.selection;\n\n  if (!selection) {\n    return '';\n  }\n\n  var block = slate__WEBPACK_IMPORTED_MODULE_1__[\"Editor\"].above(editor, {\n    match: function match(n) {\n      return slate__WEBPACK_IMPORTED_MODULE_1__[\"Editor\"].isBlock(editor, n);\n    }\n  });\n  var path = block ? block[1] : [];\n  var start = slate__WEBPACK_IMPORTED_MODULE_1__[\"Editor\"].start(editor, path);\n  var range = {\n    anchor: slate__WEBPACK_IMPORTED_MODULE_1__[\"Range\"].start(editor.selection),\n    focus: start\n  };\n  var beforeText = slate__WEBPACK_IMPORTED_MODULE_1__[\"Editor\"].string(editor, range);\n  return beforeText;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uL3NyYy93aXRoTWFya2Rvd24udHM/MzRiNiJdLCJuYW1lcyI6WyJTSE9SVENVVFMiLCJ3aXRoTWFya2Rvd24iLCJlZGl0b3IiLCJkZWxldGVCYWNrd2FyZCIsImluc2VydFRleHQiLCJpbnNlcnRCcmVhayIsImRlbGV0ZUZyYWdtZW50IiwiaW5zZXJ0QnJlYWsyIiwiaGFuZGxlZCIsInNlbGVjdGlvbiIsIlJhbmdlIiwiaXNFeHBhbmRlZCIsImJsb2NrIiwiRWRpdG9yIiwiYWJvdmUiLCJtYXRjaCIsIm4iLCJpc0Jsb2NrIiwiaXNFZGl0b3IiLCJwYXJlbnQiLCJ0ZXh0Iiwic3RyaW5nIiwiYmxvY2tQYXRoIiwiaW5kZW50IiwiVHJhbnNmb3JtcyIsInNldE5vZGVzIiwidHlwZSIsImF0IiwibGVuZ3RoIiwiY2hpbGRyZW4iLCJsaWZ0Tm9kZXMiLCJmaXhMaXN0IiwiaXNDb2xsYXBzZWQiLCJhbmNob3IiLCJwYXRoIiwic3RhcnQiLCJyYW5nZSIsImZvY3VzIiwiYmVmb3JlVGV4dCIsInRhYnMiLCJjIiwic3Vic3RyIiwiYmxvY2tUeXBlIiwiaW5MaXN0IiwidGVzdCIsImxpc3QiLCJzZWxlY3QiLCJ3cmFwTm9kZXMiLCJmb3VuZCIsImRlbGV0ZUJhY2t3YXJkMiIsInVuaXQiLCJjb25zb2xlIiwibG9nIiwiUG9pbnQiLCJlcXVhbHMiLCJsaXN0Tm9kZSIsIndpdGhvdXROb3JtYWxpemluZyIsInVud3JhcE5vZGVzIiwiZW5kc1dpdGgiLCJzcGxpdCIsImJlZm9yZVRleHRJbkJsb2NrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBLElBQU1BLFNBQVMsR0FBRztBQUNkLE9BQUssU0FEUztBQUVkLE9BQUssU0FGUztBQUdkLE9BQUssU0FIUztBQUlkLE9BQUssYUFKUztBQUtkLE9BQUssYUFMUztBQU1kLFFBQU0sYUFOUTtBQU9kLFNBQU8sZUFQTztBQVFkLFVBQVEsY0FSTTtBQVNkLFdBQVMsY0FU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QUFPLENBQUNDLEdBQVIsQ0FBWSx3QkFBWjtBQUNBOUMsa0JBQWM7QUFDakIsR0FIRDs7QUFLQSxTQUFPSixNQUFQO0FBQ0gsQ0ExTU07O0FBNE1QLElBQU0wRCxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUMxRCxNQUFELEVBQTRCO0FBQUEsTUFDM0NPLFNBRDJDLEdBQzlCUCxNQUQ4QixDQUMzQ08sU0FEMkM7O0FBRWxELE1BQUksQ0FBQ0EsU0FBTCxFQUFnQjtBQUNaLFdBQU8sRUFBUDtBQUNIOztBQUNELE1BQU1HLEtBQUssR0FBR0MsNENBQU0sQ0FBQ0MsS0FBUCxDQUFhWixNQUFiLEVBQXFCO0FBQy9CYSxTQUFLLEVBQUUsZUFBQUMsQ0FBQztBQUFBLGFBQUlILDRDQUFNLENBQUNJLE9BQVAsQ0FBZWYsTUFBZixFQUF1QmMsQ0FBdkIsQ0FBSjtBQUFBO0FBRHVCLEdBQXJCLENBQWQ7QUFHQSxNQUFNa0IsSUFBSSxHQUFHdEIsS0FBSyxHQUFHQSxLQUFLLENBQUMsQ0FBRCxDQUFSLEdBQWMsRUFBaEM7QUFDQSxNQUFNdUIsS0FBSyxHQUFHdEIsNENBQU0sQ0FBQ3NCLEtBQVAsQ0FBYWpDLE1BQWIsRUFBcUJnQyxJQUFyQixDQUFkO0FBQ0EsTUFBTUUsS0FBSyxHQUFHO0FBQUNILFVBQU0sRUFBRXZCLDJDQUFLLENBQUN5QixLQUFOLENBQVlqQyxNQUFNLENBQUNPLFNBQW5CLENBQVQ7QUFBeUM0QixTQUFLLEVBQUVGO0FBQWhELEdBQWQ7QUFDQSxNQUFJRyxVQUFVLEdBQUd6Qiw0Q0FBTSxDQUFDUSxNQUFQLENBQWNuQixNQUFkLEVBQXNCa0MsS0FBdEIsQ0FBakI7QUFDQSxTQUFPRSxVQUFQO0FBQ0gsQ0FiRCIsImZpbGUiOiIuLi9zcmMvd2l0aE1hcmtkb3duLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFZGl0b3IsIFBhdGgsIFBvaW50LCBSYW5nZSwgVHJhbnNmb3JtcywgTm9kZUVudHJ5fSBmcm9tIFwic2xhdGVcIjtcbmltcG9ydCB7TGlzdE5vZGV9IGZyb20gJy4vdHlwZXMnXG5pbXBvcnQge2ZpeExpc3R9IGZyb20gXCIuL3V0aWxcIjtcblxuY29uc3QgU0hPUlRDVVRTID0ge1xuICAgICcqJzogJ3VsLWl0ZW0nLFxuICAgICctJzogJ3VsLWl0ZW0nLFxuICAgICcrJzogJ3VsLWl0ZW0nLFxuICAgICc+JzogJ2Jsb2NrLXF1b3RlJyxcbiAgICAnIyc6ICdoZWFkaW5nLW9uZScsXG4gICAgJyMjJzogJ2hlYWRpbmctdHdvJyxcbiAgICAnIyMjJzogJ2hlYWRpbmctdGhyZWUnLFxuICAgICcjIyMjJzogJ2hlYWRpbmctZm91cicsXG4gICAgJyMjIyMjJzogJ2hlYWRpbmctZml2ZScsXG4gICAgJyMjIyMjIyc6ICdoZWFkaW5nLXNpeCcsXG59XG5cbmV4cG9ydCBjb25zdCB3aXRoTWFya2Rvd24gPSAoZWRpdG9yOiBFZGl0b3IpID0+IHtcbiAgICBjb25zdCB7ZGVsZXRlQmFja3dhcmQsIGluc2VydFRleHQsIGluc2VydEJyZWFrLCBkZWxldGVGcmFnbWVudH0gPSBlZGl0b3JcblxuICAgIGNvbnN0IGluc2VydEJyZWFrMiA9ICgpID0+IHtcbiAgICAgICAgbGV0IGhhbmRsZWQgPSBmYWxzZVxuICAgICAgICBjb25zdCB7c2VsZWN0aW9ufSA9IGVkaXRvclxuXG4gICAgICAgIGlmICghc2VsZWN0aW9uIHx8IFJhbmdlLmlzRXhwYW5kZWQoc2VsZWN0aW9uKSkge1xuICAgICAgICAgICAgaW5zZXJ0QnJlYWsoKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYmxvY2sgPSBFZGl0b3IuYWJvdmUoZWRpdG9yLCB7XG4gICAgICAgICAgICBtYXRjaDogbiA9PiBFZGl0b3IuaXNCbG9jayhlZGl0b3IsIG4pLFxuICAgICAgICB9KVxuICAgICAgICBpZiAoIWJsb2NrIHx8IEVkaXRvci5pc0VkaXRvcihibG9ja1swXSkpIHtcbiAgICAgICAgICAgIGluc2VydEJyZWFrKClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IEVkaXRvci5wYXJlbnQoZWRpdG9yLCBibG9ja1sxXSlcbiAgICAgICAgaWYgKCFwYXJlbnQgfHwgRWRpdG9yLmlzRWRpdG9yKHBhcmVudFswXSkpIHtcbiAgICAgICAgICAgIGluc2VydEJyZWFrKClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRleHQgPSBFZGl0b3Iuc3RyaW5nKGVkaXRvciwgYmxvY2tbMV0pXG4gICAgICAgIGlmICh0ZXh0KSB7XG4gICAgICAgICAgICBpbnNlcnRCcmVhaygpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBibG9ja1BhdGg6IFBhdGggPSBibG9ja1sxXVxuICAgICAgICBsZXQgaW5kZW50ID0gMFxuICAgICAgICBpZiAodHlwZW9mIHBhcmVudFswXS5pbmRlbnQgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIGluZGVudCA9IHBhcmVudFswXS5pbmRlbnQgPiAxID8gcGFyZW50WzBdLmluZGVudCAtIDEgOiAwXG4gICAgICAgIH1cbiAgICAgICAgVHJhbnNmb3Jtcy5zZXROb2RlcyhlZGl0b3IsIHt0eXBlOiAncGFyYWdyYXBoJywgaW5kZW50fSwge2F0OiBibG9ja1BhdGh9KVxuICAgICAgICAvLyBpZiBpdCBpcyB0aGUgbGFzdCBjaGlsZFxuICAgICAgICBpZiAoYmxvY2tQYXRoW2Jsb2NrUGF0aC5sZW5ndGggLSAxXSA9PT0gcGFyZW50WzBdLmNoaWxkcmVuLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIFRyYW5zZm9ybXMubGlmdE5vZGVzKGVkaXRvciwge2F0OiBibG9ja1BhdGh9KVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICB9XG4gICAgZWRpdG9yLmluc2VydEJyZWFrID0gKCkgPT4ge1xuICAgICAgICBpbnNlcnRCcmVhazIoKVxuICAgICAgICBmaXhMaXN0KGVkaXRvcilcbiAgICB9XG4gICAgZWRpdG9yLmluc2VydFRleHQgPSAodGV4dDogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IHtzZWxlY3Rpb259ID0gZWRpdG9yXG4gICAgICAgIGlmICgodGV4dCAhPT0gJyAnKSB8fCAhc2VsZWN0aW9uIHx8ICFSYW5nZS5pc0NvbGxhcHNlZChzZWxlY3Rpb24pKSB7XG4gICAgICAgICAgICBpbnNlcnRUZXh0KHRleHQpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHthbmNob3J9ID0gc2VsZWN0aW9uXG4gICAgICAgIGNvbnN0IGJsb2NrID0gRWRpdG9yLmFib3ZlKGVkaXRvciwge1xuICAgICAgICAgICAgbWF0Y2g6IG4gPT4gRWRpdG9yLmlzQmxvY2soZWRpdG9yLCBuKSxcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgcGF0aCA9IGJsb2NrID8gYmxvY2tbMV0gOiBbXVxuICAgICAgICBjb25zdCBzdGFydCA9IEVkaXRvci5zdGFydChlZGl0b3IsIHBhdGgpXG4gICAgICAgIGNvbnN0IHJhbmdlID0ge2FuY2hvciwgZm9jdXM6IHN0YXJ0fVxuICAgICAgICBsZXQgYmVmb3JlVGV4dCA9IEVkaXRvci5zdHJpbmcoZWRpdG9yLCByYW5nZSlcbiAgICAgICAgbGV0IHRhYnMgPSAwXG4gICAgICAgIGZvciAobGV0IGMgb2YgYmVmb3JlVGV4dCkge1xuICAgICAgICAgICAgaWYgKGMgPT09ICdcXHQnKSB7XG4gICAgICAgICAgICAgICAgdGFicysrXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYmVmb3JlVGV4dCA9IGJlZm9yZVRleHQuc3Vic3RyKHRhYnMpXG4gICAgICAgIGNvbnN0IGJsb2NrVHlwZSA9IGJsb2NrIVswXS50eXBlIGFzIHN0cmluZ1xuICAgICAgICBsZXQgaW5MaXN0ID0gdHlwZW9mIGJsb2NrVHlwZSA9PT0gJ3N0cmluZycgPyBibG9ja1R5cGUgPT09ICdsaXN0LWl0ZW0nIDogZmFsc2VcblxuXG4gICAgICAgIGxldCB0eXBlID0gU0hPUlRDVVRTW2JlZm9yZVRleHRdXG5cbiAgICAgICAgaWYgKCF0eXBlICYmIC9eWzEtOV1cXGQqXFwuLy50ZXN0KGJlZm9yZVRleHQpKSB7XG4gICAgICAgICAgICB0eXBlID0gJ29sLWl0ZW0nXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGxpc3RcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICd1bC1pdGVtJzpcbiAgICAgICAgICAgICAgICBpZiAoaW5MaXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGluc2VydFRleHQodGV4dClcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgVHJhbnNmb3Jtcy5zZWxlY3QoZWRpdG9yLCByYW5nZSlcbiAgICAgICAgICAgICAgICBUcmFuc2Zvcm1zLmRlbGV0ZShlZGl0b3IpXG4gICAgICAgICAgICAgICAgVHJhbnNmb3Jtcy5zZXROb2RlcyhcbiAgICAgICAgICAgICAgICAgICAgZWRpdG9yLFxuICAgICAgICAgICAgICAgICAgICB7dHlwZTogJ2xpc3QtaXRlbSd9LFxuICAgICAgICAgICAgICAgICAgICB7bWF0Y2g6IG4gPT4gRWRpdG9yLmlzQmxvY2soZWRpdG9yLCBuKX1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgbGlzdCA9IHt0eXBlOiAnYnVsbGV0ZWQtbGlzdCcsIGluZGVudDogdGFicywgY2hpbGRyZW46IFtdfVxuICAgICAgICAgICAgICAgIFRyYW5zZm9ybXMud3JhcE5vZGVzKGVkaXRvciwgbGlzdCwge1xuICAgICAgICAgICAgICAgICAgICBtYXRjaDogbiA9PiBuLnR5cGUgPT09ICdsaXN0LWl0ZW0nLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgZml4TGlzdChlZGl0b3IpXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ29sLWl0ZW0nOlxuICAgICAgICAgICAgICAgIGlmIChpbkxpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0VGV4dCh0ZXh0KVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBmb3VuZCA9IGJlZm9yZVRleHQubWF0Y2goL14oW1xcdF0qKVxcZCtcXC4vKVxuICAgICAgICAgICAgICAgIFRyYW5zZm9ybXMuc2VsZWN0KGVkaXRvciwgcmFuZ2UpXG4gICAgICAgICAgICAgICAgVHJhbnNmb3Jtcy5kZWxldGUoZWRpdG9yKVxuICAgICAgICAgICAgICAgIFRyYW5zZm9ybXMuc2V0Tm9kZXMoXG4gICAgICAgICAgICAgICAgICAgIGVkaXRvcixcbiAgICAgICAgICAgICAgICAgICAge3R5cGU6ICdsaXN0LWl0ZW0nfSxcbiAgICAgICAgICAgICAgICAgICAge21hdGNoOiBuID0+IEVkaXRvci5pc0Jsb2NrKGVkaXRvciwgbil9XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIGxpc3QgPSB7dHlwZTogJ251bWJlcmVkLWxpc3QnLCBpbmRlbnQ6IHRhYnMsIGNoaWxkcmVuOiBbXX1cbiAgICAgICAgICAgICAgICBUcmFuc2Zvcm1zLndyYXBOb2RlcyhlZGl0b3IsIGxpc3QsIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2g6IG4gPT4gbi50eXBlID09PSAnbGlzdC1pdGVtJyxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGZpeExpc3QoZWRpdG9yKVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICdibG9jay1xdW90ZSc6XG4gICAgICAgICAgICAgICAgaWYgKGluTGlzdCB8fCBibG9ja1R5cGUgIT09ICdwYXJhZ3JhcGgnKSB7XG4gICAgICAgICAgICAgICAgICAgIGluc2VydFRleHQodGV4dClcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IHBhcmVudCA9IEVkaXRvci5hYm92ZShlZGl0b3IsIHttYXRjaDogbiA9PiBuLnR5cGUgPT09ICdibG9jay1xdW90ZSd9KVxuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0VGV4dCh0ZXh0KVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBUcmFuc2Zvcm1zLnNlbGVjdChlZGl0b3IsIHJhbmdlKVxuICAgICAgICAgICAgICAgIFRyYW5zZm9ybXMuZGVsZXRlKGVkaXRvcilcbiAgICAgICAgICAgICAgICBUcmFuc2Zvcm1zLndyYXBOb2RlcyhlZGl0b3IsIHt0eXBlOiAnYmxvY2stcXVvdGUnLCBjaGlsZHJlbjogW119LCB7XG4gICAgICAgICAgICAgICAgICAgIG1hdGNoOiBuID0+IG4udHlwZSA9PT0gJ3BhcmFncmFwaCdcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGluc2VydFRleHQodGV4dClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVCYWNrd2FyZDIgPSAodW5pdDogJ2NoYXJhY3RlcicgfCAnd29yZCcgfCAnbGluZScgfCAnYmxvY2snKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZWRpdG9yLmRlbGV0ZUJhY2t3YXJkOlwiLCB1bml0KVxuICAgICAgICBjb25zdCB7c2VsZWN0aW9ufSA9IGVkaXRvclxuXG4gICAgICAgIGlmICghc2VsZWN0aW9uIHx8IFJhbmdlLmlzRXhwYW5kZWQoc2VsZWN0aW9uKSkge1xuICAgICAgICAgICAgZGVsZXRlQmFja3dhcmQodW5pdClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1hdGNoID0gRWRpdG9yLmFib3ZlKGVkaXRvciwge1xuICAgICAgICAgICAgbWF0Y2g6IG4gPT4gRWRpdG9yLmlzQmxvY2soZWRpdG9yLCBuKSxcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoIW1hdGNoIHx8IEVkaXRvci5pc0VkaXRvcihtYXRjaFswXSkpIHtcbiAgICAgICAgICAgIGRlbGV0ZUJhY2t3YXJkKHVuaXQpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBbYmxvY2ssIHBhdGhdID0gbWF0Y2ggYXMgTm9kZUVudHJ5PExpc3ROb2RlPlxuICAgICAgICBjb25zdCBzdGFydCA9IEVkaXRvci5zdGFydChlZGl0b3IsIHBhdGgpXG5cbiAgICAgICAgaWYgKFBvaW50LmVxdWFscyhzZWxlY3Rpb24uYW5jaG9yLCBzdGFydCkpIHtcbiAgICAgICAgICAgIGlmIChibG9jay50eXBlID09PSAnbGlzdC1pdGVtJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtsaXN0Tm9kZV0gPSBFZGl0b3IucGFyZW50KGVkaXRvciwgcGF0aCkgYXMgTm9kZUVudHJ5PExpc3ROb2RlPlxuICAgICAgICAgICAgICAgIGlmIChsaXN0Tm9kZSAmJiAobGlzdE5vZGUuaW5kZW50IGFzIG51bWJlciA+IDApKSB7XG4gICAgICAgICAgICAgICAgICAgIEVkaXRvci53aXRob3V0Tm9ybWFsaXppbmcoZWRpdG9yLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBUcmFuc2Zvcm1zLndyYXBOb2RlcyhlZGl0b3IsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBsaXN0Tm9kZS50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGVudDogbGlzdE5vZGUuaW5kZW50ISAtIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7YXQ6IHBhdGh9KVxuICAgICAgICAgICAgICAgICAgICAgICAgVHJhbnNmb3Jtcy5saWZ0Tm9kZXMoZWRpdG9yLCB7YXQ6IHBhdGh9KVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIFRyYW5zZm9ybXMuc2V0Tm9kZXMoZWRpdG9yLCB7dHlwZTogJ3BhcmFncmFwaCd9KVxuICAgICAgICAgICAgICAgICAgICBUcmFuc2Zvcm1zLnVud3JhcE5vZGVzKGVkaXRvciwge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2g6IG4gPT4gKHR5cGVvZiBuLnR5cGUgPT09ICdzdHJpbmcnICYmIG4udHlwZS5lbmRzV2l0aCgnLWxpc3QnKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGxpdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLy8gZGVsZXRlQmFja3dhcmQodW5pdClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGJsb2NrLnR5cGUgPT09ICdwYXJhZ3JhcGgnKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJsb2NrLmluZGVudCAmJiBibG9jay5pbmRlbnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIFRyYW5zZm9ybXMuc2V0Tm9kZXMoZWRpdG9yLCB7aW5kZW50OiBibG9jay5pbmRlbnQgLSAxfSwge2F0OiBwYXRofSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlQmFja3dhcmQodW5pdClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFRyYW5zZm9ybXMuc2V0Tm9kZXMoZWRpdG9yLCB7dHlwZTogJ3BhcmFncmFwaCd9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH0gLy8gZW5kIGlmIGF0IHN0YXJ0XG4gICAgICAgIGRlbGV0ZUJhY2t3YXJkKHVuaXQpXG4gICAgfVxuXG4gICAgZWRpdG9yLmRlbGV0ZUJhY2t3YXJkID0gKHVuaXQ6ICdjaGFyYWN0ZXInIHwgJ3dvcmQnIHwgJ2xpbmUnIHwgJ2Jsb2NrJykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImVkaXRvci5kZWxldGVCYWNrd2FyZDpcIiwgdW5pdClcbiAgICAgICAgZGVsZXRlQmFja3dhcmQyKHVuaXQpXG4gICAgICAgIGZpeExpc3QoZWRpdG9yKVxuICAgIH1cblxuICAgIGVkaXRvci5kZWxldGVGcmFnbWVudCA9ICgpPT57XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZWRpdG9yLmRlbGV0ZUZyYWdtZW50OlwiKVxuICAgICAgICBkZWxldGVGcmFnbWVudCgpXG4gICAgfVxuXG4gICAgcmV0dXJuIGVkaXRvclxufVxuXG5jb25zdCBiZWZvcmVUZXh0SW5CbG9jayA9IChlZGl0b3I6IEVkaXRvcik6IHN0cmluZyA9PiB7XG4gICAgY29uc3Qge3NlbGVjdGlvbn0gPSBlZGl0b3JcbiAgICBpZiAoIXNlbGVjdGlvbikge1xuICAgICAgICByZXR1cm4gJydcbiAgICB9XG4gICAgY29uc3QgYmxvY2sgPSBFZGl0b3IuYWJvdmUoZWRpdG9yLCB7XG4gICAgICAgIG1hdGNoOiBuID0+IEVkaXRvci5pc0Jsb2NrKGVkaXRvciwgbiksXG4gICAgfSlcbiAgICBjb25zdCBwYXRoID0gYmxvY2sgPyBibG9ja1sxXSA6IFtdXG4gICAgY29uc3Qgc3RhcnQgPSBFZGl0b3Iuc3RhcnQoZWRpdG9yLCBwYXRoKVxuICAgIGNvbnN0IHJhbmdlID0ge2FuY2hvcjogUmFuZ2Uuc3RhcnQoZWRpdG9yLnNlbGVjdGlvbiEpLCBmb2N1czogc3RhcnR9XG4gICAgbGV0IGJlZm9yZVRleHQgPSBFZGl0b3Iuc3RyaW5nKGVkaXRvciwgcmFuZ2UpXG4gICAgcmV0dXJuIGJlZm9yZVRleHRcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../src/withMarkdown.ts\n");

/***/ })

})