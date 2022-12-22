// import { useLocation } from 'react-router-dom';
// import logotype from '../../img/logotype.png';
import logotype from '../../img/logotype2.png';
import {
  NavLinkStyle,
  NavStyle,
  ListStyle,
  ItemsStyle,
  Logo,
} from './Navigation.styled';

const Navigation = () => {
  return (
    <NavStyle>
      <ListStyle>
        <Logo src={logotype} width="50" height="50" />
        <ItemsStyle>
          <NavLinkStyle to="/" end>
            Home
          </NavLinkStyle>
        </ItemsStyle>
        <ItemsStyle>
          <NavLinkStyle to="/movies">Movie</NavLinkStyle>
        </ItemsStyle>
      </ListStyle>
    </NavStyle>
  );
};

export default Navigation;
