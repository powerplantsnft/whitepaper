(this.webpackJsonpfrontend_base_dapp=this.webpackJsonpfrontend_base_dapp||[]).push([[0],{252:function(t){t.exports=JSON.parse('[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_initBaseURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"activateWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_user","type":"address[]"}],"name":"removeWhitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"}],"name":"setMaxMintAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"},{"internalType":"uint256","name":"_newWalletLimit","type":"uint256"}],"name":"setMaxMintAmountAndWalletLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newSupply","type":"uint256"}],"name":"setMaxSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newWalletLimit","type":"uint256"}],"name":"setWalletLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"walletLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"whitelistOnly","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_user","type":"address[]"}],"name":"whitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]')},262:function(t,e,n){},263:function(t,e,n){},264:function(t,e,n){},265:function(t,e,n){},266:function(t,e,n){},272:function(t,e,n){},273:function(t,e,n){},274:function(t,e,n){},287:function(t,e){},310:function(t,e){},312:function(t,e){},389:function(t,e){},391:function(t,e){},424:function(t,e){},429:function(t,e){},431:function(t,e){},438:function(t,e){},451:function(t,e){},474:function(t,e){},483:function(t,e){},485:function(t,e){},554:function(t,e,n){},555:function(t,e,n){},556:function(t,e,n){},557:function(t,e,n){},558:function(t,e,n){},559:function(t,e,n){},560:function(t,e,n){},561:function(t,e,n){},562:function(t,e,n){},563:function(t,e,n){},564:function(t,e,n){},565:function(t,e,n){},567:function(t,e,n){"use strict";n.r(e);var a=n(0),s=n.n(a),i=n(33),c=n.n(i),r=(n(262),n(263),n(4)),o=n(5),l=n(9),u=n(8),d=(n.p,n.p+"static/media/CenterPic.6eabdc78.png"),p=n.p+"static/media/Pink Caladium.d0e793f6.webp",j=(n(264),n(82)),b=n(575),m=n(571),y=n(576),O=n(572),h=n(573),x=(n(265),n(35)),f=(n(266),n(1));s.a.Component;function g(){document.getElementById("mint").scrollIntoView()}function v(){document.getElementById("team").scrollIntoView()}function w(){document.getElementById("roadmap").scrollIntoView()}function T(){window.open("https://opensea.io/")}function N(){window.open("https://www.powerplantsnft.com/gallery","_self")}var C=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).onGallery=function(){t.props.history.push("/some/path")},t}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"header-control",children:[Object(f.jsx)(b.a,{collapseOnSelect:!0,expand:"lg",children:Object(f.jsxs)(m.a,{children:[Object(f.jsx)(b.a.Brand,{href:"/home",style:{paddingTop:10},children:Object(f.jsx)("img",{src:d,width:289,height:115.1,alt:"logo"})}),Object(f.jsx)(b.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(f.jsxs)(b.a.Collapse,{id:"responsive-navbar-nav",children:[Object(f.jsx)(y.a,{className:"me-auto"}),Object(f.jsxs)(y.a,{style:{borderRadius:0,padding:"0 20px 0 20px"},children:[Object(f.jsx)(y.a.Link,{className:"bruh",style:{fontWeight:900},onClick:g,children:"MINT"}),Object(f.jsx)(y.a.Link,{className:"bruh",style:{fontWeight:900},onClick:w,children:"ROADMAP"}),Object(f.jsx)(y.a.Link,{className:"bruh",style:{fontWeight:900},onClick:v,children:"TEAM"}),Object(f.jsx)(y.a.Link,{className:"bruh",style:{fontWeight:900},onClick:T,children:"OPENSEA"}),Object(f.jsx)(y.a.Link,{className:"bruh",style:{fontWeight:900},onClick:N,children:"GALLERY"}),Object(f.jsx)(j.b,{className:"bruh navbar-header-link",style:{fontWeight:900,color:"white",textDecoration:"none",borderRadius:30,marginRight:"20px"},to:"/gallery",children:"GALLERY"}),Object(f.jsx)(j.b,{className:"bruh navbar-header-link",style:{fontWeight:900,color:"white",textDecoration:"none",borderRadius:30,marginRight:"20px"},to:"/shop",children:"SHOP"}),Object(f.jsx)(j.b,{className:"bruh navbar-header-link",style:{fontWeight:900,color:"white",textDecoration:"none",borderRadius:30,marginRight:"20px"},to:"/whitepaper",children:"WHITEPAPER"}),Object(f.jsx)("text",{style:{width:20}}),Object(f.jsxs)("div",{children:[Object(f.jsxs)("a",{style:{textDecoration:"none",color:"white",paddingRight:5},target:"_blank",rel:"noopener noreferrer",href:"https://instagram.com/",children:[" ",Object(f.jsx)(x.d,{size:32})]}),Object(f.jsxs)("a",{style:{textDecoration:"none",color:"white",paddingLeft:5,paddingRight:5},target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/",children:[" ",Object(f.jsx)(x.f,{size:32})]}),Object(f.jsxs)("a",{style:{textDecoration:"none",color:"white",paddingLeft:5},target:"_blank",rel:"noopener noreferrer",href:"https://discord.gg",children:[" ",Object(f.jsx)(x.a,{size:32}),"   "]})]}),Object(f.jsx)("text",{style:{width:0}}),Object(f.jsx)("div",{})]})]})]})}),Object(f.jsxs)("div",{className:"header-content",children:[Object(f.jsx)(m.a,{children:Object(f.jsxs)(O.a,{children:[Object(f.jsxs)(h.a,{md:6,xs:12,className:"about-description",style:{textAlign:"center"},children:[Object(f.jsx)("header",{children:Object(f.jsxs)("span",{style:{color:"white",fontStyle:"normal"},children:["The new generation of plants.",Object(f.jsx)("br",{})]})}),Object(f.jsx)("p",{style:{color:"white"},children:"No watering required."}),Object(f.jsx)("text",{className:"xbutton",onClick:g,children:"MINT"})]}),Object(f.jsx)(h.a,{md:6,xs:12,className:"image-control",children:Object(f.jsx)("img",{style:{borderRadius:0},src:p,alt:"about gif"})})]})}),Object(f.jsx)("div",{className:"header-content-buttons-container"})]}),Object(f.jsx)("div",{})]})})}}]),n}(s.a.Component),_=n.p+"static/media/legif.e473ad46.gif",k=(n(272),function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"about-control",style:{background:"#141416"},children:Object(f.jsx)(m.a,{style:{border:"solid #7E7E7F 1px",padding:20},children:Object(f.jsxs)(O.a,{children:[Object(f.jsx)(h.a,{md:6,xs:12,className:"image-control",children:Object(f.jsx)("img",{style:{border:"solid black 2px",borderRadius:0},src:_,alt:"about gif"})}),Object(f.jsxs)(h.a,{md:6,xs:12,className:"about-description",children:[Object(f.jsxs)("header",{style:{color:"white",fontStyle:"normal"},children:["Utility",Object(f.jsx)("br",{})]}),Object(f.jsxs)("p",{style:{color:"white"},children:[Object(f.jsx)("text",{style:{fontSize:30},children:"Donating 10% from the initial release, 2% from secondary sales."})," ",Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)("text",{style:{color:"#7E7E7F"},children:"We will be making contributions towards DAOs (decentralized autonomous organizations) to benefit renewable energy (such as solar, wind, etc), carbon offsets, and support ETH 2.0 Proof of Stake."})]})]})]})})})}}]),n}(s.a.Component)),M=n(15),S=(n(273),n.p+"static/media/award.14ea6b22.JPG"),A=n.p+"static/media/community.4baca058.JPG",E=n.p+"static/media/diamont.3cec241c.JPG",I=n.p+"static/media/money.e63839ce.JPG",D=n.p+"static/media/paintbrush.7501d99d.JPG",P=n.p+"static/media/tickets.4eac7c08.JPG",R=n.p+"static/media/plant.fe24cbae.JPG",B=(n(274),function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"card_layout",children:[1==this.props.svg&&Object(f.jsx)("img",{className:"card_svg",src:S}),2==this.props.svg&&Object(f.jsx)("img",{className:"card_svg",src:A}),3==this.props.svg&&Object(f.jsx)("img",{className:"card_svg",src:E}),4==this.props.svg&&Object(f.jsx)("img",{className:"card_svg",src:I}),5==this.props.svg&&Object(f.jsx)("img",{className:"card_svg",src:D}),6==this.props.svg&&Object(f.jsx)("img",{className:"card_svg",src:P}),7==this.props.svg&&Object(f.jsx)("img",{className:"card_svg",src:R}),Object(f.jsx)("h3",{className:"card_title",children:this.props.title}),Object(f.jsx)("p",{className:"card_text",children:this.props.description}),Object(f.jsx)("hr",{className:"card_bar"})]})}}]),n}(s.a.Component)),z=n(43),L=n(25),W=n.n(L),F=n(95),U=(n(93),n(251),n(252),n(96)),G=n(253),H=n(3),J={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},K=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CONNECTION_REQUEST":return Object(H.a)(Object(H.a)({},J),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(H.a)(Object(H.a)({},t),{},{loading:!1,account:e.payload.account,smartContract:e.payload.smartContract,web3:e.payload.web3});case"CONNECTION_FAILED":return Object(H.a)(Object(H.a)({},J),{},{loading:!1,errorMsg:e.payload});case"UPDATE_ACCOUNT":return Object(H.a)(Object(H.a)({},t),{},{account:e.payload.account});default:return t}},Y={loading:!1,name:"",totalSupply:0,cost:0,error:!1,errorMsg:""},Q=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CHECK_DATA_REQUEST":return Object(H.a)(Object(H.a)({},t),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(H.a)(Object(H.a)({},t),{},{loading:!1,name:e.payload.name,totalSupply:e.payload.totalSupply,cost:e.payload.cost,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(H.a)(Object(H.a)({},Y),{},{loading:!1,error:!0,errorMsg:e.payload});default:return t}},V=Object(U.b)({blockchain:K,data:Q}),q=[G.a],$=Object(U.c)(U.a.apply(void 0,q)),X=Object(U.d)(V,$),Z=function(t){return{type:"CHECK_DATA_FAILED",payload:t}},tt=function(t){return function(){var t=Object(F.a)(W.a.mark((function t(e){var n,a,s;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e({type:"CHECK_DATA_REQUEST"}),t.prev=1,t.next=4,X.getState().blockchain.smartContract.methods.name().call();case 4:return n=t.sent,t.next=7,X.getState().blockchain.smartContract.methods.totalSupply().call();case 7:return a=t.sent,t.next=10,X.getState().blockchain.smartContract.methods.cost().call();case 10:s=t.sent,e({type:"CHECK_DATA_SUCCESS",payload:{name:n,totalSupply:a,cost:s}}),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(1),console.log(t.t0),e(Z("Could not load data from contract."));case 18:case"end":return t.stop()}}),t,null,[[1,14]])})));return function(e){return t.apply(this,arguments)}}()};var et=function(){var t=Object(a.useState)({title:"Certificate of authenticity",svg:1,description:"asfdf"}),e=Object(M.a)(t,2),n=e[0],s=(e[1],Object(a.useState)({title:"Community",svg:2,description:"asdasdfasdff"})),i=Object(M.a)(s,2),c=i[0],r=(i[1],Object(a.useState)({title:"Raffles",svg:3,description:"asfffdf"})),o=Object(M.a)(r,2),l=o[0],u=(o[1],Object(a.useState)({title:"Win Rare Seeds & Art",svg:6,description:"asasdffedf"})),d=Object(M.a)(u,2),p=d[0],j=(d[1],Object(a.useState)({title:"Bonus Content",svg:4,description:"asasdffdf"})),b=Object(M.a)(j,2),m=b[0],y=(b[1],Object(a.useState)({title:"Special Offer Codes",svg:5,description:"asdasdffef"})),O=Object(M.a)(y,2),h=O[0],x=(O[1],Object(a.useState)({title:"Planting Trees",svg:7,description:"asdasdffef"})),g=Object(M.a)(x,2),v=g[0],w=(g[1],Object(z.b)()),T=Object(z.c)((function(t){return t.blockchain})),N=(Object(z.c)((function(t){return t.data})),Object(a.useState)("")),C=Object(M.a)(N,2),_=(C[0],C[1],Object(a.useState)(!1)),k=Object(M.a)(_,2),S=(k[0],k[1],Object(a.useState)(0)),A=Object(M.a)(S,2);return A[0],A[1],Object(a.useEffect)((function(){""!==T.account&&null!==T.smartContract&&w(tt(T.account))}),[T.account]),Object(f.jsx)("div",{className:"utility_container",children:Object(f.jsx)("div",{className:"utility_section",children:Object(f.jsx)("div",{className:"utility_right_bar",children:Object(f.jsxs)("div",{className:"cards_layout2",children:[Object(f.jsx)(B,{title:n.title,svg:n.svg,description:n.description}),Object(f.jsx)(B,{title:c.title,svg:c.svg,description:c.description}),Object(f.jsx)(B,{title:l.title,svg:p.svg,description:l.description}),Object(f.jsx)(B,{title:m.title,svg:l.svg,description:m.description}),Object(f.jsx)(B,{title:h.title,svg:m.svg,description:h.description}),Object(f.jsx)(B,{title:p.title,svg:h.svg,description:p.description}),Object(f.jsx)(B,{title:v.title,svg:v.svg,description:v.description})]})})})})},nt=n(254),at=n.n(nt),st=(n.p,n(554),function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"meet-control",children:[Object(f.jsx)(m.a,{children:Object(f.jsxs)("header",{style:{textAlign:"center",color:"white"},children:[Object(f.jsx)("br",{})," ",Object(f.jsx)("span",{style:{fontStyle:"normal"},children:"Check out our assortment."})]})}),Object(f.jsxs)(at.a,{breakpoints:[{breakpoint:500,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:1280,settings:{slidesToShow:3,slidesToScroll:1}}],dots:!1,arrows:!0,showSides:!0,sidesOpacity:.5,sideSize:.1,slidesToScroll:1,slidesToShow:4,scrollOnDevice:!0,children:[Object(f.jsx)("div",{children:Object(f.jsx)("img",{className:"caroImg",src:"https://raw.githubusercontent.com/DeadBanditz/banditzsite/main/image0.jpg",alt:"boy1"})}),Object(f.jsx)("div",{children:Object(f.jsx)("img",{className:"caroImg",src:"https://raw.githubusercontent.com/DeadBanditz/banditzsite/main/image1.jpg",alt:"boy2"})}),Object(f.jsx)("div",{children:Object(f.jsx)("img",{className:"caroImg",src:"https://raw.githubusercontent.com/DeadBanditz/banditzsite/main/image0.jpg",alt:"boy1"})}),Object(f.jsx)("div",{children:Object(f.jsx)("img",{className:"caroImg",src:"https://raw.githubusercontent.com/DeadBanditz/banditzsite/main/image1.jpg",alt:"boy2"})}),Object(f.jsx)("div",{children:Object(f.jsx)("img",{className:"caroImg",src:"https://raw.githubusercontent.com/DeadBanditz/banditzsite/main/image0.jpg",alt:"boy1"})}),Object(f.jsx)("div",{children:Object(f.jsx)("img",{className:"caroImg",src:"https://raw.githubusercontent.com/DeadBanditz/banditzsite/main/image1.jpg",alt:"boy2"})}),Object(f.jsx)("div",{children:Object(f.jsx)("img",{className:"caroImg",src:"https://raw.githubusercontent.com/DeadBanditz/banditzsite/main/image0.jpg",alt:"boy1"})}),Object(f.jsx)("div",{children:Object(f.jsx)("img",{className:"caroImg",src:"https://raw.githubusercontent.com/DeadBanditz/banditzsite/main/image1.jpg",alt:"boy2"})}),Object(f.jsx)("div",{children:Object(f.jsx)("img",{className:"caroImg",src:"https://raw.githubusercontent.com/DeadBanditz/banditzsite/main/image0.jpg",alt:"boy1"})}),Object(f.jsx)("div",{children:Object(f.jsx)("img",{className:"caroImg",src:"https://raw.githubusercontent.com/DeadBanditz/banditzsite/main/image1.jpg",alt:"boy2"})})]})]})}}]),n}(s.a.Component)),it=n.p+"static/media/about.73d1c470.gif";n(555);var ct=function(){var t=Object(z.b)(),e=Object(z.c)((function(t){return t.blockchain})),n=(Object(z.c)((function(t){return t.data})),Object(a.useState)("")),s=Object(M.a)(n,2),i=(s[0],s[1]),c=Object(a.useState)(!1),r=Object(M.a)(c,2),o=r[0],l=r[1],u=Object(a.useState)(0),d=Object(M.a)(u,2),p=d[0],j=d[1],b=function(){""!==e.account&&null!==e.smartContract&&t(tt(e.account))};return Object(a.useEffect)((function(){b()}),[e.account]),Object(f.jsx)("div",{className:"mint-control",id:"mint",children:Object(f.jsx)(m.a,{children:Object(f.jsxs)(O.a,{children:[Object(f.jsx)(h.a,{md:6,xs:12,className:"mint-image",children:Object(f.jsx)("img",{src:it,alt:"mint gif"})}),Object(f.jsxs)(h.a,{md:6,xs:12,className:"mint-description",children:[Object(f.jsxs)("header",{style:{fontStyle:"normal"},children:["MINT YOUR ",Object(f.jsx)("text",{style:{color:"white"},children:"POWER PLANT"})]}),Object(f.jsx)("text",{style:{textAlign:"center",height:10}}),Object(f.jsxs)("div",{className:"number-control",children:[Object(f.jsx)(x.b,{color:"white",size:40,onClick:function(){p<=0||j(p-1)}}),Object(f.jsx)("span",{id:"inputBox",style:{color:"white"},children:p}),Object(f.jsx)(x.c,{color:"white",size:40,onClick:function(){p>=25||j(p+1)}})]}),Object(f.jsx)("p",{style:{marginTop:0,marginBottom:0},children:"0.08 ETH + Gas"}),""===e.account||null===e.smartContract?Object(f.jsxs)("div",{className:"flex-column",children:[Object(f.jsx)("button",{className:"ybutton",onClick:function(t){},children:"COMING SOON"}),""!==e.errorMsg?Object(f.jsx)("div",{style:{textAlign:"center",fontSize:20,color:"white"},children:e.errorMsg}):null]}):Object(f.jsx)("button",{className:"ybutton",onClick:function(n){var a;n.preventDefault(),a=1,(a=document.getElementById("inputBox").textContent)<=0||(i("Minting your Official BooCrew NFT..."),l(!0),e.smartContract.methods.mint(e.account,a).send({gasLimit:285e3*a,to:"0x7181d2038B849A18145eb153b8bEFC552e52c37A",from:e.account,value:e.web3.utils.toWei((.077*a).toString(),"ether")}).once("error",(function(t){console.log(t),i("Sorry, something went wrong. Check your transaction on Etherscan to find out what happened!"),l(!1)})).then((function(n){i("Your BooCrew NFT has been successfully minted!"),l(!1),t(tt(e.account))}))),b()},children:o?"BUSY":"MINT"})]})]})})})},rt=(n(556),n(255)),ot=(n(557),function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(r.a)(this,n),(a=e.call(this,t)).state={open:!1},a}return Object(o.a)(n,[{key:"render",value:function(){var t=this;return Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{onClick:function(){t.setState({open:!t.state.open})},"aria-controls":"example","aria-expanded":this.state.open,className:"collapse-header-control",children:[Object(f.jsxs)("div",{className:"collapse-header",children:[Object(f.jsx)("h4",{children:this.props.tag}),Object(f.jsx)("p",{children:this.props.title})]}),Object(f.jsx)(x.e,{})]}),Object(f.jsx)(rt.a,{in:this.state.open,children:Object(f.jsx)("div",{id:"example",className:"collapse-content display-linebreak",children:this.props.content})})]})}}]),n}(s.a.Component)),lt=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(r.a)(this,n),(a=e.call(this,t)).state={roadmaps:[{tag:"Phase 1",title:"Inception",content:"-Website is launched \n -Social Media marketing campaigns are launched \n -Create partnerships with tree foundations"},{tag:"Phase 2",title:"Community",content:"-Raffle giveaway once we reach 25,000 Discord Members\n-Merchandise is launched\n-Whitelist"},{tag:"Phase 3",title:"Launch",content:"-NFTs are sold to the public\n-Unlockable content\n-Exclusive community group launched"},{tag:"Phase 4",title:"Donation",content:"-Donation of 10% to charitable foundations\n -Contributions to DAOs \n-Trees are planted and matched"},{tag:"Phase 5",title:"After Launch",content:"-$50,000 is pumped into the Power Plants Fund for ongoing developments and marketing campaigns\n-Rare owners get original art/seeds mailed to them\n-2% of secondary marketplace sales are donated\n-Raffles on social media platforms"},{tag:"Phase 6",title:"Metaverse",content:"-The next phase..."}]},a}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"roadmap-control",id:"roadmap",style:{textAlign:"center"},children:Object(f.jsxs)(m.a,{children:[Object(f.jsxs)("header",{style:{fontWeight:900},children:[Object(f.jsx)("span",{children:"POWER PLANTS"})," ROAD MAP"]}),Object(f.jsx)("p",{className:"roadmap-description",children:"Our Roadmap is under construction!Placeholder"}),Object(f.jsxs)(O.a,{style:{alignContent:"center",justifyContent:"center",textAlign:"center"},children:[Object(f.jsx)(h.a,{xs:12,md:6,children:Object(f.jsx)("img",{src:it})}),Object(f.jsx)(h.a,{style:{color:"black",alignContent:"center",justifyContent:"center",textAlign:"center"},children:this.state.roadmaps.map((function(t,e){return Object(f.jsx)(ot,{style:{textAlign:"center",color:"black"},tag:t.tag,title:t.title,content:t.content},e)}))})]})]})})}}]),n}(s.a.Component),ut=(n(558),n(559),function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"state_card_layout",children:[Object(f.jsx)("p",{className:"state_card_title",children:this.props.title}),Object(f.jsx)("p",{className:"state_card_text",children:Object(f.jsx)("span",{className:"state_card_span",children:this.props.text})}),Object(f.jsx)("hr",{className:"state_card_bar"})]})}}]),n}(s.a.Component)),dt=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(r.a)(this,n),(a=e.call(this,t)).state={data:[{title:"15",text:"Total in Collection"},{title:"10K",text:"Trees Planted"},{title:"25M",text:"Total Donated"},{title:"22",text:"Countries World Wide"},{title:"5",text:"Industry Awards"}]},a}return Object(o.a)(n,[{key:"render",value:function(){return console.log(this.state.data),Object(f.jsxs)("div",{className:"state_layout",children:[Object(f.jsx)("div",{className:"state_cards",children:this.state.data.map((function(t){return Object(f.jsx)("div",{className:"state_card",children:Object(f.jsx)(ut,{title:t.title,text:t.text})})}))}),Object(f.jsx)("div",{className:"state_bg"})]})}}]),n}(s.a.Component),pt=(n(560),n.p+"static/media/about.73d1c470.gif"),jt=(n(561),function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"teammember-control",style:{textAlign:"center",justifyContent:"center"},children:[Object(f.jsx)("img",{style:{maxHeight:500,maxWidth:500},src:this.props.imageUrl,alt:"team member"}),Object(f.jsxs)("div",{className:"teammember-description",children:[Object(f.jsx)("p",{className:"teammember-name",children:this.props.name}),Object(f.jsx)("p",{className:"teammember-occupation",children:this.props.title})]})]})}}]),n}(s.a.Component)),bt=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(r.a)(this,n),(a=e.call(this,t)).state={teams:[{image:pt,title:"Founder",name:"Muhani"},{image:pt,title:"Founder",name:"Thomas"},{image:pt,title:"Artist",name:"Alexander"},{image:pt,title:"Developer",name:"Joseph"},{image:pt,title:"Social Media",name:"Emily"}]},a}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"team-control",id:"team",children:Object(f.jsxs)(m.a,{children:[Object(f.jsx)("header",{style:{fontStyle:"normal",color:"white"},children:" Team Members "}),Object(f.jsx)(O.a,{children:this.state.teams.map((function(t,e){return Object(f.jsx)(h.a,{style:{justifyContent:"center",textAlign:"center"},children:Object(f.jsx)(jt,{imageUrl:t.image,title:t.title,name:t.name},e)},e)}))})]})})}}]),n}(s.a.Component),mt=(n(562),function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"footer-control",id:"socials",children:Object(f.jsxs)(m.a,{className:"footer",children:[Object(f.jsx)("p",{className:"hidden",children:"\xa92021 \xa0 PowerPlants"}),Object(f.jsx)("div",{children:Object(f.jsx)("p",{style:{fontSize:15},children:Object(f.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://metaversesolutions.ai/",style:{textDecoration:"none",color:"white",textAlign:"right"},children:"Website by Metaverse Solutions, LLC"})})})]})})}}]),n}(s.a.Component)),yt=(n(563),function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"footer_layout",children:Object(f.jsxs)("div",{className:"footer_section",children:[Object(f.jsx)("div",{className:"footer_text_room",children:Object(f.jsx)("p",{className:"footer_title",children:"PARTNERS"})}),Object(f.jsx)("div",{className:"footer_bg_1"})]})})}}]),n}(s.a.Component)),Ot=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(C,{}),Object(f.jsx)(k,{}),Object(f.jsx)(et,{className:"utilitysec"}),Object(f.jsx)(st,{}),Object(f.jsx)(ct,{}),Object(f.jsx)(lt,{}),Object(f.jsx)(dt,{}),Object(f.jsx)(bt,{}),Object(f.jsx)(mt,{}),Object(f.jsx)(yt,{})]})}}]),n}(s.a.Component),ht=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(C,{}),Object(f.jsx)(k,{}),Object(f.jsx)(et,{className:"utilitysec"}),Object(f.jsx)(st,{}),Object(f.jsx)(ct,{}),Object(f.jsx)(lt,{}),Object(f.jsx)(dt,{}),Object(f.jsx)(bt,{}),Object(f.jsx)(mt,{}),Object(f.jsx)(yt,{})]})}}]),n}(s.a.Component),xt=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(C,{}),Object(f.jsx)(k,{}),Object(f.jsx)(et,{className:"utilitysec"}),Object(f.jsx)(st,{}),Object(f.jsx)(ct,{}),Object(f.jsx)(lt,{}),Object(f.jsx)(dt,{}),Object(f.jsx)(bt,{}),Object(f.jsx)(mt,{}),Object(f.jsx)(yt,{})]})}}]),n}(s.a.Component),ft=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(C,{}),Object(f.jsx)(k,{}),Object(f.jsx)(et,{className:"utilitysec"}),Object(f.jsx)(st,{}),Object(f.jsx)(ct,{}),Object(f.jsx)(lt,{}),Object(f.jsx)(dt,{}),Object(f.jsx)(bt,{}),Object(f.jsx)(mt,{}),Object(f.jsx)(yt,{})]})}}]),n}(s.a.Component),gt=(n(564),n(565),n(13));var vt=function(){return Object(f.jsx)(j.a,{children:Object(f.jsx)("div",{children:Object(f.jsxs)(gt.c,{children:[Object(f.jsx)(gt.a,{path:"/home",element:Object(f.jsx)(Ot,{})}),Object(f.jsx)(gt.a,{path:"/gallery",element:Object(f.jsx)(ht,{})}),Object(f.jsx)(gt.a,{path:"/shop",element:Object(f.jsx)(ft,{})}),Object(f.jsx)(gt.a,{path:"/whitepaper",element:Object(f.jsx)(xt,{})})]})})})},wt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,577)).then((function(e){var n=e.getCLS,a=e.getFID,s=e.getFCP,i=e.getLCP,c=e.getTTFB;n(t),a(t),s(t),i(t),c(t)}))};n(566);c.a.render(Object(f.jsx)(z.a,{store:X,children:Object(f.jsx)(vt,{})}),document.getElementById("root")),wt()}},[[567,1,2]]]);
//# sourceMappingURL=main.dabf724a.chunk.js.map