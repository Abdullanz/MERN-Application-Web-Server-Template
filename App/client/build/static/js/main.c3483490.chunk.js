(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{36:function(t,e,n){},37:function(t,e,n){},52:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),s=n(18),a=n.n(s),o=(n(36),n(37),n(30)),i=n(4),j=(n(38),n(19)),u=n.n(j),b=n(25),h=n(14),l=n(15),p=n(17),d=n(16),O=n(55),x=n(56),f=n(2),v=function(){return Object(f.jsx)("div",{children:Object(f.jsxs)(O.a,{bg:"dark",expand:"lg",variant:"dark",children:[Object(f.jsx)(O.a.Brand,{href:"/",children:"Sample Project"}),Object(f.jsxs)(x.a,{className:"mr-auto",children:[Object(f.jsx)(x.a.Link,{href:"/products",children:"Products"}),Object(f.jsx)(x.a.Link,{href:"/about",children:"About"})]})]})})},m=function(){return Object(f.jsx)("div",{children:Object(f.jsx)("footer",{className:"page-footer font-small mdb-color pt-3",children:Object(f.jsx)("p",{children:"Abdullah Najjar Confidential 2021"})})})},g=function(t){Object(p.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(h.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={response:"",post:"",responseToPost:""},t.callApi=Object(b.a)(u.a.mark((function t(){var e,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/api/hello");case 2:return e=t.sent,t.next=5,e.json();case 5:if(n=t.sent,200===e.status){t.next=8;break}throw Error(n.message);case 8:return t.abrupt("return",n);case 9:case"end":return t.stop()}}),t)}))),t.handleSubmit=function(){var e=Object(b.a)(u.a.mark((function e(n){var r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,fetch("/IndexAPI",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({post:t.state.post})});case 3:return r=e.sent,e.next=6,r.text();case 6:c=e.sent,t.setState({responseToPost:c});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.callApi().then((function(e){return t.setState({response:e.express})})).catch((function(t){return console.log(t)}))}},{key:"render",value:function(){var t=this;return Object(f.jsxs)("div",{children:[Object(f.jsx)(v,{}),Object(f.jsx)("p",{children:this.state.response}),Object(f.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(f.jsx)("p",{children:Object(f.jsx)("strong",{children:"Post to Server:"})}),Object(f.jsx)("input",{type:"text",value:this.state.post,onChange:function(e){return t.setState({post:e.target.value})}}),Object(f.jsx)("button",{type:"submit",children:"Submit"})]}),Object(f.jsx)("p",{children:this.state.responseToPost}),Object(f.jsx)(m,{})]})}}]),n}(r.Component),y=function(t){Object(p.a)(n,t);var e=Object(d.a)(n);function n(){return Object(h.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(v,{}),Object(f.jsx)("h2",{children:"Hi, I am your product a Car!"}),Object(f.jsx)(m,{})]})}}]),n}(c.a.Component),k=function(t){Object(p.a)(n,t);var e=Object(d.a)(n);function n(){return Object(h.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(v,{}),Object(f.jsx)("h2",{children:"Welcome to our About page!"}),Object(f.jsx)(m,{})]})}}]),n}(c.a.Component),S=function(){return Object(f.jsx)(o.a,{children:Object(f.jsx)("div",{children:Object(f.jsxs)(i.c,{children:[Object(f.jsx)(i.a,{path:"/products",component:y}),Object(f.jsx)(i.a,{path:"/about",component:k}),Object(f.jsx)(i.a,{path:"/",component:g})]})})})},C=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,57)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,s=e.getLCP,a=e.getTTFB;n(t),r(t),c(t),s(t),a(t)}))};a.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(S,{})}),document.getElementById("root")),C()}},[[52,1,2]]]);
//# sourceMappingURL=main.c3483490.chunk.js.map