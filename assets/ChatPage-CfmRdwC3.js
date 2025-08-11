import{c as t,j as e,h,u,e as p,r as g,a as j,i as f,B as n,s as N,k as v}from"./index-CRWsUwIj.js";import{S as y}from"./scroll-area-BlYKrb9e.js";/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],b=t("copy",w);/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],M=t("download",k);/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],S=t("message-square",_);/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],q=t("send",z);/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=[["path",{d:"M17 14V2",key:"8ymqnk"}],["path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",key:"m61m77"}]],L=t("thumbs-down",D);/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",key:"emmmcr"}]],C=t("thumbs-up",A);function T({className:a,...c}){return e.jsx("textarea",{"data-slot":"textarea",className:h("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",a),...c})}function I(){const{clientId:a}=u(),c=p(),[r,l]=g.useState(""),{data:d=[],isLoading:o}=j({queryKey:["messages",a],queryFn:()=>v(a??""),staleTime:1e3*60*5}),{mutate:m}=f({mutationFn:N,onSuccess:s=>{c.setQueryData(["messages",a],i=>[...i,s])}}),x=s=>{s.preventDefault(),m({clientId:a??"",content:r,createdAt:new Date,sender:"agent"}),l("")};return o?e.jsx("div",{className:"flex-1 flex items-center justify-center",children:e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx("div",{className:"h-8 w-8 border-4 border-primary border-t-transparent rounded-full animate-spin"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Loading messages..."})]})}):e.jsxs("div",{className:"flex-1 flex flex-col h-[calc(100vh-120px)]",children:[e.jsxs(y,{className:"flex-1 p-4",children:[d.length===0&&e.jsxs("div",{className:"mt-10 flex-1 flex flex-col items-center justify-center gap-4",children:[e.jsx(S,{className:"h-8 w-8 text-muted-foreground"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"No hay mensajes"})]}),e.jsx("div",{className:"space-y-4",children:d.map((s,i)=>e.jsx("div",{className:"w-full",children:s.sender==="client"?e.jsxs("div",{className:"flex gap-2 max-w-[80%]",children:[e.jsx("div",{className:"h-8 w-8 rounded-full bg-primary flex-shrink-0"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-sm font-medium",children:"NexTalk"}),e.jsx("span",{className:"text-sm text-muted-foreground",children:s.createdAt.toLocaleDateString()})]}),e.jsx("div",{className:"p-3 bg-muted/50 rounded-lg",children:e.jsx("p",{className:"text-sm whitespace-pre-wrap",children:s.content})}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(n,{variant:"ghost",size:"icon",className:"h-8 w-8",children:e.jsx(b,{className:"h-4 w-4"})}),e.jsx(n,{variant:"ghost",size:"icon",className:"h-8 w-8",children:e.jsx(M,{className:"h-4 w-4"})}),e.jsx(n,{variant:"ghost",size:"icon",className:"h-8 w-8",children:e.jsx(C,{className:"h-4 w-4"})}),e.jsx(n,{variant:"ghost",size:"icon",className:"h-8 w-8",children:e.jsx(L,{className:"h-4 w-4"})})]})]})]}):e.jsxs("div",{className:"flex flex-col items-end",children:[e.jsxs("div",{className:"text-right mb-1",children:[e.jsx("span",{className:"text-sm font-medium mr-2",children:"G5"}),e.jsx("span",{className:"text-sm text-muted-foreground",children:s.createdAt.toLocaleDateString()})]}),e.jsx("div",{className:"bg-black text-white p-3 rounded-lg max-w-[80%]",children:e.jsx("p",{className:"text-sm whitespace-pre-wrap",children:s.content})})]})},i))})]}),e.jsx("div",{className:"p-4 border-t",children:e.jsx("form",{onSubmit:x,children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(T,{placeholder:"Type a message as a customer",value:r,onChange:s=>l(s.target.value),className:"min-h-[44px] h-[44px] resize-none py-3"}),e.jsxs(n,{className:"h-[44px] px-4 flex items-center gap-2",children:[e.jsx(q,{className:"h-4 w-4"}),e.jsx("span",{children:"Send"})]})]})})})]})}export{I as default};
