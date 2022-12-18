import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavLinkStyle = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: var(--some-white-color);

  &.active {
    color: var(--accent-color);
  }
`;

export const NavStyle = styled.nav`
  text-decoration: none;
  background-color: var(--first-color-dark);
  box-shadow: 0 0 10px var(--first-color-dark);
  box-sizing: border-box;
  margin-top: 0;
  margin-bottom: 30px;
  padding: 20px;
  width: 100%;
`;

export const ListStyle = styled.ul`
  display: flex;
  align-items: center;
`;

export const ItemsStyle = styled.li`
  list-style: none;
  margin-right: 20px;
`;
