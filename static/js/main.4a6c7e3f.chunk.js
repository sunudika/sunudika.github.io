(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(46)},25:function(e,t,a){},27:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(13),l=a.n(s),m=(a(25),a(3)),o=a(14),c=a(15),i=a(16),u=a(18),d=a(17),b=a(19),f=(a(27),a(2)),h=a.n(f),p=function(e){return r.a.createElement("div",{className:"col-md-6",key:e.member.id},r.a.createElement("div",{className:"card",style:{margin:10}},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},e.member.id),r.a.createElement("h5",{className:"card-title"},e.member.first_name),r.a.createElement("h5",{className:"card-title"},e.member.last_name),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.editButtonHandler(e.member)}},"Edit"),r.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e.deleteButtonHandler(e.member.id)}},"Delete"))))},E=function(e){return e.members.map(function(t){return r.a.createElement(p,{key:t.id,member:t,editButtonHandler:function(t){return e.editButtonHandler(t)},deleteButtonHandler:function(t){return e.deleteButtonHandler(t)}})})},g=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Form ",e.formStatus),r.a.createElement("form",{action:"",onSubmit:e.onSubmitHandler},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:""},"First Name"),r.a.createElement("input",{type:"text",className:"form-control",name:"first_name",value:e.first_name,onChange:e.changeInputHandler})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:""},"Last Name"),r.a.createElement("input",{type:"text",className:"form-control",name:"last_name",value:e.last_name,onChange:e.changeInputHandler})),r.a.createElement("button",{type:"submit",className:"btn btn-primary",disabled:e.buttonDisabled},"Submit")))},v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).getUsers=function(){h.a.get("https://reqres.in/api/users?page=1").then(function(e){a.setState({members:e.data.data})}).catch(function(e){return console.log(e)})},a.changeInputHandler=function(e){a.setState(Object(o.a)({},e.target.name,e.target.value))},a.onSubmitHandler=function(e){console.log("form telah disubmit"),e.preventDefault(),a.setState({buttonDisabled:!0});var t={first_name:a.state.first_name,last_name:a.state.last_name},n="";"create"===a.state.formStatus?(n="https://reqres.in/api/users",a.addMember(n,t)):(n="https://reqres.in/api/users/".concat(a.state.memberIdSelected),a.editMember(n,t))},a.addMember=function(e,t){h.a.post(e,t).then(function(e){console.log(e);var t=Object(m.a)(a.state.members);t.push(e.data),a.setState({members:t,buttonDisabled:!1,first_name:"",last_name:""})}).catch(function(e){return console.log(e)})},a.editMember=function(e,t){h.a.put(e,t).then(function(e){console.log(e);var t=Object(m.a)(a.state.members),n=t.findIndex(function(e){return e.id===a.state.memberIdSelected});t[n].first_name=e.data.first_name,t[n].last_name=e.data.last_name,a.setState({members:t,buttonDisabled:!1,first_name:"",last_name:"",formStatus:"create"})}).catch(function(e){return console.log(e)})},a.editButtonHandler=function(e){a.setState({first_name:e.first_name,last_name:e.last_name,formStatus:"edit",memberIdSelected:e.id})},a.deleteButtonHandler=function(e){var t="https://reqres.in/api/users/".concat(e);h.a.delete(t).then(function(t){if(204===t.status){var n=Object(m.a)(a.state.members),r=n.findIndex(function(t){return t.id===e});n.splice(r,1),a.setState({members:n})}}).catch(function(e){return console.log(e)})},a.state={members:[],first_name:"",last_name:"",buttonDisabled:!1,formStatus:"create",memberIdSelected:null},a}return Object(b.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getUsers()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Codepolitan DevSchool"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6",style:{border:"1px solid black"}},r.a.createElement("h2",null,"Member"),r.a.createElement("div",{className:"row"},r.a.createElement(E,{members:this.state.members,editButtonHandler:function(t){return e.editButtonHandler(t)},deleteButtonHandler:function(t){return e.deleteButtonHandler(t)}}))),r.a.createElement("div",{className:"col-md-6",style:{border:"1px solid black"}},r.a.createElement(g,{formStatus:this.state.formStatus,onSubmitHandler:this.onSubmitHandler,changeInputHandler:this.changeInputHandler,first_name:this.state.first_name,last_name:this.state.last_name,buttonDisabled:this.state.buttonDisabled}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,2,1]]]);
//# sourceMappingURL=main.4a6c7e3f.chunk.js.map