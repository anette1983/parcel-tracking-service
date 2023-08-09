import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

import { StyledNavLink } from "../../components/Layout/Layout.styled";
import SvgIcon from "@mui/material/SvgIcon";
import { ReactComponent as NpIcon } from "../../images/nova_poshta.svg";
import { useLocation } from "react-router-dom";

const MobileDrawer = ({ handleDrawerToggle }) => {
  const location = useLocation();
  const from = location?.state?.from ?? "/";

  return (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <SvgIcon
        sx={{ flexGrow: 1 }}
        color="secondary"
        component={StyledNavLink}
        to="/"
      >
        <NpIcon />
      </SvgIcon>
      <Divider />
      <ul>
        <li>
          <StyledNavLink to="/">Знайти посилку</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/warehouses" state={{ from: from }}>
            Список відділень
          </StyledNavLink>
        </li>
      </ul>
    </Box>
  );
};

export default MobileDrawer;

MobileDrawer.propTypes = {
  handleDrawerToggle: PropTypes.func,
};
