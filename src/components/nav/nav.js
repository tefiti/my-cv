import React from 'react';
import {Link} from 'react-router-dom';
import './nav.css';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import List from '@material-ui/core/List';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from '@material-ui/core/styles';


const drawerWidth = 250;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    main: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
      [theme.breakpoints.down('xs')]:{
        height:`calc(100% - ${AppBar.height}px)`
      },
        flexGrow: 1,
        padding: theme.spacing(3)
    },
    
  }));
  

function ResponsiveDrawer(props) {
  const { container, children } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="nav">
      <h2 className="myName">Oana Fuia</h2>
      <ul>
          <li><a href="https://www.linkedin.com/in/oana-fuia-04741428/" target="_blank"><LinkedInIcon/></a></li>
          <li><a href="https://github.com/tefiti" target="_blank"><GitHubIcon/></a></li>
      </ul>
      <ul className="show app">
        <li>
            <Link to="/">HOME</Link>
        </li>
        <li>
             <Link to="/about">ABOUT ME</Link>
        </li>
        <li>
            <Link to="/cv">CV</Link>
        </li>
        <li>
            <Link to="/projects">PROJECTS</Link>
        </li>
        <li>
            <Link to="/contact">CONTACT</Link>
        </li>
    </ul>
    </div>
  );

  return (
      <div className="classes.root">
      <CssBaseline />
    <Hidden smUp implementation="css">
      <AppBar position="fixed" >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Oana Fuia
          </Typography>
        </Toolbar>
      </AppBar>
      </Hidden>
      <nav className="classes.drawer">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            // anchor="top"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            variant="permanent"
            
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.main}> 
      <div className={classes.toolbar} />
      
            {children}
               
        
      </main>
     </div>
  );
}



export default ResponsiveDrawer;

