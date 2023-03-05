"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[519],{41519:function(t,r,e){e.r(r),e.d(r,{NFTDrop:function(){return o}});var a=e(84277),i=e(36841),n=e(2593),s=e(9279);e(13550),e(25025),e(70332),e(8455),e(26219),e(68834),e(65660),e(61303),e(71497),e(49242),e(94317),e(13670),e(79120),e(97604),e(8187),e(19362),e(59190),e(54730),e(36250),e(85725),e(38730),e(48507),e(38398),e(2090),e(86841),e(49561),e(80580),e(40246),e(54253),e(91559),e(40553),e(26),e(69392),e(29526),e(24601),e(46878),e(77033),e(87033),e(5158),e(27761),e(20583),e(92355),e(84194),e(51121),e(58613),e(32484),e(78435),e(54098),e(54146),e(62555),e(40721),e(77437),e(59189),e(82037),e(2162),e(64063),e(34161),e(50266),e(98839),e(65815),e(52378),e(55173),e(51375),e(43320),e(77191);class o extends i.aK{constructor(t,r,e){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=arguments.length>4?arguments[4]:void 0,c=arguments.length>5?arguments[5]:void 0,h=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new i.cM(t,r,s,n);super(h,e,c),(0,a._)(this,"abi",void 0),(0,a._)(this,"encoder",void 0),(0,a._)(this,"estimator",void 0),(0,a._)(this,"metadata",void 0),(0,a._)(this,"sales",void 0),(0,a._)(this,"platformFees",void 0),(0,a._)(this,"events",void 0),(0,a._)(this,"roles",void 0),(0,a._)(this,"interceptor",void 0),(0,a._)(this,"royalties",void 0),(0,a._)(this,"claimConditions",void 0),(0,a._)(this,"revealer",void 0),(0,a._)(this,"checkout",void 0),(0,a._)(this,"erc721",void 0),(0,a._)(this,"owner",void 0),this.abi=s,this.metadata=new i.am(this.contractWrapper,i.d3,this.storage),this.roles=new i.an(this.contractWrapper,o.contractRoles),this.royalties=new i.ao(this.contractWrapper,this.metadata),this.sales=new i.ap(this.contractWrapper),this.claimConditions=new i.ar(this.contractWrapper,this.metadata,this.storage),this.encoder=new i.al(this.contractWrapper),this.estimator=new i.aW(this.contractWrapper),this.events=new i.aX(this.contractWrapper),this.platformFees=new i.aZ(this.contractWrapper),this.erc721=new i.aB(this.contractWrapper,this.storage,c),this.revealer=new i.aq(this.contractWrapper,this.storage,i.d4.name,()=>this.erc721.nextTokenIdToMint()),this.interceptor=new i.aY(this.contractWrapper),this.owner=new i.a$(this.contractWrapper),this.checkout=new i.cL(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.readContract.address}async totalSupply(){let t=await this.totalClaimedSupply(),r=await this.totalUnclaimedSupply();return t.add(r)}async getAllClaimed(t){let r=n.O$.from(t?.start||0).toNumber(),e=n.O$.from(t?.count||a.c).toNumber(),i=Math.min((await this.contractWrapper.readContract.nextTokenIdToClaim()).toNumber(),r+e);return await Promise.all(Array.from(Array(i).keys()).map(t=>this.get(t.toString())))}async getAllUnclaimed(t){let r=n.O$.from(t?.start||0).toNumber(),e=n.O$.from(t?.count||a.c).toNumber(),i=n.O$.from(Math.max((await this.contractWrapper.readContract.nextTokenIdToClaim()).toNumber(),r)),s=n.O$.from(Math.min((await this.contractWrapper.readContract.nextTokenIdToMint()).toNumber(),i.toNumber()+e));return await Promise.all(Array.from(Array(s.sub(i).toNumber()).keys()).map(t=>this.erc721.getTokenMetadata(i.add(t).toString())))}async totalClaimedSupply(){return this.erc721.totalClaimedSupply()}async totalUnclaimedSupply(){return this.erc721.totalUnclaimedSupply()}async isTransferRestricted(){let t=await this.contractWrapper.readContract.hasRole((0,i.bC)("transfer"),s.d);return!t}async createBatch(t,r){return this.erc721.lazyMint(t,r)}async getClaimTransaction(t,r){let e=!(arguments.length>2)||void 0===arguments[2]||arguments[2];return this.erc721.getClaimTransaction(t,r,{checkERC20Allowance:e})}async claimTo(t,r){let e=!(arguments.length>2)||void 0===arguments[2]||arguments[2];return this.erc721.claimTo(t,r,{checkERC20Allowance:e})}async claim(t){let r=!(arguments.length>1)||void 0===arguments[1]||arguments[1];return this.claimTo(await this.contractWrapper.getSignerAddress(),t,r)}async burn(t){return this.erc721.burn(t)}async get(t){return this.erc721.get(t)}async ownerOf(t){return this.erc721.ownerOf(t)}async balanceOf(t){return this.erc721.balanceOf(t)}async balance(){return this.erc721.balance()}async isApproved(t,r){return this.erc721.isApproved(t,r)}async transfer(t,r){return this.erc721.transfer(t,r)}async setApprovalForAll(t,r){return this.erc721.setApprovalForAll(t,r)}async setApprovalForToken(t,r){return{receipt:await this.contractWrapper.sendTransaction("approve",[t,r])}}async call(t){for(var r=arguments.length,e=Array(r>1?r-1:0),a=1;a<r;a++)e[a-1]=arguments[a];return this.contractWrapper.call(t,...e)}}(0,a._)(o,"contractRoles",["admin","minter","transfer"])}}]);