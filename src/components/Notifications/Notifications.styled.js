import styled from 'styled-components';

export const NoticeContainer = styled.div`
  background-color: rgba(255, 255, 255, 1);
  color: var(--accent-color);
  padding: 10px;
  margin: 10px auto;
  text-align: center;
  width: 300px;

  @media screen and (min-width: 768px) {
    margin: 20px auto;
    padding: 20px;
    width: 600px;
  }
`;

export const NoticeText = styled.p`
  text-transform: uppercase;
  font-weight: bold;
`;

export const TitleStyle = styled.h2`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 50px;
  text-align: center;
  color: var(--first-color-dark);
  box-shadow: 0 0 20px var(--first-color-dark);
`;
