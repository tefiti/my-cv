import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./nav.css";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 250;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  main: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: 60
    },
    flexGrow: 1
  }
}));

function ResponsiveDrawer(props) {
  const { container, children } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="nav">
      <h2 className="myName">Oana Fuia</h2>
      <ul className="socialIcons">
        <li>
          <a
            href="https://www.linkedin.com/in/oana-fuia-04741428/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon className={"iconCustomStyle"}  />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/tefiti"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon className={"iconCustomStyle"} />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/oana.marinica.5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon className={"iconCustomStyle"} />
          </a>
        </li>
      </ul>
      <ul className="appPages">
        <li>
          <NavLink exact to="/" activeClassName="current">HOME</NavLink>
        </li>

        <li>
          <NavLink exact to="/about" activeClassName="current">ABOUT ME</NavLink>
        </li>

        <li>
          <NavLink exact to="/cv" activeClassName="current">CV</NavLink>
        </li>

        <li>
          <NavLink exact to="/projects" activeClassName="current">PROJECTS</NavLink>
        </li>

        <li>
          <NavLink exact to="/contact"activeClassName="current">CONTACT</NavLink>
        </li>
      </ul>
    </div>
  );

  return (
    <div className="classes.root">
      <CssBaseline />
      <Hidden smUp>
        <AppBar position="fixed">
          <Toolbar className={"toolbarCustomStyle"}>
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
        <Hidden smUp>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer variant="permanent" open>
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
