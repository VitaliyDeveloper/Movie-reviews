import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 20px;
  border-bottom: 3px solid var(--accent-color);
  border-top: 3px solid var(--accent-color);
`;

export const CastItem = styled.li`
  display: flex;
  flex-direction: column;
  list-style: none;
  align-items: center;
  margin: 10px;
`;

export const Poster = styled.img`
  min-height: 100px;
  width: 100px;
`;

export const NameText = styled.p`
  text-align: center;
`;
