import React, {useState} from 'react'
import {Box, Divider, Grid, Stack, Typography} from '@mui/material'
import Cards from '../card/Cards'
import icons from "../../assets/index"
import Image from 'next/image'
import { motion  } from "framer-motion"

import { data } from '@/data'

type Props = {

}

  

const Homepage = (props: Props) => {

    
  return (
    <Grid container sx={{background:'#D96612', minHeight:'100vh'}} >
    <Box sx={{background:'#ECB211', height:'40vh', width:'100%'}}>

    <Box sx={{marginTop:{md:"11.5rem",xs:"7.4rem", sm:"14rem"}, marginLeft:'60px',borderRadius:'10px', border:'2px solid white', width:'fit-content', padding:'30px', background: "linear-gradient(180deg, #769593 0%, #ECB211 100%)",
}}>
        <Image src= {icons.profile} alt=''/>
    </Box>
    </Box>
<Grid item md={12} py={3} px={{lg:8, xs:4}}>
    <Typography sx={{fontSize:'30px', fontWeight:'700'}}>Base</Typography>
   <Grid container>
    <Grid item lg={6} sx={{color:"#eee", fontSize:'20px' }}>
<Stack direction='row' sx={{ flexDirection:{md:'row', xs:'column'},}} spacing={3}>
    <Box sx={{display:'flex', flexDirection:{md:'row', xs:'column'}, gap:'5px', alignItems:'center'}}>
        <Typography sx={{fontSize:'17px'}}>Items</Typography>
        <Typography sx={{fontWeight:'700', color:"#000", fontSize:'17px' }}>8</Typography>
    </Box>
    <Box sx={{display:'flex', flexDirection:{md:'row', xs:'column'}, gap:'5px', alignItems:'center'}}>
        <Typography sx={{fontSize:'17px'}}>Created</Typography>
        <Typography sx={{fontWeight:'700',color:"#000", fontSize:'17px'}}>Feb 2023</Typography>
    </Box>
    <Box sx={{display:'flex', flexDirection:{md:'row', xs:'column'}, gap:'5px', alignItems:'center'}}>
        <Typography sx={{fontSize:'17px'}}>Creator earnings</Typography>
        <Typography sx={{fontWeight:'700',color:"#000", fontSize:'17px'}}>0%</Typography>
    </Box>
    <Box sx={{display:'flex', flexDirection:{md:'row', xs:'column'}, gap:'10px',alignItems:'center' }}>
        <Typography sx={{fontSize:'17px'}}>Chain</Typography>
        <Typography sx={{fontWeight:'700',color:"#000", fontSize:'17px'}}>Ethereum</Typography>
    </Box>
</Stack>
<Box>
     <Stack spacing={2} sx={{color:"#000"}}>
        <Typography sx={{fontSize:'20px'}}>Meet Base, an Ethereum L2 that offers a secure, low-cost, developer-friendly way for anyone, anywhere, to build decentralized apps.</Typography>
        <Typography sx={{fontSize:'20px'}}>Mint ‘Base, Introduced’ to celebrate the testnet launch and join the broader Base community. We’re excited to build Base together with you.</Typography>
    </Stack>
</Box>
    </Grid>
    </Grid> 
<Typography sx={{textAlign:'center', fontSize:'30px', color:'#EEE', fontWeight:'700'}} mt={3}>

All Collections
</Typography>
<Divider sx={{width:'100%', border:'3px solid  #769593', mt:4}} />
</Grid>
<Box sx={{width:'100%'}}>
<Grid container spacing={3} py={3} px={{lg:8, xs:4}}>
    {
        data?.map((item)=>{
            return <Grid key={item.id} item md={3} sm={12} xs={12}>
            <motion.div  whileHover={{ scale: 0.9 }}
                       >
                <Cards id={item?.id}  title={item?.title} imageTitle={item?.imageTitle} profileImage ={<Image src={item?.profileImage} alt='' width={100} height={100} style={{width:'50px', height:'50px'}} />}
                displayImage ={<Image src={item?.displayImage} alt='' width={100} height={100}  style={{width:'100%', height:'100%'}}  />}
                currentBid={item?.currentBid}  broker={item?.broker} ending={item?.ending}    time={item?.time}  amount={item?.amount}  />
                </motion.div>
            </Grid>
        })
    }
   
  
</Grid>
</Box>
{/* <ModalPop */}
    </Grid>
  )
}

export default Homepage


