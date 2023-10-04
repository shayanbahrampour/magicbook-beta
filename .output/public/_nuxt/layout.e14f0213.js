import{r as B,a3 as ne,b as Z,B as ae,ah as se,aa as U,F,a9 as P,c as r,af as z,ab as W,ad as X,o as ue,ag as _,aC as le,an as ie,C as re,D as ce,a1 as $}from"./entry.0ee4e37e.js";function ve(a){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const v=B(),u=B();if(ne){const t=new ResizeObserver(n=>{a==null||a(n,t),n.length&&(c==="content"?u.value=n[0].contentRect:u.value=n[0].target.getBoundingClientRect())});Z(()=>{t.disconnect()}),ae(v,(n,l)=>{l&&(t.unobserve(U(l)),u.value=void 0),n&&t.observe(U(n))},{flush:"post"})}return{resizeRef:v,contentRect:se(u)}}const C=Symbol.for("vuetify:layout"),q=Symbol.for("vuetify:layout-item"),V=1e3,pe=F({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),me=F({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function ge(){const a=P(C);if(!a)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:a.getLayoutItem,mainRect:a.mainRect,mainStyles:a.mainStyles}}function he(a){const c=P(C);if(!c)throw new Error("[Vuetify] Could not find injected layout");const v=a.id??`layout-item-${ie()}`,u=W("useLayoutItem");_(q,{id:v});const t=X(!1);re(()=>t.value=!0),ce(()=>t.value=!1);const{layoutItemStyles:n,layoutItemScrimStyles:l}=c.register(u,{...a,active:r(()=>t.value?!1:a.active.value),id:v});return Z(()=>c.unregister(v)),{layoutItemStyles:n,layoutRect:c.layoutRect,layoutItemScrimStyles:l}}const fe=(a,c,v,u)=>{let t={top:0,left:0,right:0,bottom:0};const n=[{id:"",layer:{...t}}];for(const l of a){const p=c.get(l),g=v.get(l),L=u.get(l);if(!p||!g||!L)continue;const h={...t,[p.value]:parseInt(t[p.value],10)+(L.value?parseInt(g.value,10):0)};n.push({id:l,layer:h}),t=h}return n};function Ie(a){const c=P(C,null),v=r(()=>c?c.rootZIndex.value-100:V),u=B([]),t=z(new Map),n=z(new Map),l=z(new Map),p=z(new Map),g=z(new Map),{resizeRef:L,contentRect:h}=ve(),Y=r(()=>{const o=new Map,f=a.overlaps??[];for(const e of f.filter(i=>i.includes(":"))){const[i,s]=e.split(":");if(!u.value.includes(i)||!u.value.includes(s))continue;const y=t.get(i),m=t.get(s),R=n.get(i),S=n.get(s);!y||!m||!R||!S||(o.set(s,{position:y.value,amount:parseInt(R.value,10)}),o.set(i,{position:m.value,amount:-parseInt(S.value,10)}))}return o}),I=r(()=>{const o=[...new Set([...l.values()].map(e=>e.value))].sort((e,i)=>e-i),f=[];for(const e of o){const i=u.value.filter(s=>{var y;return((y=l.get(s))==null?void 0:y.value)===e});f.push(...i)}return fe(f,t,n,p)}),H=r(()=>!Array.from(g.values()).some(o=>o.value)),b=r(()=>I.value[I.value.length-1].layer),G=r(()=>({"--v-layout-left":$(b.value.left),"--v-layout-right":$(b.value.right),"--v-layout-top":$(b.value.top),"--v-layout-bottom":$(b.value.bottom),...H.value?void 0:{transition:"none"}})),x=r(()=>I.value.slice(1).map((o,f)=>{let{id:e}=o;const{layer:i}=I.value[f],s=n.get(e),y=t.get(e);return{id:e,...i,size:Number(s.value),position:y.value}})),N=o=>x.value.find(f=>f.id===o),O=W("createLayout"),T=X(!1);ue(()=>{T.value=!0}),_(C,{register:(o,f)=>{let{id:e,order:i,position:s,layoutSize:y,elementSize:m,active:R,disableTransitions:S,absolute:k}=f;l.set(e,i),t.set(e,s),n.set(e,y),p.set(e,R),S&&g.set(e,S);const j=le(q,O==null?void 0:O.vnode).indexOf(o);j>-1?u.value.splice(j,0,e):u.value.push(e);const D=r(()=>x.value.findIndex(w=>w.id===e)),M=r(()=>v.value+I.value.length*2-D.value*2),ee=r(()=>{const w=s.value==="left"||s.value==="right",E=s.value==="right",oe=s.value==="bottom",K={[s.value]:0,zIndex:M.value,transform:`translate${w?"X":"Y"}(${(R.value?0:-110)*(E||oe?-1:1)}%)`,position:k.value||v.value!==V?"absolute":"fixed",...H.value?void 0:{transition:"none"}};if(!T.value)return K;const d=x.value[D.value];if(!d)throw new Error(`[Vuetify] Could not find layout item "${e}"`);const A=Y.value.get(e);return A&&(d[A.position]+=A.amount),{...K,height:w?`calc(100% - ${d.top}px - ${d.bottom}px)`:m.value?`${m.value}px`:void 0,left:E?void 0:`${d.left}px`,right:E?`${d.right}px`:void 0,top:s.value!=="bottom"?`${d.top}px`:void 0,bottom:s.value!=="top"?`${d.bottom}px`:void 0,width:w?m.value?`${m.value}px`:void 0:`calc(100% - ${d.left}px - ${d.right}px)`}}),te=r(()=>({zIndex:M.value-1}));return{layoutItemStyles:ee,layoutItemScrimStyles:te,zIndex:M}},unregister:o=>{l.delete(o),t.delete(o),n.delete(o),p.delete(o),g.delete(o),u.value=u.value.filter(f=>f!==o)},mainRect:b,mainStyles:G,getLayoutItem:N,items:x,layoutRect:h,rootZIndex:v});const J=r(()=>["v-layout",{"v-layout--full-height":a.fullHeight}]),Q=r(()=>({zIndex:v.value,position:c?"relative":void 0,overflow:c?"hidden":void 0}));return{layoutClasses:J,layoutStyles:Q,getLayoutItem:N,items:x,layoutRect:h,layoutRef:L}}export{he as a,pe as b,Ie as c,ge as d,me as m,ve as u};