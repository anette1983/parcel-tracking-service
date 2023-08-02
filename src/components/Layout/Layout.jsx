import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { StyledContainer, StyledHeader, StyledNavLink } from "./Layout.styled";

const Layout = () => {
  const location = useLocation();
  const from = location?.state?.from ?? "/";
  return (
    <>
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
      <StyledContainer>
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </main>
        <footer></footer>
      </StyledContainer>
    </>
  );
};

export default Layout;
