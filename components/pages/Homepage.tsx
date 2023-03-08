import React from 'react'
import {Box, Grid, Typography} from '@mui/material'
import Cards from '../card/Cards'
import icons from "../../assets/index"
import Image from 'next/image'
import { motion  } from "framer-motion"
import ModalPop from '../modals/ModalPop'
import UseModal from '../../hooks/modalHook'


type Props = {}
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
    <Grid item md={4}  >
    <motion.div  whileHover={{ scale: 0.9 }}
               whileTap={{ scale: 0.7 }}>
        <Cards  title={'MGland#6873'} imageTitle={"MG Land"} profileImage ={<Image src={icons.profile} alt='' style={{width:'50px', height:'50px'}} />}
        displayImage ={<Image src={icons.nft1} alt='' style={{width:'100%', height:'100%'}}  />}
        currentBid="Current Bid"  broker="OpenSea" ending='Ending in'    time='6m 5s'  amount='0.118 ETH'  />
        </motion.div>
    </Grid>
    <Grid item md={4}>
    <motion.div  whileHover={{ scale: 0.9 }}
               whileTap={{ scale: 0.7 }}>

    <Cards  title={'Doodle #2446'} imageTitle={"Doodles_LLC"} profileImage ={<Image src={icons.profile} alt='' style={{width:'50px', height:'50px'}} />}
        displayImage ={<Image src={icons.nft2} alt='' style={{width:'100%', height:'100%'}}  />}
        currentBid="Current Bid"  broker="OpenSea" ending='Ending in'    time='16m 25s'  amount='5.099 ETH'  />
               </motion.div>
    </Grid>
    <Grid item md={4}>
    <motion.div  whileHover={{ scale: 0.9 }}
               whileTap={{ scale: 0.7 }}>
                
    <Cards  title={'CloneX #1489'} imageTitle={"CLONE X - X TAKASHI MURAKAMI"} profileImage ={<Image src={icons.profile} alt='' style={{width:'50px', height:'50px'}} />}
        displayImage ={<Image src={icons.nft3} alt='' style={{width:'100%', height:'100%'}}  />}
        currentBid="Current Bid"  broker="OpenSea" ending='Ending in'    time='30m 25s'  amount='4.575 ETH'  />
               </motion.div>
    </Grid>
    <Grid item md={4}>
    <motion.div  whileHover={{ scale: 0.9 }}
               whileTap={{ scale: 0.7 }}>

    <Cards  title={'HARAMBE: LEGENDS #635'} imageTitle={"HARAMBE: LEGENDS"} profileImage ={<Image src={icons.profile} alt='' style={{width:'50px', height:'50px'}} />}
        displayImage ={<Image src={icons.nft4} alt='' style={{width:'100%', height:'100%'}}  />}
        currentBid="Current Bid"  broker="OpenSea" ending='Ending in'    time='30m 25s'  amount='15.42 ETH'  />
               </motion.div>

    </Grid>
    <Grid item md={4}>
    <motion.div  whileHover={{ scale: 0.9 }}
               whileTap={{ scale: 0.7 }}>

    <Cards  title={'Seizon #4981'} imageTitle={"Seizon"} profileImage ={<Image src={icons.profile} alt='' style={{width:'50px', height:'50px'}} />}
        displayImage ={<Image src={icons.nft5} alt='' style={{width:'100%', height:'100%'}}  />}
        currentBid="Current Bid"  broker="OpenSea" ending='Ending in'    time='30m 25s'  amount='0.0955 ETH'  />
               </motion.div>

    </Grid>
    <Grid item md={4} sm={12}>
    <motion.div  whileHover={{ scale: 0.9 }}
               whileTap={{ scale: 0.7 }}>

    <Cards  title={'Base, Introduced 132118'} imageTitle={"Base"} profileImage ={<Image src={icons.profile} alt='' style={{width:'50px', height:'50px'}} />}
        displayImage ={<Image src={icons.nft6} alt='' style={{width:'100%', height:'100%'}}  />}
        currentBid="Current Bid"  broker="OpenSea" ending='Ending in'    time='30m 25s'  amount='0.003 ETH'  />
               </motion.div>

    </Grid>
</Grid>
</Box>
{/* <ModalPop */}
    </Grid>
  )
}

export default Homepage