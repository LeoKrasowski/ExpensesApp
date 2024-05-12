define(["exports","react","react-dom"],(function(e,t,a){"use strict";var n;!function(e){e.Number="number",e.DateTime="datetime"}(n||(n={}));var i,l={exports:{}};
/*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */i=l,function(){var e={}.hasOwnProperty;function t(){for(var a=[],n=0;n<arguments.length;n++){var i=arguments[n];if(i){var l=typeof i;if("string"===l||"number"===l)a.push(i);else if(Array.isArray(i)&&i.length){var r=t.apply(null,i);r&&a.push(r)}else if("object"===l)for(var c in i)e.call(i,c)&&i[c]&&a.push(c)}}return a.join(" ")}i.exports?(t.default=t,i.exports=t):window.classNames=t}();var r=l.exports;const c=({className:e,bootstrapStyle:a,children:n})=>t.Children.count(n)>0?t.createElement("div",{className:r("alert alert-".concat(a),e)},n):null;function o(e){var a;return t.createElement("div",{className:"widget-switch"},t.createElement("div",{id:e.id,className:r("widget-switch-btn-wrapper","widget-switch-btn-wrapper-default",{checked:e.isChecked,disabled:!e.editable,"un-checked":!e.isChecked}),onClick:e.onClick,onKeyDown:e.onKeyDown,tabIndex:null!==(a=e.tabIndex)&&void 0!==a?a:0,role:"switch","aria-checked":e.isChecked,"aria-labelledby":"".concat(e.id,"-label"),"aria-readonly":!e.editable},t.createElement("div",{className:r("widget-switch-btn",{left:!e.isChecked,right:e.isChecked})})),t.createElement(c,{bootstrapStyle:"danger"},e.validation))}c.displayName="Alert",e.Switch=function(e){const a=(n=e.booleanAttribute)&&"available"===n.status&&n.value;var n;const i=!e.booleanAttribute.readOnly,l=t.useCallback((()=>{var t;e.booleanAttribute.setValue(!e.booleanAttribute.value),(t=e.action)&&t.canExecute&&!t.isExecuting&&t.execute()}),[e.action,e.booleanAttribute]),r=t.useCallback((e=>{e.preventDefault(),i&&l()}),[i,l]),c=t.useCallback((e=>{e.preventDefault(),i&&" "===e.key&&l()}),[i,l]);return t.createElement(o,{onClick:r,onKeyDown:c,isChecked:a,editable:i,validation:e.booleanAttribute.validation,id:e.id,tabIndex:e.tabIndex})},Object.defineProperty(e,"__esModule",{value:!0})}));