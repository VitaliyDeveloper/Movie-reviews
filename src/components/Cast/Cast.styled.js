import styled from 'styled-components';

export const MainContainer = styled.div`
  padding: 20px;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 250px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 0 15px var(--first-color-dark);

  @media screen and (min-width: 480px) {
    width: 400px;
  }

  @media screen and (min-width: 768px) {
    width: 500px;
  }

  @media screen and (min-width: 880px) {
    width: 600px;
  }

  @media screen and (min-width: 1100px) {
    width: 850px;
  }
`;

export const WindowS = styled.div`
  margin: 10px;
  height: 300px;
  width: 100vh;
  overflow: hidden;
`;

export const AllPageContainer = styled.div`
  height: 350px;
  display: flex;
  transition: translate;
  transition-property: transform;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
`;

export const CastList = styled.ul`
  display: flex;
  flex-wrap: no-wrap;
  justify-content: center;
  padding: 20px;
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
