import styled from 'styled-components';

export const MainContainer = styled.div`
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  width: 100vh;
  background-color: rgba(255, 255, 255, 0.8);
  border: 3px solid var(--accent-color);
  border-radius: 20px;
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
  list-style: none;
  align-items: center;
  margin: 50px;
`;

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
`;

export const Poster = styled.img`
  min-height: 100px;
  width: 100px;
  border-radius: 50%;
`;

export const Text = styled.p`
  min-width: 650px;
`;
