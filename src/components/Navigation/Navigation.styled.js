import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import santaHat from '../../img/santa-hat.png';

export const NavLinkStyle = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: var(--some-white-color);

  &:hover,
  :focus {
    color: var(--second-color);
  }

  &.active {
    color: var(--accent-color);
    &::after {
      content: '';
      display: block;
      position: absolute;
      right: 0;
      top: 0;
      transform: rotateZ(30deg);
      background-image: url(${santaHat});
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
      width: 12px;
      height: 15px;
      /* z-index: 10005; */
    }
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

  @media screen and (min-width: 480px) {
  }
`;

export const ListStyle = styled.ul`
  display: flex;
  align-items: center;
`;

export const ItemsStyle = styled.li`
  position: relative;
  padding-top: 2px;
  padding-right: 5px;

  list-style: none;
  margin-right: 20px;
`;

export const SantaHat = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  transform: rotateZ(30deg);
  display: none;
`;

export const Logo = styled.img`
  margin-right: 20px;
`;
