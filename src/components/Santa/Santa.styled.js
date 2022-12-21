import styled from 'styled-components';

export const SantaStyle = styled.div`
  display: block;
  position: fixed;
  bottom: 0;
  right: 0;
  /* content: ''; */
  width: 52px;
  height: 75px;
  /* background-color: aliceblue; */
  background-image: url('../../img/santa-1.gif');
  animation: santa 10s linear infinite alternate-reverse;
  transform: rotateY(180deg);
  z-index: 10005;

  &:hover {
    animation-play-state: paused;
  }

  @keyframes santa {
    from {
      left: 0px;
    }
    to {
      left: calc(100% - 50px);
      transform: rotateY(-180deg);
    }
  }
`;
