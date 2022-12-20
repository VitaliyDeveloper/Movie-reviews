// import { useLocation } from 'react-router-dom';

import {
  NavLinkStyle,
  NavStyle,
  ListStyle,
  ItemsStyle,
} from './Navigation.styled';

const Navigation = () => {
  // const location = useLocation();
  // console.log(location);

  return (
    <NavStyle>
      <ListStyle>
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
