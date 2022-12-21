import { SantaStyle } from './Santa.styled';
import santino from '../../img/santa-1.gif';

const Santa = () => {
  return (
    <SantaStyle>
      <img src={santino} alt="" />
    </SantaStyle>
  );
};

export default Santa;
