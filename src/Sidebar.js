import React, { useState } from "react";
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import TodoApp from './TodoApp';
import Crm from "./Crm"
import Todo_andorid from "./Todo_andorid";
import Important from "./Important";
import { Typography } from "@mui/material";



const drawerWidth = 200;

function Slider() {
 
  const [mobileOpen, setMobileOpen] = useState(false);
  const [andorid,setandorid]=useState(false);
  const [crm,setcrm]=useState(false);
  const[im,setim]=useState(false)

  const click=()=>{
    setandorid(true)
    setcrm(false)
    setim(false)
  }
  const click1=()=>{
    setcrm(true)
    setandorid(false)
    setim(false)
  }
  const click2=()=>{
    setcrm(false)
    setandorid(false)
    setim(true)
  }


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  let total = JSON.parse(localStorage.getItem("Andorid"));
  const drawer = (
    <div style={{background:"lightgray"}} >
     <Divider />
     <Toolbar />
     <Divider />
      <List  >
      
          <ListItem>
        
          <ListItemButton onClick={click1} >
              <ListItemIcon  >
              <MenuIcon/>Valor CRM  
              </ListItemIcon>
              <ListItemText  />
            </ListItemButton>
             
              </ListItem>
              <ListItemButton onClick={click}>
              <ListItemIcon>
              <MenuIcon/>Andorid  
              </ListItemIcon>
              <ListItemText  />
            </ListItemButton>
            <ListItemButton  onClick={click2}>
              <ListItemIcon>
              <MenuIcon/>Importent  
              </ListItemIcon>
              <ListItemText  />
            </ListItemButton>
          
    
      </List>
      
     
     
     
    </div>
  );

  

  return (
    <Box sx={{ display: 'flex'  }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography  variant="h6" noWrap component="div">
           Todo
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
          {/* {
          total.map((x)=>{
            return(
              <div>
                <h1 sx={{ml:150,mt:100}}>id:{x.id}</h1>
              </div>
            )
          })
        } */}


        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
         
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
        
          {drawer}
        </Drawer>
      
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
         
         
          {drawer}
        </Drawer>
        <Box sx={{ml:50}}>
             {andorid?<Todo_andorid/>:""}
             {crm?<Crm/>:""}
             {im?<Important/>:""}
          </Box>
          <Box sx={{ml:50}}>
         
          </Box>
      </Box>
      
    </Box>
  );
}


export default Slider;
