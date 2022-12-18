import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieListStyle = styled.ul`
  display: flex;
  text-decoration: none;
  list-style: none;
  flex-wrap: wrap;
  justify-content: center;
`;

export const MovieItemsStyle = styled.li`
  display: flex;
  text-decoration: none;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  margin: 10px;
  padding: 5px;
  border-radius: 5px;
  width: 150px;
  background-color: var(--first-color-dark);

  &:focus,
  :hover {
    box-shadow: 0 0 15px var(--first-color-dark);
  }
`;

export const PosterStyle = styled.img`
  margin-bottom: 5px;
`;

export const TitleStyle = styled.h2`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 50px;
  text-align: center;
  color: var(--first-color-dark);
  box-shadow: 0 0 20px var(--first-color-dark);
`;

export const LinkStyle = styled(Link)`
  color: var(--some-white-color);
  text-decoration: none;
  text-align: center;

  &:hover {
    color: var(--accent-color);
  }
`;
