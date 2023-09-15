import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import { useTranslation } from "react-i18next";
import Switcher from "../Switcher/Switcher";
import { Link } from "react-router-dom";

export default function Burger() {
  // const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const { t, i18n } = useTranslation();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div className="bg-[#1B1B1B] dark:bg-[#fff]">
      <div className="flex justify-between p-[10px]">
      <div className="ml-[15px] bg-[#1B1B1B] dark:bg-[#fff] sd:block">
        <Switcher />
      </div>
      <select onChange={(e)=>changeLanguage(e.target.value)}>
        <option value="en">ENG</option>
        <option value="ru">RUS</option>
      </select>
      </div>
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      className="h-[92.5vh]"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

      <List className="text-white bg-[#1B1B1B] dark:bg-[#fff] dark:text-black">
        {[
          <Link to="/">{t("Home")}</Link>,
          <Link to="About">{t("About")}</Link>,
          <Link to="Services">{t("Services")}</Link>,
          <Link to="Fleets">{t("Fleets")}</Link>,
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon className="text-[#4f4f4f] ">
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      {/* <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
    </div>
  );

  return (
    <div className="sd:block xl:hidden">
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          {/* <Button >{anchor}</Button> */}
          <MenuIcon
            className=" dark:text-black"
            onClick={toggleDrawer(anchor, true)}
          ></MenuIcon>
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
