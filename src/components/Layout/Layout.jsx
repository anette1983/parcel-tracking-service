import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import {
  StyledContainer,
  StyledHeader,
  StyledNavLink,
  StyledWrapper,
} from "./Layout.styled";

import SvgIcon from "@mui/material/SvgIcon";
import { ReactComponent as NpIcon } from "../../images/nova_poshta.svg";
import Loader from "../Loader/Loader";

const Layout = () => {
  const location = useLocation();
  const from = location?.state?.from ?? "/";
  return (
    <StyledContainer>
      <StyledHeader>
        <nav>
          <ul>
            <li>
              <SvgIcon color="secondary" component={StyledNavLink} to="/">
                <NpIcon />
              </SvgIcon>
            </li>
            <li>
              <StyledNavLink to="/">Знайти посилку</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/warehouses" state={{ from: from }}>
                Список відділень
              </StyledNavLink>
            </li>
          </ul>
        </nav>
      </StyledHeader>
      <StyledWrapper>
        <Suspense fallback={<Loader/>}>
          <Outlet />
        </Suspense>
      </StyledWrapper>
    </StyledContainer>
  );
};

export default Layout;
