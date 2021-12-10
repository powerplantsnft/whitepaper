(this.webpackJsonpfrontend_base_dapp=this.webpackJsonpfrontend_base_dapp||[]).push([[0],{241:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_initBaseURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"activateWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_user","type":"address[]"}],"name":"removeWhitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"}],"name":"setMaxMintAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"},{"internalType":"uint256","name":"_newWalletLimit","type":"uint256"}],"name":"setMaxMintAmountAndWalletLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newSupply","type":"uint256"}],"name":"setMaxSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newWalletLimit","type":"uint256"}],"name":"setWalletLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"walletLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"whitelistOnly","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_user","type":"address[]"}],"name":"whitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]')},250:function(e,t,n){},251:function(e,t,n){},252:function(e,t,n){},253:function(e,t,n){},255:function(e,t,n){},256:function(e,t,n){},257:function(e,t,n){},262:function(e,t,n){},263:function(e,t,n){},264:function(e,t,n){},265:function(e,t,n){},266:function(e,t,n){},267:function(e,t,n){},268:function(e,t,n){},281:function(e,t){},304:function(e,t){},306:function(e,t){},383:function(e,t){},385:function(e,t){},418:function(e,t){},423:function(e,t){},425:function(e,t){},432:function(e,t){},445:function(e,t){},468:function(e,t){},477:function(e,t){},479:function(e,t){},548:function(e,t,n){},549:function(e,t,n){},550:function(e,t,n){},551:function(e,t,n){},552:function(e,t,n){},553:function(e,t,n){},554:function(e,t,n){},555:function(e,t,n){},556:function(e,t,n){},557:function(e,t,n){},558:function(e,t,n){},560:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),o=n(29),s=n.n(o),r=(n(250),n(251),n(4)),l=n(5),c=n(9),p=n(8),u=n(564),d=n(565),m=n(566),y=(n(252),n.p,n(253),n(0)),h=function(e){Object(c.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={open:!1},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{onClick:function(){e.setState({open:!e.state.open})},className:"collapse-header-control",children:Object(y.jsx)("div",{className:"collapse-header",children:Object(y.jsx)("p",{children:this.props.title})})}),Object(y.jsxs)("div",{id:"example",className:"collapse-content display-linebreak",children:[this.props.content,Object(y.jsx)("a",{href:this.props.custom,children:this.props.linky}),Object(y.jsx)("a",{href:this.props.custom2,children:this.props.linky2}),Object(y.jsx)("a",{href:this.props.custom3,children:this.props.linky3}),Object(y.jsx)("a",{href:this.props.custom4,children:this.props.linky4})]})]})}}]),n}(i.a.Component),b=function(e){Object(c.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={roadmaps:[{tag:"Phase 1",title:"What  is  POWER  PLANTS?",content:"Welcome  to  Power  Plants!  Power  Plants  is  a  collection  of  5,000  NFTs\u2014unique  digital collectibles  living  on  the  Ethereum  blockchain.  Our  mission  is  to  create  the  leading environmental  NFT  platform  through  community  engagement  and  development.  Power  Plants prides  itself  on  being  the  premier  platform  to  offer  truly  unique  characters;  unlike  the all-too-common  pixel  projects\u2026Future  perks  can  be  unlocked  through  roadmap  activation.\nOur  team  strives  to  create  an  environment  that  focuses  on  growth,  similar  to  nature.  We  truly believe  that  rapid  growth  and  developments  to  limits  unseen  will  be  possible  with  input  from  our highly  motivated  members  and  community."},{tag:"Phase 2",title:"About  Power  Plants",content:"Power  Plants  is  brought  to  you  by  Blank  Paper  Labs.  We  developed  this  project  for  tech enthusiasts  who  want  to  bridge  the  gap  between  nature  and  technology.  Power  Plants encompass  creativity,  business,  and  NFT  technology  into  one.  By  owning  a  Power  Plants  NFT, you  immediately  become  an  integral  part  of  the  community."},{tag:"Phase 3",title:"Why NFTs?",content:"As  many  know,  the  advancement  of  technology  has  accelerated  our  capabilities  in  remarkable ways.  Blank  Paper  Labs  has  placed  innovation  and  forward-thinking  at  the  forefront  of  our operations.  While  many  trends  come  and  go,  we  believe  NFTs  are  here  to  stay.  Smart  contract capabilities  introduce  a  modern  approach  to  our  ever-changing  world.  Features  such  as ownership  with  proof  of  authenticity  play  a  significant  role  in  the  adoption  of  this  technology.  We truly  believe  that  this  will  enable  us  to  achieve  our  goal  through  the  ongoing  developments made  in  the  NFT  community."},{tag:"Phase 4",title:"What  is  so  special  about  this  collection?",content:"This  collection  separates  itself  from  others  by  offering  real-life  utilities  that  are  designed  to benefit  our  members  and  the  planet.  Hence  why  we  went  back  to  our  roots  and  drew  inspiration from  the  very  beings  that  give  us  life.  Along  this  exciting  journey,  we  want  the  Power  Plants community  to  be  known  for  the  contributions  they  made  on  Earth.  From  donations  to  charitable organizations  and  trees  planted,  we  pledge  to  give  back.  Furthermore,  the  metaverse  will  play an  essential  role  in  progressing  our  vision  for  this  project.  Growing  and  expanding  in  different avenues  will  allow  Power  Plants  NFT  owners  to  gain  added  value  in  the  near  future."},{tag:"Phase 5",title:"What  are  you  doing  about  the  environmental  impact  of  your  NFT  collection?",content:"Proceeds  from  the  Power  Plants  NFT  collection  will  be  donated  to  charities  working  to  fight climate  change.  Additionally,  all  original  collectors  will  have  the  ability  to  have  4  trees  planted after  mint  on  behalf  of  Power  Plants.  \u201cRare\u201d  Power  Plants  collectors  will  have  the  seeds  from their  NFT  mailed  to  any  location  of  their  choosing  so  that  they  can  personally  be  part  of  the growth  of  Power  Plants  and  our  world.  We  feel  a  duty  to  acknowledge  the  adverse  effects  that cryptocurrency  has  on  our  world.  Mining  cryptocurrency  is  a  high-energy  consuming  process.  To offset  environmental  impacts,  we  will  also  be  donating  to  organizations  that  focus  on  renewable energy  (such  as  solar,  wind,  etc).  While  we  create  advancements  for  the  human  race,  we  must also  protect  the  very  land  that  has  allowed  us  to  do  so."},{tag:"Phase 6",title:"What  percentage  from  sales  will  be  donated?",content:"5% from  the  initial  release  of  the  Power  Plants  NFT  collection  will  be  donated  to  charities.  From there,  2%  of  all  resales  on  secondary  markets  will  be  donated."},{tag:"Phase 6",title:"How will  trees  be  planted?",content:"For  every  purchase  from  the  initial  release,  Power  Plants  NFT  owners  will  have  the  ability  to have  4  trees  planted  on  behalf  of  Power  Plants.  2  trees  will  be  planted  upon  mint.  We  will  match this  if  all  5,000  Power  Plants  NFTs  are  sold  out."},{tag:"Phase 6",title:"What\u2019s  the  story  behind  Power  Plants  characters?",content:"Each  character  was  hand-selected  by  our  founders  to  represent  aspects  of  life  that  we  find  most beautiful.  From  vibrant  colors  to  flowers  blooming  and  plants  being  born  again,  we  embrace  the different  stages  of  the  life  cycle.  We  created  these  characters  so  that  we  can  admire  the  world from  a  common  yet  overlooked  perspective:  nature.  Each  character  is  a  reminder  of  what  we stand  for:  design  and  purpose.  We  decided  to  name  our  collection  \u201cPower  Plants\u201d  to acknowledge  the  fact  that  plants  give  life  and  power  to  our  world."},{tag:"Phase 6",title:"When  will  Power  Plants  NFTs  be  released?",content:"December  22,  2021  11 AM  PST,  2  PM  EST."},{tag:"Phase 6",title:"How much does each  Power  Plant  NFT  cost?",content:".15  ETH  +  Gas"},{tag:"Phase 6",title:"How long  does  my  Power  Plants  NFT  Last?",content:"Opposed  to  living  plants,  your  Power  Plants  NFT  will  virtually  last  forever  on  the  Ethereum blockchain."},{tag:"Phase 6",title:"What  unlockable  content  will  Power  Plant  NFT  owners  receive?",content:"-Power  Plants  NFT  owners  will  have  up  to  4  trees  planted  on  behalf  of  Power  Plants.\n-Certificate  of  Authenticity  (PDF/Email/Download).  Only  applies  to  the  original  owners.\n-Exclusive  discount  codes  that  can  be  redeemed  for  merchandise  from  the  Power  Plants  store.\n-Entered  for  a  chance  to  win  the  original  art  for  their  NFT  +  seeds  to  a  rare  plant.  (Art  will  be mailed)\n-Exclusive  access  to  community  groups.\n-Owners  of  rare  Power  Plants  NFTs  get  seeds  to  their  respective  plants  mailed  to  them.\n-Owners  will  be  allowed  to  stake  their  NFTs  and  claim  rewards  from  sales."},{tag:"Phase 6",title:"What  is  the  metaverse?",content:"The  metaverse  is  the  World  3.0.  The  word  refers  to  a  shared  virtual  reality  where  everything  and anything  can  be  bought  and  sold  just  like  our  world  today,  except  it  will  be  using  cryptocurrency. Power  Plants  will  soon  make  a  unique  entrance  into  the  metaverse,  and  so  can  you  by purchasing  a  Power  Plants  NFT."},{tag:"Phase 6",title:"How will  owners  be  able  to  receive  rewards  from  their  NFT?",content:"We will  be  entering  the  metaverse  by  joining  art  galleries  and  creating  stores  to  design  and supply  trees/plants.  We  will  give  owners  the  chance  to  stake  their  Power  Plant  NFT  to  receive rewards.  Owners  will  still  own  the  original  Power  Plant  NFT."},{tag:"Phase 6",title:"Which  NFTs  are  1  of  1  artwork?",content:"All  Power  Plants  NFTs  are  1  of  1.  It  is  important  to  note  that  the  unique  trait  combinations  will never  be  minted  again."},{tag:"Phase 6",title:"How are  Power  Plants  NFTs  Generated?",content:"Each  Power  Plant  is  unique  and  generated  from  53  possible  traits.  All  Power  Plants  are valuable,  but  some  will  prove  to  be  more  valuable  than  others."},{tag:"Phase 6",title:"What  blockchain  are  Power  Plants  minted  on?",content:"NFTs  are  minted  on  ERC-721  compliant  contracts  deployed  on  the  Ethereum  blockchain.  This  is the  premier  platform  and  most  widely-supported  format  for  digital  collectibles."},{tag:"Phase 6",title:"How will  rarity  be  determined?",content:"Rarity  tools  will  be  available  on Rarity.Tools.  Every Power  Plants  NFT  is  inherently  subjective."},{tag:"Phase 6",title:"Why do we have royalties?",content:"The  second-market  royalties  are  set  at  10%  which  is  used  to  finance  common  projects, marketing  campaigns,  community-building  events,  and  other  projects  that  will  enhance  the longevity  of  Power  Plants."},{tag:"Phase 6",title:"How do we purchase  Power  Plants  NFTs?",content:"You  can  buy  your  Power  Plants  NFTs  on  PowerPlantsNFT.com  on  the  release  date.  You  will need  to  connect  a  compatible  wallet,  such  as  MetaMask,  to  purchase  them  using  Ethereum (ETH).\nLink: ",linky:"powerplantsnft.com",custom:"https://www.powerplantsnft.com/"},{tag:"Phase 6",title:"Can  I  purchase  Power  Plants  NFTs  with  my  credit  card?",content:"No,  in  order  to  purchase  a  Power  Plants  NFT  you  will  need  to  have  a  digital  wallet  with Ethereum  (ETH)."},{tag:"Phase 6",title:"Can  I  resell  my  Power  Plants  NFT?",content:"Yes."},{tag:"Phase 6",title:"Can  I  buy  more  than  one  Power  Plants  NFT?",content:"Yes."},{tag:"Phase 6",title:"Can  I  interact  with  other  Power  Plants  NFT  collectors?",content:"Yes,  we  are  active  in  our ",linky:" Discord, ",custom:"http://discord.gg/RNxVea93dN",linky2:" Reddit, ",custom2:"https://www.reddit.com/r/PowerPlantsNFT/",linky3:" Twitter, ",custom3:"https://twitter.com/PowerPlants_",linky4:" and Instagram. ",custom4:"http://instagram.com/powerplantsnft"},{tag:"Phase 6",title:"Where  can  I  buy  Power  Plants  merchandise?",content:"Power  Plants  merchandise  will  be  available  exclusively  on  PowerPlantsNFT.com.  Please  allow 2-4  weeks  for  shipping."}]},a}return Object(l.a)(n,[{key:"render",value:function(){return Object(y.jsx)("div",{className:"roadmap-control",id:"roadmap",style:{textAlign:"center"},children:Object(y.jsx)(u.a,{children:Object(y.jsx)(d.a,{style:{alignContent:"center",justifyContent:"center",textAlign:"center"},children:Object(y.jsxs)(m.a,{style:{alignContent:"center",justifyContent:"center",textAlign:"center"},children:[Object(y.jsx)("text",{children:Object(y.jsx)("header",{className:"roadmap-title",children:" WHITEPAPER & FAQ"})}),this.state.roadmaps.map((function(e,t){return Object(y.jsx)(h,{style:{textAlign:"center",color:"black"},tag:e.tag,title:e.title,content:e.content,linky:e.linky,custom:e.custom,linky2:e.linky2,custom2:e.custom2,linky3:e.linky3,custom3:e.custom3,linky4:e.linky4,custom4:e.custom4},t)}))]})})})})}}]),n}(i.a.Component),f=n.p+"static/media/CenterPic.6eabdc78.png",w=(n.p,n(255),n(568)),j=n(569),g=(n(256),n(257),function(e){Object(c.a)(n,e);var t=Object(p.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(y.jsx)("button",{className:"ybutton",children:this.props.text})}}]),n}(i.a.Component));function v(){document.getElementById("mint").scrollIntoView()}function O(){window.location.href="https://powerplantsnft.com/"}function P(){window.location.href="https://whitepaper.powerplantsnft.com/"}function T(){window.location.href="https://gallery.powerplantsnft.com/"}function x(){window.location.href="https://shop.powerplantsnft.com/"}function N(){window.open("https://opensea.io/")}var k=function(e){Object(c.a)(n,e);var t=Object(p.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("div",{className:"header-control",id:"home",children:[Object(y.jsx)(w.a,{collapseOnSelect:!0,expand:"lg",children:Object(y.jsxs)(u.a,{children:[Object(y.jsx)(w.a.Brand,{href:"https://powerplantsnft.com/",style:{paddingTop:10},children:Object(y.jsx)("img",{src:f,width:289,height:115.1,alt:"logo"})}),Object(y.jsx)(w.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(y.jsxs)(w.a.Collapse,{id:"responsive-navbar-nav",children:[Object(y.jsx)(j.a,{className:"me-auto"}),Object(y.jsxs)(j.a,{style:{borderRadius:0,padding:"0 20px 0 20px"},children:[Object(y.jsx)(j.a.Link,{className:"bruh nav-link-btn",onClick:O,children:"Home"}),Object(y.jsx)(j.a.Link,{className:"bruh nav-link-btn",onClick:P,children:"White Paper/FAQ"}),Object(y.jsx)(j.a.Link,{className:"bruh nav-link-btn",onClick:T,children:"Gallery"}),Object(y.jsx)(j.a.Link,{className:"bruh nav-link-btn",onClick:x,children:"Shop"}),Object(y.jsx)(j.a.Link,{className:"bruh nav-link-btn",onClick:N,children:"OpenSea"}),Object(y.jsx)("div",{style:{display:"flex",textAlign:"center",justifyContent:"center",padding:"0em"},children:Object(y.jsx)("text",{className:"mint-button",onClick:v,children:"MINT"})})]})]})]})}),Object(y.jsx)("div",{})]})})}}]),n}(i.a.Component),_=(n(262),n.p,n(263),function(e){Object(c.a)(n,e);var t=Object(p.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(y.jsxs)("div",{className:"teammember-control",style:{textAlign:"center",justifyContent:"center"},children:[Object(y.jsx)("img",{style:{maxHeight:500,maxWidth:500},src:this.props.imageUrl,alt:"team member"}),Object(y.jsxs)("div",{className:"teammember-description",children:[Object(y.jsx)("p",{className:"teammember-name",children:this.props.name}),Object(y.jsx)("p",{className:"teammember-occupation",children:this.props.title})]})]})}}]),n}(i.a.Component));i.a.Component,n(264),i.a.Component,n(265),n.p;function C(){document.getElementById("mint").scrollIntoView()}function F(){document.getElementById("home").scrollIntoView()}function M(){window.location.href="https://whitepaper.powerplantsnft.com/"}function A(){window.location.href="https://gallery.powerplantsnft.com/"}function E(){window.location.href="https://shop.powerplantsnft.com/"}function I(){window.open("https://opensea.io/")}var W=function(e){Object(c.a)(n,e);var t=Object(p.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(y.jsx)("div",{className:"footer-control",id:"socials",children:Object(y.jsx)(u.a,{className:"footer",children:Object(y.jsxs)(d.a,{style:{width:"100%"},children:[Object(y.jsxs)(m.a,{md:"3",className:"footer-logo-container",style:{},children:[Object(y.jsx)("h3",{children:"Power Plants"}),Object(y.jsx)("img",{className:"footer-logo",src:"https://static.wixstatic.com/media/9529be_bca678e455cb44a5a11c9515cc035393~mv2.png/v1/fill/w_204,h_204,al_c,q_85,usm_0.66_1.00_0.01/DP_edited.webp",alt:""})]}),Object(y.jsx)(m.a,{md:"3",style:{margin:"auto"},children:Object(y.jsx)("div",{style:{display:"flex",textAlign:"center",justifyContent:"center",padding:"0em"},children:Object(y.jsx)("text",{className:"mint-button",onClick:C,children:"MINT"})})}),Object(y.jsxs)(m.a,{md:"3",className:"footer-nav-container",children:[Object(y.jsx)("p",{className:"footer-nav",onClick:F,children:"Home"}),Object(y.jsx)("p",{className:"footer-nav",onClick:M,children:"White Paper/FAQ"}),Object(y.jsx)("p",{className:"footer-nav",onClick:A,children:"Gallery"}),Object(y.jsx)("p",{className:"footer-nav",onClick:E,children:"Shop"}),Object(y.jsx)("p",{className:"footer-nav",onClick:I,children:"OpenSea"})]}),Object(y.jsxs)(m.a,{md:"3",className:"footer-social",children:[Object(y.jsx)("p",{className:"footer-social-title",children:"Connect with us on Social Media"}),Object(y.jsxs)("div",{className:"social-button-container",children:[Object(y.jsx)("a",{className:"social-button",href:"http://discord.gg/RNxVea93dN",children:Object(y.jsx)("img",{src:"https://static.wixstatic.com/media/9529be_9bd7b35f04334b70aaafeee921e3c67f~mv2.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01/9529be_9bd7b35f04334b70aaafeee921e3c67f~mv2.webp",alt:""})}),Object(y.jsx)("a",{className:"social-button",href:"https://twitter.com/PowerPlants_",children:Object(y.jsx)("img",{src:"https://static.wixstatic.com/media/9529be_540ad1f79c0e4da587e2095f0226c14c~mv2.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01/9529be_540ad1f79c0e4da587e2095f0226c14c~mv2.webp",alt:""})}),Object(y.jsx)("a",{className:"social-button",href:"http://instagram.com/powerplantsnft",children:Object(y.jsx)("img",{src:"https://static.wixstatic.com/media/9529be_2bfd2ec19e0045c69c757f9e6d0bc4fe~mv2.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01/9529be_2bfd2ec19e0045c69c757f9e6d0bc4fe~mv2.webp",alt:""})})]})]})]})})})}}]),n}(i.a.Component),S=(n(266),n.p+"static/media/item1.1c214071.png"),B=n.p+"static/media/item2.81e34ae6.png",H=n.p+"static/media/item3.eec91da6.png",L=(n(267),n(38)),R=n.p+"static/media/fire.76eb30ed.png",U=function(e){Object(c.a)(n,e);var t=Object(p.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(y.jsxs)("div",{className:"top-item",children:[Object(y.jsx)("img",{src:this.props.image,alt:"top item"}),Object(y.jsxs)("div",{className:"top-item-description",children:[Object(y.jsx)("p",{children:this.props.name}),Object(y.jsx)("h6",{children:this.props.price})]}),Object(y.jsxs)("div",{className:"top-item-bid",children:[Object(y.jsxs)("div",{children:[Object(y.jsx)(L.c,{})," HighestBid ",Object(y.jsx)("b",{children:this.props.highestBid})]}),Object(y.jsxs)("p",{children:["New Bid \xa0",Object(y.jsx)("img",{src:R,width:17,height:17,alt:"new bid"})]})]})]})}}]),n}(i.a.Component),D=(i.a.Component,n(17),n.p,n(268),n(40)),G=(n(23),n(85),n(83),n(240),n(241),n(86)),J=n(242),q=n(3),Q={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(q.a)(Object(q.a)({},Q),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(q.a)(Object(q.a)({},e),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(q.a)(Object(q.a)({},Q),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(q.a)(Object(q.a)({},e),{},{account:t.payload.account});default:return e}},Y={loading:!1,name:"",totalSupply:0,cost:0,error:!1,errorMsg:""},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(q.a)(Object(q.a)({},e),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(q.a)(Object(q.a)({},e),{},{loading:!1,name:t.payload.name,totalSupply:t.payload.totalSupply,cost:t.payload.cost,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(q.a)(Object(q.a)({},Y),{},{loading:!1,error:!0,errorMsg:t.payload});default:return e}},z=Object(G.b)({blockchain:V,data:K}),X=[J.a],Z=Object(G.c)(G.a.apply(void 0,X)),$=Object(G.d)(z,Z);var ee=n.p+"static/media/legif.e473ad46.gif",te=(n(548),i.a.Component,n(243)),ne=n.n(te),ae=(n.p,n(549),i.a.Component,n.p+"static/media/dicklogo.9f1ffd25.png"),ie=(n(550),i.a.Component,n(551),n.p+"static/media/award.14ea6b22.JPG"),oe=n.p+"static/media/community.4baca058.JPG",se=n.p+"static/media/diamont.3cec241c.JPG",re=n.p+"static/media/money.e63839ce.JPG",le=n.p+"static/media/paintbrush.7501d99d.JPG",ce=n.p+"static/media/tickets.4eac7c08.JPG",pe=n.p+"static/media/plant.fe24cbae.JPG";n(552),i.a.Component;n(553),n(554);var ue=function(e){Object(c.a)(n,e);var t=Object(p.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(y.jsxs)("div",{className:"state_card_layout",children:[Object(y.jsx)("p",{className:"state_card_title",children:this.props.title}),Object(y.jsx)("p",{className:"state_card_text",children:Object(y.jsx)("span",{className:"state_card_span",children:this.props.text})}),Object(y.jsx)("hr",{className:"state_card_bar"})]})}}]),n}(i.a.Component);i.a.Component,n(555),i.a.Component,n(556),i.a.Component,n(557),n(558);var de=function(){return Object(y.jsxs)("div",{children:[Object(y.jsx)(k,{}),Object(y.jsx)(b,{}),Object(y.jsx)(W,{})]})},me=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,570)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),o(e),s(e)}))};n(559);s.a.render(Object(y.jsx)(D.a,{store:$,children:Object(y.jsx)(de,{})}),document.getElementById("root")),me()}},[[560,1,2]]]);
//# sourceMappingURL=main.4c15ec2d.chunk.js.map