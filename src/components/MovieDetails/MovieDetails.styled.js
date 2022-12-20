import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieDetContainer = styled.div`
  min-height: 100vh;
`;

export const BtnStyle = styled.button`
  /* position: fixed; */
  /* right: 30px; */
  /* top: 30px; */
  /* border-radius: 10px; */
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  width: 200px;
  color: var(--some-white-color);
  background-color: var(--first-color-dark);
  padding: 10px;
  border: none;
  margin-bottom: 20px;
  margin-left: 20px;

  cursor: pointer;

  &:hover,
  :focus {
    opacity: 1;
    color: var(--accent-color);
    box-shadow: 0 0 10px var(--first-color-dark);
  }
`;

export const BtnText = styled.span`
  margin: 0 0 0 5px;
`;

export const DetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 1);
  width: max-content;
  margin: 20px auto;
  padding: 20px;
  box-shadow: 0 0 15px var(--first-color-dark);
`;

export const Poster = styled.img`
  /* border-radius: 20px; */
  box-shadow: 0 0 15px var(--first-color-dark);
`;

export const Title = styled.h2`
  /* background-color: rgba(255, 255, 255, 0.5); */
  color: var(--accent-color);
  text-align: center;
  margin: 10px auto;
`;

export const DescriptionContainer = styled.div`
  /* background-color: rgba(255, 255, 255, 0.5); */
  max-width: 600px;
  color: var(--first-color-dark);
  /* margin: 20px; */
  padding: 10px;
  /* border-radius: 20px; */
`;

export const DescriptionContainerInfo = styled.div`
  background-color: rgba(255, 255, 255, 1);
  min-width: 600px;
  color: var(--first-color-dark);
  margin: 20px;
  padding: 10px;
  /* border-radius: 20px; */
  /* box-shadow: 0 0 15px var(--first-color-dark); */
  min-height: 480px;
`;

export const DescripContainerColumn = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const DescriptionMovie = styled.p`
  margin: 20px auto;
  max-width: 500px;
  color: var(--first-color-dark);
`;

/////GENRES////////////////////
export const GenresList = styled.ul`
  margin: 0;
  padding: 10px;
  border-bottom: 3px solid var(--first-color-dark);
`;

export const GenresItems = styled.li`
  list-style: none;
`;

/////VOTE//////////////////////
export const VoteContainer = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 3px solid var(--first-color-dark);
`;

export const VoteSpan = styled.span`
  color: var(--accent-color);
`;

export const Vote = styled.p`
  display: flex;
  font-weight: bold;
  flex-direction: column;
`;

///Additional Information////////////////
export const AdditionalContainer = styled.div`
  /* border-top: 3px solid var(--first-color-dark);
  border-bottom: 3px solid var(--first-color-dark); */
  padding: 20px;
  background-color: var(--first-color-dark);
  text-align: center;
  box-shadow: 0 0 15px var(--first-color-dark);
`;

export const Subtitle = styled.h3`
  text-transform: uppercase;
  color: var(--some-white-color);
`;

export const AdditionalList = styled.ul`
  margin: 0;
  padding: 10px;
`;

export const AdditionalItems = styled.li`
  list-style: none;
  text-decoration: none;
  margin-bottom: 10px;
`;

export const NavLinkStyle = styled(NavLink)`
  font-size: large;
  /* font-weight: bold; */
  text-decoration: none;
  color: var(--first-color-dark);
  &.active {
    color: var(--accent-color);
  }
`;

export const NavLinkBtn = styled.button`
  min-width: 150px;
  cursor: pointer;
  background-color: #8e6e25;
  border: none;
  padding: 10px;

  &:hover,
  :focus {
    background-color: var(--second-color);
    color: var(--some-white-color);
  }
`;
