import styled from 'styled-components';

export const MainContainer = styled.div`
  margin: 20px auto;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 0 15px var(--first-color-dark);
  width: 250px;

  @media screen and (min-width: 768px) {
    min-height: 300px;
    width: 550px;
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
  justify-content: start;
  padding: 0 20px;
`;

export const CastItem = styled.li`
  display: flex;
  flex-direction: column;
  list-style: none;
  align-items: center;
  margin: 0 20px;
  max-width: 200px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    max-width: 500px;
  }

  @media screen and (min-width: 1100px) {
    min-width: 800px;
    max-width: 800px;
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
`;

export const Poster = styled.img`
  min-height: 50px;
  width: 50px;
  border-radius: 50%;

  @media screen and (min-width: 768px) {
    min-height: 80px;
    width: 80px;
  }

  @media screen and (min-width: 980px) {
    min-height: 100px;
    width: 100px;
  }
`;

export const TitleName = styled.h3`
  text-align: center;
  margin: 10px 0;
`;

export const Text = styled.p`
  min-width: 200px;
  font-size: 12px;

  @media screen and (min-width: 768px) {
    min-width: 450px;
  }

  @media screen and (min-width: 1100px) {
    min-width: 650px;
  }
`;
