import{m as c,u as i,a as f}from"./tag.d6fa89af.js";import{b as V,c as B,d as g}from"./layout.5251fe6a.js";import{Z as h,o as k,c as A,aI as M,F as m,H as P,I as p,J as S,a1 as b,m as n}from"./entry.db479e10.js";function C(){const a=h(!1);return k(()=>{window.requestAnimationFrame(()=>{a.value=!0})}),{ssrBootStyles:A(()=>a.value?void 0:{transition:"none !important"}),isBooted:M(a)}}const w=m({...c(),...V({fullHeight:!0}),...P()},"VApp"),I=p()({name:"VApp",props:w(),setup(a,s){let{slots:e}=s;const t=S(a),{layoutClasses:r,layoutStyles:o,getLayoutItem:l,items:d,layoutRef:y}=B(a),{rtlClasses:v}=b();return i(()=>{var u;return n("div",{ref:y,class:["v-application",t.themeClasses.value,r.value,v.value,a.class],style:[o.value,a.style]},[n("div",{class:"v-application__wrap"},[(u=e.default)==null?void 0:u.call(e)])])}),{getLayoutItem:l,items:d,theme:t}}});const L=m({scrollable:Boolean,...c(),...f({tag:"main"})},"VMain"),T=p()({name:"VMain",props:L(),setup(a,s){let{slots:e}=s;const{mainStyles:t}=g(),{ssrBootStyles:r}=C();return i(()=>n(a.tag,{class:["v-main",{"v-main--scrollable":a.scrollable},a.class],style:[t.value,r.value,a.style]},{default:()=>{var o,l;return[a.scrollable?n("div",{class:"v-main__scroller"},[(o=e.default)==null?void 0:o.call(e)]):(l=e.default)==null?void 0:l.call(e)]}})),{}}});export{I as V,T as a,C as u};