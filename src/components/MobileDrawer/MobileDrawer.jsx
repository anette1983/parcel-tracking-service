import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

import { StyledNavLink } from "../../components/Layout/Layout.styled";
import SvgIcon from "@mui/material/SvgIcon";
import { ReactComponent as NpIcon } from "../../images/nova_poshta.svg";

const MobileDrawer = ({ handleDrawerToggle }) => {
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
          <StyledNavLink to="/warehouses">Список відділень</StyledNavLink>
        </li>
      </ul>
    </Box>
  );
};

export default MobileDrawer;

MobileDrawer.propTypes = {
  handleDrawerToggle: PropTypes.func,
};
