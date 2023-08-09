import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import { StyledContainer, StyledHeader, StyledWrapper } from "./Layout.styled";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Loader from "../Loader/Loader";
import PropTypes from "prop-types";
import Header from "../Header/Header";
import MobileDrawer from "../MobileDrawer/MobileDrawer";

const drawerWidth = 240;

const Layout = (props) => {
  const { window } = props;

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <StyledContainer>
      <StyledHeader>
        <Header handleDrawerToggle={handleDrawerToggle} />
      </StyledHeader>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <MobileDrawer handleDrawerToggle={handleDrawerToggle} />
        </Drawer>
      </Box>
      <StyledWrapper>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </StyledWrapper>
    </StyledContainer>
  );
};

export default Layout;

Layout.propTypes = {
  window: PropTypes.func,
};
