import Link from 'next/link'
import React, {useState} from 'react'
import NavDrawer from './Drawer';
import {
  Avatar,
  AppBar,
  Toolbar,
  Box,
  Container,
  Button,
  IconButton,
  Stack
} from "@mui/material";
import Image from "next/image";
import {AiOutlineMenu} from "react-icons/ai"
// import {icons} from "../../assets/index"
// import styles from  "../../styles/homepage.module.css"


type Props = {}
const pages = [{page:"Legal", link:'/'}, {page:"FAQ", link:'/faq'}];

export default function Navbar({}: Props) {

  return (
   <>
    <AppBar
      position="static" 
      sx={{ background: "transparent",border:'none', color: "black", boxShadow:'none'}}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ color: "color", background:'transparent' }}>
          <Box sx={{flexGrow: 1, display: 'flex', alignItems:'center', justifyContent:'space-between'}}>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {/* <Image src={icons.futurepayicon} alt="icon" width={150} /> */}
          </Box>

          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
                sm:'flex',
                alignItems: "center",
                gap: "20px",
              },
              padding: "10px",
              color:'#fff'
            }}
          >
            {pages.map((item) => (
           
            <Link key={item.page}  href={item.link} style={{textDecoration:'none'}}>

              <Button
                key={item.page}
                // onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#fff",
                  fontWeight: "700",
                  display: "block",
                  textTransform:'none'
                }}
              >
                {item.page}
              </Button>
              
            </Link>
            ))}

<Stack direction='row' spacing={3}>
                <Button sx={{border:'1px solid white', background:'none', color:'#fff', textTransform:'none'}}>Login</Button>
                <Button sx={{ background:'#FF842B',  color:'#fff', textTransform:'none',   "&:hover": {
    color: '#fff',
    backgroundColor: '#FF842B'
  },}}>Sign up</Button>
              </Stack>
          </Box>
          </Box>

          <Box sx={{width:'100%',border:'solid red', flexGrow: 1, display: { xs: "flex", md: "none",  }, flexDirection:'row-reverse', alignItems:'center', justifyContent:'space-between' }}>
          
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <NavDrawer />
            </IconButton>
            <Box sx={{ display: { xs: "flex", md: "none", sm:"flex" } }}>
            {/* <Image src={icons.futurepayicon} alt="icon" width={150} /> */}
          </Box>
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
   </>
  )
}