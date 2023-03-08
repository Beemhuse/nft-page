import React, {useState} from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import ModalPop from "../modals/ModalPop";
import UseModal from "@/hooks/modalHook";
import { motion  } from "framer-motion"

type Props = {
  // handleClose?: () => void;
  // openModal: boolean;
  // children?: React.ReactNode;
  title?: string;
  displayImage?: JSX.Element;
  imageTitle?: string;
  profileImage?: JSX.Element;
  currentBid?: string;
  broker?: string;
  ending?: string;
  time?: string;
  amount?: string;
  id?:number
  handleClick?: () => void;

  // image: ,
};

const Cards = (props: Props) => {
  const {
    // handleClick,
   id,
    title,
    displayImage,
    profileImage,
    currentBid,
    imageTitle,
    broker,
    ending,
    time,
    amount,
  } = props;
  const {handleClose, handleOpen, openModal} = UseModal();
  return (
<>
    <Box
      sx={{
        background: "linear-gradient(180deg, #769593 0%, #ECB211 100%)",
        borderRadius: "15px",

      }}
      px={5}
      py={2}
      // onClick={handleOpen}
    >
          
      <Stack spacing={2}
    >
        <Box
          sx={{
            display: "flex",
            color: "#fff",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          
        >
       
          <Typography sx={{ color: "#fff" }}>{title}</Typography>
          <Stack direction="row" spacing={1} alignItems='center'  >
            {profileImage}
            <Typography sx={{ color: "#fff" }}>{imageTitle}</Typography>
          </Stack>
        </Box>
        {displayImage}
        <Stack direction="row" justifyContent={'space-between'} sx={{color:'#fff', width:'100%', }} spacing={2}>
          <Box>
            <Typography sx={{fontSize:'12px'}}>Broker:</Typography>
            <Typography sx={{fontSize:'12px'}}>{broker}</Typography>
          </Box>
          <Box>
            <Typography sx={{fontSize:'12px'}}>{currentBid}</Typography>
            <Typography sx={{fontSize:'12px'}}>{amount}</Typography>
          </Box>
          
        </Stack>
        <motion.div  whileHover={{ scale: 0.9 }}
whileTap={{ scale: 0.7 }}
>

<Button 
onClick={handleOpen}
sx={{ background:"linear-gradient(20deg, #769593 100%, #ECB211 50%)",
color: "#eee",
px:3, 
fontSize:'20px', fontWeight:'600', textTransform:'none', width:'fit-content', marginLeft:'auto'}}>Place a bid</Button>
</motion.div>
</Stack>

    </Box>
<ModalPop openModal={openModal} handleClose={handleClose}  title={title} />
</>
  );
};

export default Cards;
