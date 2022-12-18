import { CastList, CastItem } from './Cast.styled';
import noPhoto from '../../img/no-photo.jpg';

export const Cast = ({ actors }) => {
  return (
    <CastList>
      {actors.map(({ id, name, photo }) => {
        return (
          <CastItem key={id}>
            <img
              src={photo ? `https://image.tmdb.org/t/p/w500/${photo}` : noPhoto}
              alt="name"
              width="200px"
            />
            <p>{name}</p>
          </CastItem>
        );
      })}
    </CastList>
  );
};
