!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):"object"==typeof exports?exports.cuid=e():t.cuid=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var u=n[r]={exports:{},id:r,loaded:!1};return t[r].call(u.exports,u,u.exports,e),u.loaded=!0,u.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var u=n(1),o=r(u),i=n(2)(),c=o["default"](i),f=c.cuid,s=c.slug;f.slug=s,e["default"]=f,t.exports=e["default"]},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=0,r=4,u=36,o=Math.pow(u,r),i=function(t,e){return("000000000"+t).slice(-e)},c=function(){return i((Math.random()*o<<0).toString(u),r)},f=function(){return n=o>n?n:0,n++},s=function(t){var e=function(){var e="c",n=(new Date).getTime().toString(u),o=c()+c(),s=i(f().toString(u),r);return e+n+s+t+o},n=function(){var e=(new Date).getTime().toString(36),n=t.slice(0,1)+t.slice(-1),r=c().slice(-2),u=f().toString(36).slice(-4);return e.slice(-2)+u+n+r};return{cuid:e,slug:n}};e["default"]=s,t.exports=e["default"]},function(t,e){(function(n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t,e){return("000000000"+t).slice(-e)},u=function(){var t=0,e=e||n;for(var r in e)t++;return t}(),o=function(){return u};e["default"]=function(){return r((navigator.mimeTypes.length+navigator.userAgent.length).toString(36)+o().toString(36),4)},t.exports=e["default"]}).call(e,function(){return this}())}])});