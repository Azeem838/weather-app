!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){"use strict";const a=(()=>{const e=document.querySelector(".unit-toggle"),t=document.getElementById("error"),n=document.querySelector(".container.cards"),a=document.querySelector(".units-label");return{getInput:function(){return document.querySelector(".search").value.toLowerCase()},displayCard:a=>{t.innerText="",n.innerHTML="";const r=document.createElement("div");r.classList.add("card"),r.innerHTML=`\n        <div class="card-body">\n          <h5 class="card-title">Location: ${a.location}</h5>\n          <span class="card-text">Feels like: ${a.feelsLike}<sup> o</sup>${e.checked?"C":"F"}</span>\n          <span>Low: ${a.tempMin}<sup> o</sup>${e.checked?"C":"F"}</span>\n          <span>High: ${a.tempMax}<sup> o</sup>${e.checked?"C":"F"}</span>\n        </div>\n        <div class="card-footer">\n          <small class="text-muted">Humidity: ${a.humidity}%</small>\n          <small class="text-muted">Wind speed: ${a.windSpeed}</small>\n        </div>\n    `,n.appendChild(r)},getUnit:function(){return e.checked?"metric":"imperial"},displayError:()=>{t.innerText="There was an error getting the weather. Please make sure you entered a location and try again"},changeUnitsLabel:()=>{e.checked?a.innerHTML="Metric":a.innerHTML="Imperial"},displayGif:e=>{const t=document.createElement("img");t.src=e,n.appendChild(t)}}})();t.a=a},function(e,t,n){"use strict";n.r(t),n.d(t,"cityWeather",(function(){return o})),n.d(t,"getGif",(function(){return i}));var a=n(0),r=n(3);async function i(e){try{const t=await fetch("https://api.giphy.com/v1/gifs/translate?api_key=bb2006d9d3454578be1a99cfad65913d&s="+e,{mode:"cors"}),n=await t.json();return n.data.images.original.url}catch(e){a.a.displayError()}return null}async function o(){const e=a.a.getUnit(),t=a.a.getInput();try{const n=`https://api.openweathermap.org/data/2.5/weather?q=${t}&appid=b56e54fcfc83ea96697925d8521b8966&units=${e}`,a=await fetch(n,{mode:"cors"});return await a.json()}catch(e){a.a.displayError()}return null}navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(e){!async function(e,t,n="metric"){try{const o=`https://api.openweathermap.org/data/2.5/weather?lat=${e}&lon=${t}&appid=b56e54fcfc83ea96697925d8521b8966&units=${n}`,c=await fetch(o,{mode:"cors"}),s=await c.json(),u=Object(r.a)(s);a.a.displayCard(u);const d=await i(u.weatherStatus);a.a.displayGif(d)}catch(e){a.a.displayError()}}(e.coords.latitude,e.coords.longitude)}))},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),i=n(3);n(1);document.querySelector(".loc-form").addEventListener("submit",e=>{e.preventDefault(),Promise.resolve(Object(r.cityWeather)()).then(e=>Object(i.a)(e)).then(e=>{a.a.displayCard(e),Promise.resolve(Object(r.getGif)(e.weatherStatus)).then(e=>a.a.displayGif(e))})});document.querySelector(".custom-control").addEventListener("change",a.a.changeUnitsLabel)},function(e,t,n){"use strict";t.a=e=>({windSpeed:e.wind.speed,tempMin:e.main.temp_min,tempMax:e.main.temp_max,feelsLike:e.main.feels_like,humidity:e.main.humidity,location:e.name,weatherStatus:e.weather[0].main})}]);