parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"nb58":[function(require,module,exports) {
function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function t(t){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?e(Object(o),!0).forEach(function(e){n(t,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))})}return t}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var r=function(e){return new Promise(function(t){return setTimeout(function(){return t(e)},e)})},o=function(e){return console.log("Resolved after ".concat(e,"ms"))};r(2e3).then(o),r(1e3).then(o),r(1500).then(o);var c=[{name:"Mango",active:!0},{name:"Poly",active:!1},{name:"Ajax",active:!0},{name:"Lux",active:!1}],i=function(e,n){return new Promise(function(r){r(e.map(function(e){return e.name===n?t(t({},e),{},{active:!e.active}):e}))})},a=function(e){return console.table(e)};i(c,"Mango").then(a),i(c,"Lux").then(a);var u=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)},f=function(e){var t=u(200,500);return new Promise(function(n,r){return setTimeout(function(){if(Math.random()>.3)return n({id:e.id,time:t});r(e.id)},t)})},s=function(e){console.log("Transaction ".concat(e.id," processed in ").concat(e.time,"ms"))},m=function(e){console.warn("Error processing transaction ".concat(e,". Please try again later."))};f({id:70,amount:150}).then(s).catch(m),f({id:71,amount:230}).then(s).catch(m),f({id:72,amount:75}).then(s).catch(m),f({id:73,amount:100}).then(s).catch(m);
},{}]},{},["nb58"], null)
//# sourceMappingURL=/goit-js-hw-11/03-promisify.f42be8d5.js.map