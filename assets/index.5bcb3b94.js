import{g as e,c as t,r as s}from"./index.380ecc0f.js";import{p as a,a as l,o as n,c as i,e as o,i as d,F as r,j as h,n as c,f as p,q as u,w as g,g as m,b as v,t as x}from"./vendor.2c14fa92.js";const b={name:"Dashboard",data:()=>({allPosts:e(),page:1,perPage:5,selected:[]}),computed:{posts(){return this.allPosts.slice(this.startIndex,this.endIndex)},total(){return this.allPosts.length},startIndex(){return(this.page-1)*this.perPage},endIndex(){return this.startIndex+this.perPage},hasPrev(){return this.startIndex>0},hasNext(){return this.endIndex<this.total},selectAll:{get(){return!!this.posts&&this.selected.length==this.posts.length},set(e){const t=[];e&&this.posts.forEach((e=>t.push(e.id))),this.selected=t}},isSelected(){return Boolean(this.selected.length)}},watch:{page(){this.selected=[]}},methods:{commentsLength:e=>t(e),handleRemove(){const e=s(this.selected);this.allPosts=e,this.selectAll=[],this.page=1},handlePrev(){this.page--},handleNext(){this.page++}}},P=g();a("data-v-26820141");const _={class:"dashboard-header"},k=o("h1",null,"Posts",-1),f={class:"actions"},y=m(" Create post "),I={class:"tbl-responsive"},N={class:"tbl tbl--horizontal-bordered tbl--hover"},C=o("th",{class:"text-left"}," title ",-1),R=o("th",null,"date",-1),A=o("th",null,"comments",-1),j={class:"text-center"},w={class:"text-center"},L={class:"text-center"},S={class:"dashboard-pagination pagination"},D={key:1},E={key:1},U={key:1,class:"empty text-center"},V=m(" Start building a "),q=m(" story ");l();const z=P(((e,t,s,a,l,g)=>{const b=v("RouterLink");return n(),i(r,null,[o("header",_,[k,o("div",f,[g.isSelected&&g.posts.length?(n(),i("button",{key:0,class:"btn btn--warning",onClick:t[1]||(t[1]=(...e)=>g.handleRemove&&g.handleRemove(...e))}," Remove selected post(s) ")):d("",!0),o(b,{class:"btn btn--primary",to:{name:"Create"}},{default:P((()=>[y])),_:1})])]),l.allPosts.length?(n(),i(r,{key:0},[o("div",I,[o("table",N,[o("thead",null,[o("tr",null,[o("th",null,[h(o("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>g.selectAll=e),type:"checkbox"},null,512),[[c,g.selectAll]])]),C,R,A])]),o("tbody",null,[(n(!0),i(r,null,p(g.posts,(s=>(n(),i("tr",{key:s.slug},[o("td",j,[h(o("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>l.selected=e),type:"checkbox",value:s.id},null,8,["value"]),[[c,l.selected]])]),o("td",null,[o(b,{to:{name:"Edit",params:{slug:s.slug}}},{default:P((()=>[m(x(s.title),1)])),_:2},1032,["to"])]),o("td",w,x(e.$formatDate(s.date)),1),o("td",L,x(g.commentsLength(s.comments)),1)])))),128))])])]),o("ol",S,[o("li",{class:["pagination__item pagination__item--prev",{"is-disabled":!g.hasPrev}]},[g.hasPrev?(n(),i("a",{key:0,href:"#0",class:"pagination__link",onClick:t[4]||(t[4]=u(((...e)=>g.handlePrev&&g.handlePrev(...e)),["prevent"]))},"Prev")):(n(),i("span",D,"Prev"))],2),o("li",{class:["pagination__item pagination__item--next",{"is-disabled":!g.hasNext}]},[g.hasNext?(n(),i("a",{key:0,href:"#0",class:"pagination__link",onClick:t[5]||(t[5]=u(((...e)=>g.handleNext&&g.handleNext(...e)),["prevent"]))},"Next")):(n(),i("span",E,"Next"))],2)])],64)):(n(),i("div",U,[V,o(b,{to:{name:"Create"}},{default:P((()=>[q])),_:1})]))],64)}));b.render=z,b.__scopeId="data-v-26820141";export default b;
