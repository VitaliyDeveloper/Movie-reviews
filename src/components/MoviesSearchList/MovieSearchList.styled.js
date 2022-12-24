import styled from 'styled-components';

export const MovieSearchContainer = styled.div``;

export const FormStyle = styled.form`
  box-shadow: 0 0 20px var(--first-color-dark);
  padding: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 480px) {
    display: block;
  }
`;

export const InputStyle = styled.input`
  padding: 15px;
  border: none;
  min-width: 250px;
  margin: 20px;

  &:hover,
  :focus {
    box-shadow: 0 0 10px var(--first-color-dark);
  }
`;

export const BtnStyle = styled.button`
  color: var(--some-white-color);
  background-color: var(--first-color-dark);
  padding: 15px;
  border: none;
  max-width: 100px;

  cursor: pointer;

  &:hover,
  :focus {
    color: var(--accent-color);
    box-shadow: 0 0 10px var(--first-color-dark);
  }
`;
