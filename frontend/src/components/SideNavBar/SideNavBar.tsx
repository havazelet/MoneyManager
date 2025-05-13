import React from "react";
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
  Divider
} from "@mui/material";
import { useThemeContext } from "../../ThemeContext"; 
import style from './SideNavBar.module.css'
import { menuItems } from "./SideNavBar.config";

const SideNavBar = () => {
  const { mode, toggleTheme } = useThemeContext();

  return (
    <Box className={style.drawer}>
      <Box>
        <Toolbar>
          <Typography variant="h6" className={style.typographyHeader}>MONEY MANAGER</Typography>
        </Toolbar>
        <Divider className={style.divider}/>
        <List>
          {menuItems.map((item) => (
            <ListItem disablePadding key={item.text}>
              <ListItemButton>
                <ListItemIcon className={style.listItemIcon}>{React.createElement(item.icon)}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      <Box sx={{ padding: 2 }}>
        <FormControlLabel
          control={
            <Switch
              checked={mode === "dark"}
              onChange={toggleTheme}
              className={style.switch}
            />
          }
          label={
            <Typography className={style.styleModeText}>
              {mode === "dark" ? "Dark" : "Light"} Mode
            </Typography>
          }
        />
      </Box>
    </Box>
  );
};

export default SideNavBar;
