import{j as s}from"./jsx-runtime-BYYWji4R.js";import{g as P}from"./_commonjsHelpers-Cpj98o6Y.js";var x={exports:{}},N="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",R=N,j=R;function b(){}function S(){}S.resetWarningCache=b;var O=function(){function e(i,l,I,C,F,v){if(v!==j){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}}e.isRequired=e;function a(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:S,resetWarningCache:b};return r.PropTypes=r,r};x.exports=O();var A=x.exports;const n=P(A);function p({task:{id:e,title:a,state:r},onPinTask:i,onArchiveTask:l}){return s.jsxs("div",{className:`list-item ${r}`,children:[s.jsxs("label",{htmlFor:"checked",className:"checkbox","aria-label":`archiveTask-${e}`,children:[s.jsx("input",{type:"checkbox",name:"checked",id:`archiveTask-${e}`}),s.jsx("span",{className:"checkbox-custom",onClick:()=>l(e)})]}),s.jsx("label",{htmlFor:"title",className:"title","aria-label":a,children:s.jsx("input",{type:"text",value:a,readOnly:!0,name:"title",placeholder:"Input title"})}),r!=="TASK_ARCHIVED"&&s.jsx("button",{className:"pin-button",id:`pinTask-${e}`,"aria-label":`pinTask-${e}`,onClick:()=>i(e),children:s.jsx("span",{className:"icon-star"})})]})}p.propType={task:n.shape({id:n.string.isRequired,title:n.string.isRequired,state:n.string.isRequired}),onPinTask:n.func,onArchiveTask:n.func};p.__docgenInfo={description:"",methods:[],displayName:"Task"};const E={component:p,title:"Task",tags:["autodocs"]},t={args:{task:{id:"1",title:"Test Task",state:"TASK_INBOX"}}},o={args:{task:{...t.args.task,state:"TASK_PINNED"}}},c={args:{task:{...t.args.task,state:"TASK_ARCHIVED"}}};var u,T,d;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    //引数の指定
    task: {
      //Taskコンポーネントの引数
      id: "1",
      title: "Test Task",
      state: "TASK_INBOX"
    }
  }
}`,...(d=(T=t.parameters)==null?void 0:T.docs)==null?void 0:d.source}}};var k,h,y;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_PINNED"
    }
  }
}`,...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var g,f,_;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_ARCHIVED"
    }
  }
}`,...(_=(f=c.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};const D=["Default","Pinned","Archived"],W=Object.freeze(Object.defineProperty({__proto__:null,Archived:c,Default:t,Pinned:o,__namedExportsOrder:D,default:E},Symbol.toStringTag,{value:"Module"}));export{t as D,n as P,p as T,W as a};
