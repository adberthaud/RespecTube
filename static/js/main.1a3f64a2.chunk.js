(this["webpackJsonpreact-kid-friendly-comments"]=this["webpackJsonpreact-kid-friendly-comments"]||[]).push([[0],{105:function(e,t,s){},378:function(e,t,s){"use strict";s.r(t);var n=s(3),a=s.n(n),c=s(95),i=s.n(c),r=s(10),o=s.n(r),l=s(25),d=s(16),m=(s(105),s(2)),u=function(e){var t=e.setRoute,s=e.isSignedin,n=e.setUserInput;return Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("nav",{className:"navbar",children:[Object(m.jsx)("div",{className:"logo",children:Object(m.jsxs)("h1",{children:[Object(m.jsx)("i",{className:"fab fa-pied-piper-alt"}),"RespecTube"]})}),Object(m.jsx)("div",{className:"login",children:s?Object(m.jsx)("span",{onClick:function(){n(""),t("signin")},className:"signOut",children:"Sign Out"}):Object(m.jsx)("span",{onClick:function(){return t("signin")},className:"signIn",children:"Sign In"})})]})})},j=s(96),p=s.n(j),b=s.p+"static/media/loading.643ca93f.gif",h=function(){var e=Object(n.useState)(!0),t=Object(d.a)(e,2),s=t[0],a=t[1];return Object(m.jsx)("div",{className:"second-wrapper",children:Object(m.jsxs)("div",{className:"player-wrapper",children:[Object(m.jsx)(p.a,{className:"react-player",width:"100%",height:"100%",controls:!0,url:"https://youtu.be/zABG-oJzkJ0?t=203",onReady:function(){return a(!1)}}),s?Object(m.jsx)("div",{className:"loadingLogo",children:Object(m.jsx)("img",{src:b,alt:"Loading..."})}):null]})})},O=s(97),v=s.n(O),x={particles:{color:{value:"#FF85D8"},size:{random:!0,value:3},links:{color:"#FF0000",distance:200,enable:!0,opacity:.5,width:1},number:{value:80,density:{enable:!0,value_area:800}}}},f=function(){return Object(m.jsx)("div",{className:"background",children:Object(m.jsx)(v.a,{className:"particles",height:"100%",params:x})})},N=function(e){var t=e.videoSnippet,s=e.videoStatistics;return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"videoInfoWrapper",children:Object(m.jsxs)("div",{className:"videoDetails",children:[Object(m.jsx)("div",{className:"videoTitle",children:t.title}),Object(m.jsxs)("div",{className:"middleLine",children:[Object(m.jsxs)("div",{className:"left",children:[Object(m.jsxs)("span",{className:"views",children:[s.viewCount," views "]}),Object(m.jsx)("span",{children:"-"}),Object(m.jsx)("span",{className:"publishDate",children:t.publishedAt})]}),Object(m.jsxs)("div",{className:"right",children:[Object(m.jsxs)("span",{className:"likes",children:[Object(m.jsx)("i",{className:"fas fa-thumbs-up"}),s.likeCount]}),Object(m.jsxs)("span",{className:"dislikes",children:[Object(m.jsx)("i",{className:"fas fa-thumbs-down"}),s.dislikeCount]})]})]})]})}),Object(m.jsx)("div",{className:"videoDescriptionWrapper",children:Object(m.jsx)("div",{className:"videoDescription",children:Object(m.jsxs)("div",{className:"textDescription",children:[Object(m.jsx)("p",{children:Object(m.jsx)("strong",{children:"Description:"})}),Object(m.jsx)("p",{children:t.description})]})})})]})},g=s(99),C=s(38),y=s.n(C),I=s(98),k=s.n(I),w={YT_API_KEY:"AIzaSyBUsjDxpC1YI78nRTj-Rgt3KHkJQffyvt0",ParallelDots_API_KEY:"3jkMhM6bTFyeU7f6j5Iu3FVTsSDZPLscytjfgF7uea0"},S=function(){var e=Object(l.a)(o.a.mark((function e(t){var s,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=k.a.stringify({text:t,api_key:w.ParallelDots_API_KEY}),n={method:"post",url:"https://apis.paralleldots.com/v4/abuse",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:s},e.abrupt("return",y()(n));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=s(11),T=function(e){var t=e.displayAlert;return Object(m.jsx)("div",{className:t?"commentAlert":"hide",children:Object(m.jsxs)("p",{className:"alertText",children:[Object(m.jsx)("i",{class:"fas fa-radiation"}),"Abusive terms detected, your comment was not published"]})})},A=function(e){var t=e.commentInput,s=e.setCommentInput,a=e.comments,c=e.userInput,i=e.setComments,r=Object(n.useState)(0),u=Object(d.a)(r,2),j=u[0],p=u[1],b=Object(n.useState)(!1),h=Object(d.a)(b,2),O=h[0],v=h[1],x=function(){var e=Math.round(Math.random()*Math.pow(10,9)),n={userName:c,commentContent:t,postedWhen:D.DateTime.now(),id:e};i([n].concat(Object(g.a)(a))),s("")},f=function(){var e=Object(l.a)(o.a.mark((function e(){var s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!1),e.prev=1,e.next=4,S(t);case 4:s=e.sent,s.data.neither>.5?x():v(!0),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("error",e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();return Object(m.jsx)(n.Fragment,{children:Object(m.jsxs)("div",{className:"centerWrapper",children:[Object(m.jsxs)("div",{className:"numberOfComments",children:[a.length," Comments"]}),Object(m.jsxs)("div",{className:"AddCommentSection",children:[Object(m.jsxs)("div",{className:"firstLine",children:[Object(m.jsx)("div",{className:"userName",children:Object(m.jsx)("span",{children:c})}),Object(m.jsx)("input",{type:"text",placeholder:"Add a comment here...",className:"newComment",value:t,onChange:function(e){s(e.target.value)}})]}),Object(m.jsxs)("div",{className:"Btns",children:[Object(m.jsx)(T,{displayAlert:O,setDisplayAlert:v}),Object(m.jsx)("button",{onClick:function(){return p(1)},onAnimationEnd:function(){return p(0)},blink:j,className:"cancelBtn",children:"CANCEL"}),Object(m.jsx)("button",{onClick:function(){p(2),f()},onAnimationEnd:function(){return p(0)},blink:j,className:"addCommentBtn",children:"COMMENT"})]})]})]})})},W=function(e){var t=e.comment;return Object(m.jsx)("div",{className:"centerWrapper",children:Object(m.jsxs)("div",{className:"comment",children:[Object(m.jsxs)("div",{className:"firstLine",children:[Object(m.jsx)("div",{className:"username",children:t.userName}),Object(m.jsx)("div",{className:"publishedAt",children:function(e){var t=Math.floor(D.DateTime.now().diff(e,"days").days);return t<1?"Today":t<2?"".concat(t," day ago"):t<7?"".concat(t," days ago"):"".concat(e.toLocaleString(D.DateTime.DATE_MED))}(t.postedWhen)})]}),Object(m.jsx)("div",{className:"commentContent",children:t.commentContent})]})})},E=function(e){var t=e.comments,s=t.map((function(e,s){return Object(m.jsx)(W,{comment:t[s]},t[s].id)}));return Object(m.jsx)("div",{children:s})},M=[{userName:"Marie Curie",commentContent:"This is what I call, Radio-Activity! lol",postedWhen:D.DateTime.local(2021,3,5,11,30),id:"124729376"},{userName:"Judith",commentContent:"If I was a manager with a great team, I would definitely hire the person who made this page !",postedWhen:D.DateTime.local(2021,3,5,8,30),id:"224729376"},{userName:"Greg",commentContent:"\ud83d\ude12\ud83d\ude12\ud83d\ude12",postedWhen:D.DateTime.local(2021,3,3,11,30),id:"124729453"},{userName:"RamsesII",commentContent:"back from my grave just to comment dis",postedWhen:D.DateTime.local(2021,2,27,9,30),id:"112222376"},{userName:"Martin Luther King",commentContent:"damn groovy \ud83e\udd18",postedWhen:D.DateTime.local(2021,2,27,8,30),id:"121236876"},{userName:"Wall-e",commentContent:"i--a-m--s-t-u-c-k--o-n--t-h-i-s--p-a-g-e",postedWhen:D.DateTime.local(2021,2,25,8,31),id:"126473936"},{userName:"Wall-e",commentContent:"h-e-l-p--p-l-s",postedWhen:D.DateTime.local(2021,2,25,8,30),id:"121239376"}],_=function(e){var t=e.setRoute,s=e.setIsSignedIn,n=e.setUserInput,a=e.userInput;return Object(m.jsx)("div",{className:"center",children:Object(m.jsx)("div",{className:"formBox",children:Object(m.jsxs)("div",{className:"form",children:[Object(m.jsx)("h1",{children:"Sign In"}),Object(m.jsxs)("div",{className:"section",children:[Object(m.jsx)("div",{className:"title",children:"Nickname"}),Object(m.jsx)("input",{className:"userNameInput",type:"text",placeholder:"Type a nickname",onChange:function(e){return n(e.target.value)},required:!0})]}),Object(m.jsx)("div",{className:"section",children:Object(m.jsx)("button",{className:"signIn",value:"Sign in",type:"submit",onClick:function(){""==!a?(s(!0),t("home")):alert("You must enter a value")},children:"Sign In"})})]})})})};var L=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),s=t[0],a=t[1],c=Object(n.useState)("signin"),i=Object(d.a)(c,2),r=i[0],j=i[1],p=Object(n.useState)(""),b=Object(d.a)(p,2),O=b[0],v=b[1],x=Object(n.useState)({}),g=Object(d.a)(x,2),C=g[0],I=g[1],k=Object(n.useState)({}),S=Object(d.a)(k,2),T=S[0],W=S[1],L=Object(n.useState)(""),R=Object(d.a)(L,2),B=R[0],F=R[1],J=Object(n.useState)([]),Y=Object(d.a)(J,2),P=Y[0],z=Y[1];Object(n.useEffect)((function(){var e=w.YT_API_KEY,t="https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&id=".concat("zABG-oJzkJ0","&key=").concat(e);(function(){var e=Object(l.a)(o.a.mark((function e(){var s,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get(t);case 3:s=e.sent,n=s.data,K(n),I(n.items[0].snippet),W(n.items[0].statistics),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}})()(),z(M)}),[]);var K=function(e){var t=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},s=D.DateTime.fromISO(e.items[0].snippet.publishedAt).toLocaleString(D.DateTime.DATE_MED);e.items[0].snippet.publishedAt=s,e.items[0].statistics.viewCount=t(e.items[0].statistics.viewCount),e.items[0].statistics.likeCount=t(e.items[0].statistics.likeCount),e.items[0].statistics.dislikeCount=t(e.items[0].statistics.dislikeCount)};return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(u,{isSignedin:s,setRoute:j,setUserInput:v}),Object(m.jsx)(f,{}),"home"===r?Object(m.jsxs)("div",{children:[Object(m.jsx)(h,{}),Object(m.jsx)(N,{videoSnippet:C,videoStatistics:T}),Object(m.jsx)(A,{commentInput:B,setCommentInput:F,comments:P,userInput:O,setComments:z}),Object(m.jsx)(E,{comments:P})]}):Object(m.jsx)(_,{setRoute:j,setIsSignedIn:a,setUserInput:v,userInput:O})]})};i.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(L,{})}),document.getElementById("root"))}},[[378,1,2]]]);
//# sourceMappingURL=main.1a3f64a2.chunk.js.map