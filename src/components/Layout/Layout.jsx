import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import {
  StyledContainer,
  StyledHeader,
  StyledNavLink,
  StyledWrapper,
} from "./Layout.styled";

const Layout = () => {
  const location = useLocation();
  const from = location?.state?.from ?? "/";
  return (
    <StyledContainer>
      <StyledHeader>
        <nav>
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
        </nav>
      </StyledHeader>
      <StyledWrapper>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </StyledWrapper>
    </StyledContainer>
  );
};

export default Layout;
