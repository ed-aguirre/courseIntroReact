(this["webpackJsonpcurso-intro-react"]=this["webpackJsonpcurso-intro-react"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),c=n(4),a=n.n(c),l=n(6),i=n(2);var s=n(0),u=r.a.createContext();function d(e){var t=function(e,t){var n=r.a.useState(!1),o=Object(i.a)(n,2),c=o[0],a=o[1],l=r.a.useState(!0),s=Object(i.a)(l,2),u=s[0],d=s[1],j=r.a.useState(t),f=Object(i.a)(j,2),b=f[0],O=f[1];return r.a.useEffect((function(){setTimeout((function(){try{var n,o=localStorage.getItem(e);o?n=JSON.parse(o):(localStorage.setItem(e,JSON.stringify(t)),n=t),O(n),d(!1)}catch(c){a(c)}}),3e3)})),{item:b,saveItem:function(t){try{var n=JSON.stringify(t);localStorage.setItem(e,n),O(t)}catch(c){a(c)}},loading:u,error:c}}("PAN_V2",[]),n=t.item,o=t.saveItem,c=t.loading,a=t.error,d=r.a.useState(""),j=Object(i.a)(d,2),f=j[0],b=j[1],O=r.a.useState(!1),p=Object(i.a)(O,2),m=p[0],x=p[1],h=n.filter((function(e){return!!e.completed})).length,v=n.length,g=[];g=!f.length>=1?n:n.filter((function(e){var t=e.text.toLowerCase(),n=f.toLowerCase();return t.includes(n)}));return Object(s.jsx)(u.Provider,{value:{loading:c,error:a,completedTodos:h,totalTodos:v,searchValue:f,setSearchValue:b,searchedTodos:g,completeTodo:function(e){var t=n.findIndex((function(t){return t.text===e})),r=Object(l.a)(n);r[t].completed=!0,o(r)},addTodo:function(e){var t=Object(l.a)(n);t.push({completed:!1,text:e}),o(t)},deleteTodo:function(e){var t=n.findIndex((function(t){return t.text===e})),r=Object(l.a)(n);r.splice(t,1),o(r)},openModal:m,setOpenModal:x},children:e.children})}n(13);function j(){var e=r.a.useContext(u),t=e.totalTodos,n=e.completedTodos;return Object(s.jsxs)("h2",{className:"TodoCounter",children:["Has completado ",n," de ",t," TODOs"]})}n(14);function f(){var e=r.a.useContext(u),t=e.searchValue,n=e.setSearchValue;return Object(s.jsx)("input",{className:"TodoSearch",placeholder:"Aguacate",value:t,onChange:function(e){console.log(e.target.value),n(e.target.value)}})}n(15);function b(e){return Object(s.jsx)("section",{children:Object(s.jsx)("ul",{children:e.children})})}n(16);function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=o.createElement("path",{d:"M 10 2 L 9 3 L 3 3 L 3 5 L 4.109375 5 L 5.8925781 20.255859 L 5.8925781 20.263672 C 6.023602 21.250335 6.8803207 22 7.875 22 L 16.123047 22 C 17.117726 22 17.974445 21.250322 18.105469 20.263672 L 18.107422 20.255859 L 19.890625 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 6.125 5 L 17.875 5 L 16.123047 20 L 7.875 20 L 6.125 5 z"});function x(e,t){var n=e.title,r=e.titleId,c=p(e,["title","titleId"]);return o.createElement("svg",O({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24px",height:"24px",ref:t,"aria-labelledby":r},c),n?o.createElement("title",{id:r},n):null,m)}var h=o.forwardRef(x);n.p;function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var y=o.createElement("path",{d:"M 20.292969 5.2929688 L 9 16.585938 L 4.7070312 12.292969 L 3.2929688 13.707031 L 9 19.414062 L 21.707031 6.7070312 L 20.292969 5.2929688 z"});function T(e,t){var n=e.title,r=e.titleId,c=g(e,["title","titleId"]);return o.createElement("svg",v({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24px",height:"24px",ref:t,"aria-labelledby":r},c),n?o.createElement("title",{id:r},n):null,y)}var L=o.forwardRef(T);n.p;function C(e){var t=e.type,n=e.color,o=void 0===n?"gray":n,r=e.onClick,c={check:function(e){return Object(s.jsx)(L,{className:"Icon-svg Icon-svg--check",fill:e})},delete:function(e){return Object(s.jsx)(h,{className:"Icon-svg Icon-svg--delete",fill:e})}};return Object(s.jsx)("span",{className:"Icon-container Icon-container--".concat(t),onClick:r,children:c[t](o)})}function I(e){var t=e.completed,n=e.onComplete;return Object(s.jsx)(C,{type:"check",color:t?"#4caf50":"gray",onClick:n})}function w(e){var t=e.onDelete;return Object(s.jsx)(C,{type:"delete",onClick:t})}n(17);function N(e){return Object(s.jsxs)("li",{className:"TodoItem",children:[Object(s.jsx)(I,{completed:e.completed,onComplete:e.onComplete}),Object(s.jsx)("p",{className:"TodoItem-p ".concat(e.completed&&"TodoItem-p--complete"),children:e.text}),Object(s.jsx)(w,{onDelete:e.onDelete})]})}n(18);function S(e){return Object(s.jsx)("button",{className:"CreateTodoButton",onClick:function(t){e.setOpenModal((function(e){return!e}))},children:"+"})}n(19);function k(e){var t=e.children;return a.a.createPortal(Object(s.jsx)("div",{className:"ModalBackground",children:t}),document.getElementById("modal"))}n(20);function E(){var e=r.a.useState(),t=Object(i.a)(e,2),n=t[0],o=t[1],c=r.a.useContext(u),a=c.addTodo,l=c.setOpenModal;return Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a(n),l(!1)},children:[Object(s.jsx)("label",{children:" Escribe el nombre del TODO "}),Object(s.jsx)("textarea",{value:n,onChange:function(e){o(e.target.value)},placeholder:"Ingresa el nombre del TODO"}),Object(s.jsxs)("div",{className:"TodoForm-buttonContainer",children:[Object(s.jsx)("button",{className:"TodoForm-button TodoForm-button-cancel",type:"button",onClick:function(){l(!1)},children:"Cancel"}),Object(s.jsx)("button",{className:"TodoForm-button TodoForm-button-add",type:"submit",children:"Add"})]})]})}function M(e){var t=e.error;return Object(s.jsxs)("p",{children:[" ",t," "]})}n(21);function D(){return Object(s.jsx)("div",{className:"LoadingTodo-container",children:Object(s.jsxs)("span",{className:"LoadingTodo-completeIcon",children:[Object(s.jsx)("p",{className:"LoadingTodo-text",children:" Cargando, espera un momento. "}),Object(s.jsx)("span",{className:"LoadingTodo-deleteIcon"})]})})}function P(){return Object(s.jsx)("p",{children:"Crea tu primer TODO."})}function B(){var e=r.a.useContext(u),t=e.error,n=e.loading,o=e.completeTodo,c=e.searchedTodos,a=e.deleteTodo,l=e.openModal,i=e.setOpenModal;return Object(s.jsxs)(r.a.Fragment,{children:[Object(s.jsx)(j,{}),Object(s.jsx)(f,{}),Object(s.jsxs)(b,{children:[t&&Object(s.jsx)(M,{error:t}),n&&Object(s.jsx)(D,{}),!n&&!c.length&&Object(s.jsx)(P,{}),c.map((function(e){return Object(s.jsx)(N,{text:e.text,completed:e.completed,onComplete:function(){return o(e.text)},onDelete:function(){return a(e.text)}},e.text)}))]}),!!l&&Object(s.jsx)(k,{children:Object(s.jsx)(E,{})}),Object(s.jsx)(S,{setOpenModal:i})]})}var F=function(){return Object(s.jsx)(d,{children:Object(s.jsx)(B,{})})};n(22);a.a.render(Object(s.jsx)(F,{}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.5b11b120.chunk.js.map