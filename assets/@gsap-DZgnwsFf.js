import{r as f}from"./react-Cm02TMAq.js";import{g as h}from"./gsap-ZORhgBxb.js";/*!
 * @gsap/react 2.1.0
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/let p=typeof window<"u"?f.useLayoutEffect:f.useEffect,a=t=>t&&!Array.isArray(t)&&typeof t=="object",n=[],A={},d=h;const g=(t,e=n)=>{let r=A;a(t)?(r=t,t=null,e="dependencies"in r?r.dependencies:n):a(e)&&(r=e,e="dependencies"in r?r.dependencies:n);let{scope:s,revertOnUpdate:m}=r,[y,c]=f.useState(!1);t&&typeof t!="function"&&console.warn("First parameter must be a function or config object");const o=d.context(()=>{},s),x=S=>o.add(null,S),u=()=>o.revert(),i=e&&e.length&&!m;return p(()=>{if(t&&o.add(t,s),!i||!y)return u},e),i&&p(()=>(c(!0),u),n),{context:o,contextSafe:x}};g.register=t=>{d=t};g.headless=!0;export{g as u};
