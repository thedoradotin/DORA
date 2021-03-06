import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";

import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";

import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ContactPage.css";

const drawerWidth = 240;

function ContactPage(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [open, setOpen] = React.useState(true);
  const [eventsOpen, setEventsOpen] = React.useState(false);

  const missionsClick = () => {
    setOpen(!open);
  };
  const eventsClick = () => {
    setEventsOpen(!eventsOpen);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className="logo_container">
        <img className="logo_img" src="/assets/images/DORA Logo.png" />
      </div>
      <List>
        <ListItemButton onClick={missionsClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Our Missions" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link to="/education" className="nav_link">
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Education" />
              </ListItemButton>
            </Link>
            <Link to="/health" className="nav_link">
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Health" />
              </ListItemButton>
            </Link>
            <Link to="/social-awareness" className="nav_link">
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Social Awareness" />
              </ListItemButton>
            </Link>
          </List>
        </Collapse>
        <Link to="/gallery" className="nav_link">
          <ListItem button key="Gallery">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Gallery" />
          </ListItem>
        </Link>
        <ListItemButton onClick={eventsClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Events" />
          {eventsOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={eventsOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Ongoing Events" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Upcoming Events" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Previous Events" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
      <Divider />
      <List>
        <ListItem button key="About Us">
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="About Us" />
        </ListItem>
        <ListItem button key="contact Us" className="active_link">
          <ListItemIcon>
            <InboxIcon className="active_icon" />
          </ListItemIcon>
          <ListItemText primary="Contact Us" />
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className="navbar_container"
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
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/" className="nav_link">
            <Typography variant="h6" noWrap component="div" className="title">
              DORA
            </Typography>
            <Typography variant="p" className="title_exp">
              Development of Rural Area
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <div className="contact_container">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdw8EiL9MRoeTsg5ue98G_Levzv1m5BrVgtgY8E4YYmPsGZSA/viewform?embedded=true"
            width="640"
            height="1082"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading???
          </iframe>
        </div>
      </Box>
    </Box>
  );
}

ContactPage.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ContactPage;
