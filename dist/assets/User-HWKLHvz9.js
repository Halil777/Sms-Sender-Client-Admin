import{G as y,r as l,H as e}from"./index-CGy4FUhz.js";import{B as b,D as C,M as k,C as f,P as S,U as I,u as D,a as N,b as A,r as F,c as T,S as U,h as B,d as v,e as M,f as w,F as E,A as H,g as P,i as R,j as G}from"./container-B1_O1sqP.js";import{d as z}from"./index-DlKt0mSK.js";import"./iconBase-B_F_-XKo.js";const J=y.div`
  display: flex;
  align-items: center;
  gap: 20px;
`,$=y(b)`
  width: 103px;
  height: 47px;
  border-radius: 6px;
  border: 1px solid #e7e7e7;
  background-color: #ffffff;
  color: #64748b;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #f0f0f0;
  }
`,K=y(z)`
  width: 15.58px;
  height: 14.17px;
  color: #64748b;
  margin-right: 8px; /* Adjust this margin to space the icon from the text */
`,L=[{label:"All SMS",key:"all"},{label:"Success",key:"success"},{label:"Error",key:"error"}],O=()=>{const[s,n]=l.useState("all"),r=a=>{console.log("click ",a),n(a.key)},i=e.jsx(k,{onClick:r,selectedKeys:[s],items:L});return e.jsx(C,{overlay:i,trigger:["hover"],children:e.jsx($,{icon:e.jsx(K,{}),children:"Filter"})})},_=()=>e.jsx("div",{children:e.jsxs(J,{children:[e.jsx(O,{}),e.jsx(f,{isUploadButton:!0,children:"Import vcf"}),e.jsx(f,{children:"Create new user"})]})}),q=()=>e.jsx("div",{children:e.jsx(S,{leftContent:e.jsx(I,{placeholder:"Search here users..."}),rightContent:e.jsx(_,{})})}),m=l.createContext({active:-1,over:-1}),j=(s,n)=>{const{active:r,over:i,direction:a}=s;let d={};return r&&r===n?d={backgroundColor:"gray",opacity:.5}:i&&n===i&&r!==i&&(d=a==="right"?{borderRight:"1px dashed gray"}:{borderLeft:"1px dashed gray"}),d},Q=s=>{const n=l.useContext(m);return e.jsx("td",{...s,style:{...s.style,...j(n,s.id)}})},V=s=>{const n=l.useContext(m),{attributes:r,listeners:i,setNodeRef:a,isDragging:d}=w({id:s.id}),u={...s.style,cursor:"move",...d?{position:"relative",zIndex:9999,userSelect:"none"}:{},...j(n,s.id)};return e.jsx("th",{...s,ref:a,style:u,...r,...i})},W=[{key:"1",userName:"John Brown",phoneNumber:"123-456-7890",group:"Admin",dateTime:"2024-09-07 12:30 PM",action:""},{key:"2",userName:"Jim Green",phoneNumber:"987-654-3210",group:"User",dateTime:"2024-09-06 11:00 AM",action:""},{key:"3",userName:"Joe Black",phoneNumber:"456-789-1234",group:"User",dateTime:"2024-09-05 09:45 AM",action:""},{key:"4",userName:"George Hcc",phoneNumber:"321-654-9876",group:"Admin",dateTime:"2024-09-04 02:15 PM",action:""}],X=[{title:"User Name",dataIndex:"userName"},{title:"Phone Number",dataIndex:"phoneNumber"},{title:"Group",dataIndex:"group"},{title:"Date & Time",dataIndex:"dateTime"},{title:"Action",dataIndex:"action",width:"50px",render:(s,n)=>e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(E,{style:{color:"#1A54EB",cursor:"pointer"},onClick:()=>console.log("Edit",n.key)}),e.jsx(H,{style:{color:"#FF3521",cursor:"pointer"},onClick:()=>console.log("Delete",n.key)})]})}],Y=()=>{var p;const[s,n]=l.useState({active:-1,over:-1}),[r,i]=l.useState(()=>X.map((o,t)=>({...o,key:`${t}`,onHeaderCell:()=>({id:`${t}`}),onCell:()=>({id:`${t}`})}))),a=D(N(P,{activationConstraint:{distance:1}})),d=({active:o,over:t})=>{o.id!==(t==null?void 0:t.id)&&i(c=>{const g=c.findIndex(h=>h.key===(o==null?void 0:o.id)),x=c.findIndex(h=>h.key===(t==null?void 0:t.id));return R(c,g,x)}),n({active:-1,over:-1})},u=({active:o,over:t})=>{const c=r.findIndex(x=>x.key===o.id),g=r.findIndex(x=>x.key===(t==null?void 0:t.id));n({active:o.id,over:t==null?void 0:t.id,direction:g>c?"right":"left"})};return e.jsxs(A,{sensors:a,modifiers:[F],onDragEnd:d,onDragOver:u,collisionDetection:T,children:[e.jsx(U,{items:r.map(o=>o.key),strategy:B,children:e.jsx(m.Provider,{value:s,children:e.jsx(v,{rowKey:"key",columns:r,dataSource:W,components:{header:{cell:V},body:{cell:Q}}})})}),e.jsx(M,{children:e.jsx("th",{style:{backgroundColor:"gray",padding:16},children:(p=r[r.findIndex(o=>o.key===s.active)])==null?void 0:p.title})})]})},ne=()=>e.jsx("div",{children:e.jsxs(G,{children:[e.jsx(q,{}),e.jsx(Y,{})]})});export{ne as default};
