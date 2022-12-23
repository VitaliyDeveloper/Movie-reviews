import { SantaStyle } from './Santa.styled';
import santino from '../../img/santa2.gif';

const Santa = () => {
  return (
    <SantaStyle>
      <img src={santino} height="100" alt="santa" />
    </SantaStyle>
  );
};

export default Santa;
