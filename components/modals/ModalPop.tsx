import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Button, Stack, Typography } from "@mui/material";
import icons from "../../assets/index";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
// import { data } from '@/data';
type Props = {
  handleClose?: () => void;
  openModal: boolean;
  title?: string;
  description?: string;
};

const data = [
  {
    titled: "Base 1",
    description:'By 72C3C7 Meet Base, an Ethereum L2 that offers a secure, low-cost, developer-friendly way for anyone, anywhere, to build decentralized apps. Mint ‘Base, Introduced’ to celebrate the testnet launch and join the broader Base community. We’re excited to build Base together with you.',
    displayImage: icons.nft1,
    amount: "0.118 ETH",
    linkTo: "https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/51909579077883410401859370339839311931205066500053932726237816272370886770689",    
    address:'0x495f947276749ce646f68ac8c248420045cb7b5e'
  },
  {
    titled: "Base 2",
    description:'By 72C3C7 Meet Base, an Ethereum L2 that offers a secure, low-cost, developer-friendly way for anyone, anywhere, to build decentralized apps. Mint ‘Base, Introduced’ to celebrate the testnet launch and join the broader Base community. We’re excited to build Base together with you.',
    displayImage: icons.nft2,
    amount: "5.099 ETH",
    linkTo: "https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/51909579077883410401859370339839311931205066500053932726237816273470398398465",
    address:'0x495f947276749ce646f68ac8c248420045cb7b5e'
  },
  {
    titled: "Base 3",
    description:'By 72C3C7 Meet Base, an Ethereum L2 that offers a secure, low-cost, developer-friendly way for anyone, anywhere, to build decentralized apps. Mint ‘Base, Introduced’ to celebrate the testnet launch and join the broader Base community. We’re excited to build Base together with you.',
    displayImage: icons.nft3,
    amount: "4.575 ETH",
    linkTo: "https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/51909579077883410401859370339839311931205066500053932726237816274569910026241" ,   
    address:'0x495f947276749ce646f68ac8c248420045cb7b5e'
  },
  {
    titled: "Base 4",
    description:'By 72C3C7 Meet Base, an Ethereum L2 that offers a secure, low-cost, developer-friendly way for anyone, anywhere, to build decentralized apps. Mint ‘Base, Introduced’ to celebrate the testnet launch and join the broader Base community. We’re excited to build Base together with you.',
    displayImage: icons.nft4,
    amount: "15.42 ETH",
    linkTo:'https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/51909579077883410401859370339839311931205066500053932726237816275669421654017',

    address:'0x495f947276749ce646f68ac8c248420045cb7b5e'
  },
  {
    titled: "Base 5",
    description:'By 72C3C7 Meet Base, an Ethereum L2 that offers a secure, low-cost, developer-friendly way for anyone, anywhere, to build decentralized apps. Mint ‘Base, Introduced’ to celebrate the testnet launch and join the broader Base community. We’re excited to build Base together with you.',
    displayImage: icons.nft5,
    amount: "0.0955 ETH",
    linkTo:'https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/51909579077883410401859370339839311931205066500053932726237816276768933281793',
    address:'0x495f947276749ce646f68ac8c248420045cb7b5e'
  },
  {
    titled: "Base 6",
    description:'By 72C3C7 Meet Base, an Ethereum L2 that offers a secure, low-cost, developer-friendly way for anyone, anywhere, to build decentralized apps. Mint ‘Base, Introduced’ to celebrate the testnet launch and join the broader Base community. We’re excited to build Base together with you.',
    displayImage: icons.nft6,
    amount: "0.003 ETH",
    linkTo: "https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/51909579077883410401859370339839311931205066500053932726237816277868444909569",
    address:'0x495f947276749ce646f68ac8c248420045cb7b5e'
  },
];

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {md:520, sm:"80%", xs:'80%'},
  height:{xs:"auto", md:"400px"},
  // height: 500,
  background: "linear-gradient(90deg, #769593 10%, #ECB211 100%)",
  border: "none",
  boxShadow: 24,
  p: {md:4, xs:2},
};
const ModalPop = (props: Props) => {
  const { handleClose, openModal, title } = props;

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
          {data.map(({ titled, description,address, displayImage, linkTo, amount }) => {
            return (
              <Box key={titled}>
                {title === titled ? (
                  <Box>
                    <Stack direction='row' alignItems='center' justifyContent='space-between' sx={{width:'100%'}}>
                      <Typography sx={{ color: "#eee", fontSize:'20px', fontWeight:'600' }}>{titled} </Typography>
<Button onClick={handleClose}>

<AiOutlineClose  style={{fontSize:'30px'}} />
</Button>
                      </Stack>
                    <Stack
                    direction='row'
                      justifyContent={"space-between"}
                      alignItems="start"
                      spacing={1}
                    >
                      
                      {/* <Stack sx={{border:'solid red'}}>
                      <Image src={displayImage} alt="" style={{width:'100%'}} />
                      
                      </Stack> */}
                      <Stack
                        
                        // alignItems="center"
                        justifyContent={"space-between"}
                        sx={{ width: "100%", }}
                        spacing={2}
                      >
                      <Typography sx={{ color: "#eee", fontSize:'20px', fontWeight:'600' }}>Description:</Typography>
                      <Typography sx={{ textAlign: {md:"justify", xs:'justify'}, fontSize:'15px' }}>
                        {description}{" "}
                      </Typography>

                        <Box >
                          <Typography sx={{ color: "#eee", fontSize:'20px', fontWeight:'600' }}>
                           Ethereum Address :
                          </Typography>
                          <Typography sx={{  width:'100%', overflowWrap:'break-word'}}>{address} </Typography>
                        </Box>
                        <Link
                          href={linkTo}
                          rel="noopener noreferrer" target="_blank"
                          passHref
                          style={{ textDecoration: "none",  width:'fit-content' }}
                        >
                          
                          <Button
                            sx={{
                              background:
                                "linear-gradient(220deg, #769593 10%, #ECB211 50%)",
                              color: "#eee",

                              px:3,
                              fontSize:'20px', fontWeight:'600', textTransform:'none'
                            }}
                          >
                            Place a Bid!
                          </Button>
                        </Link>
                      </Stack>
                    </Stack>
                  </Box>
                ) : (
                  ""
                )}
              </Box>
            );
          })}
        </Box>
      </Fade>
    </Modal>
  );
};

export default ModalPop;
