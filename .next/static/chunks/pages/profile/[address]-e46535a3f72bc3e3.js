(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[376],{36220:function(e,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile/[address]",function(){return n(17917)}])},80537:function(e,i,n){"use strict";n.d(i,{S:function(){return t},f:function(){return s}});let t="0x9e9cE7082E4B1308Cb2186EfD28ea0ABcFcF4187",s="0xe0718e419092311303ecC848152856a8f1a4d9F4"},5993:function(e,i,n){"use strict";n.d(i,{Z:function(){return a}});var t=n(85893);n(67294);var s=n(34485),r=n.n(s);function a(e){let{maxWidth:i,children:n}=e;return(0,t.jsx)("div",{className:"".concat(r().container," ").concat(r()[i]),children:n})}},17917:function(e,i,n){"use strict";n.r(i),n.d(i,{default:function(){return j}});var t=n(85893),s=n(15742),r=n.n(s);function a(){let e="#";for(let i=0;i<6;i++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}var l=n(5993),o=n(80537),c=n(11163),d=n(67294),_=n(49365),u=n.n(_);function f(e){let{height:i,width:n}=e;return(0,t.jsx)("div",{style:{width:n,height:i,borderRadius:"inherit"},className:u().skeleton})}var g=n(18605),h=n(41664),m=n.n(h);let[x,b,p,C]=[a(),a(),a(),a()];function j(){let e=(0,c.useRouter)(),[i,n]=(0,d.useState)("nfts"),{contract:s}=(0,g.cq)(o.f),{contract:a}=(0,g.cq)(o.S,"marketplace"),{data:_,isLoading:u}=(0,g.YZ)(s,e.query.address),{data:h,isLoading:j}=(0,g.Os)(a,{seller:e.query.address});return(0,t.jsxs)(l.Z,{maxWidth:"lg",children:[(0,t.jsxs)("div",{className:r().profileHeader,children:[(0,t.jsx)("div",{className:r().coverImage,style:{background:"linear-gradient(90deg, ".concat(x,", ").concat(b,")")}}),(0,t.jsx)("div",{className:r().profilePicture,style:{background:"linear-gradient(90deg, ".concat(p,", ").concat(C,")")}}),(0,t.jsx)("h1",{className:r().profileName,children:e.query.address?e.query.address.toString().substring(0,4)+"..."+e.query.address.toString().substring(38,42):(0,t.jsx)(f,{width:"320"})})]}),(0,t.jsxs)("div",{className:r().tabs,children:[(0,t.jsx)("h3",{className:"".concat(r().tab," \n        ").concat("nfts"===i?r().activeTab:""),onClick:()=>n("nfts"),children:"NFTs"}),(0,t.jsx)("h3",{className:"".concat(r().tab," \n        ").concat("listings"===i?r().activeTab:""),onClick:()=>n("listings"),children:"Listings"})]}),(0,t.jsx)("div",{className:"".concat("nfts"===i?r().activeTabContent:r().tabContent),children:(0,t.jsx)("div",{className:"main",children:j?(0,t.jsx)("div",{children:"Loading listings..."}):(0,t.jsx)("div",{className:r().listingGrid,children:null==h?void 0:h.map(i=>(0,t.jsxs)("div",{className:r().listingShortView,onClick:()=>e.push("/listing/".concat(i.id)),children:[(0,t.jsx)(g.W8,{src:i.asset.image,style:{borderRadius:16,width:"100%",height:"100%"}}),(0,t.jsx)("h2",{className:r().nameContainer,children:(0,t.jsx)(m(),{href:"/listing/".concat(i.id),className:r().name,children:i.asset.name})}),(0,t.jsxs)("p",{children:[(0,t.jsx)("b",{children:i.buyoutCurrencyValuePerToken.displayValue})," ",i.buyoutCurrencyValuePerToken.symbol]})]},i.id))})})}),(0,t.jsx)("div",{className:"".concat("listings"===i?r().activeTabContent:r().tabContent),children:j?(0,t.jsx)("div",{children:"Loading listings..."}):(0,t.jsx)("div",{className:r().listingGrid,children:null==h?void 0:h.map(i=>(0,t.jsxs)("div",{className:r().listingShortView,onClick:()=>e.push("/listing/".concat(i.id)),children:[(0,t.jsx)(g.W8,{src:i.asset.image,style:{borderRadius:16,width:"100%",height:"100%"}}),(0,t.jsx)("h2",{className:r().nameContainer,children:(0,t.jsx)(m(),{href:"/listing/".concat(i.id),className:r().name,children:i.asset.name})}),(0,t.jsxs)("p",{children:[(0,t.jsx)("b",{children:i.buyoutCurrencyValuePerToken.displayValue})," ",i.buyoutCurrencyValuePerToken.symbol]})]},i.id))})})]})}},34485:function(e){e.exports={container:"Container_container__WAGEk",xs:"Container_xs__lmLxX",sm:"Container_sm__NxnH_",md:"Container_md__R9xsg",lg:"Container_lg__ri4gN",xl:"Container_xl__2fgyR"}},49365:function(e){e.exports={skeleton:"Skeleton_skeleton__2C_Ou",pulse:"Skeleton_pulse__kM_6B"}},15742:function(e){e.exports={profileHeader:"Profile_profileHeader__arpuo",coverImage:"Profile_coverImage__yIjJ_",profilePicture:"Profile_profilePicture__fsn1m",profileName:"Profile_profileName__GAb9p",tabs:"Profile_tabs__KIjhj",tab:"Profile_tab__fUg_d",activeTab:"Profile_activeTab__405ra",tabContent:"Profile_tabContent__O8tOH",activeTabContent:"Profile_activeTabContent__HPUSR",listingGrid:"Profile_listingGrid__WpiO2",listingShortView:"Profile_listingShortView__kciVu",listingTypeContainer:"Profile_listingTypeContainer__g6qqz",listingType:"Profile_listingType__fY3eA",listingTypeLabel:"Profile_listingTypeLabel__0H0IV",loadingOrError:"Profile_loadingOrError__o988w",listingContainer:"Profile_listingContainer__qZCV0",leftListing:"Profile_leftListing__q7ulr",mainNftImage:"Profile_mainNftImage__8ubVE",rightListing:"Profile_rightListing__hS35_"}},11163:function(e,i,n){e.exports=n(80880)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=36220)}),_N_E=e.O()}]);