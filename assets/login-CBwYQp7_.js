import{R as l,u as N,r as v,j as s}from"./index-CGDC2yk-.js";var w={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},j=l.createContext&&l.createContext(w),C=["attr","size","title"];function E(e,t){if(e==null)return{};var r=_(e,t),n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function _(e,t){if(e==null)return{};var r={},n=Object.keys(e),a,o;for(o=0;o<n.length;o++)a=n[o],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f.apply(this,arguments)}function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?O(Object(r),!0).forEach(function(n){z(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function z(e,t,r){return t=k(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function k(e){var t=D(e,"string");return typeof t=="symbol"?t:String(t)}function D(e,t){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function x(e){return e&&e.map((t,r)=>l.createElement(t.tag,m({key:r},t.attr),x(t.child)))}function P(e){return t=>l.createElement(A,f({attr:m({},e.attr)},t),x(e.child))}function A(e){var t=r=>{var{attr:n,size:a,title:o}=e,h=E(e,C),d=a||r.size||"1em",i;return r.className&&(i=r.className),e.className&&(i=(i?i+" ":"")+e.className),l.createElement("svg",f({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,h,{className:i,style:m(m({color:e.color||r.color},r.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),o&&l.createElement("title",null,o),e.children)};return j!==void 0?l.createElement(j.Consumer,null,r=>t(r)):t(w)}function L(e){return P({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"},child:[]}]})(e)}function T(e){return P({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(e)}const B=()=>{const e=N(),[t,r]=v.useState(""),[n,a]=v.useState(""),[o]=v.useState(""),h=()=>[...Array(30)].map(()=>Math.random().toString(36)[2]).join(""),d=async c=>{c.preventDefault();const y=await i(n);try{const u=await fetch("http://44.202.104.77/api/22103/user",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({correo_electronico:t,contraseña_hash:y})});if(u.ok){const g=h();localStorage.setItem("token",g);const p=await u.json();console.log("Datos de usuario:",p),e(`/${p.rol}`)}}catch{}},i=async c=>{const u=new TextEncoder().encode(c),g=await crypto.subtle.digest("SHA-256",u),b=Array.from(new Uint8Array(g)).map(S=>S.toString(16).padStart(2,"0")).join("");return console.log("Contraseña encriptada:",b),console.log("Correo:",t),b};return s.jsx("div",{className:"login-page",children:s.jsx("div",{className:"wrapper",children:s.jsxs("form",{onSubmit:d,children:[s.jsx("h1",{children:"Login"}),o&&s.jsx("div",{className:"error",children:o}),s.jsxs("div",{className:"input-box",children:[s.jsx("input",{type:"email",placeholder:"Email",value:t,onChange:c=>r(c.target.value),required:!0}),s.jsx(T,{className:"icon"})]}),s.jsxs("div",{className:"input-box",children:[s.jsx("input",{type:"password",placeholder:"Password",value:n,onChange:c=>a(c.target.value),required:!0}),s.jsx(L,{className:"icon"})]}),s.jsx("button",{className:"button",type:"submit",children:"Login"})]})})})};export{B as default};
