!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=(()=>{const e=document.querySelector(".unit-toggle");return{getInput:function(){return document.querySelector(".search").value.toLowerCase()},displayCard:t=>{const n=document.querySelector(".container"),r=document.createElement("div");r.classList.add("card"),r.innerHTML=`\n        <img src="#" class="card-img-top" alt="..." />\n        <div class="card-body">\n          <h5 class="card-title">Location: ${t.location}</h5>\n          <span class="card-text">Feels like: ${t.feelsLike}<sup> o</sup>${e.checked?"C":"F"}</span>\n          <span>Low: ${t.tempMin}<sup> o</sup>${e.checked?"C":"F"}</span>\n          <span>High: ${t.tempMax}<sup> o</sup>${e.checked?"C":"F"}</span>\n\n        </div>\n        <div class="card-footer">\n          <small class="text-muted">Humidity: ${t.humidity}</small>\n          <small class="text-muted">Wind speed: ${t.windSpeed}</small>\n        </div>\n    `,n.appendChild(r)},getUnit:function(){return e.checked?"metric":"imperial"}}})();var a=e=>({windSpeed:e.wind.speed,tempMin:e.main.temp_min,tempMax:e.main.temp_max,feelsLike:e.main.feels_like,humidity:e.main.humidity,location:e.name});document.querySelector(".loc-form").addEventListener("submit",(async function(e){e.preventDefault();const t=r.getUnit(),n=r.getInput();try{const e=`http://api.openweathermap.org/data/2.5/weather?q=${n}&appid=b56e54fcfc83ea96697925d8521b8966&units=${t}`,i=await fetch(e,{mode:"cors"}),o=await i.json(),c=a(o);r.displayCard(c)}catch(e){console.log("There was an error",e)}}))}]);