import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FormStyle = styled.form`
  box-shadow: 0 0 20px var(--first-color-dark);
  padding: 10px;
  text-align: center;
`;

export const InputStyle = styled.input`
  margin-right: 20px;
  padding: 10px;
  border-radius: 10px;
  border: none;

  &:hover,
  :focus {
    box-shadow: 0 0 10px var(--first-color-dark);
  }
`;

export const BtnStyle = styled.button`
  color: var(--some-white-color);
  background-color: var(--first-color-dark);
  border-radius: 10px;
  padding: 10px;
  border: none;
  cursor: pointer;

  &:hover,
  :focus {
    color: var(--accent-color);
    box-shadow: 0 0 10px var(--first-color-dark);
  }
`;

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
  border-radius: 5px;
  width: 150px;
  min-height: 260px;
  background-color: var(--first-color-dark);

  &:focus,
  :hover {
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
