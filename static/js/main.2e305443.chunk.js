(this["webpackJsonpapp-manejando.listass"]=this["webpackJsonpapp-manejando.listass"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(2),l=a.n(r),c=(a(12),a(3)),o=a(4),i=a(6),u=a(5);a(13);var m=function(){return s.a.createElement("div",null,s.a.createElement("h1",{className:"title"}," Escribir Notas ",s.a.createElement("span",{"aria-label":"emoji",role:"img"},"\ud83d\udd25")," "))};var h=function(e){return s.a.createElement("div",{className:"task-container"},s.a.createElement("h3",{className:"task"},e.valuee),s.a.createElement("div",{className:"button-container"},s.a.createElement("button",{onClick:function(){e.handleDelete(e.id)},className:"delete-button"},"X")))},d=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).handleTaskChange=function(t){e.setState({newTask:t.target.value})},e.handleSubmit=function(t){t.preventDefault();var a=e.state.tasks;a.push(e.state.newTask),e.setState({newTask:"",tasks:a})},e.handleDelete=function(t){var a=e.state.tasks;a.splice(t,1),e.setState({tasks:a})},e.state={newTask:"",tasks:[]},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"container"},s.a.createElement(m,null),s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("input",{type:"text",onChange:this.handleTaskChange,value:this.state.newTask,className:"new-task"})),this.state.tasks.map((function(t,a){return s.a.createElement(h,{key:a,valuee:t,handleDelete:e.handleDelete})})))}}]),a}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.2e305443.chunk.js.map