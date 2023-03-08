import React, {useState} from 'react'
import {Box, Grid, Typography} from '@mui/material'
import Cards from '../card/Cards'
import icons from "../../assets/index"
import Image from 'next/image'
import { motion  } from "framer-motion"

import { data } from '@/data'

type Props = {

}


  

const Homepage = (props: Props) => {

    
  return (
    <Grid container sx={{background:'#D96612', minHeight:'100vh'}}>
<Grid item md={12} py={3}>
<Typography sx={{textAlign:'center', fontSize:'30px', color:'#EEE', fontWeight:'700'}}>

All Collections
</Typography>
</Grid>
<Box sx={{width:'100%'}}>
<Grid container spacing={3} px={{lg:8, xs:4}}>
    {
        data?.map((item)=>{
            return <Grid key={item.id} item md={4} sm={12} xs={12}>
            <motion.div  whileHover={{ scale: 0.9 }}
                    //    whileTap={{ scale: 0.7 }}
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


