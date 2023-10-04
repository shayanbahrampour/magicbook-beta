import{F,G as ce,H as N,I as M,J as q,K as oe,L as x,m as l,M as B,N as O,O as de,P as re,c as w,Q as T,R as ue,S as ve,T as _,U as me,r as C,j as d,k as g,q as A,l as b,t as V,V as D,W as h,X as S,s as H,u as fe,Y as pe}from"./entry.0ee4e37e.js";import{V as he}from"./index.0631e3df.js";import{m as K,a as U,u as ke}from"./tag.ac3a7f43.js";import{m as ye,u as be,a as Ce,b as Ve}from"./group.02ea404f.js";import{m as X,a as ge,b as _e,c as xe,d as Ie,e as Pe,f as Se,R as Ae,u as Be,g as we,h as De,i as Ge,j as Le,k as je,l as Ee,n as Re,V as I,o as P,p as z,q as $e,r as Oe}from"./VCard.d677b45a.js";import{V as Te}from"./VSkeletonLoader.4332f6c3.js";const J=Symbol.for("vuetify:v-chip-group"),ze=F({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:ce},...K(),...ye({selectedClass:"v-chip--selected"}),...U(),...N(),...X({variant:"tonal"})},"VChipGroup"),Fe=M()({name:"VChipGroup",props:ze(),emits:{"update:modelValue":e=>!0},setup(e,r){let{slots:n}=r;const{themeClasses:c}=q(e),{isSelected:t,select:m,next:u,prev:o,selected:f}=be(e,J);return oe({VChip:{color:x(e,"color"),disabled:x(e,"disabled"),filter:x(e,"filter"),variant:x(e,"variant")}}),ke(()=>l(e.tag,{class:["v-chip-group",{"v-chip-group--column":e.column},c.value,e.class],style:e.style},{default:()=>{var i;return[(i=n.default)==null?void 0:i.call(n,{isSelected:t,select:m,next:u,prev:o,selected:f.value})]}})),{}}}),Ne=F({activeClass:String,appendAvatar:String,appendIcon:B,closable:Boolean,closeIcon:{type:B,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:B,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:O(),onClickOnce:O(),...ge(),...K(),..._e(),...xe(),...Ce(),...Ie(),...Pe(),...Se(),...U({tag:"span"}),...N(),...X({variant:"tonal"})},"VChip"),Q=M()({name:"VChip",directives:{Ripple:Ae},props:Ne(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,r){let{attrs:n,emit:c,slots:t}=r;const{t:m}=de(),{borderClasses:u}=Be(e),{colorClasses:o,colorStyles:f,variantClasses:i}=we(e),{densityClasses:k}=De(e),{elevationClasses:W}=Ge(e),{roundedClasses:Y}=Le(e),{sizeClasses:Z}=je(e),{themeClasses:ee}=q(e),G=re(e,"modelValue"),a=Ve(e,J,!1),v=Ee(e,n),ae=w(()=>e.link!==!1&&v.isLink.value),p=w(()=>!e.disabled&&e.link!==!1&&(!!a||e.link||v.isClickable.value)),te=w(()=>({"aria-label":m(e.closeLabel),onClick(s){s.stopPropagation(),G.value=!1,c("click:close",s)}}));function L(s){var y;c("click",s),p.value&&((y=v.navigate)==null||y.call(v,s),a==null||a.toggle())}function le(s){(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),L(s))}return()=>{const s=v.isLink.value?"a":e.tag,y=!!(e.appendIcon||e.appendAvatar),se=!!(y||t.append),ne=!!(t.close||e.closable),j=!!(t.filter||e.filter)&&a,E=!!(e.prependIcon||e.prependAvatar),ie=!!(E||t.prepend),R=!a||a.isSelected.value;return G.value&&T(l(s,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":p.value,"v-chip--filter":j,"v-chip--pill":e.pill},ee.value,u.value,R?o.value:void 0,k.value,W.value,Y.value,Z.value,i.value,a==null?void 0:a.selectedClass.value,e.class],style:[R?f.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:v.href.value,tabindex:p.value?0:void 0,onClick:L,onKeydown:p.value&&!ae.value&&le},{default:()=>{var $;return[Re(p.value,"v-chip"),j&&l(he,{key:"filter"},{default:()=>[T(l("div",{class:"v-chip__filter"},[t.filter?l(P,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},t.filter):l(I,{key:"filter-icon",icon:e.filterIcon},null)]),[[ve,a.isSelected.value]])]}),ie&&l("div",{key:"prepend",class:"v-chip__prepend"},[t.prepend?l(P,{key:"prepend-defaults",disabled:!E,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},t.prepend):l(_,null,[e.prependIcon&&l(I,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&l(z,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),l("div",{class:"v-chip__content"},[(($=t.default)==null?void 0:$.call(t,{isSelected:a==null?void 0:a.isSelected.value,selectedClass:a==null?void 0:a.selectedClass.value,select:a==null?void 0:a.select,toggle:a==null?void 0:a.toggle,value:a==null?void 0:a.value.value,disabled:e.disabled}))??e.text]),se&&l("div",{key:"append",class:"v-chip__append"},[t.append?l(P,{key:"append-defaults",disabled:!y,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},t.append):l(_,null,[e.appendIcon&&l(I,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&l(z,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),ne&&l("div",me({key:"close",class:"v-chip__close"},te.value),[t.close?l(P,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},t.close):l(I,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[ue("ripple"),p.value&&e.ripple,null]])}}}),Me={class:"red-text mb-6"},qe={class:"d-flex flex-column rtl"},He={class:"f-18"},Ke={class:"mb-2 font-weight-regular"},Ue={class:"f-14 mb-4",style:{opacity:"0.8"}},Xe={class:"d-flex flex-wrap"},Je={__name:"HomeBookCard",props:{item:{type:Object,default:()=>({})},tags:{type:Array,default:()=>[]}},setup(e){const r=e;let n=C([]);async function c(){try{r.item.tags&&(n=Object.values(r.item.tags))}catch(t){console.error("Error:",t)}}return c(),(t,m)=>(d(),g("div",Me,[l(Oe,{class:"rounded-xl d-flex align-center card-box-shadow justify-end pl-2","min-height":"180",to:`/read/${e.item.id}`},{default:A(()=>[b("div",qe,[b("h4",He,V(e.item.title),1),b("h4",Ke,V(e.item.author),1),b("span",Ue,V(e.item.description),1),b("div",Xe,[(d(!0),g(_,null,D(h(n),(u,o)=>(d(),S(Q,{key:o,class:"ml-2 mb-2",color:"primary",label:"","max-width":"100"},{default:A(()=>[H(V(u),1)]),_:2},1024))),128))])]),l($e,{src:e.item.cover,class:"d-flex align-center justify-center ml-4 rounded-xl","min-width":"140",height:"200",cover:""},null,8,["src"])]),_:1},8,["to"])]))}},Qe=Je,We={class:"px-4 pt-2 pb-6"},sa={__name:"home",setup(e){const r=fe().$axios;let n=C([]),c=C(!0),t=C([]);const m=C(["تاریخی","کسب و کار ","تک","فضا","کتاب","سیاسی","استراتژی"]);async function u(){try{const o=await r.get("/books.json");n.value=Object.values(o.data),c.value=!1}catch(o){c.value=!1,console.error("Error:",o)}}return u(),(o,f)=>(d(),g("div",We,[l(Fe,{class:"rtl mb-2",color:"primary",modelValue:h(t),"onUpdate:modelValue":f[0]||(f[0]=i=>pe(t)?t.value=i:t=i),multiple:"","selected-class":"text-primary"},{default:A(()=>[(d(!0),g(_,null,D(h(m),(i,k)=>(d(),S(Q,{key:k},{default:A(()=>[H(V(i),1)]),_:2},1024))),128))]),_:1},8,["modelValue"]),h(c)?(d(),S(h(Te),{key:1})):(d(!0),g(_,{key:0},D(h(n),(i,k)=>(d(),S(Qe,{key:k,item:i},null,8,["item"]))),128))]))}};export{sa as default};
