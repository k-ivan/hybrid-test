import{d as e,r as t,s as i,p as s,a as o,b as a,o as n,c as r,e as l,F as u,f as c,g as d,t as m,w as p,h,i as f,j as g,v,k as b,l as y,m as _}from"./vendor.2c14fa92.js";let q;const w={},x=function(e,t){if(!t)return e();if(void 0===q){const e=document.createElement("link").relList;q=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in w)return;w[e]=!0;const t=e.endsWith(".css"),i=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${i}`))return;const s=document.createElement("link");return s.rel=t?"stylesheet":q,t||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),t?new Promise(((e,t)=>{s.addEventListener("load",e),s.addEventListener("error",t)})):void 0}))).then((()=>e()))};"undefined"!=typeof window&&document.addEventListener("DOMContentLoaded",(()=>{let e=document.body,t=document.getElementById("__svg__icons__dom__1624727584157__");t||(t=document.createElementNS("http://www.w3.org/2000/svg","svg"),t.style.position="absolute",t.style.width="0",t.style.height="0",t.id="__svg__icons__dom__1624727584157__"),t.innerHTML='<symbol viewBox="0 0 24 24" id="icon-comments"><path d="M12 23a1 1 0 0 1-1-1v-3H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4.1l-3.7 3.71c-.2.19-.45.29-.7.29H12m1-6v3.08L16.08 17H21V7H7v10h6M3 15H1V3a2 2 0 0 1 2-2h16v2H3v12z" /></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="icon-search"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></symbol>',e.insertBefore(t,e.firstChild)}));var I={install:i=>{e.extend(t),i.config.globalProperties.$timeAgo=t=>e(t).fromNow(),i.config.globalProperties.$formatDate=(t,i="DD/MM/YYYY")=>e(t).format(i)}},S={install:e=>{e.config.globalProperties.$sanitizeHtml=(e,t={})=>i(e,t)}};const k={name:"Header",data:()=>({navbarShown:!1,links:[{title:"Home",href:"/"},{title:"Dashboard",href:"/dashboard"}]})},L=p();s("data-v-6e8dcc28");const P={class:"header"},C={class:"header__container"},H=l("div",{class:"header__brand"},[l("svg",{width:"30",height:"30",viewBox:"0 0 28 32",fill:"#fff"},[l("path",{d:"M0 0h28l-2.546 28.75-11.486 3.25-11.42-3.25-2.548-28.75zM9.374 13l-0.31-3.624 13.412 0.004 0.308-3.496-17.568-0.004 0.93 10.68h12.168l-0.434 4.568-3.88 1.072-3.94-1.080-0.25-2.812h-3.48l0.44 5.56 7.23 1.932 7.172-1.924 0.992-10.876h-12.79z"})])],-1),E={class:"header__nav"},M={class:"header__nav-list"};o();const D=L(((e,t,i,s,o,p)=>{const h=a("RouterLink");return n(),r("header",P,[l("div",C,[H,l("nav",E,[l("ul",M,[(n(!0),r(u,null,c(o.links,(e=>(n(),r("li",{key:e.title,class:"header__nav-item"},[l(h,{class:"header__nav-link",to:e.href,exact:""},{default:L((()=>[d(m(e.title),1)])),_:2},1032,["to"])])))),128))])])])])}));k.render=D,k.__scopeId="data-v-6e8dcc28";const R={name:"Footer",computed:{year:()=>(new Date).getFullYear()}},O=p();s("data-v-50b63190");const T={class:"footer"};o();const j=O(((e,t,i,s,o,a)=>(n(),r("footer",T," © Blog "+m(a.year),1))));R.render=j,R.__scopeId="data-v-50b63190";const N={name:"App",components:{Header:k,Footer:R}},B={class:"container"},V={class:"main-content"};N.render=function(e,t,i,s,o,c){const d=a("Header"),m=a("RouterView"),p=a("Footer");return n(),r(u,null,[l(d),l("div",B,[l("main",V,[l(m)])]),l(p)],64)};const A="posts";function $(){try{return JSON.parse(localStorage.getItem(A))}catch(e){throw new Error(null==e?void 0:e.message)}}function z(e){return $().find((t=>t.slug===e))}function Y(e){const t=$();return t.unshift(e),localStorage.setItem(A,JSON.stringify(t)),t}function J(e,t){const i=$();let s=i.find((t=>t.id===e));return s&&Object.assign(s,t),localStorage.setItem(A,JSON.stringify(i)),i}function F(e=[]){const t=$().filter((t=>!e.includes(t.id)));return localStorage.setItem(A,JSON.stringify(t)),t}function U({slug:e,parentId:t=null,comment:i}){const s=$(),o=s.findIndex((t=>t.slug===e)),a=(e,t,i)=>{if(!i)return e.push(t);for(let s of e){if(s.id===i)return s.children.push(t);if(s.children.length)return a(s.children,t,i)}};return a(s[o].comments,i,t),localStorage.setItem(A,JSON.stringify(s)),s[o].comments}function W(e,t){const i=$(),s=i.findIndex((t=>t.slug===e)),o=(e,t)=>{const i=e.findIndex((e=>e.id===t));if(i>-1)return e.splice(i,1);for(let s of e)if(s.children.length)return o(s.children,t)};return o(i[s].comments,t),localStorage.setItem(A,JSON.stringify(i)),i[s].comments}function G(){return Math.random().toString(36).substr(2,9)}function K(e){return e.reduce(((e,t)=>(e++,t.children.length&&(e+=K(t.children)),e)),0)}const Q={name:"InfiniteScroll",props:{distance:{type:Number,default:0},throttle:{type:Number,default:0},parentSelector:{type:String,default:null},loading:{type:Boolean,default:!1},force:{type:Boolean,default:!1}},emits:["infinite"],mounted(){this.scrollHandler=function(e,t){let i,s,o;return function(){const a=this,n=arguments;i?(clearTimeout(s),s=setTimeout((function(){Date.now()-o>=t&&(e.apply(a,n),o=Date.now())}),Math.max(t-(Date.now()-o),0))):(e.apply(a,n),o=Date.now(),i=!0)}}(this.scroll,this.throttle),this.parentSelector?this.$nextTick((()=>{if(this.scrollable=this.$el.closest(this.parentSelector),!this.scrollable)throw new Error("parent selector not found in DOM");this.scrollable.addEventListener("scroll",this.scrollHandler)})):window.addEventListener("scroll",this.scrollHandler),this.force&&this.$emit("infinite")},beforeUnmount(){this.scrollable?(this.scrollable.removeEventListener("scroll",this.scrollHandler),delete this.scrollable):window.removeEventListener("scroll",this.scrollHandler)},methods:{isBottom(){if(this.scrollable)return this.scrollable.clientHeight+this.scrollable.scrollTop>=this.scrollable.scrollHeight-this.distance;{const e=this.$el.getBoundingClientRect().bottom+window.pageYOffset;return e<=window.innerHeight+window.pageYOffset+this.distance&&window.pageYOffset<e}},scroll(){this.isBottom()&&this.$emit("infinite")}}},X=p();s("data-v-87c9623e");const Z={class:"infinite-scroll"},ee={key:0,class:"infinite-scroll__loading loading"};o();const te=X(((e,t,i,s,o,a)=>(n(),r("div",Z,[h(e.$slots,"default",{},void 0,!0),i.loading?(n(),r("div",ee)):f("",!0)]))));Q.render=te,Q.__scopeId="data-v-87c9623e";const ie={name:"PostCard",props:{post:{type:Object,required:!0}},computed:{commentsLength(){return K(this.post.comments)}}},se=p();s("data-v-645d86fc");const oe={class:"post-card"},ae={class:"post-card__title"},ne={class:"post-card__summary"},re={class:"post-card__footer"},le={class:"post-card__comments"};o();const ue=se(((e,t,i,s,o,u)=>{const c=a("RouterLink"),p=a("SvgIcon");return n(),r("article",oe,[l("div",ae,[l(c,{to:{name:"PostDetail",params:{slug:i.post.slug}}},{default:se((()=>[d(m(i.post.title),1)])),_:1},8,["to"])]),l("div",ne,m(i.post.summary),1),l("footer",re,[l("div",le,[l(p,{name:"comments",width:"16",height:"16",color:"currentColor"}),d(" "+m(u.commentsLength),1)])])])}));ie.render=ue,ie.__scopeId="data-v-645d86fc";const ce={name:"Home",components:{InfiniteScroll:Q,PostCard:ie},data:()=>({allPosts:$(),posts:[],page:1,perPage:5,query:"",loadingMore:!1}),computed:{filteredPosts(){return this.query?this.allPosts.filter((e=>e.title.toLowerCase().includes(this.query.toLowerCase()))):[]},slicePosts(){return this.allPosts.slice(this.startIndex,this.endIndex)},total(){return this.allPosts.length},startIndex(){return(this.page-1)*this.perPage},endIndex(){return this.startIndex+this.perPage},hasNext(){return this.endIndex<this.total}},created(){this.posts=this.slicePosts},methods:{loadMore(){if(this.loadingMore)return;if(!this.hasNext)return;const e=1200*Math.random();this.page+=1,this.loadingMore=!0,setTimeout((()=>{this.posts=[...this.posts,...this.slicePosts],this.loadingMore=!1}),e)}}},de=p();s("data-v-23aa4942");const me=l("h1",null,"Posts",-1),pe={key:0},he={key:1,class:"posts-list"},fe={class:"search"},ge={key:0,class:"posts-grid"},ve={class:"posts-grid"};o();const be=de(((e,t,i,s,o,d)=>{const m=a("PostCard"),p=a("InfiniteScroll");return n(),r(u,null,[me,d.total?(n(),r("div",he,[l("div",fe,[g(l("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>o.query=e),class:"form-control",type:"text",placeholder:"Search post"},null,512),[[v,o.query]])]),d.filteredPosts.length?(n(),r("div",ge,[(n(!0),r(u,null,c(d.filteredPosts,(e=>(n(),r(m,{key:e.slug,post:e},null,8,["post"])))),128))])):(n(),r(p,{key:1,class:"posts-grid",throttle:50,distance:200,loading:o.loadingMore,onInfinite:d.loadMore},{default:de((()=>[l("div",ve,[(n(!0),r(u,null,c(o.posts,(e=>(n(),r(m,{key:e.slug,post:e},null,8,["post"])))),128))])])),_:1},8,["loading","onInfinite"]))])):(n(),r("p",pe," There are no posts yet, but soon there will be "))],64)}));ce.render=be,ce.__scopeId="data-v-23aa4942";const ye={name:"SvgIcon",props:{prefix:{type:String,default:"icon"},name:{type:String,required:!0},color:{type:String,default:"#333"}},computed:{symbolId(){return`#${this.prefix}-${this.name}`}}};ye.render=function(e,t,i,s,o,a){return n(),r("svg",{"aria-hidden":"true",fill:i.color},[l("use",{"xlink:href":a.symbolId},null,8,["xlink:href"])],8,["fill"])};const _e=b({linkActiveClass:"active",history:y(),routes:[{path:"/",component:ce,name:"Home"},{path:"/dashboard",component:()=>x((()=>import("./index.4982bc2a.js")),["/assets/index.4982bc2a.js","/assets/index.5baf6881.css","/assets/vendor.2c14fa92.js"]),name:"Dasboard"},{path:"/dashboard/create",component:()=>x((()=>import("./create.a6cd8881.js")),["/assets/create.a6cd8881.js","/assets/PostForm.759bce0a.js","/assets/vendor.2c14fa92.js","/assets/TextareaGrow.9d999fd6.js","/assets/TextareaGrow.bd115a4e.css"]),name:"Create"},{path:"/dashboard/edit/:slug",component:()=>x((()=>import("./edit.dd544284.js")),["/assets/edit.dd544284.js","/assets/PostForm.759bce0a.js","/assets/vendor.2c14fa92.js","/assets/TextareaGrow.9d999fd6.js","/assets/TextareaGrow.bd115a4e.css"]),name:"Edit"},{path:"/posts/:slug",component:()=>x((()=>import("./slug.04aa96b4.js")),["/assets/slug.04aa96b4.js","/assets/slug.40a72fb9.css","/assets/TextareaGrow.9d999fd6.js","/assets/TextareaGrow.bd115a4e.css","/assets/vendor.2c14fa92.js"]),name:"PostDetail"},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>x((()=>import("./notfound.3f0b3c60.js")),["/assets/notfound.3f0b3c60.js","/assets/vendor.2c14fa92.js"])}]});localStorage.getItem("posts")||localStorage.setItem("posts",JSON.stringify([{id:"dgn3bo2xu",date:1624707175318,slug:"costa-rica-4k",title:"COSTA RICA in 4k 60fps HDR (ultra hd)",summary:"Costa Rica is one of the most biodiverse countries in the world; it contains about 5% of the world’s species. The lush wild natural environment can be experienced all throughout the country and is easily accessible to the curious visitor. Costa Rica is a safe paradise. Unlike other countries, Costa Rica enjoys a very stable political climate and economic development, providing visitors with a tranquil setting for their stay. It is one of the few countries in the world with no army. The country and its people have a peaceful disposition, which makes for the perfect place to enjoy an unforgettable vacation. Costa Rica offers dreamlike landscapes, kind people willing to share their culture and a safe country to experience natural wonders.",text:"<p><img src='https://images.unsplash.com/photo-1555484386-25d8d24f4013?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80'></p><p>Costa Rica is one of the most biodiverse countries in the world; it contains about 5% of the world’s species. The lush wild natural environment can be experienced all throughout the country and is easily accessible to the curious visitor. Costa Rica is a safe paradise. Unlike other countries, Costa Rica enjoys a very stable political climate and economic development, providing visitors with a tranquil setting for their stay. It is one of the few countries in the world with no army. The country and its people have a peaceful disposition, which makes for the perfect place to enjoy an unforgettable vacation. Costa Rica offers dreamlike landscapes, kind people willing to share their culture and a safe country to experience natural wonders.</p><p>Costa Rica provides the perfect combination of relaxation, adventure, culture, fine cuisine and wildlife. Visitors find in Costa Rica an adventure paradise set in the most beautiful natural and safe environment. It is also the home of four World Heritage sites certified by UNESCO.</p><p>Essential Costa Rica is about promoting organic ingredients, unspoiled nature and authentic experiences. It is one of the world’s most unique places. In support of these efforts, the Costa Rica Institute of Tourism (ICT) has developed a Sustainable Tourism Certification (CST) program for those companies that place an extra effort on offering, through their everyday activities, a conscious approach towards preserving the environment and the local community.</p>",comments:[{id:"f4j67df",name:"Hacker",text:"beautiful nature",date:1624648915555,children:[{id:"f4j12dxz",name:"Hacker",text:"and country",date:1624648915556,children:[]}]}]},{id:"vigtl5ms3",date:1624648915555,slug:"one",title:"sunt aut facere repellat provident occaecati excepturi optio reprehenderit",summary:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium corporis veritatis, quae laboriosam dolores nostrum nihil minus, dolor quaerat mollitia eaque architecto magnam nobis natus corrupti. Porro ad deserunt saepe minima eos sunt deleniti quod amet ratione! Ipsa quod animi illo, vel voluptatibus mollitia fuga deleniti repudiandae nesciunt! Iure voluptates distinctio officiis cum tempore temporibus quibusdam explicabo soluta commodi! Molestiae veritatis delectus soluta earum, at explicabo reiciendis deserunt porro dolorum molestias cupiditate optio quisquam veniam ab illum, ipsa eius quibusdam iusto? Cum quasi voluptatem illo veniam. In laborum maiores repudiandae odit eius nam illo et nostrum veritatis mollitia, obcaecati harum!",text:"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",comments:[{id:"f4j67f",name:"Hacker",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae natus at tempore et eveniet libero aperiam laudantium soluta voluptatibus labore.",date:1624648915555,children:[]}]},{id:"zrhcv1pjr",date:1624648915555,slug:"two",title:"qui est esse",summary:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis officiis modi placeat veniam! Pariatur, et libero officia rerum dicta dolore? Officia voluptas beatae enim praesentium voluptate, eligendi assumenda quidem maxime?",text:"est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",comments:[]},{id:"qhl6xhb7o",date:1624648915555,slug:"three",title:"ea molestias quasi exercitationem repellat qui ipsa sit aut",summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quidem illum temporibus vitae? Excepturi, ratione!",text:"et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",comments:[]},{id:"2pp4txcga",date:1624648915555,slug:"four",title:"eum et est occaecati",summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo excepturi facilis commodi obcaecati alias.",text:"ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",comments:[]},{id:"zu9yaprg8",date:1624648915555,slug:"five",title:"nesciunt quas odio",summary:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus fuga similique alias voluptas, laboriosam id assumenda ad.",text:"repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",comments:[]},{id:"5tytvalgq",date:1624648915555,slug:"six",title:"dolorem eum magni eos aperiam quia",summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, maxime. Minus a reiciendis ipsa perspiciatis voluptates.",text:"ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",comments:[]},{id:"axuymxnbr",date:1624648915555,slug:"seven",title:"magnam facilis autem",summary:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro ut impedit a quod aperiam veritatis dignissimos voluptatum nesciunt quo, quam tempore.",text:"dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",comments:[]},{id:"9i6s0lwt3",date:1624648915555,slug:"eight",title:"dolorem dolore est ipsam",summary:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, reiciendis unde.",text:"dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",comments:[]},{id:"j4mtp8cl3",date:1624648915555,slug:"nine",title:"nesciunt iure omnis dolorem tempora et accusantium",summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta iste, fugiat laudantium accusamus sequi sint repellat? Sint architecto optio quas vero omnis!",text:"consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",comments:[]},{id:"3mazfnma1",date:0xec6ae3707de,slug:"ten",title:"optio molestias id quia eum",summary:"Lorem ipsum dolor sit amet consectetur adipisicing.",text:"quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",comments:[]}])),window.addEventListener("storage",(({key:e,newValue:t})=>{"posts"!==e||t||window.location.reload()})),_(N).use(_e).use(I).use(S).component("SvgIcon",ye).mount("#app");export{x as _,Y as a,z as b,K as c,U as d,J as e,W as f,$ as g,F as r,G as u};
