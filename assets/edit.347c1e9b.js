import{b as o,e as s}from"./index.f90ded98.js";import{_ as t}from"./PostForm.759bce0a.js";import{o as e,c as a,e as r,F as n,b as d}from"./vendor.2c14fa92.js";import"./TextareaGrow.9d999fd6.js";const m={name:"Edit",components:{PostForm:t},beforeRouteEnter(s,t,e){const{slug:a}=s.params;o(a)?e():e({name:"NotFound"})},data:()=>({post:{}}),created(){const s=this.$route.params.slug,t=o(s);this.post=t},methods:{handleSave(o){s(this.post.id,o),this.$router.push({name:"Dasboard"})}}},i=r("h1",null,"Edit",-1);m.render=function(o,s,t,m,l,p){const u=d("PostForm");return e(),a(n,null,[i,r(u,{"is-edit":"","form-model":l.post,onSave:p.handleSave},null,8,["form-model","onSave"])],64)};export default m;
