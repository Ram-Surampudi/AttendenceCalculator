"use strict";(self.webpackChunkatt=self.webpackChunkatt||[]).push([[707],{597:(e,t,a)=>{a.d(t,{A:()=>s});class s{Ltps(e){const t={lecture:1,tutorial:.25,practical:.5,skill:.25};var a,s=0,r=0;for(let n in e)0<(a=parseFloat(e[n]))&&a<=100&&(r+=a*t[n],s+=100*t[n]);return s>0?Math.ceil(r/s*100):0}ExpectedAttendence(e){let{totalPeriods:t,absentPeriods:a,expectedPer:s}=e,r=0,n=0;if(t=parseFloat(t),a=parseFloat(a),s=parseFloat(s),a<t&&t>0){let e=t-a;n=Math.ceil(100*e/t),s<=100&&s>0&&a>-1&&(n<s?(s/=100,r=Math.ceil((e-s*t)/(s-1)),n=Math.ceil(100*(e+r)/(t+r))):(s/=100,r=-Math.round(e/s-t),n=Math.ceil(100*e/(t-r))))}return[r,n]}takeALeave(e){let{totalPeriods:t,absentPeriods:a,wantToAbsentPeriods:s}=e;return t=parseFloat(t),a=parseFloat(a),s=parseFloat(s),t>a&&t>0&&a>-1&&s>0?Math.ceil(100*(t-a)/(t+s)):"Something went Wrong"}GeneralAttendence(e){let{totalPeriods:t,absentPeriods:a}=e;return t=parseFloat(t),a=parseFloat(a),t>a&&t>0&&a>-1?Math.ceil(100*(t-a)/t):"Something went Wrong"}}},707:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});var s=a(43),r=a(597),n=a(346),o=a(579);const l=()=>{const e=(new r.A).GeneralAttendence,t=(new r.A).ExpectedAttendence,a={totalPeriods:"",absentPeriods:""},[l,d]=(0,s.useState)(0),[i,c]=(0,s.useState)(a),[h,p]=(0,s.useState)(0),u=e=>c({...i,[e.target.name]:e.target.value});return(0,o.jsxs)("div",{className:"body-div",children:[(0,o.jsx)("h1",{children:"General Attendence"}),(0,o.jsxs)("form",{className:"form-class",onSubmit:function(a){a.preventDefault();let s=e(i);d(s),p(s<85?t({...i,expectedPer:85}):"0")},children:[(0,o.jsx)("label",{for:"totalPeriods",children:"Enter the total conducted periods :"}),(0,o.jsx)("input",{type:"text",className:"form-data",placeholder:"Total days Conducted ",name:"totalPeriods",onChange:u,value:i.totalPeriods}),(0,o.jsx)("label",{for:"absentPeriods",children:"Enter the no.of absent periods :"}),(0,o.jsx)("input",{type:"text",className:"form-data",placeholder:"NO. of absents ",name:"absentPeriods",onChange:u,value:i.absentPeriods}),(0,o.jsxs)("div",{children:[(0,o.jsx)("button",{type:"submit",className:"form-btn save",children:" Submit "}),(0,o.jsx)("button",{onClick:()=>c(a),className:"form-btn reset",children:" reset "})]}),(0,o.jsx)("br",{}),(0,o.jsxs)("h1",{children:[" Percentage : ",l," "]}),l&&(0,o.jsxs)("h1",{children:[" periods to attend : ",h[0]]})]}),(0,o.jsx)(n.A,{})]})}},346:(e,t,a)=>{a.d(t,{A:()=>r});a(43);var s=a(579);const r=()=>(0,s.jsx)("div",{className:"note",children:(0,s.jsx)("p",{children:"Note : read the discription about this web page in home tab "})})}}]);
//# sourceMappingURL=707.d4006639.chunk.js.map