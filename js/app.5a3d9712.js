(function(t){function e(e){for(var n,o,i=e[0],l=e[1],c=e[2],u=0,p=[];u<i.length;u++)o=i[u],s[o]&&p.push(s[o][0]),s[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},s={app:0},r=[];function o(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"b77e4062"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a=s[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise(function(e,n){a=s[t]=[e,n]});e.push(a[2]=n);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=o(t),r=function(e){l.onerror=l.onload=null,clearTimeout(c);var a=s[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+n+": "+r+")");o.type=n,o.request=r,a[1](o)}s[t]=void 0}};var c=setTimeout(function(){r({type:"timeout",target:l})},12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/cmnip-web/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"130e":function(t,e,a){},"16a3":function(t,e,a){"use strict";var n=a("130e"),s=a.n(n);s.a},"21bb":function(t,e,a){"use strict";var n=a("bcc9"),s=a.n(n);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("navbar"),a("div",{staticClass:"container py-4"},[a("router-view")],1)],1)},r=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[a("div",{staticClass:"container"},[a("router-link",{staticClass:"navbar-brand d-flex",attrs:{to:"/"}},[t._v("\n                Check My Name in Poland "),a("box-icon",{staticClass:"ml-1 position-relative",staticStyle:{bottom:"-4px"},attrs:{name:"search-alt",color:"white"}})],1),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav ml-auto"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[t._v("About")])],1),a("li",{staticClass:"nav-item dropdown"},[a("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n                            Repos\n                        ")]),a("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[a("a",{staticClass:"dropdown-item d-flex",attrs:{href:"https://github.com/MatiPati/cmnip-web",target:"_blank"}},[t._v("\n                                Web repo "),a("box-icon",{staticClass:"ml-1",attrs:{type:"logo",name:"github",size:"sm"}})],1),a("a",{staticClass:"dropdown-item d-flex",attrs:{href:"https://github.com/MatiPati/cmnip-api",target:"_blank"}},[t._v("\n                                API repo "),a("box-icon",{staticClass:"ml-1",attrs:{type:"logo",name:"github",size:"sm"}})],1)])])])])],1)]),a("div",{attrs:{id:"nav-fix"}})])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],l={name:"Navbar"},c=l,u=(a("16a3"),a("2877")),d=Object(u["a"])(c,o,i,!1,null,null,null),p=d.exports,m={components:{Navbar:p}},v=m,f=(a("5c0b"),Object(u["a"])(v,s,r,!1,null,null,null)),b=f.exports,h=a("8c4f"),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"row"},[t._m(0),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"card p-4"},[a("p",{staticClass:"mb-0"},[t._v("\n                    Most used name in\n                    "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.mostUsed.year,expression:"mostUsed.year"}],attrs:{type:"number",id:"year-input",max:"2017",min:"2000"},domProps:{value:t.mostUsed.year},on:{click:function(e){return t.getMostUsedName()},input:function(e){e.target.composing||t.$set(t.mostUsed,"year",e.target.value)}}}),a("br"),a("button",{staticClass:"btn btn-outline-dark btn-sm",on:{click:function(e){return t.getMostUsedName()}}},[t._v("Check")])]),a("p",{staticClass:"display-3 text-center"},[a("span",{directives:[{name:"show",rawName:"v-show",value:!t.mostUsed.loading,expression:"!mostUsed.loading"}]},[t._v("\n                        "+t._s(t.mostUsed.name)+"\n                    ")]),a("box-icon",{directives:[{name:"show",rawName:"v-show",value:t.mostUsed.loading,expression:"mostUsed.loading"}],attrs:{name:"loader-alt",animation:"spin",size:"lg"}})],1)])])])])},y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-lg-6"},[a("h1",{staticClass:"m-0"},[t._v("\n                This is HOME\n            ")]),a("hr",{staticClass:"mb-2"}),a("p",[t._v("\n                What I'm doing here?\n            ")])])}],w={data:function(){return{mostUsed:{name:"",year:2017,loading:!1}}},created:function(){this.getMostUsedName()},methods:{getMostUsedName:function(){var t=this;this.mostUsed.loading=!0,this.mostUsed.year>2017&&(this.mostUsed.year=2017),this.mostUsed.year<2e3&&(this.mostUsed.year=2e3),fetch("http://mvtthew.pl:11290/names?start=0&limit=1&year="+this.mostUsed.year,{method:"GET"}).then(function(t){return t.json()}).then(function(e){t.mostUsed.name=e[0],t.mostUsed.loading=!1})}}},C=w,_=(a("21bb"),Object(u["a"])(C,g,y,!1,null,null,null)),x=_.exports;n["a"].use(h["a"]);var U=new h["a"]({mode:"history",base:"/cmnip-web/",routes:[{path:"/",name:"home",component:x},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]}),k=a("2f62");n["a"].use(k["a"]);var j=new k["a"].Store({state:{},mutations:{},actions:{}}),M=a("9f7b"),O=a.n(M);a("f9e3"),a("2dd8"),a("3357");new n["a"]({router:U,store:j,render:function(t){return t(b)}}).$mount("#app"),n["a"].config.productionTip=!1,n["a"].use(O.a)},"5c0b":function(t,e,a){"use strict";var n=a("5e27"),s=a.n(n);s.a},"5e27":function(t,e,a){},bcc9:function(t,e,a){}});
//# sourceMappingURL=app.5a3d9712.js.map