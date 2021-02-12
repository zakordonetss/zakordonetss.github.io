(function(t){function e(e){for(var n,a,i=e[0],d=e[1],l=e[2],c=0,p=[];c<i.length;c++)a=i[c],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(t[n]=d[n]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],n=!0,i=1;i<o.length;i++){var d=o[i];0!==r[d]&&(n=!1)}n&&(s.splice(e--,1),t=a(a.s=o[0]))}return t}var n={},r={app:0},s=[];function a(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=n,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/Todo-list/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=d;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";o("85ec")},3438:function(t,e,o){},4133:function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=o("1dce"),s=o.n(r),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{staticClass:"container"},[o("router-view")],1)])},i=[],d={name:"App"},l=d,u=(o("034f"),o("2877")),c=Object(u["a"])(l,a,i,!1,null,null,null),p=c.exports,m=o("8c4f"),f=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t._m(0),o("h3",[t._v("Login form")]),o("p",[t._v("You're not registered. Please enter your details! ")]),o("form",{on:{submit:function(e){return e.preventDefault(),t.logIn(e)}}},[o("div",{staticClass:"wrapper"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],class:{invalid:t.$v.username.$dirty&&!t.$v.username.required},attrs:{type:"Text",placeholder:"Username..."},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),t.$v.username.$dirty&&!t.$v.username.required?o("small",{staticClass:"error-message"},[t._v("This field cannot be empty")]):t._e()]),o("div",{staticClass:"wrapper"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],class:{invalid:t.$v.password.$dirty&&!t.$v.password.required||t.$v.password.$dirty&&!t.$v.password.minLength},attrs:{type:"password",placeholder:"Password..."},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t.$v.password.$dirty&&!t.$v.password.required?o("small",{staticClass:"error-message"},[t._v("Please enter your password")]):t.$v.password.$dirty&&!t.$v.password.minLength?o("small",{staticClass:"error-message"},[t._v("Password must be more than 6 characters")]):t._e()]),o("br"),o("button",{staticClass:"btn btn-submit",attrs:{type:"submit"}},[t._v("Log In")])])])},v=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{staticClass:"bar"},[o("strong",{staticClass:"logo"},[t._v("Todo Application")])])}],g=o("b5ae"),h={data:function(){return{username:"",password:"",isValid:!1}},validations:{username:{required:g["required"]},password:{required:g["required"],minLength:Object(g["minLength"])(6)}},methods:{logIn:function(){this.$v.$invalid?this.$v.$touch():(localStorage.setItem("username",this.username),localStorage.setItem("loggedIn",!0),this.$router.push("/todo"))}},created:function(){localStorage.getItem("loggedIn")&&this.$router.push("/todo")}},x=h,b=(o("8380"),Object(u["a"])(x,f,v,!1,null,"0a566a2c",null)),T=b.exports,y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("header",{staticClass:"bar"},[o("strong",{staticClass:"logo"},[t._v("Todo Application")]),o("button",{staticClass:"btn-bar",on:{click:t.logOut}},[o("strong",[t._v("Log Out")])])]),o("h3",[t._v("User: "+t._s(t.username)+" ")]),o("CreateTodo",{on:{"add-todo":t.addTodo}}),o("h3",[t._v("Todos List")]),0==t.todos.length?o("h5",[t._v("There are no notes yet. Please add the first one!")]):t._e(),o("ul",t._l(t.todos,(function(e){return o("TodoItem",{key:e.id,attrs:{todo:e},on:{"remove-todo":t.removeTodo,"edit-todo":t.editTodo,"enter-todo":t.onEnter}})})),1)],1)},_=[],w=(o("c740"),o("a434"),o("498a"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("li",[o("div",{staticClass:"container"},[o("div",{staticClass:"text",class:{done:t.todo.completed}},[o("label",{staticClass:"checkbox-other",attrs:{for:"check"}},[o("input",{attrs:{id:"check",type:"checkbox"},on:{change:function(e){t.todo.completed=!t.todo.completed}}})]),t._v(" "+t._s(t.todo.text)+" ")]),o("div",{staticClass:"container-btn"},[o("button",{staticClass:"btn btn-edit",on:{click:function(e){return t.onEdit(t.todo.id,t.todo.text,t.todo.editToggle)}}},[t._v(t._s(t.textButton))]),o("button",{staticClass:"btn btn-delete",on:{click:function(e){return t.$emit("remove-todo",t.todo.id)}}},[t._v("Delete")])])]),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.actualText,expression:"actualText"}],staticClass:"hidden-textarea",class:{activeText:t.todo.editToggle},domProps:{value:t.actualText},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onEnter(t.todo.id)},input:function(e){e.target.composing||(t.actualText=e.target.value)}}})])])}),$=[],I={props:{todo:{type:Object,required:!0}},data:function(){return{actualText:"",textButton:"Edit"}},methods:{onEdit:function(t,e,o){o?(localStorage.setItem("editText",this.actualText),this.$emit("enter-todo",t,e),this.textButton="Edit"):(this.actualText=e,this.$emit("edit-todo",t,e),this.textButton="Post")},onEnter:function(t){localStorage.setItem("editText",this.actualText),this.$emit("enter-todo",t)}}},O=I,C=(o("a0a5"),Object(u["a"])(O,w,$,!1,null,"56ebd2b4",null)),S=C.exports,E=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("form",{on:{submit:function(e){return e.preventDefault(),t.onAdd(e)}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text",placeholder:"Your note..."},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),o("button",{staticClass:"btn"},[t._v("Add todo")])])},P=[],j={data:function(){return{text:""}},methods:{onAdd:function(){if(this.text.trim()){var t={id:Date.now(),text:this.text,completed:!1,editToggle:!1};this.$emit("add-todo",t),this.text=""}}}},k=j,L=(o("9e72"),Object(u["a"])(k,E,P,!1,null,"d7d06ddc",null)),q=L.exports,B={components:{TodoItem:S,CreateTodo:q},data:function(){return{todos:[],username:localStorage.getItem("username")}},methods:{removeTodo:function(t){var e=this.getIndexById(t);this.todos.splice(e,1),this.setLocalTodos()},addTodo:function(t){this.todos.push(t),this.setLocalTodos()},editTodo:function(t){var e=this.getIndexById(t);this.setEditToggle(e),localStorage.setItem("editText",this.todos[e].text)},onEnter:function(t){var e=this.getIndexById(t);if(!localStorage.getItem("editText").trim())return this.removeTodo(t),void this.setLocalTodos();this.todos[e].text=localStorage.getItem("editText"),localStorage.removeItem("editText"),this.setEditToggle(e),this.setLocalTodos()},logOut:function(){localStorage.removeItem("username"),localStorage.removeItem("loggedIn"),this.$router.push("/login")},setEditToggle:function(t){this.todos[t].editToggle=!this.todos[t].editToggle},getIndexById:function(t){return this.todos.findIndex((function(e){return e.id===t}))},setLocalTodos:function(){var t=JSON.stringify(this.todos);localStorage.setItem("todos",t)},getLocalTodos:function(){this.todos=JSON.parse(localStorage.getItem("todos"))}},created:function(){localStorage.getItem("loggedIn")||this.$router.push("/login"),localStorage.getItem("todos")&&this.getLocalTodos()}},A=B,N=(o("dec6"),Object(u["a"])(A,y,_,!1,null,"5120b1dd",null)),D=N.exports,J=new m["a"]({routes:[{path:"/",component:T},{path:"/login",component:T},{path:"/todo",component:D}]});n["a"].config.productionTip=!1,n["a"].use(m["a"]),n["a"].use(s.a),new n["a"]({render:function(t){return t(p)},router:J}).$mount("#app")},8380:function(t,e,o){"use strict";o("dd98")},"85ec":function(t,e,o){},"962f":function(t,e,o){},"9e72":function(t,e,o){"use strict";o("962f")},a0a5:function(t,e,o){"use strict";o("3438")},dd98:function(t,e,o){},dec6:function(t,e,o){"use strict";o("4133")}});
//# sourceMappingURL=app.b1249be2.js.map