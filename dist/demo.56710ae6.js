parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"XLs9":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){return function e(){var t=this;return this.eventsMap=[],this.addEvent=function(e,n,s){return t.eventsMap.push({element:e,eventName:n,handler:s}),s},this.removeEvents=function(e,n){return t.eventsMap=t.eventsMap.filter(function(s,r){return s.element===e&&s.eventName===n&&delete t.eventsMap[r]&&1}),!1},this.getEvents=function(e){return void 0===e&&(e=void 0),e?t.eventsMap.filter(function(t){return t.eventName===e}):t.eventsMap},this.clearEvents=function(){t.eventsMap=[]},e.instance?e.instance:(e.instance=this,this)}}();exports.default=e;
},{}],"WGAL":[function(require,module,exports) {
"use strict";var t=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),e=this&&this.__assign||function(){return(e=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0});var r=n(require("./event-manager")),o=function(n){function r(){var t=null!==n&&n.apply(this,arguments)||this;return t.on=function(n){var r=n.events,o=n.elements,a=n.targets,i=n.handler,c=n.once,u=void 0!==c&&c;t.candidates(o,r,function(n,r){n.addEventListener(t.extractEventName(r),t.addEvent(n,r,function(t){var o={event:r,delegatedTarget:n,currentTarget:n,originalEvent:t};if(a){var c=t.target.closest(a);if(!c)return!1;o=e(e({},o),{currentTarget:c||o.delegatedTarget})}return i(o)}),{once:u})})},t.once=function(e){var n=e.events,r=e.elements,o=e.targets,a=e.handler;return t.on({events:n,elements:r,targets:o,handler:a,once:!0})},t.off=function(e){var n=e.elements,r=e.events,o=[];return t.getEvents().forEach(function(e){t.candidates(n,r,function(n,r){n.removeEventListener(t.extractEventName(r),e.handler),o.push(t.removeEvents(n,r))})}),o},t.fire=function(e){var n=e.elements,r=e.events,o=[],a=document.createEvent("Event");return t.candidates(n,r,function(e,n){a.initEvent(t.extractEventName(n),!0,!0),o.push(e.dispatchEvent(a))}),o},t.candidates=function(t,e,n){var r="string"==typeof t?document.querySelectorAll(t):[t],o=e.split(" ");r.forEach(function(t){return o.forEach(function(e){return n(t,e)})})},t.extractEventName=function(t){return t.split(".")[0]},t}return t(r,n),r}(r.default);exports.default=o;
},{"./event-manager":"XLs9"}],"fUdq":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=require("./namespaced-event-delegation");Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return e(t).default}});
},{"./namespaced-event-delegation":"WGAL"}],"EWEi":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("../src/index")),n=new t.default,r=function(){var e=[];return function(t){var n,r,a=t.currentTarget;e.push({eventName:t.eventName,delegatedTarget:[t.delegatedTarget.tagName.toLocaleLowerCase(),t.delegatedTarget.classList.toString().trim().replace(" ",".")].join("."),originalEvent:t.originalEvent.type+" => ."+t.originalEvent.target.classList.toString().replace(" ","."),target:a.tagName.toLocaleLowerCase()+"."+a.classList.toString().replace(" ",".")}),n=document.querySelector("#console"),r=e,n.innerHTML=r.map(function(e){return"<tr><td>"+(t=e).eventName+"</td><td>"+t.delegatedTarget+"</td><td>"+t.originalEvent+"</td><td>"+t.target+"</td></tr>";var t}).join("")}}();window.addEventListener("DOMContentLoaded",function(){var e={targets:".btn--ned",elements:".container",handler:function(e){r(e)},events:"click.btnNed"},t={elements:".btn--direct",handler:function(e){console.log(e);var t=n.off({elements:e.delegatedTarget,events:"click.btnDirect"});e.currentTarget.classList.remove("btn--direct"),console.log({removed:t}),e.originalEvent.stopImmediatePropagation(),r(e)},events:"click.btnDirect"},a={elements:".btn--direct",handler:function(e){r(e)},events:"click.btnDirectOnce"},o={targets:".btn",elements:".container",handler:function(e){e.currentTarget.classList.add("click"),r(e)},events:"mousedown.AllBtn"},i={targets:".btn",elements:".container",handler:function(e){e.currentTarget.classList.remove("click"),r(e)},events:"mouseup.AllBtn"},l={events:"click.myClick mouseover.myClick",targets:".btn__label, h2",elements:".container, .nav",handler:function(e){r(e)}};n.on(l),n.on(e),n.on(t),n.once(a),n.on(o),n.on(i),n.on({events:"submit.myForm",elements:document.body,targets:".myForm",handler:function(e){r(e),e.originalEvent.preventDefault(),e.originalEvent.stopPropagation()}}),console.log(n.getEvents())});
},{"../src/index":"fUdq"}]},{},["EWEi"], "Ned")