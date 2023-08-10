import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { StyledNavLink } from "../../components/Layout/Layout.styled";
import SvgIcon from "@mui/material/SvgIcon";
import { ReactComponent as NpIcon } from "../../images/nova_poshta.svg";
import { Box } from "@mui/material";

const Header = ({ handleDrawerToggle }) => {
  return (
    <nav>
      <IconButton
        color="primary"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{
          mr: 2,
          display: { sm: "none" },
          paddingTop: 1,
          paddingBottom: 1,
        }}
      >
        <MenuIcon />
      </IconButton>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <ul>
          <li>
            <SvgIcon
              sx={{ flexGrow: 1 }}
              color="secondary"
              component={StyledNavLink}
              to="/"
            >
              <NpIcon />
            </SvgIcon>
          </li>
          <li>
            <StyledNavLink to="/">Знайти посилку</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/warehouses">Список відділень</StyledNavLink>
          </li>
        </ul>
      </Box>
    </nav>
  );
};

export default Header;

Header.propTypes = {
  handleDrawerToggle: PropTypes.func,
};
