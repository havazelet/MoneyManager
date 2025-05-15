import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Toolbar,
  Switch,
  FormControlLabel,
  Typography,
  Divider,
  Drawer,
  IconButton,
  useMediaQuery,
  useTheme,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useThemeContext } from "../../ThemeContext";
import { menuItems } from "./SideNavBar.config";
import styles from "./SideNavBar.module.css";

const DRAWER_WIDTH = 240;
const MINI_DRAWER_WIDTH = 75;

const SideNavBar = () => {
  const { mode, toggleTheme } = useThemeContext();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [miniVariant, setMiniVariant] = useState(false);

  const handleDrawerToggle = () => {
    if (isMobile) {
      setMobileOpen(!mobileOpen);
    } else {
      setMiniVariant(!miniVariant);
    }
  };

  const drawerContent = (
    <>
      <Box>
        <Toolbar>
          <Typography
            variant="h6"
            className={`${styles.typographyHeader} ${
              miniVariant ? styles.typographyMini : ""
            }`}
          >
            {miniVariant ? "MM" : "MONEY MANAGER"}
          </Typography>
        </Toolbar>

        <Divider className={styles.divider} />

        <List>
          {menuItems.map((item) => (
            <ListItem disablePadding key={item.text}>
              <Tooltip title={miniVariant ? item.text : ""} placement="right">
                <ListItemButton
                  className={miniVariant ? styles.centeredButton : ""}
                >
                  <ListItemIcon
                    className={`${styles.listItemIcon} ${
                      miniVariant ? styles.iconMini : ""
                    }`}
                  >
                    {React.createElement(item.icon)}
                  </ListItemIcon>
                  {!miniVariant && <ListItemText primary={item.text} />}
                </ListItemButton>
              </Tooltip>
            </ListItem>
          ))}
        </List>
      </Box>

      <Box className={styles.bottomSection}>
        {!miniVariant ? (
          <FormControlLabel
            control={
              <Switch
                checked={mode === "dark"}
                onChange={toggleTheme}
                className={styles.switch}
              />
            }
            label={
              <Typography className={styles.styleModeText}>
                {mode === "dark" ? "Dark" : "Light"} Mode
              </Typography>
            }
          />
        ) : (
          <Switch
            checked={mode === "dark"}
            onChange={toggleTheme}
            className={styles.switch}
          />
        )}
      </Box>
    </>
  );

  return (
    <>
      {isMobile && (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={styles.mobileMenuButton}
        >
          <MenuIcon />
        </IconButton>
      )}

      {isMobile ? (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          classes={{ paper: styles.mobileDrawer }}
        >
          {drawerContent}
        </Drawer>
      ) : (
        <Box component="nav" className={styles.navContainer}>
          <Box
            className={styles.drawer}
            style={{ width: miniVariant ? MINI_DRAWER_WIDTH : DRAWER_WIDTH }}
          >
            <IconButton
              onClick={handleDrawerToggle}
              className={styles.toggleButton}
            >
              {miniVariant ? (
                <ChevronRightIcon fontSize="small" />
              ) : (
                <ChevronLeftIcon fontSize="small" />
              )}
            </IconButton>

            {drawerContent}
          </Box>
        </Box>
      )}
    </>
  );
};

export default SideNavBar;
