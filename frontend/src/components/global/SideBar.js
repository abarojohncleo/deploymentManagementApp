/* React */
import React, { useEffect} from 'react';
import { NavLink, useLocation } from 'react-router-dom';

/* Material UI */
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Tooltip from '@mui/material/Tooltip';

/* Material UI Icons */
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

/* Icons */
import {
  DashboardMonitoringIcon,
  CollapseMenuIcon,
  MenuIcon,
  RosterIcon,
  BusinessPartnersIcon,
  EngineersIcon,
  EngineerRequestIcon,
  QuotationsIcon,
  ProjectsIcon
 } from '../../assets/icons';

const openedMixin = (theme) => ({
  width: '240px',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  backgroundColor: '#15136C',
  borderRight: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '0px 20px 20px 0px',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width:'50px',
  backgroundColor: '#15136C',
  borderRight: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '0px 20px 20px 0px',
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: '240px',
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const Sidebar = () =>  {
  const routeLocation = useLocation();
  const [subMenuOpen, setSubMenuOpen] = React.useState(false);
  const [selected, setSelected] = React.useState('Dashboard');
  const [location, setLocation] = React.useState('/')
  const [open, setOpen] = React.useState(true);

  useEffect(() => {
    const url = routeLocation.pathname
    const extractedPart = url.split('/').slice(0, 3).join('/');
    console.log('extracted', extractedPart)
    setLocation(extractedPart)
  }, [routeLocation.pathname]);

  const MenuItemList = [
    {
      name:"Dashboard",
      icon:<DashboardMonitoringIcon 
            color='white'
            width='20px'
            showTooltip={!open}
            tooltipText="Dashboard"
            tooltipPlacement="right-start" />,
      link:'/home'
    },
    {
      name:"Roster",
      icon:<RosterIcon 
              color='white'
              width='20px'
              showTooltip={!open}
              tooltipText="Roster"
              tooltipPlacement="right-start" />,
      link:'/roster'
    },
    {
      name:'Business Partners',
      icon:<BusinessPartnersIcon 
              color='white'
              width='20px'
              showTooltip={!open}
              tooltipText="Business Partners"
              tooltipPlacement="right-start" />,
      link:'/business-partners'
    },
    {
      name:'Engineers',
      icon:<EngineersIcon 
              color='white'
              width='20px'
              showTooltip={!open}
              tooltipText="Engineers"
              tooltipPlacement="right-start" />,
      link:'/engineers'
    },
    {
      name:"Engineer Requests",
      icon:<EngineerRequestIcon 
              color='white'
              width='20px'
              showTooltip={!open}
              tooltipText="Engineer Requests"
              tooltipPlacement="right-start" />,
      link:'/engineer-requests'
    },
    {
    name:'Quotations',
    icon:<QuotationsIcon 
            color='white'
            width='20px'
            showTooltip={!open}
            tooltipText="Quotations"
            tooltipPlacement="right-start" />,
      link:'/quotations'
    },
    {
      name:"Projects",
      icon:<ProjectsIcon 
            color='white'
            width='20px'
            showTooltip={!open}
            tooltipText="Projects"
            tooltipPlacement="right-start" />,
      link:'/projects',
    }
  ]

  const handleClick = (text) => {
    setOpen(true)
    setSubMenuOpen(!subMenuOpen);
    setSelected(text);
  };

  const handleSelected = (text) => {
    setSelected(text)
  };


  const toogleDrawer = () => {
    setOpen(!open);
    setSubMenuOpen(false)
  };


  React.useEffect(() => {
    const url = routeLocation.pathname
    const extractedPart = url.split('/').slice(0, 3).join('/');
    setLocation(extractedPart)
  }, [routeLocation.pathname]);

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <Drawer variant="permanent" open={open} >
        <DrawerHeader onClick={toogleDrawer} sx={{color:'white' }}>
          <Box display="flex" flexDirection="column" width="100%">
            <Box display="flex" justifyContent="space-between" alignItems="center">
              {open && 
                <div>
                  <Typography className='text-xl' noWrap component="div">Eguji Technologies</Typography>
                  <Typography variant="h5" noWrap component="div"
                                 sx={{fontSize:'12px', color:'rgba(255,255,255,0.6)'}}>Central Data Manager</Typography>
                </div>
                }
              <IconButton>
                {open ? <CollapseMenuIcon width='20px' sx={{color:'white'}}/> : <MenuIcon width='20px' sx={{color:'white'}}/>}
              </IconButton>
            </Box>
          </Box>
        </DrawerHeader>
        <Divider sx={{backgroundColor: 'white', width:'95%', margin:'2px auto'}}/>
        <List >
          {MenuItemList.map((item, index) => (
            <Box key={index}>
              <ListItem
                key={index}
                disablePadding
                sx={{ display: 'block'}}
                onClick={item.subMenu ? () => handleClick(item.name) : () => handleSelected(item.name)}
                >
                  <div className={item.link === location  ? 'text-white-900 bg-primaryBlue-400 rounded' : 'text-white-900'}>
                    <ListItemButton
                        to={item.link}
                        component={NavLink}
                        >
                      <Tooltip>
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : 'auto',
                            justifyContent: 'center',
                          }}
                          >
                        {item.icon}
                        </ListItemIcon>
                      </Tooltip>
                    <ListItemText 
                      primary={item.name} sx={{ opacity: open ? 1 : 0 }} 
                      />
                    {/* {open && item.subMenu ? (
                      <>
                        {subMenuOpen ? <ExpandLess /> : <ExpandMore />}
                      </>
                      ) : ( null)
                    } */}
                    </ListItemButton>
                  </div>
              </ListItem>
              {/* add this if needed submenu */}
            {/* {item.subMenu && (
              <Collapse key={item} in={subMenuOpen} timeout="auto" unmountOnExit>
                <List disablePadding>
                  {item.subMenu.map((subMenuItem, subIndex) => (
                    <ListItem
                      sx={{padding:0}}
                      key={subIndex}
                    >
                      <ListItemButton
                        sx={{
                          justifyContent: 'center',
                          paddingLeft: 4,
                          paddingTop:0,
                          paddingBottom:0,
                          // color: selected === subMenuItem.name ? colors.lightBlueAccent[500] : colors.black[700]
                        }}
                        onClick={() => handleSelected(subMenuItem.name)}
                      >
                        <ListItemIcon
                          // sx={{color: selected === subMenuItem.name ? colors.lightBlueAccent[500] : colors.black[700]}}
                        >
                          {subMenuItem.icon}
                        </ListItemIcon>
                        <ListItemText primary={subMenuItem.name} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )} */}
            </Box>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}

export default Sidebar;