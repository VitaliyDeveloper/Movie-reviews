import styled from 'styled-components';

export const MovieListStyle = styled.ul`
  display: flex;
  text-decoration: none;
  list-style: none;
  flex-wrap: wrap;
`;

export const MovieItemsStyle = styled.li`
  display: flex;
  text-decoration: none;
  color: #000;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  margin: 10px;
  width: 150px;
`;

export const TitleStyle = styled.h2`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 50px;
  text-align: center;
`;
