"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[611],{3506:function(n,t,r){r.d(t,{Yr:function(){return h},s3:function(){return p},qu:function(){return x}});var e,i,a,o=r(168),s=r(6444),c=s.ZP.div(e||(e=(0,o.Z)(["\n  background-color: rgba(255, 255, 255, 1);\n  color: var(--accent-color);\n  padding: 20px;\n  margin: 20px auto;\n  width: 600px;\n  text-align: center;\n  /* border: 3px solid var(--accent-color); */\n  /* border-radius: 20px; */\n"]))),u=s.ZP.p(i||(i=(0,o.Z)(["\n  text-transform: uppercase;\n  font-weight: bold;\n"]))),d=s.ZP.h2(a||(a=(0,o.Z)(["\n  font-weight: bold;\n  text-transform: uppercase;\n  font-size: 50px;\n  text-align: center;\n  color: var(--first-color-dark);\n  box-shadow: 0 0 20px var(--first-color-dark);\n"]))),l=r(184),p=function(){return(0,l.jsx)(c,{children:(0,l.jsx)(u,{children:"This movie don't have any reviews"})})},h=function(){return(0,l.jsx)(c,{children:(0,l.jsx)(u,{children:"We did not find any information about the actors"})})},x=function(){return(0,l.jsx)(d,{children:"Popular movies today"})}},8384:function(n,t,r){r.r(t),r.d(t,{default:function(){return L}});var e=r(885),i=r(2791),a=r(7689),o=r(5861),s=r(7757),c=r.n(s),u=r(2388),d="d2e94e48e038eb54fbcf63f3b797b0c5";function l(){return(l=(0,o.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,u.Z)("movie/".concat(t,"/reviews"),{params:{api_key:d}});case 3:return r=n.sent,e=r.data,n.abrupt("return",e);case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var p,h,x,f,m,v,g,Z,b,w=r(2007),j=r.n(w),y=r(9135),k=r(168),P=r(6444),_=P.ZP.div(p||(p=(0,k.Z)(["\n  margin: 20px auto;\n  padding: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 300px;\n  width: 850px;\n  background-color: rgba(255, 255, 255, 1);\n  box-shadow: 0 0 15px var(--first-color-dark);\n\n  /* border: 3px solid var(--accent-color); */\n  /* border-radius: 20px; */\n"]))),C=P.ZP.div(h||(h=(0,k.Z)(["\n  margin: 10px;\n  height: 300px;\n  width: 100vh;\n  overflow: hidden;\n"]))),E=P.ZP.div(x||(x=(0,k.Z)(["\n  height: 350px;\n  display: flex;\n  transition: translate;\n  transition-property: transform;\n  transition-duration: 300ms;\n  transition-timing-function: ease-in-out;\n"]))),O=P.ZP.ul(f||(f=(0,k.Z)(["\n  display: flex;\n  flex-wrap: no-wrap;\n  justify-content: start;\n  padding: 0 20px;\n"]))),S=P.ZP.li(m||(m=(0,k.Z)(["\n  display: flex;\n  list-style: none;\n  align-items: center;\n  margin: 0 20px;\n  min-width: 800px;\n  max-width: 800px;\n"]))),U=P.ZP.div(v||(v=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-right: 10px;\n"]))),q=P.ZP.img(g||(g=(0,k.Z)(["\n  min-height: 100px;\n  width: 100px;\n  border-radius: 50%;\n"]))),I=P.ZP.h3(Z||(Z=(0,k.Z)(["\n  text-align: center;\n"]))),M=P.ZP.p(b||(b=(0,k.Z)(["\n  min-width: 650px;\n"]))),R=r(6233),T=r(184),z=function(n){var t=n.reviews,r=(0,i.useState)([]),o=(0,e.Z)(r,2),s=o[0],c=o[1],u=(0,i.useState)(0),d=(0,e.Z)(u,2),l=d[0],p=d[1],h=(0,a.TH)();console.log(h),(0,i.useEffect)((function(){c(t.map((function(n){return(0,i.cloneElement)(n)})))}),[t]);return(0,T.jsxs)(_,{children:[(0,T.jsx)(y.bUI,{onClick:function(){p((function(n){var t=n+840;return Math.min(t,0)}))}}),(0,T.jsx)(C,{children:(0,T.jsx)(E,{style:{transform:"translate(".concat(l,"px)")},children:(0,T.jsx)(O,{children:t.map((function(n){var t=n.id,r=n.author,e=n.text,i=n.details,a=i.avatar_path,o=i.username;return console.log(a),(0,T.jsxs)(S,{children:[(0,T.jsxs)(U,{children:[(0,T.jsx)(q,{src:R,alt:o,width:"50px"}),(0,T.jsx)(I,{children:r})]}),(0,T.jsx)(M,{children:e})]},t)}))})})}),(0,T.jsx)(y.Dli,{onClick:function(){p((function(n){var t=n-840,r=-840*(s.length-1);return Math.max(t,r)}))}})]})};z.prototype={movies:j().arrayOf(j().shape({id:j().number,author:j().string,text:j().string,details:j().arrayOf(j().shape({name:j().string,avatar_path:j().string}))})).isRequired};var D=z,H=r(3506),L=function(){var n=(0,i.useState)(null),t=(0,e.Z)(n,2),r=t[0],o=t[1],s=(0,a.UO)().movieId;return(0,i.useEffect)((function(){(function(n){return l.apply(this,arguments)})(s).then((function(n){var t=n.results,r=[];t.map((function(n){var t={id:n.id,author:n.author,text:n.content,details:n.author_details};return r.push(t)})),o(r)}))}),[s]),r&&r.length>0?(0,T.jsx)(D,{reviews:r}):(0,T.jsx)(H.s3,{})}},6233:function(n,t,r){n.exports=r.p+"static/media/no-photo.0a07c758e1f343d4d246.jpg"}}]);
//# sourceMappingURL=611.133a88ae.chunk.js.map