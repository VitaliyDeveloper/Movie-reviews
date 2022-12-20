import { BgImage } from './NotFound.styled';
import notFound from '../../img/404-not-found.jpg';

export const NotFound = () => {
  return (
    <BgImage>
      <img src={notFound} alt="404-not-found" />
    </BgImage>
  );
};
