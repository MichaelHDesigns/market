(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[186],{6798:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/listing/[listingId]",function(){return t(59510)}])},80537:function(e,n,t){"use strict";t.d(n,{S:function(){return i},f:function(){return r}});let i="0x9e9cE7082E4B1308Cb2186EfD28ea0ABcFcF4187",r="0xe0718e419092311303ecC848152856a8f1a4d9F4"},59510:function(e,n,t){"use strict";t.r(n);var i=t(85893),r=t(18605),s=t(36841),l=t(11163),a=t(67294),c=t(80537),o=t(7160),u=t.n(o);let d=()=>{var e,n;let t=(0,l.useRouter)(),{listingId:o}=t.query,d=(0,r.DU)(),[,f]=(0,r.LN)(),{contract:y}=(0,r.cq)(c.S,"marketplace"),{data:h,isLoading:m}=(0,r.uj)(y,o),[x,g]=(0,a.useState)("");if(m)return(0,i.jsx)("div",{className:u().loadingOrError,children:"Loading..."});if(!h)return(0,i.jsx)("div",{className:u().loadingOrError,children:"Listing not found"});async function p(){try{if(d){f&&f(s.u.Goerli);return}(null==h?void 0:h.type)===s.b3.Direct&&await (null==y?void 0:y.direct.makeOffer(o,1,s.cf[s.u.Goerli].wrapped.address,x)),(null==h?void 0:h.type)===s.b3.Auction&&await (null==y?void 0:y.auction.makeBid(o,x)),alert("".concat((null==h?void 0:h.type)===s.b3.Auction?"Bid":"Offer"," created successfully!"))}catch(e){console.error(e),alert(e)}}async function v(){try{if(d){f&&f(s.u.Goerli);return}await (null==y?void 0:y.buyoutListing(o,1)),alert("NFT bought successfully!")}catch(e){console.error(e),alert(e)}}return(0,i.jsx)("div",{className:u().container,style:{},children:(0,i.jsxs)("div",{className:u().listingContainer,children:[(0,i.jsx)("div",{className:u().leftListing,children:(0,i.jsx)(r.W8,{src:h.asset.image,className:u().mainNftImage})}),(0,i.jsxs)("div",{className:u().rightListing,children:[(0,i.jsx)("h1",{children:h.asset.name}),(0,i.jsxs)("p",{children:["Owned by"," ",(0,i.jsx)("b",{children:(null===(e=h.sellerAddress)||void 0===e?void 0:e.slice(0,6))+"..."+(null===(n=h.sellerAddress)||void 0===n?void 0:n.slice(36,40))})]}),(0,i.jsxs)("h2",{children:[(0,i.jsx)("b",{children:h.buyoutCurrencyValuePerToken.displayValue})," ",h.buyoutCurrencyValuePerToken.symbol]}),(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:20,alignItems:"center"},children:[(0,i.jsx)("button",{style:{borderStyle:"none"},className:u().mainButton,onClick:v,children:"Buy"}),(0,i.jsx)("p",{style:{color:"grey"},children:"|"}),(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:8},children:[(0,i.jsx)("input",{type:"text",name:"bidAmount",className:u().textInput,onChange:e=>g(e.target.value),placeholder:"Amount",style:{marginTop:0,marginLeft:0,width:128}}),(0,i.jsx)("button",{className:u().mainButton,onClick:p,style:{borderStyle:"none",background:"transparent",width:"fit-content"},children:"Make Offer"})]})]})]})]})})};n.default=d},11163:function(e,n,t){e.exports=t(80880)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=6798)}),_N_E=e.O()}]);