"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[487],{912:function(e,n,r){r.d(n,{Df:function(){return u},TP:function(){return v},XT:function(){return l},tx:function(){return p},zv:function(){return d}});var t=r(861),i=r(757),a=r.n(i),s=r(340),c="https://api.themoviedb.org/3/",o={headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2IwYTUwOTQ3OGQwYjQ0MTY3ZDg2NzhjNTViN2FkYSIsInN1YiI6IjY1NzA5ZTYzNzlhMWMzMDExYjQyMTE4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dPOrewaeEfXMnwkoBGWv0sh0Qg4UzftTlam932QpMnw"}},u=function(){var e=(0,t.Z)(a().mark((function e(){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(c,"trending/movie/day?language=en-US"),e.next=3,s.Z.get(n,o);case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(a().mark((function e(n){var r,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(c,"search/movie?query=").concat(n,"&include_adult=false&language=en-US"),e.next=3,s.Z.get(r,o);case 3:return t=e.sent,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,t.Z)(a().mark((function e(n){var r,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(c,"movie/").concat(n,"?language=en-US"),e.next=3,s.Z.get(r,o);case 3:return t=e.sent,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(a().mark((function e(n){var r,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(c,"movie/").concat(n,"/credits?language=en-US"),e.next=3,s.Z.get(r,o);case 3:return t=e.sent,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(a().mark((function e(n){var r,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(c,"movie/").concat(n,"/reviews?language=en-US&page=1"),e.next=3,s.Z.get(r,o);case 3:return t=e.sent,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},487:function(e,n,r){r.r(n),r.d(n,{default:function(){return g}});var t=r(861),i=r(439),a=r(757),s=r.n(a),c=r(912),o=r(791),u=r(689),l=r(87),v=r(128),d="ChosenMovie_movieContainer__HQ5Sw",p="ChosenMovie_moviePoster__7jrmJ",h=r(184),f=function(e,n){return(0,h.jsx)(h.Fragment,{children:void 0!==e.movie.id&&(0,h.jsxs)("div",{className:d,children:[(0,h.jsx)("div",{children:e.movie.poster_path?(0,h.jsx)("img",{className:p,src:"https://image.tmdb.org/t/p/w300".concat(e.movie.poster_path),alt:e.movie.title}):(0,h.jsx)("p",{children:"No poster provided."})}),(0,h.jsxs)("div",{children:[(0,h.jsxs)("h2",{children:[e.movie.title," (",e.movie.release_date.split("-")[0],")"]}),(0,h.jsxs)("p",{children:["User Score: ",Math.round(10*e.movie.vote_average),"%"]}),(0,h.jsx)("h3",{children:"Overview"}),(0,h.jsx)("p",{children:e.movie.overview}),(0,h.jsx)("h4",{children:"Genres"}),(0,h.jsx)("p",{children:e.genres.length&&e.genres.map((function(e){return e.name+" "}))})]})]})})},x="MovieInfo_additionalInfContainer__vGnpz",m=function(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:x,children:[(0,h.jsx)("p",{children:"Additional information"}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)(l.rU,{to:"cast",children:"Cast"})},"cast"),(0,h.jsx)("li",{children:(0,h.jsx)(l.rU,{to:"reviews",children:"Reviews"})},"reviews")]})]}),(0,h.jsx)("div",{children:(0,h.jsx)(o.Suspense,{fallback:(0,h.jsx)("div",{children:"Loading information..."}),children:(0,h.jsx)(u.j3,{})})})]})},j="MovieDetails_backLink__dzd-p",g=function(){var e,n,r=(0,u.UO)().id,a=(0,o.useState)({}),d=(0,i.Z)(a,2),p=d[0],x=d[1],g=(0,o.useState)([]),w=(0,i.Z)(g,2),_=w[0],Z=w[1],k=null!==(e=null===(n=(0,u.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/",b=function(){var e=(0,t.Z)(s().mark((function e(n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,c.TP)(n);case 3:r=e.sent,x(r.data),Z(r.data.genres),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){b(r)}),[r]),(0,h.jsxs)("main",{children:[(0,h.jsxs)(l.rU,{className:j,to:k,children:[(0,h.jsx)(v.jTe,{size:"12"})," Go back"]}),(0,h.jsx)(f,{movie:p,genres:_}),(0,h.jsx)(m,{})]})}}}]);
//# sourceMappingURL=487.78288fbb.chunk.js.map