(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{138:function(e,t,n){e.exports=n(200)},143:function(e,t,n){},189:function(e,t,n){},198:function(e,t,n){},200:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(9),o=n.n(l),i=(n(143),n(15)),c=n(10),u=n(18),s=n(16),h=n(33),d=n(17),m=n(125),p=n(95),g=n.n(p),b=n(113),E=n.n(b),f=Object(m.a)({palette:{primary:{main:g.a[700]},secondary:{main:g.a[200]},error:{main:E.a[900]}}}),v=n(11),k=n.n(v),y=n(22),w=n(66),C=n(235),S=n(128),x=n(236),O=n(248),j=n(237),D=n(234),_=n(24),T=n.n(_),L={BACKEND:"https://nuichatbot.herokuapp.com/tonghopevent"},A=function(){function e(){Object(i.a)(this,e)}return Object(c.a)(e,null,[{key:"getToken",value:function(){var t=e.getLocalStorage("token");if(t)return t;window.location.href="#/login"}},{key:"checkDebounce",value:function(e){window.lastRun||(window.lastRun={});var t=window.lastRun[e]||0,n=Date.now();if(n-t<500)return!0;window.lastRun[e]=n}},{key:"checkError",value:function(t){t&&t.data&&"Invalid token"===t.data.error&&(e.removeLocalStorage("token"),window.location.reload())}},{key:"setLocalStorage",value:function(e,t){localStorage.setItem(e,JSON.stringify(t))}},{key:"getLocalStorage",value:function(e){return null===(localStorage.getItem(e)||null)?null:JSON.parse(localStorage.getItem(e))}},{key:"removeLocalStorage",value:function(e){localStorage.removeItem(e)}},{key:"getDateStr",value:function(e){var t=new Date(e),n=t.getDate(),a=t.getMonth()+1,r=t.getFullYear();return"".concat(n<10?"0":"").concat(n,"-").concat(a<10?"0":"").concat(a,"-").concat(r)}},{key:"getTimeStr",value:function(e){var t=new Date(e),n=t.getHours(),a=t.getMinutes();return"".concat(n<10?"0":"").concat(n,"h").concat(a<10?"0":"").concat(a)}},{key:"extractFacebookUsername",value:function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").replace("/pg","").match(/[facebok]+\.com\/([^?\/]+)/);if(!e||e.length<1)return null;var t=e[1],n=t.match(/-([0-9]{7,20})$/);return!n||n.length<1?t:n[1]}}]),e}(),B=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this))).handleChange=function(e){return function(t){n.setState(Object(w.a)({},e,t.target.value))}},n.props=e,n.state={},window.changeHeader("Login"),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"onLogin",value:function(){var e=Object(y.a)(k.a.mark(function e(){var t,n,a,r;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==this.state.username&&""!==this.state.password){e.next=4;break}return e.abrupt("return",window.showAlert({title:"Please fill in",text:"Please fill in your username and password"}));case 4:return this.setState({loading:!0}),t=this.state,n=t.username,a=t.password,e.next=8,T.a.post("".concat(L.BACKEND,"/login"),{username:n,password:a});case 8:if(r=e.sent,this.setState({loading:!1}),!r.data.token){e.next=15;break}A.setLocalStorage("token",r.data.token),window.location.href="#/",e.next=16;break;case 15:return e.abrupt("return",window.showAlert({title:"Error",text:r.data.error}));case 16:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"onRegister",value:function(){var e=Object(y.a)(k.a.mark(function e(){return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e={input:{marginBottom:"20px",width:"500px",maxWidth:"100%"},container:{display:"flex",flexWrap:"wrap"},cardStyle:{maxWidth:"500px",marginTop:"20px",marginRight:"auto",marginLeft:"auto"}},t=r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("center",null,r.a.createElement(D.a,null))),n=r.a.createElement("div",null,r.a.createElement(C.a,{style:e.cardStyle},r.a.createElement(x.a,null,r.a.createElement(S.a,{variant:"h5",component:"h2"},"Admin - TongHopEvent"),r.a.createElement(S.a,{color:"textSecondary"},"Please login to continue"),r.a.createElement(O.a,{label:"Username",type:"text",value:this.state.username,style:e.input,onChange:this.handleChange("username"),margin:"normal"}),r.a.createElement(O.a,{label:"Password",type:"password",value:this.state.password,style:e.input,onChange:this.handleChange("password"),margin:"normal"}),r.a.createElement("div",null,r.a.createElement(j.a,{onClick:this.onLogin.bind(this),color:"primary"},"Login")))));return this.state.loading?t:n}}]),t}(r.a.Component),N=n(114),H=n.n(N),P=n(115),K=n(238),I=n(239),M=n(116),R=n.n(M),W=(n(189),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this))).props=e,n.state={loading:!1,isCopied:!1,isExpanded:!n.props.admin,copyContent:n.props.admin?n.getCopyContent():""},e.admin&&(e.doc.image?n.state.publishAction="publish":A.extractFacebookUsername(n.state.copyContent)?n.state.publishAction="getimage":n.state.publishAction=null),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"askDeleteDoc",value:function(){var e=Object(y.a)(k.a.mark(function e(){return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:window.showAlert({title:"X\xe1c nh\u1eadn xo\xe1",text:'Xo\xe1 "'+this.props.doc.name+'" ?',onClickOK:this.deleteDoc.bind(this),showCancel:!0});case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"deleteDoc",value:function(){var e=Object(y.a)(k.a.mark(function e(){var t,n,a;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.doc,this.setState({loading:!0}),n=A.getLocalStorage("token"),e.next=5,T.a.delete("".concat(L.BACKEND,"/doc/").concat(t.id,"?token=").concat(n));case 5:(a=e.sent).data.success?this.props.setDoc(this.props.i,null):(this.setState({loading:!1}),window.showAlert({title:"ERROR",text:"Message: "+a.data.error}));case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"toggleApproved",value:function(){var e=Object(y.a)(k.a.mark(function e(){var t,n,a,r,l;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),t=this.props.doc,n=!t.approved,a=A.getLocalStorage("token"),e.next=6,T.a.post("".concat(L.BACKEND,"/doc/").concat(t.id,"/approved?token=").concat(a),{approved:n});case 6:r=e.sent,(l=JSON.parse(JSON.stringify(t))).approved=n,r.data.success?this.props.setDoc(this.props.i,l):window.showAlert({title:"Error",text:r.data.error}),this.setState({loading:!1});case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getCopyContent",value:function(){var e=this.props.doc;return("-- ".concat(e.name," --\n")+"".concat(this.generateLocationTag(e)," ").concat(e.type.join(" "),"\n\n")+"\u25cf M\xf4 t\u1ea3: ".concat(e.description.trim(),"\n\n")+"\u25cf Link facebook: ".concat(e.linkfb,"\n")+(e.wanted?"\u25cf Y\xeau c\u1ea7u \u0111\u1ed1i t\u01b0\u1ee3ng: "+e.wanted.join(", ").trim()+"\n":"")+(e.deadline?"\u25cf Deadline tuy\u1ec3n nh\xe2n s\u1ef1: "+e.deadline.trim()+"\n":"")+(e.benefit?"\u25cf Quy\u1ec1n l\u1ee3i khi tham gia d\u1ef1 \xe1n: "+e.benefit.trim()+"\n":"")+"\nTrackID:".concat(e.psid,":").concat(e.id)).trim()}},{key:"nl2br",value:function(e){return e.trim().replace(/\r/g,"").split("\n").map(function(e,t,n){var a=t===n.length-1;return r.a.createElement("span",{key:t},e,!a&&r.a.createElement("br",null))})}},{key:"generateLocationTag",value:function(e){var t=e.location;return t?"To\xe0n qu\u1ed1c"===t?"#d\u1ef1_\xe1n_to\xe0n_qu\u1ed1c":"#d\u1ef1_\xe1n_\u1edf_".concat(e.location.replace(/\s+/g,"_")):""}},{key:"_renderNonAdminInfo",value:function(){var e=this.props.doc;return r.a.createElement("p",{style:{backgroundColor:"#eee",padding:"10px",width:"100%"}},r.a.createElement("center",null,e.approved?"B\xe0i vi\u1ebft n\xe0y \u0111\xe3 \u0111\u01b0\u1ee3c duy\u1ec7t v\xe0 s\u1ebd s\u1edbm \u0111c \u0111\u0103ng l\xean fanpage":"B\xe0i vi\u1ebft n\xe0y \u0111ang \u0111\u1ee3i \u0111\u1ec3 \u0111\u01b0\u1ee3c ki\u1ec3m duy\u1ec7t"))}},{key:"getImageUrl",value:function(){var e=this.props.doc;return e.image?"https://drive.google.com/uc?export=view&id="+e.image[0]:null}},{key:"openImageView",value:function(){window.open(this.getImageUrl())}},{key:"render",value:function(){var e=this,t=this.props.doc,n=this.state,a=n.isExpanded,l=n.copyContent,o=n.publishAction,i=this.props.gotoPublish||function(){},c=r.a.createElement("div",null,r.a.createElement(H.a,{componentDecorator:function(e,t,n){return r.a.createElement("a",{href:e,key:n,target:"_blank",rel:"noopener noreferrer"},t)}},r.a.createElement("div",{style:a?null:{maxHeight:"315px",overflow:"hidden",position:"relative"},className:a?null:"fade-out"},!this.props.admin&&this._renderNonAdminInfo(),r.a.createElement("p",null,t.approved&&r.a.createElement(K.a,{size:"small",color:"primary",style:{marginRight:"15px"},disabled:!0},r.a.createElement(R.a,null)),r.a.createElement("b",null,"-- ",t.name," --")),r.a.createElement("p",null,this.generateLocationTag(t)," ",t.type.join(" ")),r.a.createElement("p",null,this.nl2br(t.description)),r.a.createElement("p",null,"\u25cf Link facebook: ",t.linkfb,r.a.createElement("br",null),!!t.wanted&&r.a.createElement("span",null,"\u25cf Y\xeau c\u1ea7u \u0111\u1ed1i t\u01b0\u1ee3ng: ",t.wanted.join(", "),r.a.createElement("br",null)),!!t.deadline&&r.a.createElement("span",null,"\u25cf Deadline tuy\u1ec3n nh\xe2n s\u1ef1: ",this.nl2br(t.deadline),r.a.createElement("br",null)),!!t.benefit&&r.a.createElement("span",null,"\u25cf Quy\u1ec1n l\u1ee3i khi tham gia d\u1ef1 \xe1n: ",r.a.createElement("br",null),this.nl2br(t.benefit),r.a.createElement("br",null))),this.props.admin&&r.a.createElement("p",null,"TrackID:",t.psid,":",t.id),(!!t.image||!!t.feedback)&&r.a.createElement("p",null,r.a.createElement("b",null,"== Th\xf4ng tin ri\xeang ==")),!!t.image&&r.a.createElement("p",null,"\u25cf \u1ea2nh tu\u1ef3 ch\u1ecdn: ","https://drive.google.com/open?id="+t.image[0]),!!t.feedback&&r.a.createElement("p",null,"\u25cf C\xe2u h\u1ecfi, g\xf3p \xfd: ",t.feedback)),this.props.admin&&r.a.createElement("div",null,r.a.createElement("center",null,r.a.createElement(j.a,{onClick:function(){return e.setState({isExpanded:!a})}},a?"Thu g\u1ecdn":"Hi\u1ec7n th\xeam ...")))),r.a.createElement(I.a,null),this.props.admin&&r.a.createElement(r.a.Fragment,null,this.state.loading?r.a.createElement("center",null,r.a.createElement(D.a,null)):r.a.createElement("div",null,r.a.createElement(j.a,{variant:"outlined",onClick:this.askDeleteDoc.bind(this),color:"primary"},"X\xf3a"),r.a.createElement(j.a,{variant:"outlined",onClick:this.toggleApproved.bind(this),color:"primary"},t.approved?"B\u1ecf duy\u1ec7t":"Duy\u1ec7t"),r.a.createElement(P.CopyToClipboard,{text:l,onCopy:function(){return e.setState({isCopied:!0})}},r.a.createElement(j.a,{variant:"outlined",color:"primary"},this.state.isCopied?"(\u0110\xe3 copy)":"Copy")),t.image&&r.a.createElement(j.a,{variant:"outlined",onClick:this.openImageView.bind(this),color:"primary"},"L\u1ea5y \u1ea3nh"),o&&r.a.createElement(j.a,{variant:"outlined",onClick:function(){i({caption:l,url:e.getImageUrl()},o)},color:"primary"},"\u0110\u0103ng b\xe0i"))));return r.a.createElement("div",{style:{paddingBottom:"20px"}},r.a.createElement(C.a,null,r.a.createElement(x.a,{style:{backgroundColor:t.approved&&this.props.admin?"#cfd8dc":"#fff"},className:t.approved&&this.props.admin?"approved":null},c)))}}]),t}(r.a.Component)),F=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this))).handleChange=function(e){return function(t){n.setState(Object(w.a)({},e,t.target.value))}},n.props=e,n.state={loading:!0,list:[]},window.changeHeader("Qu\u1ea3n l\xfd d\u1eef li\u1ec7u - TongHopEvent"),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"loadData",value:function(){var e=Object(y.a)(k.a.mark(function e(){var t,n;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=A.getToken(),e.next=3,T.a.get("".concat(L.BACKEND,"/feed?token=").concat(t));case 3:n=e.sent,A.checkError(n),this.setState({loading:!1,list:n.data});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"onClickEdit",value:function(){this.setState({edit:!0})}},{key:"setDoc",value:function(e,t){this.setState(function(n){var a=n.list;return a[e]=t,{list:a}})}},{key:"render",value:function(){var e=this,t=r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("center",null,r.a.createElement(D.a,null))),n=this.props.gotoPublish,a=r.a.createElement("div",{style:{maxWidth:"800px",marginTop:"20px",marginRight:"auto",marginLeft:"auto"}},0===this.state.list.length&&r.a.createElement("center",null,r.a.createElement("h2",null,"Ch\u01b0a c\xf3 b\xe0i \u0111\u0103ng n\xe0o")),this.state.list.map(function(t,a){return t?r.a.createElement(W,{doc:t,setDoc:e.setDoc.bind(e),key:t.id,i:a,admin:!0,gotoPublish:n}):null}));return this.state.loading?t:a}}]),t}(r.a.Component),G={cardStyle:{maxWidth:"800px",marginTop:"20px",marginRight:"auto",marginLeft:"auto"}},U=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this))).props=e,n.state={loading:!0,doc:{}},window.changeHeader("Qu\u1ea3n l\xfd d\u1eef li\u1ec7u - TongHopEvent"),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"loadData",value:function(){var e=Object(y.a)(k.a.mark(function e(){var t,n;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=A.getLocalStorage("token"),e.next=3,T.a.get("".concat(L.BACKEND,"/doc/").concat(this.props.id,"?token=").concat(t));case 3:(n=e.sent).data.error?this.setState({loading:!1,doc:null}):this.setState({loading:!1,doc:n.data});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"_renderDocView",value:function(){return r.a.createElement("div",{style:G.cardStyle},r.a.createElement(W,{doc:this.state.doc||{}}))}},{key:"_renderDocNotFound",value:function(){return r.a.createElement("center",null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h2",null,"C\xf3 l\u1ed7i x\u1ea3y ra"),"B\xe0i \u0111\u0103ng n\xe0y kh\xf4ng t\u1ed3n t\u1ea1i ho\u1eb7c \u0111\xe3 b\u1ecb xo\xe1",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))}},{key:"render",value:function(){var e=r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("center",null,r.a.createElement(D.a,null)));return this.state.loading?e:this.state.doc?this._renderDocView():this._renderDocNotFound()}}]),t}(r.a.Component),z=n(77),J=n.n(z),V=n(124),Q=n(80),X=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={publish_time:new Date(Date.now()+12e5)},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.handleDateChange(this.state.publish_time.getTime()/1e3)}},{key:"handleDateChange",value:function(e){this.setState({publish_time:e}),this.props.handleDateChange(e.getTime()/1e3)}},{key:"render",value:function(){var e=this.state.publish_time;return r.a.createElement(Q.c,{utils:V.a},r.a.createElement(Q.a,{margin:"normal",id:"mui-pickers-date",label:"Date picker",value:e,onChange:this.handleDateChange.bind(this),KeyboardButtonProps:{"aria-label":"change date"}}),"\xa0\xa0\xa0\xa0\xa0",r.a.createElement(Q.b,{margin:"normal",id:"mui-pickers-time",label:"Time picker",value:e,onChange:this.handleDateChange.bind(this),KeyboardButtonProps:{"aria-label":"change time"}}))}}]),t}(r.a.Component),Y={cardStyle:{maxWidth:"800px",marginTop:"20px",marginRight:"auto",marginLeft:"auto"}},q=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={completed:!1,loading:!0,stat:{}},e.data&&(n.state.caption=e.data.caption,n.state.url=e.data.url,n.state.scheduled_publish_time=0),window.changeHeader("C\xf4ng c\u1ee5 \u0111\u0103ng b\xe0i - TongHopEvent"),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.loadStat()}},{key:"loadStat",value:function(){var e=Object(y.a)(k.a.mark(function e(){var t,n;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=A.getLocalStorage("token"),e.next=3,T.a.get("".concat(L.BACKEND,"/publish/stat?token=").concat(t));case 3:(n=e.sent).data.error?this.setState({loading:!1,stat:[]}):this.setState({loading:!1,stat:n.data});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"doPublish",value:function(){var e=Object(y.a)(k.a.mark(function e(){var t;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),t=A.getLocalStorage("token"),e.next=4,T.a.post("".concat(L.BACKEND,"/publish?token=").concat(t),{caption:this.state.caption,url:this.state.url,scheduled_publish_time:this.state.scheduled_publish_time});case 4:e.sent.data.id?this.setState({loading:!1,completed:!0}):window.showAlert({title:"Kh\xf4ng th\u1ec3 \u0111\u0103ng b\xe0i",text:"C\xf3 l\u1ed7i x\u1ea3y ra"});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"_renderComposerCard",value:function(){var e=this,t={height:"300px",maxWidth:"100%"};return r.a.createElement(C.a,null,r.a.createElement(x.a,null,r.a.createElement("p",null,r.a.createElement(j.a,{variant:"outlined",size:"small",onClick:function(){return window.location.hash="#/"}},"Tr\u1edf v\u1ec1"),"\xa0\xa0\xa0",r.a.createElement("b",null,"So\u1ea1n b\xe0i \u0111\u0103ng")),r.a.createElement("center",null,r.a.createElement(J.a,{alt:"",src:this.state.url,style:t,loader:r.a.createElement("div",{style:t},r.a.createElement("center",null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(D.a,null)))})),r.a.createElement(O.a,{label:"N\u1ed9i dung b\xe0i \u0111\u0103ng",multiline:!0,rowsMax:"20",value:this.state.caption,onChange:function(t){e.setState({caption:t.target.value})},margin:"normal",variant:"outlined",fullWidth:!0})))}},{key:"_renderPublishCard",value:function(){var e=this,t=this.state.scheduled_publish_time,n=t-Date.now()/1e3>900,a=1e3*t;return r.a.createElement(C.a,null,r.a.createElement(x.a,null,r.a.createElement("p",null,r.a.createElement("b",null,"L\xean l\u1ecbch b\xe0i \u0111\u0103ng")),r.a.createElement(X,{handleDateChange:function(t){return e.setState({scheduled_publish_time:Math.round(t)})}}),r.a.createElement("br",null),r.a.createElement("br",null),n&&r.a.createElement(j.a,{variant:"outlined",onClick:function(){window.showAlert({title:"X\xe1c nh\u1eadn \u0111\u0103ng b\xe0i",text:"\u0110\u0103ng b\xe0i v\xe0o l\xfac ".concat(A.getTimeStr(a)," ng\xe0y ").concat(A.getDateStr(a)," ?"),onClickOK:e.doPublish.bind(e),showCancel:!0})}},"\u0110\u0103ng b\xe0i"),!n&&r.a.createElement("p",{style:{color:"red"}},"Gi\u1edd \u0111\u0103ng b\xe0i ph\u1ea3i c\xe1ch hi\u1ec7n t\u1ea1i \xedt nh\u1ea5t 15 ph\xfat")))}},{key:"_renderCompletedCard",value:function(){var e=1e3*this.state.scheduled_publish_time;return r.a.createElement("div",{style:Y.cardStyle},r.a.createElement(C.a,null,r.a.createElement(x.a,null,r.a.createElement("h2",null,"\u0110\u0103ng b\xe0i th\xe0nh c\xf4ng"),r.a.createElement("p",null,"B\xe0i vi\u1ebft \u0111\xe3 \u0111\u01b0\u1ee3c \u0111\u1eb7t gi\u1edd \u0111\u1ec3 \u0111\u0103ng v\xe0o l\xfac ",A.getTimeStr(e)," ng\xe0y ",A.getDateStr(e)),r.a.createElement(j.a,{variant:"outlined",onClick:function(){return window.location.hash="#/"}},"Tr\u1edf v\u1ec1 trang ch\u1ee7"))),r.a.createElement("br",null),r.a.createElement("br",null))}},{key:"_renderStatCard",value:function(){return r.a.createElement(C.a,null,r.a.createElement(x.a,null,r.a.createElement("p",null,r.a.createElement("b",null,"C\xe1c b\xe0i \u0111\u0103ng \u0111\xe3 l\xean l\u1ecbch")),r.a.createElement("ul",null,this.state.stat.map(function(e){return r.a.createElement("li",{key:e},A.getTimeStr(e)," ng\xe0y ",A.getDateStr(e))}))))}},{key:"_renderMain",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:Y.cardStyle},this._renderComposerCard()),r.a.createElement("div",{style:Y.cardStyle},this._renderPublishCard()),r.a.createElement("div",{style:Y.cardStyle},this._renderStatCard()),r.a.createElement("br",null),r.a.createElement("br",null))}},{key:"_renderError",value:function(){return r.a.createElement("center",null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h2",null,"C\xf3 l\u1ed7i x\u1ea3y ra"),"H\xe3y v\xe0o trang ch\u1ee7 v\xe0 th\u1eed l\u1ea1i",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))}},{key:"render",value:function(){var e=r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("center",null,r.a.createElement(D.a,null)));return this.state.loading?e:this.state.completed?this._renderCompletedCard():this.props.data?this._renderMain():this._renderError()}}]),t}(r.a.Component),$={maxHeight:"300px",maxWidth:"100%"},Z={height:"300px",width:"100%"},ee={cardStyle:{maxWidth:"800px",marginTop:"20px",marginRight:"auto",marginLeft:"auto"}},te=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={showGetToken:!1,access_token:"",completed:!1,loading:!0,imgs:[]},e.data?n.state.caption=e.data.caption:n.state.error="H\xe3y v\u1ec1 trang ch\u1ee7 v\xe0 th\u1eed l\u1ea1i",window.changeHeader("Ch\u1ecdn \u1ea3nh b\xe0i \u0111\u0103ng - TongHopEvent"),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.fetchFacebookApi()}},{key:"fetchFacebookApi",value:function(){var e=Object(y.a)(k.a.mark(function e(){var t,n,a;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=A.getLocalStorage("fbtoken"),e.prev=1,e.next=4,T.a.get("https://graph.facebook.com/".concat(A.extractFacebookUsername(this.state.caption),"?fields=feed.limit(20)%7Bfull_picture%7D%2Cpicture.width(720)%7Burl%7D&access_token=").concat(t));case 4:(n=e.sent).data.error?this.setState({loading:!1,showGetToken:!0}):((a=n.data.feed.data.map(function(e){return e.full_picture})).unshift(n.data.picture.data.url),this.setState({loading:!1,showGetToken:!1,imgs:a})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),404===e.t0.response.status?this.setState({loading:!1,error:"Kh\xf4ng th\u1ec3 m\u1edf trang facebook n\xe0y"}):this.setState({loading:!1,showGetToken:!0});case 11:case"end":return e.stop()}},e,this,[[1,8]])}));return function(){return e.apply(this,arguments)}}()},{key:"onSaveToken",value:function(){var e=this.state.access_token;e=e.match(/EA[a-zA-Z0-9]+/),A.setLocalStorage("fbtoken",e[0]);var t=window.location.hash;window.location.hash="#/reload",setTimeout(function(){window.location.hash=t},50)}},{key:"_renderTitleCard",value:function(){return r.a.createElement(C.a,null,r.a.createElement(x.a,null,r.a.createElement("p",null,r.a.createElement(j.a,{variant:"outlined",size:"small",onClick:function(){return window.location.hash="#/"}},"Tr\u1edf v\u1ec1"),"\xa0\xa0\xa0",r.a.createElement("b",null,"Ch\u1ecdn \u1ea3nh cho b\xe0i \u0111\u0103ng"))))}},{key:"_renderImageCard",value:function(e){var t=this;return r.a.createElement(C.a,null,r.a.createElement(x.a,null,r.a.createElement("center",null,r.a.createElement(J.a,{alt:"",src:e,style:$,loader:r.a.createElement("div",{style:Z},r.a.createElement("center",null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(D.a,null)))})),r.a.createElement(j.a,{variant:"outlined",size:"small",style:{float:"right",margin:"10px"},onClick:function(){var n=JSON.parse(JSON.stringify(t.props.data));n.url=e,t.props.gotoPublish(n,"publish")}},"Ch\u1ecdn \u1ea3nh n\xe0y")))}},{key:"_renderGetTokenCard",value:function(){var e=this;return r.a.createElement(C.a,null,r.a.createElement(x.a,null,r.a.createElement("p",null,r.a.createElement(j.a,{variant:"outlined",size:"small",onClick:function(){return window.location.hash="#/"}},"Tr\u1edf v\u1ec1"),"\xa0\xa0\xa0",r.a.createElement("b",null,"L\u1ea5y token"),r.a.createElement("br",null),r.a.createElement("br",null),"B\u1ea1n ch\u01b0a c\xf3 token ho\u1eb7c token \u0111\xe3 b\u1ecb h\u1ebft h\u1ea1n. H\xe3y l\xe0m theo h\u01b0\u1edbng d\u1eabn n\xe0y \u0111\u1ec3 l\u1ea5y token: ",r.a.createElement("a",{href:"https://blog.ngxson.com/tonghopevent/#lay-token",target:"_blank",rel:"noopener noreferrer"},"[B\u1ea5m v\xe0o \u0111\xe2y]"),r.a.createElement("br",null),"L\u01b0u \xfd: token s\u1ebd \u0111c l\u01b0u tr\xean m\xe1y n\xe0y. B\u1ea1n c\xf3 th\u1ec3 l\u1ea5y token t\u1eeb m\xe1y t\xednh \u0111\u1ec3 d\xf9ng tr\xean \u0110T.",r.a.createElement("br",null),"\u0110i\u1ec1n token c\u1ee7a b\u1ea1n v\xe0o \xf4 d\u01b0\u1edbi \u0111\xe2y:",r.a.createElement("br",null)),r.a.createElement(O.a,{multiline:!0,rowsMax:"5",value:this.state.access_token,onChange:function(t){e.setState({access_token:t.target.value})},margin:"normal",variant:"outlined",fullWidth:!0}),r.a.createElement("br",null),r.a.createElement(j.a,{variant:"outlined",onClick:this.onSaveToken.bind(this)},"Ti\u1ebfp t\u1ee5c")))}},{key:"_renderMain",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,this.state.showGetToken&&r.a.createElement("div",{style:ee.cardStyle},this._renderGetTokenCard()),!this.state.showGetToken&&r.a.createElement("div",{style:ee.cardStyle},this._renderTitleCard()),!this.state.showGetToken&&this.state.imgs.map(function(t,n){return r.a.createElement("div",{style:ee.cardStyle,key:n},e._renderImageCard(t))}),r.a.createElement("br",null),r.a.createElement("br",null))}},{key:"_renderError",value:function(){return r.a.createElement("center",null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h2",null,"C\xf3 l\u1ed7i x\u1ea3y ra"),this.state.error,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(j.a,{variant:"outlined",size:"small",onClick:function(){return window.location.hash="#/"}},"Tr\u1edf v\u1ec1"),r.a.createElement("br",null),r.a.createElement("br",null))}},{key:"render",value:function(){var e=r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("center",null,r.a.createElement(D.a,null)));return this.state.loading?e:this.state.error?this._renderError():this._renderMain()}}]),t}(r.a.Component),ne=(n(198),n(244)),ae=n(240),re=n(241),le=n(126),oe=n(251),ie=n(120),ce=n.n(ie),ue=n(34),se={root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}},he=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this))).handleChange=function(e){n.setState({auth:e.target.checked})},n.handleMenu=function(e){n.setState({anchorEl:e.currentTarget})},n.handleClose=function(){n.setState({anchorEl:null})},n.doLogout=function(){A.removeLocalStorage("token"),window.location.href="#/login"},n.props=e,n.state={anchorEl:null},n.token=A.getLocalStorage("token"),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.anchorEl,t=Boolean(e),n=!!this.token,a=this.props.header;return r.a.createElement("div",{style:se.root},r.a.createElement(ne.a,{position:"static",color:"primary"},r.a.createElement(ae.a,null,r.a.createElement(S.a,{variant:"h6",color:"inherit",style:se.grow},a),n?r.a.createElement("div",null,r.a.createElement(re.a,{"aria-owns":t?"menu-appbar":void 0,"aria-haspopup":"true",onClick:this.handleMenu,color:"inherit"},r.a.createElement(ce.a,null)),r.a.createElement(le.a,{id:"menu-appbar",anchorEl:e,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:t,onClose:this.handleClose},r.a.createElement(oe.a,{onClick:function(){window.location.href="#/"}},"Qu\u1ea3n l\xfd"),r.a.createElement(oe.a,{onClick:function(){window.location.href="https://blog.ngxson.com/tonghopevent/"}},"H\u01b0\u1edbng d\u1eabn"),r.a.createElement(oe.a,{onClick:this.doLogout.bind(this)},"Logout"))):null)))}}]),t}(r.a.Component),de=Object(ue.e)(he),me=n(247),pe=n(123),ge=n(122),be=n.n(ge),Ee=n(250),fe=n(243),ve=n(242),ke=n(246),ye=n(245),we=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).handleClose=function(){n.state.onClickOK&&(n.state.onClickOK(),n.setState({onClickOK:null})),n.setState({open:!1})},n.handleCancel=function(){n.setState({open:!1})},n.state={open:!1,onClickOK:null},window.showAlert=n.show.bind(Object(h.a)(n)),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"show",value:function(e){this.setState({open:!0,title:e.title,text:e.text,onClickOK:e.onClickOK||null,showCancel:e.showCancel})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(Ee.a,{open:this.state.open,onClose:this.handleClose,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(ye.a,{id:"alert-dialog-title"},this.state.title),r.a.createElement(ve.a,null,r.a.createElement(ke.a,{id:"alert-dialog-description"},this.state.text)),r.a.createElement(fe.a,null,r.a.createElement(j.a,{onClick:this.handleClose.bind(this),color:"primary",autoFocus:!0},"OK"),this.state.showCancel?r.a.createElement(j.a,{onClick:this.handleCancel.bind(this),color:"primary",autoFocus:!0},"Cancel"):null)))}}]),t}(r.a.Component),Ce=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).Login=function(){return r.a.createElement(B,null)},e.Home=function(){return r.a.createElement(F,{gotoPublish:e.gotoPublish.bind(Object(h.a)(e))})},e.View=function(e){var t=e.match;return r.a.createElement(U,{id:t.params.id})},e.Publish=function(){return r.a.createElement(q,{data:e.state.publishData})},e.GetImage=function(){return r.a.createElement(te,{data:e.state.publishData,gotoPublish:e.gotoPublish.bind(Object(h.a)(e))})},e.Copyright=function(){return r.a.createElement("center",null,"Developed by\xa0",r.a.createElement("b",null,r.a.createElement("a",{href:"https://ngxson.com",target:"_blank",rel:"noopener noreferrer"},"Nui")),"\xa0 - v4.3",r.a.createElement("br",null),r.a.createElement("br",null))},e.state={header:"Home",publishData:null},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"changeHeader",value:function(e){this.state.header!==e&&this.setState({header:e})}},{key:"gotoPublish",value:function(e,t){this.setState({publishData:e}),window.location.hash="#/"+t}},{key:"render",value:function(){return window.changeHeader=this.changeHeader.bind(this),r.a.createElement(be.a,{theme:f},r.a.createElement(r.a.Fragment,null,r.a.createElement(me.a,null),r.a.createElement(de,{header:this.state.header}),r.a.createElement("div",{className:"mainView"},r.a.createElement(ue.a,{exact:!0,path:"/",component:this.Home}),r.a.createElement(ue.a,{path:"/login",component:this.Login}),r.a.createElement(ue.a,{path:"/view/:id",component:this.View}),r.a.createElement(ue.a,{path:"/publish",component:this.Publish}),r.a.createElement(ue.a,{path:"/getimage",component:this.GetImage}),r.a.createElement(this.Copyright,null)),r.a.createElement(we,null)))}}]),t}(r.a.Component);var Se=function(){return r.a.createElement(pe.a,null,r.a.createElement(Ce,null))},xe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Oe(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(r.a.createElement(Se,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/data",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/data","/service-worker.js");xe?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Oe(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):Oe(t,e)})}}()}},[[138,1,2]]]);
//# sourceMappingURL=main.b60e58f2.chunk.js.map