import{g as _,h as d,i as f,j as p,r as m,f as a,o as t,c as n,a as o,t as h,F as u,k as v,l as k,b as y,_ as x}from"./entry.d2c05059.js";const b={initial:{opacity:0,y:0,x:100},enter:{opacity:1,y:0,scale:1,x:0},delay:200,class:"base-side-container"},g={class:"content"},w={class:"social-medias"},B=["href"],D=_({__name:"contact",setup(C){const{t:i}=d(),c=f([{from:"fab",icon:"fa-linkedin",link:"https://www.linkedin.com/in/otavio-henrique-039a5022b/"},{from:"fab",icon:"fa-github",link:"https://github.com/otaviocap/"},{from:"fas",icon:"envelope",link:`mailto: ${i("contact.email")}`}]);return(r,F)=>{const l=p("fa-icon"),s=m("motion");return a((t(),n("div",b,[o("div",g,[o("p",null,h(r.$t("contact.text")),1),o("div",w,[(t(!0),n(u,null,v(k(c),(e,I)=>a((t(),n("a",{href:e.link,enter:{y:0,scale:1,x:0},hovered:{scale:1.4,transition:{type:"spring",stiffness:250,mass:.1}}},[y(l,{icon:[e.from,e.icon],class:"icon"},null,8,["icon"])],8,B)),[[s]])),256))])])])),[[s]])}}});const N=x(D,[["__scopeId","data-v-2aee06e6"]]);export{N as default};
