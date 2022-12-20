import styled from 'styled-components';

export const MainContainer = styled.div`
  padding: 20px;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 100vh;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 0 15px var(--first-color-dark);

  /* border: 3px solid var(--accent-color); */
  /* border-radius: 20px; */
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
  /* background-color: rgba(255, 255, 255, 0.5); */
  padding: 20px;
  /* border-bottom: 3px solid var(--accent-color);
  border-top: 3px solid var(--accent-color); */
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
