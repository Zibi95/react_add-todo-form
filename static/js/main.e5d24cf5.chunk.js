(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(3),s=a(1),c=a(9),l=a(6),o=a(2),d=(a(14),a(0)),u=function(e){var t=e.user;return Object(d.jsx)("a",{className:"UserInfo",href:"mailto:".concat(t.email),children:t.name})},m=function(e){var t=e.todo;return Object(d.jsxs)("article",{className:t.completed?"TodoInfo TodoInfo--completed":"TodoInfo","data-id":t.id,children:[Object(d.jsx)("h2",{className:"TodoInfo__title",children:t.title}),t.user&&Object(d.jsx)(u,{user:t.user})]})},j=function(e){var t=e.todos;return Object(d.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(d.jsx)(m,{todo:e},e.id)}))})},b=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],h=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}],O=function(e){var t;return null!==(t=b.find((function(t){return t.id===e})))&&void 0!==t?t:null},f={title:"",selectedUser:0},p={title:!1,selectedUser:!1},x=function(){var e=Object(o.useState)(f),t=Object(l.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(p),u=Object(l.a)(i,2),m=u[0],x=u[1],v=Object(o.useState)(h.map((function(e){return Object(s.a)(Object(s.a)({},e),{},{user:O(e.userId)})}))),y=Object(l.a)(v,2),S=y[0],I=y[1],N=a.title,C=a.selectedUser,T=m.title,_=m.selectedUser,g=function(e){var t=e.target,a=t.name,i=t.value;("title"!==a||/^[a-zA-Z\u0430-\u044f\u0410-\u042f\u0451\u0401\d\s]*$/.test(i))&&(x((function(e){return Object(s.a)(Object(s.a)({},e),{},Object(r.a)({},a,!!e[a]&&!i))})),n((function(e){return Object(s.a)(Object(s.a)({},e),{},Object(r.a)({},a,"title"===a?i:+i))})))};return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Add todo form"}),Object(d.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){if(e.preventDefault(),N&&C){var t={id:h.reduce((function(e,t){return Math.max(e,t.id)}),0)+1,title:N,completed:!1,userId:C,user:O(C)};I((function(e){return[].concat(Object(c.a)(e),[t])})),n(f)}else x({title:!N,selectedUser:!C})},children:[Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("label",{htmlFor:"title",children:"Title:"})," ",Object(d.jsx)("input",{type:"text","data-cy":"titleInput",placeholder:"Title",value:N,id:"title",name:"title",onChange:g})," ",T&&Object(d.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("label",{htmlFor:"user",children:"User:"})," ",Object(d.jsxs)("select",{"data-cy":"userSelect",id:"user",name:"selectedUser",value:C,onChange:g,children:[Object(d.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),b.map((function(e){return Object(d.jsx)("option",{value:e.id,children:e.name},e.id)}))]})," ",_&&Object(d.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(d.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(d.jsx)(j,{todos:S})]})};i.a.render(Object(d.jsx)(x,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.e5d24cf5.chunk.js.map