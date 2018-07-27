module.exports=__NEXT_REGISTER_PAGE("/",function(){return{page:webpackJsonp([2],{196:function(e,t,n){e.exports=n(197)},197:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(5),r=n.n(a),o=n(198),i=n.n(o);n(210);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?m(e):t}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var u=function(e){var t=e.show,n=e.onHide;return r.a.createElement("div",{className:"side-nav"},r.a.createElement("div",{className:"side-nav__overlay ".concat(t?"side-nav__overlay--active":""),onClick:n}),r.a.createElement("div",{className:"side-nav__menu ".concat(t?"side-nav__menu--active":"")},t&&r.a.createElement("div",{className:"side-menu"},r.a.createElement("div",{className:"side-menu__header"},r.a.createElement("a",{href:"javascript:void(0)",onClick:n},r.a.createElement("img",{src:"/static/images/cross.svg",alt:"Close menu icon"}))),r.a.createElement("div",{className:"side-menu__body"},r.a.createElement("div",{className:"menu-items"},r.a.createElement("div",{className:"menu-items__item"},r.a.createElement("a",{href:"#",className:"menu-items__link",onClick:n},"HOME")),r.a.createElement("div",{className:"menu-items__item"},r.a.createElement("a",{href:"#hotel",className:"menu-items__link",onClick:n},"HOTEL")),r.a.createElement("div",{className:"menu-items__item"},r.a.createElement("a",{href:"#activities",className:"menu-items__link",onClick:n},"ACTIVITIES"))),r.a.createElement("a",{href:"https://app.axisrooms.com/beV2/home1.html?bookingEngineId=2444",rel:"noopener noreferrer",className:"menu-items__btn"},"BOOK NOW")))))},f=function(e){function t(){var e,n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return s(a,(n=a=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),Object.defineProperty(m(a),"state",{configurable:!0,enumerable:!0,writable:!0,value:{hasTint:!1,showSideNav:!1}}),Object.defineProperty(m(a),"handleScroll",{configurable:!0,enumerable:!0,writable:!0,value:function(){a.setState(function(){return{hasTint:scrollY>innerHeight}})}}),Object.defineProperty(m(a),"hideSideNav",{configurable:!0,enumerable:!0,writable:!0,value:function(){a.setState(function(){return{showSideNav:!1}})}}),Object.defineProperty(m(a),"showSideNav",{configurable:!0,enumerable:!0,writable:!0,value:function(){console.log("Show!"),a.setState(function(){return{showSideNav:!0}})}}),n))}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),n=t,(a=[{key:"componentDidMount",value:function(){addEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this.state,t=e.hasTint,n=e.showSideNav;return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"nav ".concat(t?"nav--tint":"")},r.a.createElement("div",{className:"nav-links"},r.a.createElement("a",{href:"/",className:"nav-links__link"},r.a.createElement("i",{className:"fas fa-home"})),r.a.createElement("a",{href:"/hotel",className:"nav-links__link nav-links__link--hoverable"},"HOTEL"),r.a.createElement("a",{href:"/activities",className:"nav-links__link nav-links__link--hoverable"},"ACTIVITIES")),r.a.createElement("div",{className:"nav-links"},r.a.createElement("a",{href:"http://app.axisrooms.com/beV2/home1.html?bookingEngineId=2444",target:"_blank",rel:"noopener noreferrer",className:"nav-btn"},"BOOK NOW")),r.a.createElement("div",{className:"nav-links nav-links--mobile"},r.a.createElement("a",{href:"javascript:void(0)",onClick:this.showSideNav,className:"nav-links__link"},r.a.createElement("img",{src:"/static/images/burger.svg",alt:"Open menu icon"})))),r.a.createElement(u,{onHide:this.hideSideNav,show:n}))}}])&&l(n.prototype,a),o&&l(n,o),t}(),p=(n(211),function(e){var t=e.children;return r.a.createElement("div",null,r.a.createElement(i.a,null,r.a.createElement("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),r.a.createElement("meta",{charSet:"UTF-8"}),r.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),r.a.createElement("meta",{"http-equiv":"X-UA-Compatible",content:"ie=edge"}),r.a.createElement("title",null,"West Sands at Ukulhas"),r.a.createElement("meta",{name:"description",content:""}),r.a.createElement("meta",{name:"keywords",content:""}),r.a.createElement("meta",{name:"author",content:""}),r.a.createElement("meta",{name:"robots",content:"index, follow"}),r.a.createElement("meta",{name:"mobile-web-app-capable",content:"yes"}),r.a.createElement("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),r.a.createElement("meta",{name:"apple-mobile-web-app-status-bar-style",content:"default"}),r.a.createElement("link",{rel:"stylesheet",href:"static/css/bootstrap.min.css"}),r.a.createElement("link",{rel:"stylesheet",href:"static/css/fontawesome.min.css"}),r.a.createElement("meta",{property:"fb:page_id",content:""}),r.a.createElement("meta",{property:"og:title",content:""}),r.a.createElement("meta",{property:"og:image",content:""}),r.a.createElement("meta",{property:"og:description",content:""}),r.a.createElement("meta",{property:"og:url",content:""}),r.a.createElement("meta",{property:"og:site_name",content:""}),r.a.createElement("meta",{property:"og:type",content:"website"}),r.a.createElement("meta",{name:"twitter:card",content:"summary"}),r.a.createElement("meta",{name:"twitter:url",content:""}),r.a.createElement("meta",{name:"twitter:title",content:""}),r.a.createElement("meta",{name:"twitter:description",content:""}),r.a.createElement("meta",{name:"twitter:image",content:""}),r.a.createElement("meta",{name:"twitter:site",content:""})),r.a.createElement(f,null),t)});n(212);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function b(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?h(e):t}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var y=function(e){function t(){var e,n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return b(a,(n=a=b(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),Object.defineProperty(h(a),"state",{configurable:!0,enumerable:!0,writable:!0,value:{loading:!0}}),n))}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),n=t,(a=[{key:"componentDidMount",value:function(){this.setState(function(){return{loading:!1}})}},{key:"render",value:function(){var e=this.state.loading;return r.a.createElement("section",{className:"section-hero"},r.a.createElement("div",{className:"hero-img".concat(e?"--loading":"")}),r.a.createElement("div",{className:"hero-overlay"},r.a.createElement("div",{className:"container--wide"},r.a.createElement("div",{className:"hero-text"},r.a.createElement("h2",{className:"hero-text__h2".concat(e?"--loading":"")},"PARADISE FOUND"),r.a.createElement("p",{className:"hero-text__p".concat(e?"--loading":"")},"We discovered paradise on the island of Ukulhas! Fortunately, it happened to be our backyard. Welcome to West Sands for a distinctly different local island holiday experience in Maldives. Soak up the sun, beach and the azure blue waters of the Indian Ocean.")))))}}])&&v(n.prototype,a),o&&v(n,o),t}();t.default=function(){return r.a.createElement(p,null,r.a.createElement(y,null))}},198:function(e,t,n){e.exports=n(97)},223:function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",a=e[3];if(!a)return n;if(t&&"function"==typeof btoa){var r=(i=a,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),o=a.sources.map(function(e){return"/*# sourceURL="+a.sourceRoot+e+" */"});return[n].concat(o).concat([r]).join("\n")}var i;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var a={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(a[o]=!0)}for(r=0;r<e.length;r++){var i=e[r];"number"==typeof i[0]&&a[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}}},[196]).default}});