import styled from 'styled-components';

export const MovieSearchContainer = styled.div`
  /* min-height: 100vh; */
`;

export const FormStyle = styled.form`
  box-shadow: 0 0 20px var(--first-color-dark);
  padding: 10px;
  text-align: center;
`;

export const InputStyle = styled.input`
  margin-right: 20px;
  padding: 15px;
  /* border-radius: 10px; */
  border: none;
  min-width: 250px;

  &:hover,
  :focus {
    box-shadow: 0 0 10px var(--first-color-dark);
  }
`;

export const BtnStyle = styled.button`
  color: var(--some-white-color);
  background-color: var(--first-color-dark);
  /* border-radius: 10px; */
  padding: 15px;
  border: none;
  cursor: pointer;

  &:hover,
  :focus {
    color: var(--accent-color);
    box-shadow: 0 0 10px var(--first-color-dark);
  }
`;
