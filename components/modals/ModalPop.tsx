import React from 'react'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Button, Stack, Typography } from '@mui/material';
import icons from "../../assets/index"
import Image from 'next/image';
import Link from 'next/link';
type Props = {
    handleClose?: () => void;
openModal: boolean;
title?: string
description?: string

}

const data= [
  {
titled:'MGland#6873',
description:'Composability is the Most Powerful Creative Force in the Metaverse.In MG.Land, you can build your own Web3 virtual world with your wallet assets including your avatar NFT, house NFT spaceship NFT, they all can be combined by the assets and the chain.',
displayImage: icons.nft1,
amount:'0.118 ETH',
linkTo: "https://opensea.io/assets/ethereum/0xe75512aa3bec8f00434bbd6ad8b0a3fbff100ad6/6873"


},
  {
titled:'Doodle #2446',
description:'A community-driven collectibles project featuring art by Burnt Toast. Doodles come in a joyful range of colors, traits and sizes with a collection size of 10,000. Each Doodle allows its owner to vote for experiences and activations paid for by the Doodles Community Treasury. Burnt Toast is the working alias for Scott Martin, a Canadian–based illustrator, designer, animator and muralist.',
displayImage: icons.nft2,
amount:'5.099 ETH',
linkTo: "https://opensea.io/assets/ethereum/0x8a90cab2b38dba80c64b7734e58ee1db38b8992e/2446"

},
  {
titled:'CloneX #1489',
description:'20,000 next-gen Avatars, by RTFKT and Takashi Murakami 🌸 If you own a clone without any Murakami trait please read the terms regarding RTFKT - Owned Content here: https://rtfkt.com/legal-2A You are also entitled to a commercial license, please read the terms to that here: https://rtfkt.com/legal-2C',
displayImage: icons.nft3,
amount:'4.575 ETH',
linkTo: "https://opensea.io/assets/ethereum/0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b/8246"

},
{
  titled:'HARAMBE: LEGENDS #635',
  description:'RIP Harambe - May 27, 1999 – May 28, 2016',
  displayImage: icons.nft4,
  amount:'15.42 ETH',
  linkTo:'https://opensea.io/assets/ethereum/0x46e614fdd08091e532d39a079d0d027155228998/635'
  },
  {
    titled:'Seizon #4981',
    description:'By F03125 A strong gust of wind surrounds you… You’re in the Clouds now. Up here everything’s brighter, the air clearer... It’s nice being here but something tells you that this is only the beginning. Welcome to the SEIZON UNIVERSE.;0-',   
    displayImage: icons.nft5,
    amount:'0.0955 ETH',
    linkTo:'https://opensea.io/assets/ethereum/0xa6cd272874ee7c872eb66801eff62784c0b13285/3578'
    },
    {
      titled:'Base, Introduced 132118',
      description:'By 2EA881 Meet Base, an Ethereum L2 that offers a secure, low-cost, developer-friendly way for anyone, anywhere, to build decentralized apps. Mint ‘Base, Introduced’ to celebrate the testnet launch and join the broader Base community. We’re excited to build Base together with you.',
      displayImage: icons.nft6,
    amount:'0.003 ETH',
      linkTo: "https://opensea.io/assets/ethereum/0xd4307e0acd12cf46fd6cf93bc264f5d5d1598792/132118"
      },

]

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    background: "linear-gradient(90deg, #769593 10%, #ECB211 100%)",
    border: 'none',
    boxShadow: 24,
    p: 4,
  };
const ModalPop = (props: Props) => {
 const {handleClose,  openModal, title} = props

  return (
    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openModal}>
          <Box sx={style}>
           
           {
            data.map(({titled, description, displayImage, linkTo, amount})=>{
          
          return <Box key={titled}>
            {
              title === titled ? <Box >
                <Stack  justifyContent={"space-between"} alignItems='start' spacing={2}>

<Typography sx={{color:"#eee"}}>{titled} </Typography>
<Image src={displayImage} alt='' />
<Typography sx={{color:"#eee"}}>Details:</Typography>
<Typography sx={{textAlign:'justify'}}>{description} </Typography>
<Stack direction={'row'} alignItems='center' justifyContent={'space-between'} sx={{width:'100%'}}>
  <Box>
    <Typography sx={{color:"#eee"}}>Current Price :</Typography>
<Typography>{amount} </Typography>

  </Box>
  <Link href={linkTo}  passHref style={{textDecoration:'none'}}>
  <Button sx={{background: "linear-gradient(200deg, #769593 50%, #ECB211 80%)", color:"#eee"
}}>Place a Bid</Button>
  </Link>
</Stack>
                </Stack>

              </Box> :''
            }
              </Box>
            })
           }
        
     
           
           
          </Box>
        
        </Fade>
      </Modal>
  )
}

export default ModalPop