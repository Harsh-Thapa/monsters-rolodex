(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,t,n){e.exports=n(23)},,,,,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(3),o=n.n(r),s=(n(13),n(1)),l=(n(15),function(e){var t=e.monster,n=t.name,a=t.email,r=t.id;return c.a.createElement("div",{className:"card-container",key:r},c.a.createElement("img",{alt:"monster ".concat(n),src:"https://robohash.org/".concat(r,"?set=set2&size=180x180")}),c.a.createElement("h2",null,n),c.a.createElement("p",null,a))}),u=(n(17),function(e){var t=e.monsters;return c.a.createElement("div",{className:"card-list"},t.map(function(e){return c.a.createElement(l,{monster:e})}))}),i=(n(19),function(e){var t=e.className,n=e.placeholder,a=e.onChangeHandler;return c.a.createElement("input",{className:"search-box ".concat(t),type:"search",placeholder:n,onChange:a})}),m=(n(21),function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)([]),l=Object(s.a)(o,2),m=l[0],f=l[1],h=Object(a.useState)(m),d=Object(s.a)(h,2),p=d[0],E=d[1];Object(a.useEffect)(function(){fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(e){return f(e)})},[]),Object(a.useEffect)(function(){var e=m.filter(function(e){return e.name.toLocaleLowerCase().includes(n)});E(e)},[m,n]);return c.a.createElement("div",{className:"App"},c.a.createElement("h1",{className:"app-title"},"Monsters Rolodex"),c.a.createElement(i,{className:"search-box",onChangeHandler:function(e){var t=e.target.value.toLocaleLowerCase();r(t)},placeholder:"Search Monsters"}),c.a.createElement(u,{monsters:p}))}),f=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,24)).then(function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m,null))),f()}],[[4,3,2]]]);
//# sourceMappingURL=main.06cde5c9.chunk.js.map