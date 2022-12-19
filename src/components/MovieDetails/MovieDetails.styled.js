import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BtnStyle = styled.button`
  position: fixed;
  right: 30px;
  bottom: 30px;
  opacity: 0.7;
  color: var(--some-white-color);
  background-color: var(--first-color-dark);
  border-radius: 10px;
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

export const DetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

export const Poster = styled.img`
  border-radius: 20px;
  box-shadow: 0 0 15px var(--first-color-dark);
`;

export const Title = styled.h2`
  /* background-color: rgba(255, 255, 255, 0.5); */
  color: var(--accent-color);
  text-align: center;
  margin: 10px auto;
`;

export const Subtitle = styled.h3`
  text-transform: uppercase;
  color: var(--first-color-dark);
`;

export const DescriptionContainer = styled.div`
  /* background-color: rgba(255, 255, 255, 0.5); */
  max-width: 600px;
  color: var(--first-color-dark);
  /* margin: 20px; */
  padding: 10px;
  border-radius: 20px;
`;

export const DescriptionContainerInfo = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  min-width: 600px;
  color: var(--first-color-dark);
  margin: 20px;
  padding: 10px;
  border-radius: 20px;
  box-shadow: 0 0 15px var(--first-color-dark);
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
  border-top: 3px solid var(--first-color-dark);
  border-bottom: 3px solid var(--first-color-dark);
  background-color: rgba(255, 255, 255, 0.5);
  text-align: center;
`;

export const AdditionalList = styled.ul`
  margin: 0;
  padding: 10px;
`;

export const AdditionalItems = styled.li`
  list-style: none;
  text-decoration: none;
`;

export const NavLinkStyle = styled(NavLink)`
  text-decoration: none;
`;
