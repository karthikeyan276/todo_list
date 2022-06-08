import React, { useState } from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Crm from "./Crm"
import Todo_andorid from "./Todo_andorid";
import Important from "./Important";
import AddIcon from '@mui/icons-material/Add';
import MenuIcon from '@mui/icons-material/Menu';
import TodoDefault from "./TodoDefault";

const drawerWidth = 240;

export default function TodoList() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [andorid,setandorid]=useState(false);
  const [crm,setcrm]=useState(false);
  const[im,setim]=useState(false);
  const[name,setName]=useState("")
  const [todos,settodos]=useState(false)
  const [listt,setlistt]=useState("")

  const [done,setsdone]=useState(false)
  const [defualt,setDefault]=useState(false)

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
 
    setsdone(true)
    setDefault(false)
    settodos(false)
  }

  const handle=(x)=>{
    

    let datas = JSON.parse(localStorage.getItem("list")) || []
    let emails = datas.map((x) => x.name);

  
    datas.push({name:name })
    
    settodos(true)
    if (emails.includes(name)) {
      alert("sorry List name  already exists!!!")
  }
  else{
    localStorage.setItem("list", JSON.stringify(datas));
  }


  }
let list  = JSON.parse(localStorage.getItem("list"))||[]
console.log(list)

const sett = (x)=>{
  let jeans = []


  jeans.push({  name:x })
  localStorage.setItem("current", JSON.stringify(jeans));
  setlistt(x)
  setcrm(false)
  setandorid(false)
  setim(false)
  setDefault(false)
  settodos(false)
  setsdone(false)

}


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    
    <Box  >
      <div>
      <CssBaseline />
      <AppBar
        position="fixed" 
        sx={{display:"flex", justifyContent:"center",width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` ,background:"lightgray" }}
      >
        <Toolbar>
          <Typography variant="h3"  sx={{color:"white",align:"center"}}  noWrap component="div">
         Todo  App
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            
          },
        }}
        variant="permanent"
        anchor="center"
      >
        
       <div style={{background:"lightgray",height:"100%"}}>
         <Divider />
        
        <Divider />
        <List>
          
            {/* <ListItem >
              <ListItemButton  onClick={click1} >
                <ListItemIcon>
               <MenuIcon/>  Valor CRM
                </ListItemIcon>
                <ListItemText  />
              </ListItemButton>
              </ListItem>
              <ListItemButton onClick={click}>
                <ListItem>
                <ListItemIcon  >
                <MenuIcon/> Andorid
                </ListItemIcon>
                </ListItem>
                <ListItemText  />
              </ListItemButton> */}
              <Box >
                <ListItem >
              <ListItemButton   onClick={click2}>
                <ListItemIcon>
                <MenuIcon/>  Important
                </ListItemIcon>
                <ListItemText  />
                
              </ListItemButton>
              </ListItem>
              </Box>
              
              {
                  list.map((x)=>{
                    return(
                      <div>
                        
                        <ListItem >
              <ListItemButton key={x}  onClick={()=>sett(x.name)}  >
                <ListItemIcon>
                <MenuIcon/>  {x.name}
                
                </ListItemIcon>
                <ListItemText  />
                
              </ListItemButton>
              </ListItem>


                        </div>
                    )
                  })
              }
            
               
        </List>
        
       </div>
     <form onSubmit={handle}>
              <input type ="text" style={{background:"lightgray",width:"240px",height:"40px", color:"white"}} value={name} onChange={(e)=>setName(e.target.value)} placeholder="New List " />
           

        </form>
       
      </Drawer>
      <Box sx={{ml:30,width:"82%"}} style={{background:"#809fff"}}>
           
             {/* {im?<Important/>:""} */}
             {done?(list!="")?<Important list={listt}/>:"":<TodoDefault list={listt}/>}
          </Box>
          </div>
    
    </Box>
    
  );
}
