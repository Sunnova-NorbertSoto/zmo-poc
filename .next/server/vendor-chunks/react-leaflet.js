"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-leaflet";
exports.ids = ["vendor-chunks/react-leaflet"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-leaflet/lib/MapContainer.js":
/*!********************************************************!*\
  !*** ./node_modules/react-leaflet/lib/MapContainer.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MapContainer: () => (/* binding */ MapContainer)\n/* harmony export */ });\n/* harmony import */ var _react_leaflet_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-leaflet/core */ \"(ssr)/./node_modules/@react-leaflet/core/lib/context.js\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ \"(ssr)/./node_modules/leaflet/dist/leaflet-src.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\nfunction _extends() {\n    _extends = Object.assign || function(target) {\n        for(var i = 1; i < arguments.length; i++){\n            var source = arguments[i];\n            for(var key in source){\n                if (Object.prototype.hasOwnProperty.call(source, key)) {\n                    target[key] = source[key];\n                }\n            }\n        }\n        return target;\n    };\n    return _extends.apply(this, arguments);\n}\n\n\n\nfunction MapContainerComponent({ bounds , boundsOptions , center , children , className , id , placeholder , style , whenReady , zoom , ...options }, forwardedRef) {\n    const [props] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        className,\n        id,\n        style\n    });\n    const [context, setContext] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(forwardedRef, ()=>context?.map ?? null, [\n        context\n    ]);\n    const mapRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((node)=>{\n        if (node !== null && context === null) {\n            const map = new leaflet__WEBPACK_IMPORTED_MODULE_0__.Map(node, options);\n            if (center != null && zoom != null) {\n                map.setView(center, zoom);\n            } else if (bounds != null) {\n                map.fitBounds(bounds, boundsOptions);\n            }\n            if (whenReady != null) {\n                map.whenReady(whenReady);\n            }\n            setContext((0,_react_leaflet_core__WEBPACK_IMPORTED_MODULE_2__.createLeafletContext)(map));\n        }\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        return ()=>{\n            context?.map.remove();\n        };\n    }, [\n        context\n    ]);\n    const contents = context ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_leaflet_core__WEBPACK_IMPORTED_MODULE_2__.LeafletProvider, {\n        value: context\n    }, children) : placeholder ?? null;\n    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", _extends({}, props, {\n        ref: mapRef\n    }), contents);\n}\nconst MapContainer = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(MapContainerComponent);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtbGVhZmxldC9saWIvTWFwQ29udGFpbmVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzRFO0FBQ2hDO0FBQ3FEO0FBQ2pHLGlDQUFpQyxtSEFBbUg7QUFDcEosb0JBQW9CLCtDQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxrQ0FBa0MsK0NBQVE7QUFDMUMsSUFBSSwwREFBbUI7QUFDdkI7QUFDQTtBQUNBLG1CQUFtQixrREFBVztBQUM5QjtBQUNBLDRCQUE0Qix3Q0FBVTtBQUN0QztBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIseUVBQW9CO0FBQzNDO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSSxnREFBUztBQUNiO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsNkNBQTZDLGdEQUFtQixDQUFDLGdFQUFlO0FBQ2hGO0FBQ0EsS0FBSztBQUNMLHlCQUF5QixnREFBbUIsbUJBQW1CO0FBQy9EO0FBQ0EsS0FBSztBQUNMO0FBQ08sbUNBQW1DLGlEQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3Vubm92YS1wcm9vZm9mY29uY2VwdC8uL25vZGVfbW9kdWxlcy9yZWFjdC1sZWFmbGV0L2xpYi9NYXBDb250YWluZXIuanM/ZjM4NiJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICAgIGZvcih2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvcih2YXIga2V5IGluIHNvdXJjZSl7XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9O1xuICAgIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuaW1wb3J0IHsgTGVhZmxldFByb3ZpZGVyLCBjcmVhdGVMZWFmbGV0Q29udGV4dCB9IGZyb20gJ0ByZWFjdC1sZWFmbGV0L2NvcmUnO1xuaW1wb3J0IHsgTWFwIGFzIExlYWZsZXRNYXAgfSBmcm9tICdsZWFmbGV0JztcbmltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VJbXBlcmF0aXZlSGFuZGxlLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmZ1bmN0aW9uIE1hcENvbnRhaW5lckNvbXBvbmVudCh7IGJvdW5kcyAsIGJvdW5kc09wdGlvbnMgLCBjZW50ZXIgLCBjaGlsZHJlbiAsIGNsYXNzTmFtZSAsIGlkICwgcGxhY2Vob2xkZXIgLCBzdHlsZSAsIHdoZW5SZWFkeSAsIHpvb20gLCAuLi5vcHRpb25zIH0sIGZvcndhcmRlZFJlZikge1xuICAgIGNvbnN0IFtwcm9wc10gPSB1c2VTdGF0ZSh7XG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgaWQsXG4gICAgICAgIHN0eWxlXG4gICAgfSk7XG4gICAgY29uc3QgW2NvbnRleHQsIHNldENvbnRleHRdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgdXNlSW1wZXJhdGl2ZUhhbmRsZShmb3J3YXJkZWRSZWYsICgpPT5jb250ZXh0Py5tYXAgPz8gbnVsbCwgW1xuICAgICAgICBjb250ZXh0XG4gICAgXSk7XG4gICAgY29uc3QgbWFwUmVmID0gdXNlQ2FsbGJhY2soKG5vZGUpPT57XG4gICAgICAgIGlmIChub2RlICE9PSBudWxsICYmIGNvbnRleHQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IG1hcCA9IG5ldyBMZWFmbGV0TWFwKG5vZGUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgaWYgKGNlbnRlciAhPSBudWxsICYmIHpvb20gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG1hcC5zZXRWaWV3KGNlbnRlciwgem9vbSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGJvdW5kcyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbWFwLmZpdEJvdW5kcyhib3VuZHMsIGJvdW5kc09wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHdoZW5SZWFkeSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbWFwLndoZW5SZWFkeSh3aGVuUmVhZHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0Q29udGV4dChjcmVhdGVMZWFmbGV0Q29udGV4dChtYXApKTtcbiAgICAgICAgfVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgICB9LCBbXSk7XG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIHJldHVybiAoKT0+e1xuICAgICAgICAgICAgY29udGV4dD8ubWFwLnJlbW92ZSgpO1xuICAgICAgICB9O1xuICAgIH0sIFtcbiAgICAgICAgY29udGV4dFxuICAgIF0pO1xuICAgIGNvbnN0IGNvbnRlbnRzID0gY29udGV4dCA/IC8qI19fUFVSRV9fKi8gUmVhY3QuY3JlYXRlRWxlbWVudChMZWFmbGV0UHJvdmlkZXIsIHtcbiAgICAgICAgdmFsdWU6IGNvbnRleHRcbiAgICB9LCBjaGlsZHJlbikgOiBwbGFjZWhvbGRlciA/PyBudWxsO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICAgIHJlZjogbWFwUmVmXG4gICAgfSksIGNvbnRlbnRzKTtcbn1cbmV4cG9ydCBjb25zdCBNYXBDb250YWluZXIgPSAvKiNfX1BVUkVfXyovIGZvcndhcmRSZWYoTWFwQ29udGFpbmVyQ29tcG9uZW50KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-leaflet/lib/MapContainer.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-leaflet/lib/TileLayer.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-leaflet/lib/TileLayer.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TileLayer: () => (/* binding */ TileLayer)\n/* harmony export */ });\n/* harmony import */ var _react_leaflet_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-leaflet/core */ \"(ssr)/./node_modules/@react-leaflet/core/lib/generic.js\");\n/* harmony import */ var _react_leaflet_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-leaflet/core */ \"(ssr)/./node_modules/@react-leaflet/core/lib/pane.js\");\n/* harmony import */ var _react_leaflet_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-leaflet/core */ \"(ssr)/./node_modules/@react-leaflet/core/lib/element.js\");\n/* harmony import */ var _react_leaflet_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-leaflet/core */ \"(ssr)/./node_modules/@react-leaflet/core/lib/grid-layer.js\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ \"(ssr)/./node_modules/leaflet/dist/leaflet-src.js\");\n\n\nconst TileLayer = (0,_react_leaflet_core__WEBPACK_IMPORTED_MODULE_1__.createTileLayerComponent)(function createTileLayer({ url , ...options }, context) {\n    const layer = new leaflet__WEBPACK_IMPORTED_MODULE_0__.TileLayer(url, (0,_react_leaflet_core__WEBPACK_IMPORTED_MODULE_2__.withPane)(options, context));\n    return (0,_react_leaflet_core__WEBPACK_IMPORTED_MODULE_3__.createElementObject)(layer, context);\n}, function updateTileLayer(layer, props, prevProps) {\n    (0,_react_leaflet_core__WEBPACK_IMPORTED_MODULE_4__.updateGridLayer)(layer, props, prevProps);\n    const { url  } = props;\n    if (url != null && url !== prevProps.url) {\n        layer.setUrl(url);\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtbGVhZmxldC9saWIvVGlsZUxheWVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUErRztBQUN2RDtBQUNqRCxrQkFBa0IsNkVBQXdCLDRCQUE0QixrQkFBa0I7QUFDL0Ysc0JBQXNCLDhDQUFnQixNQUFNLDZEQUFRO0FBQ3BELFdBQVcsd0VBQW1CO0FBQzlCLENBQUM7QUFDRCxJQUFJLG9FQUFlO0FBQ25CLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3Vubm92YS1wcm9vZm9mY29uY2VwdC8uL25vZGVfbW9kdWxlcy9yZWFjdC1sZWFmbGV0L2xpYi9UaWxlTGF5ZXIuanM/ODkyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVFbGVtZW50T2JqZWN0LCBjcmVhdGVUaWxlTGF5ZXJDb21wb25lbnQsIHVwZGF0ZUdyaWRMYXllciwgd2l0aFBhbmUgfSBmcm9tICdAcmVhY3QtbGVhZmxldC9jb3JlJztcbmltcG9ydCB7IFRpbGVMYXllciBhcyBMZWFmbGV0VGlsZUxheWVyIH0gZnJvbSAnbGVhZmxldCc7XG5leHBvcnQgY29uc3QgVGlsZUxheWVyID0gY3JlYXRlVGlsZUxheWVyQ29tcG9uZW50KGZ1bmN0aW9uIGNyZWF0ZVRpbGVMYXllcih7IHVybCAsIC4uLm9wdGlvbnMgfSwgY29udGV4dCkge1xuICAgIGNvbnN0IGxheWVyID0gbmV3IExlYWZsZXRUaWxlTGF5ZXIodXJsLCB3aXRoUGFuZShvcHRpb25zLCBjb250ZXh0KSk7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnRPYmplY3QobGF5ZXIsIGNvbnRleHQpO1xufSwgZnVuY3Rpb24gdXBkYXRlVGlsZUxheWVyKGxheWVyLCBwcm9wcywgcHJldlByb3BzKSB7XG4gICAgdXBkYXRlR3JpZExheWVyKGxheWVyLCBwcm9wcywgcHJldlByb3BzKTtcbiAgICBjb25zdCB7IHVybCAgfSA9IHByb3BzO1xuICAgIGlmICh1cmwgIT0gbnVsbCAmJiB1cmwgIT09IHByZXZQcm9wcy51cmwpIHtcbiAgICAgICAgbGF5ZXIuc2V0VXJsKHVybCk7XG4gICAgfVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-leaflet/lib/TileLayer.js\n");

/***/ })

};
;