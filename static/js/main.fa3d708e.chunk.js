(this["webpackJsonpto-do"]=this["webpackJsonpto-do"]||[]).push([[0],[,,,,,,,,,,,,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),i=n(9),r=n.n(i),s=(n(15),n(10)),o=n(8),l=n(3),d=n.n(l),u=n(7),j=n(5),f=(n(17),n(18),n(19),n(0)),b=function(t){var e=t.children,n=t.onClick;return Object(f.jsx)("button",{onClick:n,className:"button",children:e})},k=function(t){var e=t.handleTaskAddition,n=Object(a.useState)(""),c=Object(j.a)(n,2),i=c[0],r=c[1];return Object(f.jsxs)("div",{className:"add-task-container",children:[Object(f.jsx)("input",{onChange:function(t){r(t.target.value)},value:i,className:"add-task-input",type:"text"}),Object(f.jsx)("div",{className:"add-task-button-container",children:Object(f.jsx)(b,{onClick:function(){e(i),r("")},children:"Adicionar"})})]})},h=(n(21),n.p+"static/media/bx-x.d6768e9f.svg"),O=function(t){var e=t.task,n=t.handleTaskClick,a=t.handleDeleteTask;return Object(f.jsxs)("div",{className:"task-container",style:e.completed?{borderLeft:"6px solid chartreuse"}:{},children:[Object(f.jsx)("div",{className:"task-title",onClick:function(){return n(e.id)},children:e.title}),Object(f.jsx)("img",{onClick:function(){return a(e.id)},className:"Xbutton",src:h,alt:"",color:"#7FFF00"})]})},m=function(t){var e=t.tasks,n=t.handleTaskClick,a=t.handleDeleteTask;return Object(f.jsx)(f.Fragment,{children:null===e||void 0===e?void 0:e.map((function(t){return Object(f.jsx)(O,{task:t,handleTaskClick:n,handleDeleteTask:a},t.id)}))})},x=function(){var t=Object(a.useState)(),e=Object(j.a)(t,2),n=e[0],c=e[1];Object(a.useEffect)((function(){Object(u.a)(d.a.mark((function t(){var e;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,localStorage.getItem("MyTasks");case 2:(e=t.sent)&&c(JSON.parse(e));case 4:case"end":return t.stop()}}),t)})))()}),[]),Object(a.useEffect)((function(){Object(u.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return localStorage.clear(),t.next=3,localStorage.setItem("MyTasks",JSON.stringify(n));case 3:case"end":return t.stop()}}),t)})))()}),[n]);return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)(k,{handleTaskAddition:function(t){var e=n.findIndex((function(e){return e.title===t}));if(t&&-1===e)if(n){var a=[].concat(Object(s.a)(n),[{id:Math.random(10),title:t,completed:!1}]);c(a)}else{var i=[{id:Math.random(10),title:t,completed:!1}];c(i)}}}),Object(f.jsx)(m,{tasks:n,handleTaskClick:function(t){var e=n.map((function(e){return e.id===t?Object(o.a)(Object(o.a)({},e),{},{completed:!e.completed}):e}));c(e)},handleDeleteTask:function(t){var e=n.filter((function(e){return e.id!==t}));c(e)}})]})})};r.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(x,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.fa3d708e.chunk.js.map