import * as React from "react";
import {
  makeStyles,
  NavDrawer,
  NavDrawerBody,
  NavDrawerHeader,
  NavItem,
  shorthands,
  tokens,
} from "@fluentui/react-components";

import {
  Home24Regular,
  Info24Regular,
  ContactCard24Regular,
  People24Regular,
  ScanObject24Regular,
} from "@fluentui/react-icons";

import { useNavigate, useLocation } from "react-router-dom";
const useStyles = makeStyles({
  navItem: {
    minHeight: "10px", // requested
    borderRadius: "6px", // square-ish button
    justifyContent: "flex-start",
    ...shorthands.padding("10px", "12px"),
    marginBottom: "6px",

    "&:hover": {
      backgroundColor: tokens.colorNeutralBackground1Hover,
    },

    "&[aria-current='page']": {
      backgroundColor: tokens.colorBrandBackground2,
      color: tokens.colorBrandForeground2,
    },
  },
});

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const styles = useStyles();

  return (
    <NavDrawer
      open
      type="inline"
      style={{ width: 220, height: "84vh",border: "solid 1px black" }}
      selectedValue={location.pathname}
    >
      <NavDrawerHeader className="d-flex justify-content-start">
        <div className="w-100 text-start">
          <strong>Menu</strong>
        </div>
      </NavDrawerHeader>

      <NavDrawerBody>
        <NavItem
          value="/"
          as="button"
          icon={<Home24Regular />}
          onClick={() => navigate("/")}
          className={styles.navItem}
        >
          Home
        </NavItem>

        <NavItem
          value="/about"
          as="button"
          icon={<Info24Regular />}
          onClick={() => navigate("/about")}
          className={styles.navItem}
        >
          About
        </NavItem>

        <NavItem
          value="/contact"
          as="button"
          icon={<ContactCard24Regular />}
          onClick={() => navigate("/contact")}
          className={styles.navItem}
        >
          Contact
        </NavItem>

        <NavItem
          value="/student"
          as="button"
          icon={<People24Regular />}
          onClick={() => navigate("/student")}
          className={styles.navItem}
        >
          Student
        </NavItem>

        <NavItem
          value="/quality-scan"
          as="button"
          icon={<ScanObject24Regular />}
          onClick={() => navigate("/quality-scan")}
          className={styles.navItem}
        >
          Quality Scan
        </NavItem>
      </NavDrawerBody>
    </NavDrawer>
  );
};

export default Sidebar;
