(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{100:function(A,e,t){},111:function(A,e,t){"use strict";t.r(e);var n=t(0),c=t.n(n),a=t(34),o=t.n(a),i=(t(100),t(14)),s=(t(61),t(10)),r=t.p+"static/media/ProfilePicture.fd8a0961.png",m=t(1);var j=function(){var A=c.a.useState(!1),e=Object(s.a)(A,2),t=e[0],n=e[1];return c.a.useEffect((function(){n(!0)}),[]),Object(m.jsxs)("div",{className:"home",children:[Object(m.jsx)("h1",{children:"hello, world"}),Object(m.jsx)("h2",{children:"I'm Nick Shephard and I'm working with React"}),Object(m.jsx)("br",{}),Object(m.jsx)("div",{className:"fade-in-section ".concat(t?"is-visible":""),children:Object(m.jsx)("img",{src:r,alt:"Nick's Pic",width:"50%"})})]})},b=t(165),l=t(162),h=t(164);var d=function(A){var e=A.postInfo,t=e.title,n=e.link;return Object(m.jsx)("div",{className:"blog-post",children:Object(m.jsx)(l.a,{variant:"outlined",sx:{minWidth:275,gap:2,border:2},children:Object(m.jsxs)(h.a,{children:[Object(m.jsx)(b.a,{variant:"h5",component:"div",children:t}),Object(m.jsx)(b.a,{component:"a",href:n,sx:{mb:1.5},color:"text.secondary",children:"Check out this Blog Post!"})]})})})},u=t.p+"static/media/output-onlinegiftools.51f20adc.gif",f=t(166);var O=function(){var A=Object(n.useState)([]),e=Object(s.a)(A,2),t=e[0],c=e[1],a=Object(n.useState)(!1),o=Object(s.a)(a,2),i=o[0],r=o[1];Object(n.useEffect)((function(){fetch("https://one-shep-forward-hq.herokuapp.com/blog-posts").then((function(A){return A.json()})).then(c).catch((function(A){return console.warn("Issue with fetch occurred: ",A)}));var A=setTimeout((function(){r(!0)}),3e3);return function(){console.log("Running cleanup"),clearInterval(A)}}),[]);var j=t.map((function(A){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(f.a,{children:Object(m.jsx)(d,{postInfo:A},A.id)}),Object(m.jsx)("br",{})]})}));return i?Object(m.jsxs)("div",{className:"links",children:[Object(m.jsx)("h1",{children:"Blog Posts"}),j,Object(m.jsx)("a",{href:"https://www.linkedin.com/in/shephardn/",children:Object(m.jsx)("img",{src:"data:image/png;base64,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",alt:"Link to Nick's LinkedIn Page"})})]}):Object(m.jsx)("img",{src:u,alt:"Compass loading animation",width:"150"})},v=t(38),x=t(16);var p=function(A){var e=A.guestInfo,t=e.name,n=e.message;return Object(m.jsx)("div",{className:"guest-entry",children:Object(m.jsx)(l.a,{sx:{minWidth:1,border:2},children:Object(m.jsxs)(h.a,{children:[Object(m.jsx)(b.a,{variant:"h5",component:"div",children:n}),Object(m.jsx)(b.a,{sx:{mb:1.5},color:"text.secondary",children:t})]})})})},g=t(156),Q=t(161),k=t(81),I=t.n(k);var B=function(){var A=Object(n.useState)([]),e=Object(s.a)(A,2),t=e[0],c=e[1],a=Object(n.useState)(!1),o=Object(s.a)(a,2),i=o[0],r=o[1],j=Object(n.useState)({name:"",message:""}),b=Object(s.a)(j,2),l=b[0],h=b[1],d="https://one-shep-forward-hq.herokuapp.com/logs";Object(n.useEffect)((function(){fetch(d).then((function(A){return A.json()})).then(c).catch((function(A){return console.warn("Issue with fetch occurred: ",A)}));var A=setTimeout((function(){r(!0)}),3e3);return function(){console.log("Running cleanup"),clearInterval(A)}}),[]);var O=t.map((function(A){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(p,{guestInfo:A},A.id),Object(m.jsx)("br",{})]})})),k=function(A){var e=[A].concat(Object(x.a)(t));c(e)},B=function(A){"new-entry-name"===A.target.id?(h(Object(v.a)(Object(v.a)({},l),{},{name:A.target.value})),console.log(l)):(h(Object(v.a)(Object(v.a)({},l),{},{message:A.target.value})),console.log(l))};return i?Object(m.jsxs)("div",{className:"guest-book",children:[Object(m.jsx)("h1",{children:"Guest Book"}),Object(m.jsx)(f.a,{children:O}),Object(m.jsx)("div",{className:"add-entry",children:Object(m.jsxs)("form",{onSubmit:function(A){A.preventDefault(),fetch(d,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}).then((function(A){return A.json()})).then((function(A){k(A),console.log("Submitting: ",A),h({name:"",message:""})})).catch((function(A){return console.log("Error submit new project: ",A)}))},className:"form",children:[Object(m.jsx)("h2",{children:"Sign the Guest Book!"}),Object(m.jsx)(g.a,{id:"new-entry-message",label:"Message",variant:"outlined",onChange:B,value:l.message,sx:{backgroundColor:"#ffffff"}})," "," ",Object(m.jsx)(g.a,{id:"new-entry-name",label:"Name",variant:"filled",onChange:B,value:l.name,sx:{backgroundColor:"#ffffff"}}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)(Q.a,{startIcon:Object(m.jsx)(I.a,{}),variant:"contained",style:{fontSize:"24"},color:"primary",size:"large",type:"submit",children:"Add"}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{})]})})]}):Object(m.jsx)("img",{src:u,alt:"Compass loading animation",width:"150"})},R=t.p+"static/media/nomatch.387d78de.jpg";var S=function(){return Object(m.jsxs)("div",{className:"no-match",children:[Object(m.jsx)("br",{}),Object(m.jsx)("img",{src:R,width:"75%",alt:"Error 404 Doge"})]})},y=t(40),L=t(168),P=t(158),C=t(167);function N(A){var e=Object(i.f)();return Object(m.jsx)(C.a,Object(v.a)({component:y.b,onClick:function(t){t.preventDefault(),e(A.to)},sx:{fontSize:"100"},variant:"outlined"},A))}var J=function(A){A.name;var e=c.a.useState(0),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(L.a,{children:Object(m.jsxs)(P.a,{centered:!0,value:n,onChange:function(A,e){a(e)},sx:{color:"#fff"},children:[Object(m.jsx)(N,{to:"/",label:"Home",id:"hometab"}),Object(m.jsx)(N,{to:"/guest-book",label:"Guest Book",id:"guesttab"}),Object(m.jsx)(N,{to:"/links",label:"Links",id:"linktab"}),Object(m.jsx)(N,{to:"/error404",label:"Don't Click!",id:"badtab"})]})})})},T=Object(m.jsxs)(i.c,{children:[Object(m.jsx)(i.a,{path:"/",element:Object(m.jsx)(j,{})}),Object(m.jsx)(i.a,{path:"/links",element:Object(m.jsx)(O,{})}),Object(m.jsx)(i.a,{path:"/guest-book",element:Object(m.jsx)(B,{})}),Object(m.jsx)(i.a,{path:"*",element:Object(m.jsx)(S,{})})]});var w=function(){return Object(m.jsxs)("div",{className:"App",style:{background:"rgba(0,0,0,0)"},children:[Object(m.jsx)(J,{name:"Nick Shephard"}),T]})},E=function(A){A&&A instanceof Function&&t.e(3).then(t.bind(null,169)).then((function(e){var t=e.getCLS,n=e.getFID,c=e.getFCP,a=e.getLCP,o=e.getTTFB;t(A),n(A),c(A),a(A),o(A)}))},F=t(160),W=t(82),X=Object(W.a)({palette:{type:"light",primary:{main:"#b3aaa2",light:"#b29e84",dark:"#253439"},secondary:{main:"#f50057"},background:{default:"rgba(0,0,0,0)",paper:"#b29e84"},text:{primary:"#fafafa",secondary:"rgba(0,0,0,0.9)"}},typography:{fontFamily:["Montserrat","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),fontSize:18}});o.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(F.a,{theme:X,children:Object(m.jsx)(y.a,{children:Object(m.jsx)(w,{})})})}),document.getElementById("root")),E()},61:function(A,e,t){}},[[111,1,2]]]);
//# sourceMappingURL=main.c3a1ce28.chunk.js.map