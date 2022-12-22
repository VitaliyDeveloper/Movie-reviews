import styled from 'styled-components';

export const SantaStyle = styled.div`
  display: block;
  position: fixed;
  bottom: 0;
  right: 0;
  width: 52px;
  height: 75px;
  background-image: url('../../img/santa-1.gif');
  animation: santa 15s linear infinite;
  transform: rotateY(180deg);
  z-index: 10005;

  &:hover {
    animation-play-state: paused;
  }

  @keyframes santa {
    from {
      /* left: 0px; */
      right: 0%;
      /* transform: rotateY(-180deg); */
    }
    to {
      /* left: calc(100% - 50px); */
      right: 100%;
    }
  }
`;
