import {
  NavLinkStyle,
  NavStyle,
  ListStyle,
  ItemsStyle,
} from './Navigation.styled';

export const Navigation = () => {
  return (
    <NavStyle>
      <ListStyle>
        <ItemsStyle>
          <NavLinkStyle to="/" end>
            Home
          </NavLinkStyle>
        </ItemsStyle>
        <ItemsStyle>
          <NavLinkStyle to="/movie">Movie</NavLinkStyle>
        </ItemsStyle>
      </ListStyle>
    </NavStyle>
  );
};
