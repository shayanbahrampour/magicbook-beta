import{a as B,b as P,c as y,d as f,m as k,h as b,u as G,i as T,j as C}from"./VCard.d677b45a.js";import{m as h,a as R,u as i}from"./tag.ac3a7f43.js";import{F as c,H as D,I as v,J as S,K as x,L as u,m as g,U as E}from"./entry.0ee4e37e.js";import{m as F,u as j}from"./group.02ea404f.js";const p=c({divided:Boolean,...B(),...h(),...P(),...y(),...f(),...R(),...D(),...k()},"VBtnGroup"),d=v()({name:"VBtnGroup",props:p(),setup(e,n){let{slots:s}=n;const{themeClasses:r}=S(e),{densityClasses:t}=b(e),{borderClasses:a}=G(e),{elevationClasses:o}=T(e),{roundedClasses:l}=C(e);x({VBtn:{height:"auto",color:u(e,"color"),density:u(e,"density"),flat:!0,variant:u(e,"variant")}}),i(()=>g(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},r.value,a.value,t.value,o.value,l.value,e.class],style:e.style},s))}}),H=Symbol.for("vuetify:v-btn-toggle"),I=c({...p(),...F()},"VBtnToggle");v()({name:"VBtnToggle",props:I(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:s}=n;const{isSelected:r,next:t,prev:a,select:o,selected:l}=j(e,H);return i(()=>{const[V]=d.filterProps(e);return g(d,E({class:["v-btn-toggle",e.class]},V,{style:e.style}),{default:()=>{var m;return[(m=s.default)==null?void 0:m.call(s,{isSelected:r,next:t,prev:a,select:o,selected:l})]}})}),{next:t,prev:a,select:o}}});export{H as V};
