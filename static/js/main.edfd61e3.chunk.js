(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,a){e.exports=a(55)},42:function(e,t,a){},44:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){},51:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(14),r=a(27),c=a(0),o=a.n(c),i=a(24),s=a.n(i),l=a(4),m=a(6),u=(a(38),a(40),a(42),a(44),function(e){var t=e.userList,a=e.onClick;return o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-9 col-md-7 col-lg-5 mx-auto"},o.a.createElement("div",{className:"card card-signin my-5"},o.a.createElement("div",{className:"card-title text-center"},"Click on the User to Login"),o.a.createElement("div",{className:"card-body"},o.a.createElement("table",{className:"table-users table",border:"0"},o.a.createElement("tbody",null,t.map(function(e){return o.a.createElement("tr",{key:e.id,onClick:function(){return a(e)}},o.a.createElement("td",{width:"10",align:"center"},o.a.createElement("i",{className:"fa fa-2x fa-user fw"})),o.a.createElement("td",null,e.userName))})))))))}),d=1,f=a(59),p=Object(f.a)(Object(l.b)(function(e){return{userList:e.user.userList}},function(e,t){return{onClick:function(a){e(function(e){return{type:"LOGIN",payload:e}}(a)),localStorage.setItem("user",JSON.stringify(a)),t.history.push("/")}}})(u)),v=a(11),g=a(12),h=a(15),E=a(13),b=a(16),N=a(9),y=(a(47),function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(h.a)(this,Object(E.a)(t).call(this,e))).moveToPage=a.moveToPage.bind(Object(N.a)(Object(N.a)(a))),a}return Object(b.a)(t,e),Object(g.a)(t,[{key:"moveToPage",value:function(e){"/login"!==e?this.props.history.push(e):window.location.href=e}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-12"},o.a.createElement("nav",null,o.a.createElement("div",{className:"nav nav-tabs nav-fill",id:"nav-tab",role:"tablist"},o.a.createElement("button",{className:"nav-item nav-link",id:"nav-thread-tab",onClick:function(){return e.moveToPage("/")}},"Threads"),o.a.createElement("button",{className:"nav-item nav-link",id:"nav-friend-tab",onClick:function(){return e.moveToPage("/friend")}},"Friends"),o.a.createElement("button",{className:"nav-item nav-link",id:"nav-logout-tab",onClick:function(){return e.moveToPage("/login")}},"Logout")))))}}]),t}(c.Component)),O=(a(49),function(e){e.id;var t=e.userName,a=e.avatar,n=e.mutual,r=e.address,c=e.onClick;return o.a.createElement("div",{className:"media",onClick:c},o.a.createElement("img",{className:"d-flex align-self-start",src:a,alt:"avartar"}),o.a.createElement("div",{className:"media-body pl-3"},o.a.createElement("div",{className:"name"},t),o.a.createElement("div",{className:"mutual"},o.a.createElement("span",null,o.a.createElement("i",{className:"fa fa-user"}),n," mutual friends")),o.a.createElement("div",{className:"address"},r)))}),j=function(e){var t=e.friendList,a=e.moveToChat,n=e.history;return o.a.createElement("div",null,o.a.createElement(y,{history:n}),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12 listing-block"},t.map(function(e){return o.a.createElement(O,Object.assign({key:e.id},e,{onClick:function(){return a(e)}}))}))))},w=Object(f.a)(Object(l.b)(function(e){var t=Object.assign({},e.user).userList,a=e.login,n=e.user.userList.indexOf(e.user.userList.find(function(e){return e.id===a.id}));return-1!==n&&t.splice(n,1),{friendList:t}},function(e,t){return{moveToChat:function(e){t.history.push("/message/"+e.id)}}})(j)),k=(a(51),function(e){var t=e.image,a=e.content;return o.a.createElement("div",{className:"row thread-item"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement("div",{className:"card"},o.a.createElement("img",{className:"card-img-top",src:t,alt:"cover"}),o.a.createElement("div",{className:"card-body"},o.a.createElement("p",{className:"card-text"},a)),o.a.createElement("div",{className:"card-footer"},o.a.createElement("button",{className:"btn btn-danger"},"Like"),o.a.createElement("button",{className:"btn btn-primary float-right"},"Share")))))}),S=function(e){var t=e.threadList,a=e.history;return o.a.createElement("div",null,o.a.createElement(y,{history:a}),t.map(function(e){return o.a.createElement(k,Object.assign({key:e.id},e))}))},L=Object(f.a)(Object(l.b)(function(e){return{threadList:e.thread.threadList}},function(e){return{}})(S)),D=(a(53),function(e){function t(){return Object(v.a)(this,t),Object(h.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(g.a)(t,[{key:"componentWillMount",value:function(){(0,this.props.fetchData)()}},{key:"render",value:function(){var e=this,t=this.props,a=t.message,n=t.onKeyPress,r=t.currentUser,c=t.targetUser;return o.a.createElement("div",null,o.a.createElement(y,{history:this.props.history}),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement("div",{className:"panel panel-primary"},o.a.createElement("div",{className:"panel-title"},"Conversation with "+c.userName),o.a.createElement("div",{className:"panel-body"},a.map(function(e){return o.a.createElement("div",{key:e.id,className:"clearfix message"},o.a.createElement("blockquote",{className:e.from===r.id?"me pull-right":"you pull-left"},e.content))})),o.a.createElement("div",{className:"panel-footer"},o.a.createElement("div",{className:"input-group"},o.a.createElement("div",{className:"input-group-append"},o.a.createElement("span",{className:"input-group-text left_btn"})),o.a.createElement("textarea",{onKeyPress:function(e){return n(e,r)},className:"form-control type_msg",placeholder:"Press enter to send"}),o.a.createElement("div",{className:"input-group-append"},o.a.createElement("span",{onClick:function(){return e.props.fetchData()},className:"input-group-text reload_btn"},"Get Latest Messages"))))))))}}]),t}(c.Component)),C=Object(f.a)(Object(l.b)(function(e,t){var a=e.login,n=t.history.location.pathname.split("/"),r=parseInt(n[n.length-1],10);return{message:e.message.filter(function(e){return e.from===a.id&&e.to===r||e.from===r&&e.to===a.id}),currentUser:a,targetUser:e.user.userList.find(function(e){return e.id===r})}},function(e,t){return{fetchData:function(){var t=JSON.parse(localStorage.getItem("initMessage"))?JSON.parse(localStorage.getItem("initMessage")):[];e({type:"LOAD_MESSAGE",payload:t})},onKeyPress:function(a,r){if(13===a.which){a.preventDefault();var c=t.history.location.pathname.split("/"),o=c[c.length-1],i={from:r.id,to:parseInt(o,10),content:a.target.value,createDate:new Date};e(function(e){return Object(n.a)({type:"SEND_MESSAGE",id:d++},e)}(i)),a.target.value=""}}}})(D)),I=a(28),A=a(56),M=a(57),x=function(e){var t=e.component,a=(e.login,Object(I.a)(e,["component","login"]));return o.a.createElement(A.a,Object.assign({},a,{render:function(e){return localStorage.getItem("user")?o.a.createElement(t,e):o.a.createElement(M.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},T=a(58),P=a(7),G=Object(P.a)(),J=function(){return o.a.createElement("div",{className:"container-fluid"},o.a.createElement(T.a,{history:G},o.a.createElement("div",null,o.a.createElement(A.a,{path:"/login",component:p}),o.a.createElement(x,{exact:!0,path:"/",component:L}),o.a.createElement(x,{path:"/friend",component:w}),o.a.createElement(x,{path:"/message/:userId",component:C}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W=a(18),_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_MESSAGE":if(localStorage.getItem("initMessage")){var a=JSON.parse(localStorage.getItem("initMessage"));return a.push({id:a[a.length-1].id+1,from:t.from,to:t.to,content:t.content,createDate:t.createDate}),localStorage.setItem("initMessage",JSON.stringify(a)),[].concat(Object(W.a)(e),[{id:a[a.length-1].id,from:t.from,to:t.to,content:t.content,createDate:t.createDate}])}var n=[];return n.push({id:t.id,from:t.from,to:t.to,content:t.content,createDate:t.createDate}),localStorage.setItem("initMessage",JSON.stringify(n)),[].concat(Object(W.a)(e),[{id:t.id,from:t.from,to:t.to,content:t.content,createDate:t.createDate}]);case"LOAD_MESSAGE":var r=[];return t.payload.forEach(function(e){r=[].concat(Object(W.a)(r),[e])}),r;default:return e}},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return(arguments.length>1?arguments[1]:void 0).type,e},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return(arguments.length>1?arguments[1]:void 0).type,e},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return t.payload;default:return e}},K=Object(m.b)({message:_,thread:U,user:q,login:B}),F={user:{userList:function(){for(var e=[],t=1;t<10;t++)e.push({id:t,userName:"User "+t,email:"minhnd081293@gmail.com",avatar:"https://i2.wp.com/xansan.com/wp-content/uploads/2018/10/user-avatar-default-2609.png?ssl=1",mutual:8,address:"Stockholm, Sweden"});return e}()},thread:{threadList:function(){for(var e=[],t=1;t<20;t++)e.push({id:t,content:"Lorem ipsum dolor sit amet, qui duis quando constituam cu, no sea alia graeci voluptatibus. Eius omnes vivendum ad his, \n            cu pro vidit error mandamus, stet fugit dissentias duo id. Wisi delectus cu mea, cu prima quaestio per, salutatus argumentum et nec. \n            This is sample thread "+t,image:t%2===0?"http://4.bp.blogspot.com/-xE5C0WBGh4o/Tp5WWmdO3fI/AAAAAAAAAEA/G08pmkhrWhM/s1600/beatiful+water+fall+with+green+trees+and+river.jpg":"https://media-cdn.tripadvisor.com/media/photo-s/0c/ea/20/78/beatiful-bali-island.jpg",ownerId:Math.floor(6*Math.random())+1,createDate:new Date});return e}()}};var $=Object(m.c)(K),z=$.getState();Object.entries(F).forEach(function(e){var t=Object(r.a)(e,2),a=t[0],c=t[1];return z[a]=Object(n.a)({},c,F[a])}),localStorage.removeItem("user");var H=document.getElementById("root");s.a.render(o.a.createElement(l.a,{store:$},o.a.createElement(J,null)),H),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[29,2,1]]]);
//# sourceMappingURL=main.edfd61e3.chunk.js.map