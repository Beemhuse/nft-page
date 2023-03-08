import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import ModalPop from "../modals/ModalPop";
import UseModal from "@/hooks/modalHook";
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
  handleClick?: () => void;

  // image: ,
};

const Cards = (props: Props) => {
  const {
    // handleClick,
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
      onClick={handleOpen}
    >
      <Stack spacing={2}>
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
          <Stack direction="row" spacing={1} alignItems="center" >
            {profileImage}
            <Typography sx={{ color: "#fff" }}>{imageTitle}</Typography>
          </Stack>
        </Box>
        {displayImage}
        <Stack direction="row" justifyContent={'space-between'} sx={{color:'#fff', width:'100%'}} spacing={2}>
          <Box>
            <Typography>{broker}</Typography>
          </Box>
          <Box>
            <Typography>{currentBid}</Typography>
            <Typography>{amount}</Typography>
          </Box>
          <Box>
            <Typography>{ending}</Typography>
            <Typography>{time}</Typography>
          </Box>
        </Stack>
      </Stack>

    </Box>
<ModalPop openModal={openModal} handleClose={handleClose} title={title} />
</>
  );
};

export default Cards;
