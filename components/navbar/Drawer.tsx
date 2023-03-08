import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {HiMenuAlt2} from "react-icons/hi"
import Link from 'next/link';
import Image from "next/image";
// import {icons} from "../../assets/index"

type Anchor = 'left' ;
const pages = [{page:"Legal", link:'/'}, {page:"FAQ", link:'/faq'}];


export default function NavDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width:250  }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      {/* <Image src={icons.futurepayicon} alt="icon" width={150} style={{marginLeft:'20px'}} /> */}

      </List>
      <Divider />
       <List>
        {pages.map((item) => (
          <ListItem key={item.page} disablePadding>
            <ListItemButton>
            <Link href={item.link} style={{color:'#000', textDecoration:"none"}}>
              <ListItemText primary={item.page} />
            </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
     
    </Box>
  );

  return (
    <div>
      {(['left'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} sx={{display:{md:'none', xs:'block'}, color:'white'}}><HiMenuAlt2 style={{fontSize:'30px'}} /></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}