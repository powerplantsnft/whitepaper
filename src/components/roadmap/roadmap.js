import React from "react";
import { Col, Container, Row } from "react-bootstrap";

//import CSS
import './roadmap.css';

//import Assets
import il from '../../assets/about.gif';

//import Component
import RoadMapItem from "./roadmapitem";
class RoadMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            roadmaps: [
                {
                    tag: 'Phase 1',
                    title: 'What  is  POWER  PLANTS?',
                    content: "Welcome  to  Power  Plants!  Power  Plants  is  a  collection  of  5,000  NFTs—unique  digital collectibles  living  on  the  Ethereum  blockchain.  Our  mission  is  to  create  the  leading environmental  NFT  platform  through  community  engagement  and  development.  Power  Plants prides  itself  on  being  the  premier  platform  to  offer  truly  unique  characters;  unlike  the all-too-common  pixel  projects…Future  perks  can  be  unlocked  through  roadmap  activation.\nOur  team  strives  to  create  an  environment  that  focuses  on  growth,  similar  to  nature.  We  truly believe  that  rapid  growth  and  developments  to  limits  unseen  will  be  possible  with  input  from  our highly  motivated  members  and  community."
                },
                {
                    tag: 'Phase 2',
                    title: 'About  Power  Plants',
                    content: "Power  Plants  is  brought  to  you  by  Blank  Paper  Labs.  We  developed  this  project  for  tech enthusiasts  who  want  to  bridge  the  gap  between  nature  and  technology.  Power  Plants encompass  creativity,  business,  and  NFT  technology  into  one.  By  owning  a  Power  Plants  NFT, you  immediately  become  an  integral  part  of  the  community."
                },
                {
                    tag: 'Phase 3',
                    title: 'Why NFTs?',
                    content: 'As  many  know,  the  advancement  of  technology  has  accelerated  our  capabilities  in  remarkable ways.  Blank  Paper  Labs  has  placed  innovation  and  forward-thinking  at  the  forefront  of  our operations.  While  many  trends  come  and  go,  we  believe  NFTs  are  here  to  stay.  Smart  contract capabilities  introduce  a  modern  approach  to  our  ever-changing  world.  Features  such  as ownership  with  proof  of  authenticity  play  a  significant  role  in  the  adoption  of  this  technology.  We truly  believe  that  this  will  enable  us  to  achieve  our  goal  through  the  ongoing  developments made  in  the  NFT  community.'
                },
                {
                    tag: 'Phase 4',
                    title: 'What  is  so  special  about  this  collection?',
                    content: 'This  collection  separates  itself  from  others  by  offering  real-life  utilities  that  are  designed  to benefit  our  members  and  the  planet.  Hence  why  we  went  back  to  our  roots  and  drew  inspiration from  the  very  beings  that  give  us  life.  Along  this  exciting  journey,  we  want  the  Power  Plants community  to  be  known  for  the  contributions  they  made  on  Earth.  From  donations  to  charitable organizations  and  trees  planted,  we  pledge  to  give  back.  Furthermore,  the  metaverse  will  play an  essential  role  in  progressing  our  vision  for  this  project.  Growing  and  expanding  in  different avenues  will  allow  Power  Plants  NFT  owners  to  gain  added  value  in  the  near  future.'
                },
                {
                    tag: 'Phase 5',
                    title: 'What  are  you  doing  about  the  environmental  impact  of  your  NFT  collection?',
                    content: 'Proceeds  from  the  Power  Plants  NFT  collection  will  be  donated  to  charities  working  to  fight climate  change.  Additionally,  all  original  collectors  will  have  the  ability  to  have  4  trees  planted after  mint  on  behalf  of  Power  Plants.  “Rare”  Power  Plants  collectors  will  have  the  seeds  from their  NFT  mailed  to  any  location  of  their  choosing  so  that  they  can  personally  be  part  of  the growth  of  Power  Plants  and  our  world.  We  feel  a  duty  to  acknowledge  the  adverse  effects  that cryptocurrency  has  on  our  world.  Mining  cryptocurrency  is  a  high-energy  consuming  process.  To offset  environmental  impacts,  we  will  also  be  donating  to  organizations  that  focus  on  renewable energy  (such  as  solar,  wind,  etc).  While  we  create  advancements  for  the  human  race,  we  must also  protect  the  very  land  that  has  allowed  us  to  do  so.'
                },
                {
                    tag: 'Phase 6',
                    title: 'What  percentage  from  sales  will  be  donated?',
                    content: '5% from  the  initial  release  of  the  Power  Plants  NFT  collection  will  be  donated  to  charities.  From there,  2%  of  all  resales  on  secondary  markets  will  be  donated.'
                },
                {
                    tag: 'Phase 6',
                    title: 'How will  trees  be  planted?',
                    content: 'For  every  purchase  from  the  initial  release,  Power  Plants  NFT  owners  will  have  the  ability  to have  4  trees  planted  on  behalf  of  Power  Plants.  2  trees  will  be  planted  upon  mint.  We  will  match this  if  all  5,000  Power  Plants  NFTs  are  sold  out.'
                },
                {
                    tag: 'Phase 6',
                    title: 'What\’s  the  story  behind  Power  Plants  characters?',
                    content: 'Each  character  was  hand-selected  by  our  founders  to  represent  aspects  of  life  that  we  find  most beautiful.  From  vibrant  colors  to  flowers  blooming  and  plants  being  born  again,  we  embrace  the different  stages  of  the  life  cycle.  We  created  these  characters  so  that  we  can  admire  the  world from  a  common  yet  overlooked  perspective:  nature.  Each  character  is  a  reminder  of  what  we stand  for:  design  and  purpose.  We  decided  to  name  our  collection  “Power  Plants”  to acknowledge  the  fact  that  plants  give  life  and  power  to  our  world.'
                },
                {
                    tag: 'Phase 6',
                    title: 'When  will  Power  Plants  NFTs  be  released?',
                    content: 'December  29,  2021  11 AM  PST,  2  PM  EST.'
                },
                {
                    tag: 'Phase 6',
                    title: 'How much does each  Power  Plant  NFT  cost?',
                    content: '0.03  ETH  +  Gas'
                },
                {
                    tag: 'Phase 6',
                    title: 'How long  does  my  Power  Plants  NFT  Last?',
                    content: 'Opposed  to  living  plants,  your  Power  Plants  NFT  will  virtually  last  forever  on  the  Ethereum blockchain.'
                },
                {
                    tag: 'Phase 6',
                    title: 'What  unlockable  content  will  Power  Plant  NFT  owners  receive?',
                    content: '-Power  Plants  NFT  owners  will  have  up  to  4  trees  planted  on  behalf  of  Power  Plants.\n-Certificate  of  Authenticity  (PDF/Email/Download).  Only  applies  to  the  original  owners.\n-Exclusive  discount  codes  that  can  be  redeemed  for  merchandise  from  the  Power  Plants  store.\n-Entered  for  a  chance  to  win  the  original  art  for  their  NFT  +  seeds  to  a  rare  plant.  (Art  will  be mailed)\n-Exclusive  access  to  community  groups.\n-Owners  of  rare  Power  Plants  NFTs  get  seeds  to  their  respective  plants  mailed  to  them.\n-Owners  will  be  allowed  to  stake  their  NFTs  and  claim  rewards  from  sales.'
                },
                {
                    tag: 'Phase 6',
                    title: 'What  is  the  metaverse?',
                    content: 'The  metaverse  is  the  World  3.0.  The  word  refers  to  a  shared  virtual  reality  where  everything  and anything  can  be  bought  and  sold  just  like  our  world  today,  except  it  will  be  using  cryptocurrency. Power  Plants  will  soon  make  a  unique  entrance  into  the  metaverse,  and  so  can  you  by purchasing  a  Power  Plants  NFT.'
                },
                {
                    tag: 'Phase 6',
                    title: 'How will  owners  be  able  to  receive  rewards  from  their  NFT?',
                    content: 'We will  be  entering  the  metaverse  by  joining  art  galleries  and  creating  stores  to  design  and supply  trees/plants.  We  will  give  owners  the  chance  to  stake  their  Power  Plant  NFT  to  receive rewards.  Owners  will  still  own  the  original  Power  Plant  NFT.'
                },
                {
                    tag: 'Phase 6',
                    title: 'Which  NFTs  are  1  of  1  artwork?',
                    content: 'All  Power  Plants  NFTs  are  1  of  1.  It  is  important  to  note  that  the  unique  trait  combinations  will never  be  minted  again.'
                },
                {
                    tag: 'Phase 6',
                    title: 'How are  Power  Plants  NFTs  Generated?',
                    content: 'Each  Power  Plant  is  unique  and  generated  from  53  possible  traits.  All  Power  Plants  are valuable,  but  some  will  prove  to  be  more  valuable  than  others.'
                },
                {
                    tag: 'Phase 6',
                    title: 'What  blockchain  are  Power  Plants  minted  on?',
                    content: 'NFTs  are  minted  on  ERC-721  compliant  contracts  deployed  on  the  Ethereum  blockchain.  This  is the  premier  platform  and  most  widely-supported  format  for  digital  collectibles.'
                },
                {
                    tag: 'Phase 6',
                    title: 'How will  rarity  be  determined?',
                    content: 'Rarity  tools  will  be  available  on Rarity.Tools.  Every Power  Plants  NFT  is  inherently  subjective.'
                },
                {
                    tag: 'Phase 6',
                    title: 'Why do we have royalties?',
                    content: 'The  second-market  royalties  are  set  at  10%  which  is  used  to  finance  common  projects, marketing  campaigns,  community-building  events,  and  other  projects  that  will  enhance  the longevity  of  Power  Plants.'
                },
                {
                    tag: 'Phase 6',
                    title: 'How do we purchase  Power  Plants  NFTs?',
                    content: 'You  can  buy  your  Power  Plants  NFTs  on  PowerPlantsNFT.com  on  the  release  date.  You  will need  to  connect  a  compatible  wallet,  such  as  MetaMask,  to  purchase  them  using  Ethereum (ETH).\nLink: ',
                    linky:"powerplantsnft.com",
                    custom:"https://www.powerplantsnft.com/"
                },
                {
                    tag: 'Phase 6',
                    title: 'Can  I  purchase  Power  Plants  NFTs  with  my  credit  card?',
                    content: 'No,  in  order  to  purchase  a  Power  Plants  NFT  you  will  need  to  have  a  digital  wallet  with Ethereum  (ETH).'
                },
                {
                    tag: 'Phase 6',
                    title: 'Can  I  resell  my  Power  Plants  NFT?',
                    content: 'Yes.'
                },
                {
                    tag: 'Phase 6',
                    title: 'Can  I  buy  more  than  one  Power  Plants  NFT?',
                    content: 'Yes.'
                },
                {
                    tag: 'Phase 6',
                    title: 'Can  I  interact  with  other  Power  Plants  NFT  collectors?',
                    content: 'Yes,  we  are  active  in  our ',
                    linky: " Discord, ",
                    custom: "http://discord.gg/RNxVea93dN",
                    linky2: " Reddit, ",
                    custom2: "https://www.reddit.com/r/PowerPlantsNFT/",
                    linky3: " Twitter, ",
                    custom3: "https://twitter.com/PowerPlants_",
                    linky4: " and Instagram. ",
                    custom4: "http://instagram.com/powerplantsnft"
                },
                {
                    tag: 'Phase 6',
                    title: 'Where  can  I  buy  Power  Plants  merchandise?',
                    content: 'Power  Plants  merchandise  will  be  available  exclusively  on  PowerPlantsNFT.com.  Please  allow 2-4  weeks  for  shipping.'
                }

            ]
        }
    }

    render() {
        return (
            <div className='roadmap-control' id='roadmap' style={{ textAlign: "center" }}>
                <Container >

                    {/* <p className='roadmap-description'>
                    Our Roadmap is under construction!Placeholder
                    </p> */}
                    <Row style={{ alignContent: "center", justifyContent: "center", textAlign: "center" }}>
                        {/* <Col xs={12} md={6}>
                            <img src={"https://static.wixstatic.com/media/9529be_c5c27e794a4a403fa063f9a414247950~mv2.png/v1/crop/x_555,y_175,w_1673,h_2667/fill/w_488,h_778,al_c,q_90,usm_0.66_1.00_0.01/Blue%20Sapphire%20Orchid.webp"} style={{width:"100%"}}/>
                        </Col> */}
                        <Col style={{ alignContent: "center", justifyContent: "center", textAlign: "center" }}>
                            <text><header className="roadmap-title" > WHITEPAPER & FAQ</header></text>
                            {
                                this.state.roadmaps.map((item, index) => {
                                    return (
                                        <RoadMapItem style={{ textAlign: "center", color: "black" }} key={index}
                                            tag={item.tag}
                                            title={item.title}
                                            content={item.content}
                                            linky={item.linky}
                                            custom={item.custom}
                                            linky2={item.linky2}
                                            custom2={item.custom2}
                                            linky3={item.linky3}
                                            custom3={item.custom3}
                                            linky4={item.linky4}
                                            custom4={item.custom4} />
                                    );
                                })
                            }
                        </Col>
                    </Row>
                </Container>
            </div>

        );
    }
}

export default RoadMap;