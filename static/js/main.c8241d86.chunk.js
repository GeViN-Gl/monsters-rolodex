(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),c=n(4),a=n.n(c),o=(n(14),n(3)),i=n.n(o),u=n(5),h=n(6),l=n(7),d=n(9),j=n(8),f=(n(16),n(0)),m=function(e){return Object(f.jsxs)("div",{className:"card-container",children:[Object(f.jsx)("img",{src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180"),alt:"monster"}),Object(f.jsx)("h2",{children:e.monster.name}),Object(f.jsx)("p",{children:e.monster.email})]})},p=(n(18),function(e){return Object(f.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(f.jsx)(m,{monster:e},e.id)}))})}),b=(n(19),function(e){var t=e.placeholder,n=e.handleChange;return Object(f.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})}),x=(n(20),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={monsters:[],searchField:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=function(){var t=Object(u.a)(i.a.mark((function t(n){var r,s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(n);case 3:if((r=t.sent).ok){t.next=6;break}return t.abrupt("return",new Error("fetch fail ",r.status));case 6:return t.next=8,r.json();case 8:s=t.sent,e.setState({monsters:s}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.error("Fecth fail: ",t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}();t("https://jsonplaceholder.typicode.com/users")}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("h1",{className:"header",children:"Monster Rolodex"}),Object(f.jsx)(b,{placeholder:"search monsters",handleChange:this.handleChange}),Object(f.jsx)(p,{monsters:r})]})}}]),n}(r.Component)),v=x,O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),s(e),c(e),a(e)}))};a.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(v,{})}),document.getElementById("root")),O()}],[[21,1,2]]]);
//# sourceMappingURL=main.c8241d86.chunk.js.map