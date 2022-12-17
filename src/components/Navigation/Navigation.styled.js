import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavLinkStyle = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: tomato;

  &.active {
    color: greenyellow;
  }
`;

export const NavStyle = styled.nav`
  text-decoration: none;
  background-color: #050505;
  box-shadow: 0 0 10px #757575;
  box-sizing: border-box;
  margin-top: 0;
  margin-bottom: 30px;
  padding: 20px;
`;

export const ListStyle = styled.ul`
  display: flex;
  align-items: center;
`;

export const ItemsStyle = styled.li`
  list-style: none;
  margin-right: 20px;
`;
