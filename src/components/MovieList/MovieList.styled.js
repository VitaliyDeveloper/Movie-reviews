import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieListStyle = styled.ul`
  display: flex;
  text-decoration: none;
  align-items: start;
  justify-content: center;
  list-style: none;
  flex-wrap: wrap;
  height: 100%;
`;

export const MovieItemsStyle = styled.li`
  display: flex;
  text-decoration: none;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  margin: 10px;
  padding: 5px;
  /* border-radius: 5px; */
  width: 150px;
  min-height: 260px;
  background-color: var(--first-color-dark);
  transition: 200ms ease-in-out;

  &:focus,
  :hover {
    transform: scale(1.1);
    box-shadow: 0 0 15px var(--first-color-dark);
  }
`;

export const PosterStyle = styled.img`
  margin-bottom: 5px;
`;

export const LinkStyle = styled(Link)`
  color: var(--some-white-color);
  text-decoration: none;
  text-align: center;

  &:hover {
    color: var(--accent-color);
  }
`;
