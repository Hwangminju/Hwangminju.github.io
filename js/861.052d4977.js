"use strict";(self["webpackChunkdev_faker"]=self["webpackChunkdev_faker"]||[]).push([[861],{3861:function(e,l,a){a.r(l),a.d(l,{default:function(){return M}});var s=a(3396),o=a(3435),u=a(1334),n=a(6422),c=a(1957);const d=e=>((0,s.dD)("data-v-72a13dd7"),e=e(),(0,s.Cn)(),e),r=d((()=>(0,s._)("div",{class:"content-container"},[(0,s._)("span",{class:"title"},"REGISTER")],-1))),t={class:"mx-3"},i={class:"mx-3"},m=d((()=>(0,s._)("span",{class:"ml-2"},"ID",-1))),p={class:"mx-1"},v={class:"mx-3"},_={class:"mx-3"},k=d((()=>(0,s._)("span",{class:"ml-2"},"Password",-1))),w={class:"mx-1"},f={key:0,class:"duplicated-user"},h=d((()=>(0,s._)("p",null,[(0,s.Uk)("중복된 아이디입니다."),(0,s._)("br"),(0,s.Uk)("다른 아이디로 시도해 주세요.")],-1))),C=[h],W=(0,s.Uk)(" OK "),b=(0,s.Uk)(" Cancel ");function g(e,l,a,d,h,g){const U=(0,s.up)("font-awesome-icon"),x=(0,s.up)("CommonModal");return(0,s.wg)(),(0,s.j4)(x,{ref:"commonModal"},{default:(0,s.w5)((()=>[r,(0,s.Wm)(n.O,{class:"mt-3"},{default:(0,s.w5)((()=>[(0,s._)("div",t,[(0,s._)("div",i,[(0,s.Wm)(U,{icon:"user"}),m]),(0,s._)("div",p,[(0,s.Wm)(c.h,{placeholder:"아이디",modelValue:d.userId,"onUpdate:modelValue":l[0]||(l[0]=e=>d.userId=e),required:""},null,8,["modelValue"])])]),(0,s._)("div",v,[(0,s._)("div",_,[(0,s.Wm)(U,{icon:"key"}),k]),(0,s._)("div",w,[(0,s.Wm)(c.h,{placeholder:"비밀번호",type:"password",modelValue:d.userPassword,"onUpdate:modelValue":l[1]||(l[1]=e=>d.userPassword=e),required:""},null,8,["modelValue"])])]),d.isDuplicatedUser?((0,s.wg)(),(0,s.iD)("div",f,C)):(0,s.kq)("",!0),(0,s.Wm)(u.h,null,{default:(0,s.w5)((()=>[(0,s.Wm)(o.T,{color:"#2c4f91",dark:"",large:"",block:"",onClick:d.submit},{default:(0,s.w5)((()=>[W])),_:1},8,["onClick"])])),_:1}),(0,s.Wm)(u.h,null,{default:(0,s.w5)((()=>[(0,s.Wm)(o.T,{color:"#2c4f91",dark:"",large:"",block:"",onClick:d.cancel},{default:(0,s.w5)((()=>[b])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},512)}var U=a(7245),x=a(4870),y=a(6265),I=a.n(y),V={name:"RegisterModal",components:{CommonModal:U.Z},props:{content:Array},setup(){const e=(0,x.iH)(null),l=(0,x.iH)(null);let a=(0,x.iH)(""),s=(0,x.iH)(""),o=(0,x.iH)(!1);const u=()=>(e.value.open(),new Promise((e=>{l.value=e}))),n=async()=>{await I().put("https://dev-faker-be.herokuapp.com/users",{user_id:a.value,user_pw:s.value},{headers:{accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*"}}).then((u=>{200===u.status&&(console.log("register success"),o.value=!1,a.value="",s.value="",o.value=!1),e.value.close(),l.value(!0)})).catch((e=>{!1===e.response.data.result&&(a.value="",s.value="",o.value=!0)}))},c=()=>{a.value="",s.value="",o.value=!1,e.value.close(),l.value(!1)};return{commonModal:e,show:u,submit:n,cancel:c,userId:a,userPassword:s,isDuplicatedUser:o}}},D=a(89);const H=(0,D.Z)(V,[["render",g],["__scopeId","data-v-72a13dd7"]]);var M=H}}]);
//# sourceMappingURL=861.052d4977.js.map