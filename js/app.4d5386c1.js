(function(t){function e(e){for(var s,r,o=e[0],l=e[1],c=e[2],d=0,u=[];d<o.length;d++)r=o[d],n[r]&&u.push(n[r][0]),n[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);m&&m(e);while(u.length)u.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},n={app:0},i=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/cmnip-web/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var m=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0b0c":function(t,e,a){},"0f47":function(t,e,a){"use strict";var s=a("0b0c"),n=a.n(s);n.a},"130e":function(t,e,a){},"16a3":function(t,e,a){"use strict";var s=a("130e"),n=a.n(s);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("navbar"),a("div",{staticClass:"container py-4"},[a("router-view")],1)],1)},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[a("div",{staticClass:"container"},[a("router-link",{staticClass:"navbar-brand d-flex",attrs:{to:"/"}},[t._v("\n                Check My Name in Poland "),a("box-icon",{staticClass:"ml-1 position-relative",staticStyle:{bottom:"-4px"},attrs:{name:"search-alt",color:"white"}})],1),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav ml-auto"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")])],1),a("li",{staticClass:"nav-item dropdown"},[a("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n                            More\n                        ")]),a("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[a("router-link",{staticClass:"dropdown-item",attrs:{to:"/graph"}},[t._v("Check name on graph")]),a("router-link",{staticClass:"dropdown-item",attrs:{to:"/mostused"}},[t._v("Most used names")])],1)]),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[t._v("About")])],1),a("li",{staticClass:"nav-item dropdown"},[a("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n                            Repos\n                        ")]),a("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[a("a",{staticClass:"dropdown-item d-flex",attrs:{href:"https://github.com/MatiPati/cmnip-web",target:"_blank"}},[t._v("\n                                Web repo "),a("box-icon",{staticClass:"ml-1",attrs:{type:"logo",name:"github",size:"sm"}})],1),a("a",{staticClass:"dropdown-item d-flex",attrs:{href:"https://github.com/MatiPati/cmnip-api",target:"_blank"}},[t._v("\n                                API repo "),a("box-icon",{staticClass:"ml-1",attrs:{type:"logo",name:"github",size:"sm"}})],1)])])])])],1)]),a("div",{attrs:{id:"nav-fix"}})])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],l={name:"Navbar"},c=l,m=(a("16a3"),a("2877")),d=Object(m["a"])(c,r,o,!1,null,null,null),u=d.exports,p={components:{Navbar:u}},h=p,v=(a("5c0b"),Object(m["a"])(h,n,i,!1,null,null,null)),b=v.exports,f=a("8c4f"),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-5"},[a("h1",{staticClass:"m-0"},[t._v("\n                CMNiN\n            ")]),a("p",{staticClass:"mb-1"},[t._v("\n                Check My Name in Poland\n            ")]),a("hr",{staticClass:"mb-3"}),a("div",{staticClass:"card p-3"},[a("p",{staticClass:"font-weight-bold m-0"},[a("box-icon",{attrs:{name:"chevron-right",size:"xs"}}),t._v(" What is this site?\n                ")],1),a("p",{staticClass:"m-0 text-justify"},[t._v("\n                    Here you can check most used names in Poland, look at the graphs with compares names gives count and much more!\n                ")]),a("p",{staticClass:"font-weight-bold m-0 mt-4"},[a("box-icon",{attrs:{name:"chevron-right",size:"xs"}}),t._v(" Why this project exist?\n                ")],1),a("p",{staticClass:"m-0 text-justify"},[t._v("\n                    This small project aims to prove some students, there is time for school, all homework, and our aim - evolve our passions and talents!\n                ")]),a("p",{staticClass:"font-weight-bold m-0 mt-4"},[a("box-icon",{attrs:{name:"chevron-right",size:"xs"}}),t._v(" Why Poland?\n                ")],1),a("p",{staticClass:"m-0 text-justify"},[t._v("\n                    We live in Poland and we want to find out where on rankings and graphs are our names!\n                ")])]),a("div",{staticClass:"card p-3 mt-3"},[a("h5",[t._v("\n                    Quick navigation\n                ")]),a("router-link",{attrs:{to:"/mostused"}},[a("box-icon",{attrs:{name:"link",size:"xs"}}),t._v(" Most used names")],1),a("router-link",{attrs:{to:"/graph"}},[a("box-icon",{attrs:{name:"link",size:"xs"}}),t._v(" Check name on graph")],1)],1)]),a("div",{staticClass:"col-lg-7"},[a("highcharts",{staticClass:"mt-3",staticStyle:{width:"100%",height:"500px"},attrs:{options:t.chartOptions}}),a("small",[t._v("\n                Only few of Polish names are visible on graph. You can check yours by clicking button bellow.\n            ")]),a("router-link",{staticClass:"btn btn-outline-dark mt-1",attrs:{to:"/graph"}},[t._v("Check other names on graph")])],1)])])},C=[],x=a("e814"),w=a.n(x),_=(a("ac6a"),a("db0c")),y=a.n(_),k=a("2b5b"),N=a.n(k),O={components:{highcharts:k["Chart"]},data:function(){return{newName:"",nameIndex:0,visibleNames:[],chartOptions:{title:{text:"Polish names giving frequency"},plotOptions:{series:{label:{connectorAllowed:!1},pointStart:2e3}},yAxis:{title:{text:"Names given"}},xAxis:{title:{text:"Year"}},credits:{enabled:!1},series:[]}}},created:function(){var t=this;this.getData("Karolina"),setTimeout(function(){t.getData("Patryk")},2e3),setTimeout(function(){t.getData("Gabriela")},4e3),setTimeout(function(){t.getData("Mateusz")},6e3),setTimeout(function(){t.getData("Paweł")},8e3),setTimeout(function(){t.getData("Jan")},1e4)},methods:{getData:function(t){var e=this;fetch("https://mvtthew.pl:11290/name/"+t,{method:"GET"}).then(function(t){return t.json()}).then(function(a){e.chartOptions.series.push({name:t,data:[],cursor:"pointer",marker:{symbol:"circle"}});var s=y()(a.years);s.forEach(function(t){e.chartOptions.series[e.nameIndex].data.push(w()(t.uses))}),e.visibleNames.push({name:t,index:e.nameIndex}),e.nameIndex++})}}},j=O,M=Object(m["a"])(j,g,C,!1,null,null,null),P=M.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",{staticClass:"m-0"},[t._v("About")]),a("hr",{staticClass:"mb-2"}),a("p",[t._v("\n        Authors of this project\n    ")]),a("div",{staticClass:"row mt-4 mb-2"},[a("div",{staticClass:"col-lg-4"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("h2",[t._v("\n                        Developers team\n                    ")]),a("a",{staticClass:"d-flex",attrs:{href:"https://github.com/matipati/",target:"_blank"}},[t._v("\n                        MatiPati\n                        "),a("box-icon",{staticClass:"ml-1",attrs:{type:"logo",name:"github"}})],1)]),a("div",{staticClass:"col-12 mt-4"},[a("div",{staticClass:"card p-3"},[a("box-icon",{staticClass:"mb-2",attrs:{type:"logo",name:"vuejs",size:"md"}}),a("p",{staticClass:"h4 m-0"},[t._v("\n                            Mateusz Ożóg\n                        ")]),a("p",[t._v("\n                            Front-end / Website / Vue.js\n                        ")]),a("a",{staticClass:"d-flex",attrs:{href:"https://github.com/Mvtthew/",target:"_blank"}},[t._v("\n                            Mvtthew\n                            "),a("box-icon",{staticClass:"ml-1",attrs:{type:"logo",name:"github"}})],1)],1)]),a("div",{staticClass:"col-12 mt-2"},[a("div",{staticClass:"card p-3"},[a("box-icon",{staticClass:"mb-2",attrs:{type:"logo",name:"nodejs",size:"md"}}),a("p",{staticClass:"h4 m-0"},[t._v("\n                            Patryk Kozarski\n                        ")]),a("p",[t._v("\n                            Back-end / API / Node.js\n                        ")]),a("a",{staticClass:"d-flex",attrs:{href:"https://github.com/nerio2/",target:"_blank"}},[t._v("\n                            nerio2\n                            "),a("box-icon",{staticClass:"ml-1",attrs:{type:"logo",name:"github"}})],1)],1)])])]),a("div",{staticClass:"col-lg-8 mt-5 mt-lg-0"},[a("p",[t._v("\n                Data provided by Polish Open Data sources"),a("br"),a("a",{attrs:{href:"https://dane.gov.pl/",target:"_blank"}},[t._v("https://dane.gov.pl "),a("box-icon",{attrs:{name:"link-external",size:"xs"}})],1)]),t._m(0)])])])},E=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("\n                Covered MIT Licence"),a("br"),t._v("\n                © MatiPati 2019\n            ")])}],T=void 0,D=Object(m["a"])(T,U,E,!1,null,null,null),A=D.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("h1",{staticClass:"m-0"},[t._v("\n        Most used names\n    ")]),a("hr",{staticClass:"mb-2"}),a("p",{staticClass:"mb-0"},[t._v("\n        Here is the list of 100 most used names per year!\n    ")]),a("p",[t._v("\n        You can change current showing year\n    ")]),a("div",{staticClass:"card p-4"},[a("p",{staticClass:"mb-0 text-lg-right"},[t._v("\n            Most used names in\n            "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.mostUsed.year,expression:"mostUsed.year"}],attrs:{type:"number",id:"year-input",max:"2017",min:"2000"},domProps:{value:t.mostUsed.year},on:{click:function(e){return t.getMostUsedName()},input:function(e){e.target.composing||t.$set(t.mostUsed,"year",e.target.value)}}}),a("button",{staticClass:"btn btn-outline-dark btn-sm",on:{click:function(e){return t.getMostUsedName()}}},[t._v("Check")])]),a("div",{staticClass:"card py-3 px-4 mt-4"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!t.mostUsed.loading,expression:"!mostUsed.loading"}]},t._l(t.mostUsed.names,function(e,s){return a("p",{staticClass:"m-0"},[t._v("\n                    "+t._s(s+1)+". "+t._s(e)+"\n                ")])}),0),a("div",{directives:[{name:"show",rawName:"v-show",value:t.mostUsed.loading,expression:"mostUsed.loading"}],staticClass:"text-center"},[a("box-icon",{staticClass:"my-5",attrs:{name:"loader-alt",animation:"spin",size:"lg"}})],1)])])])},z=[],I={data:function(){return{mostUsed:{names:"",year:2017,loading:!1}}},created:function(){this.getMostUsedName()},methods:{getMostUsedName:function(){var t=this;this.mostUsed.loading=!0,this.mostUsed.year>2017&&(this.mostUsed.year=2017),this.mostUsed.year<2e3&&(this.mostUsed.year=2e3),fetch("https://mvtthew.pl:11290/names?start=0&limit=100&year="+this.mostUsed.year,{method:"GET"}).then(function(t){return t.json()}).then(function(e){t.mostUsed.names=e,t.mostUsed.loading=!1})}}},$=I,V=(a("0f47"),Object(m["a"])($,S,z,!1,null,null,null)),G=V.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"check-on-graph"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[a("h1",{staticClass:"mb-0"},[t._v("\n                Check name on graph\n            ")]),a("hr",{staticClass:"mb-2"}),a("highcharts",{directives:[{name:"show",rawName:"v-show",value:t.graphVisible,expression:"graphVisible"}],staticClass:"mt-3",staticStyle:{width:"100%",height:"550px"},attrs:{options:t.chartOptions}}),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.graphVisible,expression:"!graphVisible"}]},[t._m(0)])],1),a("div",{staticClass:"col-lg-6 ml-auto mt-2"},[a("p",{staticClass:"mb-1"},[t._v("\n                Add name to graph here:\n            ")]),a("div",{staticClass:"d-flex"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newName,expression:"newName"}],staticClass:"form-control",attrs:{placeholder:"Name..."},domProps:{value:t.newName},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addNameToGraph()},input:function(e){e.target.composing||(t.newName=e.target.value)}}}),a("button",{staticClass:"btn btn-outline-dark",on:{click:function(e){return t.addNameToGraph()}}},[t._v("Add")])]),a("small",{directives:[{name:"show",rawName:"v-show",value:t.error.visible,expression:"error.visible"}],staticClass:"text-danger mb-0"},[t._v("\n                "+t._s(t.error.message)+"\n            ")])])])])},Y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex justify-content-center align-items-center",staticStyle:{width:"100%",height:"550px"}},[a("div",{staticClass:"text-center"},[a("h1",[t._v("\n                            Add name to display graph!\n                        ")]),a("p",[t._v("\n                            Input is under!\n                        ")])])])}],H={comments:{Chart:k["Chart"]},data:function(){return{newName:"",nameIndex:0,visibleNames:[],graphVisible:!1,error:{visible:!1,message:""},chartOptions:{title:{text:""},plotOptions:{series:{label:{connectorAllowed:!1},pointStart:2e3}},yAxis:{title:{text:"Names given"}},xAxis:{title:{text:"Year"}},credits:{enabled:!1},noData:{},series:[]}}},created:function(){},methods:{addNameToGraph:function(){this.getData(this.newName.charAt(0).toUpperCase()+this.newName.slice(1)),this.newName=""},getData:function(t){var e=this;fetch("https://mvtthew.pl:11290/name/"+t,{method:"GET"}).then(function(t){return t.json()}).then(function(a){if(e.showError(0),"string"!==typeof a){e.graphVisible||(e.graphVisible=!0),e.chartOptions.series.push({name:t,data:[],cursor:"pointer",marker:{symbol:"circle"}});var s=y()(a.years);s.forEach(function(t){e.chartOptions.series[e.nameIndex].data.push(w()(t.uses))}),e.visibleNames.push({name:t,index:e.nameIndex}),e.nameIndex++}else e.error.message=a,e.showError(1)})},showError:function(t){var e=this;1===t?(this.error.visible=!0,setTimeout(function(){e.showError(0)},4e3)):0===t&&(this.error.visible=!1)}}},J=H,K=Object(m["a"])(J,W,Y,!1,null,null,null),q=K.exports;s["a"].use(f["a"]);var B=new f["a"]({mode:"history",base:"/cmnip-web/",routes:[{path:"/",name:"home",component:P},{path:"/about",name:"about",component:A},{path:"/mostused",name:"most used",component:G},{path:"/graph",name:"your name on graph",component:q}]}),F=a("2f62");s["a"].use(F["a"]);var L=new F["a"].Store({state:{},mutations:{},actions:{}}),Q=a("9f7b"),R=a.n(Q),X=a("f5af"),Z=a.n(X);a("f9e3"),a("2dd8"),a("3357"),a("e829"),a("77ed");Z.a.init(),new s["a"]({router:B,store:L,render:function(t){return t(b)}}).$mount("#app"),s["a"].config.productionTip=!1,s["a"].use(N.a),s["a"].use(R.a)},"5c0b":function(t,e,a){"use strict";var s=a("5e27"),n=a.n(s);n.a},"5e27":function(t,e,a){}});
//# sourceMappingURL=app.4d5386c1.js.map